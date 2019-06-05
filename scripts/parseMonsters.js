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

const fetchMonsterByID = monsterID =>
  fetch(`${API_CORS_ENDPOINT}${API_ENDPOINT}/monsters/${monsterID}`, OPTIONS)
    .then(result => result.json())
    .then(monster => {
      fs.writeFile(publicPath(`data/monsters/${monsterID}.json`), JSON.stringify(monster), err => {
        if (err) {
          console.log(err);
          console.error(`Error writing ${monsterID}.json file.`);
        } else {
          console.log(`Monster ${monster.name} successfully parsed!`);
        }
      });
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
      return Promise.resolve(allMonsters);
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
    }
  });

  monsters.forEach(monster => fetchMonsterByID(monster.slug));
});
