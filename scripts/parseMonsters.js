require('dotenv').config();
const path = require('path');
const fetch = require('node-fetch');
const fs = require('fs');

const projectRoot = path.resolve(__dirname, '../');
const publicRoot = path.resolve(projectRoot, 'public');
const publicPath = file => path.resolve(publicRoot, file);

const { API_ENDPOINT, API_CORS_ENDPOINT } = process.env;

if (!API_ENDPOINT) {
  console.error(
    'You have to specify API_ENDPOINT environment variable in order to run this script.'
  );
  process.exit(1);
}

if (!API_CORS_ENDPOINT) {
  console.error(
    'You have to specify API_CORS_ENDPOINT environment variable in order to run this script.'
  );
  process.exit(1);
}

const OPTIONS = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
};

const MONSTER_TYPES = [
  'aberration',
  'beast',
  'celestial',
  'construct',
  'dragon',
  'elemental',
  'fey',
  'fiend',
  'giant',
  'humanoid',
  'monstrosity',
  'ooze',
  'plant',
  'undead',
  'swarm',
  'titan'
];

const adjustMonsterType = monsterType => {
  let adjustedMonsterType = monsterType;

  MONSTER_TYPES.forEach(type => {
    if (monsterType.startsWith(type)) {
      adjustedMonsterType = type;
    }
  });

  return adjustedMonsterType;
};

const fetchMonsterByID = monsterID =>
  fetch(`${API_CORS_ENDPOINT}${API_ENDPOINT}/monsters/${monsterID}`, OPTIONS)
    .then(result => result.json())
    .then(({ slug, type, ...monster }) => {
      const normalizedMonster = {
        ...monster,
        id: slug,
        type: adjustMonsterType(type.toLowerCase())
      };

      fs.writeFile(
        publicPath(`data/monsters/${monsterID}.json`),
        JSON.stringify(normalizedMonster),
        err => {
          if (err) {
            console.log(err);
            console.error(`Error writing ${monsterID}.json file.`);
          } else {
            console.log(`Monster ${normalizedMonster.name} successfully parsed!`);
          }
        }
      );
    })
    .catch(err => {
      console.error(err);
      console.error('Error requesting the endpoint.');
    });

const getMonsters = (nextPageUrl = '', monsters = []) => {
  const apiUrl = nextPageUrl ? `${API_CORS_ENDPOINT}${nextPageUrl}` : `${API_ENDPOINT}/monsters`;

  return fetch(apiUrl, OPTIONS)
    .then(result => result.json())
    .then(data => {
      const allMonsters = [...monsters, ...data.results];
      if (data.next) {
        return getMonsters(data.next, allMonsters);
      }
      return Promise.resolve(
        allMonsters.map(monster => ({
          id: monster.slug,
          name: monster.name,
          type: adjustMonsterType(monster.type.toLowerCase()),
          challenge_rating: monster.challenge_rating,
          size: monster.size,
          hit_points: monster.hit_points
        }))
      );
    })
    .catch(err => {
      console.error(err);
      console.error('Error requesting the endpoint.');
    });
};

getMonsters().then(monsters => {
  fs.writeFile(publicPath('data/monsters/monsters.json'), JSON.stringify(monsters), err => {
    if (err) {
      console.log(err);
      console.error('Error writing monsters.json file.');
    } else {
      console.log('Monsters successfully parsed!');
      console.log('Total monsters: ', monsters.length);
    }
  });

  /* We fetch a monster from api, uncomment only for debugging
  monsters.forEach(monster => fetchMonsterByID(monster.id));
  */
});
