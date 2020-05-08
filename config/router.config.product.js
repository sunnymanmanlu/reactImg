export default [
  {
    path: '/product',
    name: 'product',
    hideInMenu: false,
    icon: 'form',
    routes: [
      {
        path: '/product/submit',
        name: 'submit',
        component: './product/submit',
      },
      {
        path: '/product/list',
        name: 'list',
        component: './product/list',
      },
       
    ]
  }
];
