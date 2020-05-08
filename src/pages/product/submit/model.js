import { submitForm ,getBrandList,getCategoryList} from '../../../service/axios/interface';



export default {
  namespace: 'submit',
  state: {
    data : {},
    productParam:{},
    categoryOptions:[],
    brandoptions:[],
    mainImgFileList: [],
    detailImgFileList: []
  },
  
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname, params = {} }) => {
        if (pathname === '/product/submit') {
          console.log('我是慢慢 subscriptions 页面接受到的参数为:',params)
          dispatch({ 
            type: 'save',
            payload: {
              productParam:params,
              mainImgFileList:params.mainImgList,
              detailImgFileList:params.detailImgList,
            }
          });
          dispatch({
            type: 'queryCategoryOptions'
          });
          dispatch({
            type: 'queryBrandOptions'
          })
        }
      })
    }
  },

  // effects  有三个参数  put 是调用action方法用于触发 action，call 用于调用异步逻辑，支持 promise 。select 用于从 state 里获取数据。
  effects: {

    *submitForm({ payload = {} }, { put, call }) {
      let data = yield call(submitForm,payload)
      console.log('表单提交成功！返回的数据是:',data)
      return data
    },

 
        *queryBrandOptions({ payload = {} }, { select, put, call }) {
        let brandoptions = yield call(getBrandList);
        console.log('我是慢慢 brandoptions 返回', brandoptions);
        yield put({
          type: 'save',
          payload: {
            brandoptions:brandoptions,
          }
        })
      },


    //查询一级类目列表 没有查询条件，直接返回所有一级类目列表
    *queryCategoryOptions({ payload = {} }, { select, put, call }) {
      let categoryOptions = yield call(getCategoryList);
      console.log('我是慢慢 查询一级目录queryCategoryOptions 返回', categoryOptions);
      yield put({
        type: 'save',
        payload: {
          categoryOptions:categoryOptions,
        }
      })
    },

    //查询二级类目列表 ，有查询条件
    // *queryProjectOptions({applicationId = {}}, {put, call}) {
    //   let projectOptions = yield call(
    //     findProjectListByApplicationId,
    //     {
    //       applicationId: applicationId
    //     }
    //   );
    //   console.log('接口传回的动态选项', projectOptions.data);
    //   yield put({
    //     type: 'save',
    //     payload: {
    //       projectOptions: projectOptions.data,
    //     }
    //   })
    // },


  },

  //Reducer 是 Action 处理器，用来处理同步操作，
  //可以看做是 state 的计算器。它的作用是根据 Action，从上一个 State 算出当前 State。
  reducers: {
    save(state, { payload }) {
       console.log('reducers submit 同步调用');
      return { ...state, ...payload }
    }
  }

}
