import { submitForm, getOptions } from './service';

export default {
  namespace: 'adForm',
  state: {
    data : {},
    options: [],
    title: '',
    imgLoad: false,
    imageUrl: '',
    formData: {}
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname, params = {} }) => {
        if (pathname === '/product/ad/adForm') {
          if (params.mode === 'add') {
            dispatch({ 
              type: 'save',
              payload: {
                title: '新增广告',
                formData: {},
                imageUrl: ''
              }
            });
          } else {
            dispatch({ 
              type: 'save',
              payload: {
                title: '编辑广告',
                formData: params,
                imageUrl: params.imgLink
              }
            });
          }
          dispatch({
            type: 'queryOptions'
          })
          console.log('页面接受到的参数为:',params)
        }
      })
    }
  },
  effects: {
    *submitEffects({ payload = {} }, { put, call }) {
      console.log('submit 异步调用');
    },
    *submitForm({ payload = {} }, { put, call }) {
      let data = yield call(submitForm,payload)
      console.log('表单提交成功！返回的数据是:',data)
      return data
    },
    *queryOptions({ payload = {} }, { select, put, call }) {
      let options = yield call(getOptions)
      console.log('接口传回的动态选项',options.data)
      yield put({
        type: 'save',
        payload: {
          options: options.data,
        }
      })
    },
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload }
    }
  }
}
