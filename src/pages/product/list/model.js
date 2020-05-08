
import { pagination } from '@/utils';
import { getProductList, getOptions, deleteRow ,getProductDetail,updateProductInfo} from '../../../service/axios/interface';

export default {
  namespace: 'searchList',
  state: {
    query: {
      results: 10,
    },
    list: [],
    pagination,
    visible: false,
    options:[],
  },
  
//subscriptionsdva中我们可以在 Model 中实现事件监听， model 中的 subscriptions 相当于一个监听器，可以监听路由变化，
//鼠标，键盘变化，服务器连接变化，状态变化等，这样在其中就可以根据不同的变化做出相应的处理，在这个 subsriptions 
//中的方法名是随意定的，每次变化都会一次去调用里面的所有方法，所以一边会加相应的判断。通过 在model 中添加一个 subscriptions,
//并且在里面创建一个方法，即可简单快速地使用 subscriptions 方法。
//在 subscriptions 中可以创建若干方法，命名没有强制要求。在本文中以 setup 举例，实际上修改成 hello、deploy 等名称都无所谓
  //这个 setup 函数可以接受接受两个参数，一个是action，另一个是 error ,在代码里面我们把action 打印出来可以看到

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname, query }) => {
        if (pathname === '/product/list') {
          dispatch({ type: 'queryOptions' }).then(()=>{
            dispatch({ type: 'queryList', payload:{results: 10} });
          })
        }
      })
    }
  },
  

  //effects 有三个参数:put 用于触发 action ;call 用于调用异步逻辑，支持 promise 。
  //select 用于从 state 里获取数据。 const todos = yield select(state => state.todos);
  effects: {

    *deleteRow({ payload = {} }, { select, put, call }) {
      console.log('我是慢慢 deleteRow ，发送给接口待删除的行数据:',payload)
      let response = yield call(deleteRow,payload)
      return response
    },

    *getProductDetail({ payload = {} }, { select, put, call }) {
      console.log('我是慢慢getProductDetail:',payload)
      let data = yield call(getProductDetail,payload)
       yield put({
        type: 'save',
        payload: {
          detailMessage: data.data,
        }
      })
      return data
    },

    *queryOptions({ payload = {} }, { select, put, call }) {
      let options = yield call(getOptions)
       yield put({
        type: 'save',
        payload: {
          options: options.data,
        }
      })
    },


    *queryList({ payload = {} }, { select, put, call }) {
      let { pagination } = yield select(state => state.searchList);
      const current = payload.current || pagination.current;
      const pageSize = payload.pageSize || pagination.pageSize;
      const offset = (current-1)*pageSize
      let data = yield call(getProductList,{
        ...payload,
        pageSize,
        offset
      })
      console.log('我是慢慢，getProductList接口传回的数据:',data )
      yield put({
        type: 'save',
        payload: {
          //list: data.results,
          list: data.productList,
          pagination: {
            current, 
            pageSize, 
            total: data.summaryResultViewObject.sum, 
          },
        }
      })
    },

    *update({ payload = {} }, { select, put, call }) {
      
      yield put({
        type: 'save',
        payload: {
          visible: payload.visible
        }
      })
    },

    *updateStatus({ payload = {} }, { select, put, call }) {
      let response = yield call(updateProductInfo,payload)
      return response
    },

  },

  
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload }
    },
  }
}
 