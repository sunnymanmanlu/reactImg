
// import { message } from 'antd';
import { pagination } from '@/utils';
import { getTableList, getOptions, deleteRow } from './service';

export default {
  namespace: 'ad',
  state: {
    query: {
      results: 10,
    },
    list: [],
    pagination,
    visible: false,
    options:[],
  },
  
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname, query }) => {
        if (pathname === '/product/ad') {
          // dispatch({ type: 'queryOptions' }).then(()=>{
            dispatch({ type: 'queryList', payload:{results: 10} });
          // })
        }
      })
    }
  },
  effects: {
    *deliver({ payload = {} }, { select, put, call }) {
      let response = yield call(deleteRow,payload)
      return response
    },
    *deleteRow({ payload = {} }, { select, put, call }) {
      console.log('发送给接口待删除的行数据:',payload)
      let response = yield call(deleteRow,payload)
      return response
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
    *queryList({ payload = {} }, { select, put, call }) {
      let { pagination } = yield select(state => state.ad);
      const current = payload.current || pagination.current;
      const pageSize = payload.pageSize || pagination.pageSize;
      const offset = (current-1)*pageSize
      let data = yield call(getTableList,{
        ...payload,
        current,
        pageSize,
        offset
      })
      console.log('1111')
      console.log('接口传回的数据:',data )
      yield put({
        type: 'save',
        payload: {
          list: data.data,
          pagination: {
            current, 
            pageSize, 
            total: 100, 
          },
        }
      })
    },
    *Modal({ payload = {} }, { select, put, call }) {
      
      yield put({
        type: 'save',
        payload: {
          visible: payload.visible
        }
      })
    }
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload }
    },
  }
}