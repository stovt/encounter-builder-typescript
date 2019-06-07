import { AnyAction } from 'redux';
import { call, put, takeEvery } from 'redux-saga/effects';
import monstersData from 'public/data/monsters/monsters.json';
import { API_ENDPOINT, API_CORS_ENDPOINT } from 'config';
import { MonstersBase, Monster } from 'shared/types/monsters';
import { addMonsterToBattleTable } from 'pages/EncounterBattle/EncounterBattle.actions';
import {
  FETCH_ALL_MONSTERS,
  fetchAllMonstersSuccess,
  fetchAllMonstersError,
  FETCH_MONSTER_BY_ID,
  fetchMonsterByIDSuccess,
  fetchMonsterByIDError,
  ADD_MONSTER_TO_GROUP,
  addMonsterToGroupSuccess
} from './EncounterBuilder.actions';

const fetchAllMonsters = () => monstersData;

export function* getMonsters() {
  try {
    const monsters: MonstersBase = yield call(fetchAllMonsters);
    yield put(fetchAllMonstersSuccess(monsters));
  } catch (error) {
    yield put(fetchAllMonstersError(error.message || error.response.statusText));
  }
}

const fetchMonsterByID = (monsterID: string) => {
  const FETCH_OPTIONS = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    }
  };

  return fetch(`${API_CORS_ENDPOINT}${API_ENDPOINT}/monsters/${monsterID}`, FETCH_OPTIONS)
    .then(result => result.json())
    .then(({ slug, type, ...monster }) => ({
      ...monster,
      id: slug,
      type: type.startsWith('swarm') ? 'swarm' : type
    }));
};

export function* getMonsterByID({ monsterID }: AnyAction) {
  try {
    const monster: Monster = yield call(fetchMonsterByID, monsterID);
    yield put(fetchMonsterByIDSuccess(monster));
  } catch (error) {
    yield put(fetchMonsterByIDError(error.message || error.response.statusText));
  }
}

export function* handleAddMonsterToGroup({ monsterID, monster }: AnyAction) {
  try {
    if (monster) {
      yield put(addMonsterToGroupSuccess(monsterID));
      yield put(addMonsterToBattleTable(monster));
    } else {
      const newMonster: Monster = yield call(fetchMonsterByID, monsterID);
      yield put(fetchMonsterByIDSuccess(newMonster));
      yield put(addMonsterToGroupSuccess(monsterID));
      yield put(addMonsterToBattleTable(newMonster));
    }
  } catch (error) {
    yield put(fetchMonsterByIDError(error.message || error.response.statusText));
  }
}

export default function*() {
  yield takeEvery(FETCH_ALL_MONSTERS, getMonsters);
  yield takeEvery(FETCH_MONSTER_BY_ID, getMonsterByID);
  yield takeEvery(ADD_MONSTER_TO_GROUP, handleAddMonsterToGroup);
}
