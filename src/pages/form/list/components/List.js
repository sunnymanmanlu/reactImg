import React from 'react';
import { Table, Divider, Popconfirm, } from 'antd';
import { Pagination } from '@/components';

export default ({
  onPageChange,
  onShowSizeChange,
  handleDeliver,
  handleUpdate,
  handleUpdate2,
  onConfirmDelete,
  pagination,
  ...restProps
}) => {
  const columns = [
    {
      title: '商品名称',
      dataIndex: 'name',
    }, {
      title: '价格',
      dataIndex: 'discountPrice',
    },  {
      title: '品牌',
      width:'200',
      dataIndex: 'brandname',
    }, {
      title: '操作',
      fixed: 'right',
      render: (text, record) => (
        <span>
          <a onClick={handleDeliver.bind(this,record)}>发布</a>
          <Divider type="vertical" />
          <a onClick={handleUpdate.bind(this,record)}>编辑</a>
          <Divider type="vertical" />
          <a onClick={handleUpdate2.bind(this,record)}>编辑(跳页)</a>
          <Divider type="vertical" />
          <a>详情</a>
          <Divider type="vertical" />
          <Popconfirm placement="left" title={'确认删除？'} onConfirm={onConfirmDelete.bind(this,record)} okText="确定" cancelText="取消">
            <a>删除</a>
          </Popconfirm>
 
        </span>
      ),
    },
  ];
  // const columns = [
  //   {
  //     title: '商品名称',
  //     dataIndex: 'name',
  //   }, {
  //     title: '价格',
  //     dataIndex: 'discountPrice',
  //   }, {
  //     title: '品牌',
  //     dataIndex: 'brandname',
  //   },  {
  //     title: '操作',
  //     fixed: 'right',
  //     render: (text, record) => (
  //       <span>
  //         <a onClick={handleDeliver.bind(this,record)}>发布</a>
  //         <Divider type="vertical" />
  //         <a onClick={handleUpdate.bind(this,record)}>编辑</a>
  //         <Divider type="vertical" />
  //         <a onClick={handleUpdate2.bind(this,record)}>编辑(跳页)</a>
  //         <Divider type="vertical" />
  //         <a>详情</a>
  //         <Divider type="vertical" />
  //         <Popconfirm placement="left" title={'确认删除？'} onConfirm={onConfirmDelete.bind(this,record)} okText="确定" cancelText="取消">
  //           <a>删除</a>
  //         </Popconfirm>
 
  //       </span>
  //     ),
  //   },
  // ];

  // const tableProps = {
  //   ...restProps,
  //   scroll: { x: 1300},
  //   columns,
  //   pagination: false,
  //   rowKey: record => '慢慢',
  //   //rowKey: record => record.login.uuid,
  //   //登录
  // };

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
