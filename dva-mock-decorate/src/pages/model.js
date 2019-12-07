
import {
  request_setUser,
  request_getUserList,
} from '../service'

let id = 100
export default {
  namespace: 'user',
  state: {},
  reducers: {
    setUserReducer(state, { payload, action }) {
      switch (action) {
        case 'update': {
          return {
            ...state,
            user: payload
          };
        }
        case 'add': {
          let _list = [...state.userList]
          payload.id += Math.random(0, 1)
          _list.push(payload)
          return {
            user: payload,
            userList: _list
          };
        }
        default:
          return {
            ...state,
            user: payload
          };
      }

    },
    getUserListReducer(state, { payload, type }) {
      return {
        ...state,
        userList: payload
      };
    }
  },
  effects: {
    * addUser({ payload }, { call, put }) {
      const res = yield call(request_setUser, {})
      yield put({
        type: 'setUserReducer',  //必须 reducer名字
        action: 'add',
        payload: {
          ...res,
          ...payload
        }
      });
    },
    * setUser({ payload: { user }, callback }, { call, put }) {
      yield call(request_setUser, user)
      yield put({
        type: 'setUserReducer',  //必须 reducer名字
        action: 'update',
        payload: user
      });
      callback(user)
    },
    * getUserList({ }, { call, put }) {
      const res = yield call(request_getUserList, null)
      yield put({
        type: 'getUserListReducer',
        payload: res
      });
    },
  },
};
