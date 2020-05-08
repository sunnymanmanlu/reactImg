import React from 'react';
import { connect } from 'dva';
import { Card, message } from 'antd';
import { Search, List, AddModal, } from './components';
import router from 'umi/router';

const namespace = 'searchList';

const Page = ({
  dispatch,
  effect,
  pagination,
  list,
  loading,
  visible,
  options,
  query,
  ...restProps
}) => {
  const searchProps = {
    options,
    onAdd(){
      router.push('/product/submit')
    },
    onReset(){
      console.log('清除')
    },
    
    onSearch(params){
      console.log('传出参数',params)
      Object.assign(params,{
        results: 10
      })
      dispatch({
        type: `${namespace}/save`,
        payload: {
          query:params,
          pagination:{
            current: 1,
            pageSize:10
          }
        }
      })
      dispatch({
        type: `${namespace}/queryList`,
        payload: params,
        pagination:{
          current: 1,
          pageSize:10
        }
      })
    }


  };
  const listProps = {
    pagination,
    loading: loading.effects[`${namespace}/queryList`]||loading.effects[`${namespace}/deliver`],
    dataSource: list,
    onPageChange(page, pageSize) {
      console.log('当前选择的页码:',page)
      const params = {
        current: page,
        pageSize: pageSize,
        ...query
      }
      dispatch({
        type: `${namespace}/queryList`,
        payload: params
      })

     },
     onShowSizeChange(current,size) { 
      dispatch({
        type:`${namespace}/save`,
          payload:{pagination:{...pagination,pageSize:size,current:current}}
      })
      dispatch({ 
        type: `${namespace}/queryList`,
      });
    },

    updateStatus(record) {
      dispatch({
        type: `${namespace}/updateStatus`,
        payload: record
      }).then((res) => {
        console.log('接口返回状态:',res)
        if (res.code === 200) {
          message.success('上架成功！')
        } else {
          message.error('上架失败')
        }
      })
    },



    handleUpdate(record) {
      router.push({
        pathname: '/product/submit',
        params: record
      })
  //获取该条记录的详情
  // dispatch({
  //   type: `${namespace}/getProductDetail`,
  //   payload: {
  //     id : record.id
  //   }
  // }).then((res)=>{
  //   if (res.code === 200) {
  //       router.push({
  //       pathname: '/product/submit',
  //       params: res.data
  //     })
  //   } else {
  //     message.error('修改页面展示失败!')
  //   }
  // })
  },

 

    onConfirmDelete(record) { 
      dispatch({
        type: `${namespace}/deleteRow`,
        payload: record,
      }).then((res)=>{
          console.log('接口返回状态:',res)
          if (res.code === 0) {
            message.success('删除成功！');
          } else {
            message.error('删除失败')
          }
      })
    }
  };

  return (
    <Card bordered={false}>
      <Search {...searchProps} />
      <List {...listProps} />
    </Card>
  )
}

export default connect(({ loading, searchList }) => ({
  loading,
  ...searchList
}))(Page);
