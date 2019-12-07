import { default as ajax } from '../pages/lib/ajax'
const { get } = ajax

export const request_setUser = ({ name, age }) => {
  return get(`/im-manage/user/${name}/${age}`, null, 1)
}

export const request_getUserList = () => { return get(`/im-manage/user/userList`, null, 1) }

export const request_getScoreList = ({ uid, uname }) => { return get(`/im-manage/score/scoreList/${uid}/${uname}`, { uid, uname }, 1) }

