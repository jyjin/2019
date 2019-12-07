
import {
  request_getScoreList,
} from '../../service'

export default {
  namespace: 'score',
  state: {},
  reducers: {
    getScoreListReducer(state, { payload, type }) {
      return {
        ...state,
        scoreList: payload
      };
    }
  },
  effects: {
    * getScoreList({ payload: { uid, uname } }, { call, put }) {
      const res = yield call(request_getScoreList, { uid, uname })
      yield put({
        type: 'getScoreListReducer',
        payload: res
      });
    },
  },
};
