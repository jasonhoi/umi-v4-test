import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {
    dataField: '',
  },
  proxy: {
    '/api/cat': {
      target: 'https://cat-fact.herokuapp.com/',
      changeOrigin: true,
      pathRewrite: { '^/api/cat': '' },
    },
    '/api/dog': {
      target: 'https://dog.ceo/api/breeds/list/all/',
      changeOrigin: true,
      pathRewrite: { '^/api/dog': '' },
    },
    '/api/pet-food': {
      target: 'https://world.openpetfoodfacts.org/api/v0/product/20106836.json',
      changeOrigin: true,
      pathRewrite: { '^/api/pet-food': '' },
    },
  },
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'pnpm',
});
