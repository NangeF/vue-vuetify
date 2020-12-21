var Mock = require('mockjs');

var userListTest = Mock.mock('https://www.test.com', {
  // 20条数据
  'userList|40': [
    {
      // id
      'id|+1': 1,
      // 用户Id
      'userId|+1': 1,
      //用户姓名
      'userName': '@cname',
      //年龄
      'age|18-28': 25,
      //性别
      'sex|1': ['男', '女'],
      //职业
      'job|1': ['web', 'UI', 'python', 'php'],
    },
  ],
});

var goodListTest = Mock.mock('https://www.goodtest.com', {
  // 20条数据
  'goodList|10': [
    {
      // id
      'id|+1': 41,
      // 用户Id
      'userId|+1': 41,
      //用户姓名
      'userName': '@cname',
      //年龄
      'age|30-60': 25,
      //性别
      'sex|1': ['男', '女'],
      //职业
      'job|1': ['web', 'UI', 'python', 'php'],
    },
  ],
});
