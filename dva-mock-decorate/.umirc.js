
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  define:{
    "process.env.ENV": 'development',
  },
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' },
        { path: '/score', component: '../pages/score/score' }
      ]
    }
  ],
  history: 'hash',
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: {
        immer: true
      },
      dynamicImport: false,
      title: 'dva-mock-decorate',
      dll: false,
      
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
}
