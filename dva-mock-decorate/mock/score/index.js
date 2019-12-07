import Mock from 'mockjs';
import { pickIn } from '../lib';

let Random = Mock.Random

let subjects = ['语文', '数学', '英语', '政治', '历史', '地理', '音乐', '体育', '美术']

// 用户列表
export const scoreList = ({ uid, uname }) => Mock.mock({
  [`list|1-${subjects.length}`]: [{
    'id': () => Random.guid(),
    'name': () => pickIn(subjects, 1, 1),
    'score|': () => Random.integer(0, 100),
    'userId': () => uid,
    'userName': () => uname,
  }]
}).list