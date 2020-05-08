import React from 'react';
import { Table, Divider, Popconfirm, } from 'antd';
import { Pagination } from '@/components';

export default ({
  onPageChange,
  onShowSizeChange,
  updateStatus,
  handleUpdate,
  onConfirmDelete,
  pagination,
  ...restProps
}) => {
  const columns = [
    {
      title: '商品ID',
      dataIndex: 'id',
      width:'6%',
    },
    {
      title: '商品名称',
      dataIndex: 'name',
    },
    {
      title: '商品图片',
      dataIndex: 'mainImgList[0]',
      render:(text,record)=>(
        <img src={record.mainImgList[0]}  style={{ width: '50%'}}></img>
      ),
    }, 
    {
      title: '类目',
      width:'10%',
      dataIndex: 'rootCategory.name',
      render: (text,record) => {
        return <span>{record.rootCategory.name+'/'+record.category.name }</span>
      }
    }, 
    {
      title: '价格',
      width:'10%',
      dataIndex: 'discountPrice.number',
    }, 
    {
      title: '品牌',
      dataIndex: 'brand.name',
    }, 
    {
      title: '状态',
      dataIndex: 'status',
      width:'10%',
      render: (text,record) =>{
        return <span>{record.status == 1 ? '上架':'下架'}</span>
      }
    }, 
    {
      title: '操作时间',
      width:'20%',
      dataIndex: 'updateTime',
    },    
    {
      title: '操作',
      fixed: 'right',
      render: (text, record) => (
        <span>
          <a onClick={updateStatus.bind(this,record)}>
            
          <span>{record.status == 1 ? '下架':'上架'}</span>     
            </a>

          <Divider type="vertical" />
        
          <a onClick={handleUpdate.bind(this,record)}>编辑</a>
          <Divider type="vertical" />

          <Popconfirm placement="left" title={'确认删除？'} onConfirm={onConfirmDelete.bind(this,record)} okText="确定" cancelText="取消">
            <a>删除</a>
          </Popconfirm>
 
        </span>
      ),
    },
  ];

  const tableProps = {
    ...restProps,
    scroll: { x: 1300},
    columns,
    pagination: false,
    rowKey: record => '慢慢',
   // rowKey: record => record.login.uuid,
  };

  const paginationProps = {
    ...pagination,
    onChange(page, pageSize) {
      onPageChange(page, pageSize);
    },
    onShowSizeChange(current, size) {
      onShowSizeChange(current, size);
    }
  };


 //剩余运算符  ...
  return (
    <>
      <Table {...tableProps} />
      <Pagination {...paginationProps} />
    </>
  )
}
