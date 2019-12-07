/**
 * 暴露mock接口假数据
 *     使用方法见注释 step1 => step2
 */

// step1: 加入你的mock数据... 
//          import { XX1, XX2, ... } from './XXX'  
import { user, userList } from './user'
import { scoreList } from './score'

export const mock = {
  // step2: 暴露接口供外部调用...  
  //        '/your/path/${param1}/to/${param2}/outside': XX1
  //        '/your/path/${param1}/to/${param2}/another': XX2
  '/im-manage/user/${uname}/${uage}': user,
  '/im-manage/user/userList': userList,
  '/im-manage/score/scoreList/${uid}/${uname}': scoreList,
}