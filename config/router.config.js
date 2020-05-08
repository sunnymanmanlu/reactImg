// import exception from './router.config.exception';
// import form from './router.config.form';
import product from './router.config.product';

export default [
  {
    path: '/',
    component: '../layouts/index',
    routes: [
            ...product,
      //...form,
     // ...exception, 

      // {
      //   path: 'https://pro.ant.design/docs/getting-started-cn',
      //   // target: '_blank', // 点击新窗口打开
      //   name: "toUse",
      //   icon: "share-alt"
      // },
      {
        component: '404',
      }
    ],
  }
]
