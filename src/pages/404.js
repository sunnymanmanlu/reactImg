import React from 'react';
import { connect } from 'dva';
import { Card, Form,  } from 'antd';


const namespace = 'index';

const Index = ({
                  
                  ...restProps
                }) => {
  return (
    <Card title="主页">
        <Form>
          Hi  你好！
        </Form>
    </Card>
  )
}


export default connect(({loading,index}) => ({loading,...index}))(Index);
