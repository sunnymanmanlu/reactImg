import { Form, Row, Col, Select, Input, Button, DatePicker } from 'antd';
import moment from 'moment';
import { formLayout, formItemLayout, } from '@/utils';
import styles from '@/styles/form/list/search.less'

const Option = Select.Option;

const Search = ({
  options,
  onAdd,
  onReset,
  onSearch,
  form: { getFieldDecorator, resetFields, setFields, validateFields }
}) => {
  const handleReset = () => {
    resetFields();
    onReset();
  }

  const handleSearch = (e) => {
    e.preventDefault();
    validateFields((error, values) => {
      
      if (error) {
        console.log(error)
      } else {
        console.log('查询条件',values)

        onSearch({
          ...values,
        });
      }
      
    })
  }

  // 不可选择的时间
  const disabledDate = (current) => {
    return current && current > moment().endOf('day');
  }

  const validUid = (rule, value, callback) => {
    console.log('执行一次自定义校验')
    callback()
  };
  
  // 接口数据动态渲染下拉框
  const Options = options.map((item,index)=>{

    return <Option key={index} value={item}>{item}</Option>
  })

  return (
    <Form onSubmit={handleSearch} layout="inline" className={styles.searchForm} style={{minWidth:'1080px'}}>
      {/* <Row gutter={{ md: 8 }}>
        <Col span={6}>
          <Form.Item label={`商品名称`} {...formItemLayout}>
            {getFieldDecorator(`goodsName`, {
            })(<Input placeholder="请输入商品名称"  className={styles.searchInput}/>)}
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label={`品牌`} {...formItemLayout}>
            {getFieldDecorator(`goodsBrand`, {
            })(<Input placeholder="请输入品牌"  className={styles.searchInput}/>)}
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label={`类目`} {...formItemLayout}>
            {getFieldDecorator(`goodsCategory`, {
             })(<Input placeholder="请输入类目"  className={styles.searchInput}/>)}
          </Form.Item>
        </Col>
      </Row> */}
      <Row className={styles.searchBtnRow}>
        <Col span={12}>
          <Button type="primary" onClick={onAdd}>
            新增广告
          </Button>
        </Col>
        {/* <Col span={12} className={styles.searchBtnAlign}>
          <Button type="primary" htmlType="submit">
            搜索
          </Button>
          <Button className={styles.searchReset} onClick={handleReset}>
            重置
          </Button>
        </Col> */}
      </Row>
    </Form>
  )
}

export default Form.create()(Search);

