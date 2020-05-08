import React from "react";
import { connect } from 'dva';
import moment from 'moment';
import ReactDOM from 'react-dom';
import { Card,Row, Col,  Form, Input, Select, Button, DatePicker, message } from 'antd';
import { Cascader } from 'antd';
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { formLayout, formItemLayout, } from '@/utils';
import styles from '@/styles/form/submit/index.less';
import router from 'umi/router';
 
 
const {  RangePicker, } = DatePicker;
const { TextArea } = Input;
const { Option } = Select;

const namespace = 'submit';
const Submit = ({
  detailImgFileList,
  mainImgFileList,
  submit,
  categoryOptions,
  brandoptions,
  productParam,
  loading,
  location,
  dispatch,
  params,//编辑商品 列表当前记录
  form: { getFieldDecorator, validateFields,setFields,getFieldValue,setFieldsValue },
  ...restProps
}) => {
  // 不可选择的时间
  const disabledDate = (current) => {
    return current && current > moment().endOf('day');
  }
 
  const formItemLayout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 12 },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateFields((error, values) => {
      console.log(values)
      if (error) {
        console.log(error)
      } else {
        console.log('klklkklk', getFieldValue('mainImgList'))
        let data = {...values}
        if (getFieldValue('mainImgList')) {
          let tm = []
          getFieldValue('mainImgList').map(item => {
            tm.push(item.response.data)
          })
          tm = tm.concat(productParam.mainImgList)
          setFieldsValue({
            mainImgList: tm
          })
        }
        if (getFieldValue('detailImgList')) {
          let tm = []
          getFieldValue('detailImgList').map(item => {
            tm.push(item.response.data)
          })
          tm = tm.concat(productParam.detailImgList)
          setFieldsValue({
            detailImgList: tm
          })
        }
        data.mainImgList = getFieldValue('mainImgList') || productParam.mainImgList
        data.detailImgList = getFieldValue('detailImgList') || productParam.detailImgList
        console.log('提交的参数为',data)
        dispatch({
          type: `${namespace}/submitForm`,
          payload: data
        }).then((res) => {
          if (res.code === 200) {
            message.success('表单提交成功！')
            router.push('/product/list')
          } else {
            message.error('表单提交失败')
          }
        })
      } 
    })
  }
 
  const handleReturn = () => {
    router.go(-1)
  }
 

 const BrandOptions = brandoptions.map((item,index)=>{
 return <Option key={item.id} value={item.id} item={item}>{item.name}</Option>
})


 
  const handleMainPic = (fileList) =>  {
    console.log('handleMainPic',fileList)

     dispatch({
      type: `${namespace}/save`,
      payload: {
        mainImgFileList: fileList
      }
    })
    
    let picList = []
    fileList.map(item => { 
      if (item.status === 'done') {
        picList.push(item)
      } 
    })
    setFieldsValue({
      mainImgList: picList
    })
  }
 
  // name: "/api/upload/3542b7b8-742b-48f3-9d70-4e8794d10ac6.jpg"
  // status: "done"
  // uid: "0"
  // url: "/api/upload/3542b7b8-742b-48f3-9d70-4e8794d10ac6.jpg"
 
   

  const handleDetailPic = (fileList) =>  {
    console.log('handleDetailPic',fileList)
    dispatch({
      type: `${namespace}/save`,
      payload: {
        detailImgFileList: fileList
      }
    })
    let picList = []
    fileList.map(item => { 
      if (item.status === 'done') {
        picList.push(item)
      } 
    })
    console.log('picList',picList)
    setFieldsValue({
      detailImgList: picList
    })
    console.log('detailImgList',getFieldValue('detailImgList'))
  }

  return (
    <Card title="商品管理->添加商品" className={styles.Card} extra={<a onClick={handleReturn}>返回</a>}>

    <Form onSubmit={handleSubmit}>

      <Form.Item {...formItemLayout} label="商品名称">
        {getFieldDecorator('name',{  
          rules: [
            {required: true, message: '请输入商品名称'},
            {max: 100,message:'最多填写100个字符'}
          ],
          initialValue: productParam != null ? productParam.name: ""
        })
        (
          <Input  placeholder="请输入商品名称" />,
        )}
      </Form.Item>

      <Form.Item {...formItemLayout}  hidden>
        {getFieldDecorator('id',{  
          rules: [ ],
          initialValue: productParam != null ? productParam.id: ""
        })
        (
          <Input    hidden />,
        )}
      </Form.Item>

      <Form.Item {...formItemLayout} label="商品标题">
        {getFieldDecorator('keyWord',{  
          rules: [
            {required: true, message: '请输入商品标题'},
            {max: 100,message:'最多填写100个字符'}
          ],
          initialValue: productParam != null ? productParam.keyword: ""

        })
        (
          <Input  placeholder="请输入商品标题" />,
        )}
      </Form.Item>

      <Form.Item {...formItemLayout} label="商品类目">

      {getFieldDecorator('category', {
            rules: [
              { required: true, message: '请选择...' },
            ],
          //  initialValue: productParam != null ? productParam.category: ""

          })(
      //<Cascader options={categoryOptions} onChange={onChange} placeholder="Please select" />,
      <Cascader options={categoryOptions}  placeholder="Please select" />,

          )}
      </Form.Item>
 
       <Form.Item {...formItemLayout} label="商品品牌">
          {getFieldDecorator('brandId', {
            rules: [
              { required: true, message: '请选择...' },
            ],
            initialValue: productParam != null ? productParam.name: ""
          })(
            <Select
            showSearch
            placeholder="请选择"
           optionFilterProp="children"
           filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
          {BrandOptions}
        </Select>
          )}
        </Form.Item>
        
        <Form.Item {...formItemLayout} label="商品售价">
          {getFieldDecorator('discountPrice', {
            rules: [
              { required: true, message: '请输入' },
            ],
            initialValue: productParam.discountPrice != null ? productParam.discountPrice.number: ""
          })(
            <Input  placeholder="商品售价" />,
          )}
        </Form.Item>

        <Form.Item {...formItemLayout} label="市场价">
          {getFieldDecorator('originalPrice', {
            rules: [
              { required: true, message: '请选择...' },
            ],
            initialValue: productParam.originalPrice != null ? productParam.originalPrice.number: ""
          })(
            <Input  placeholder="市场价" />,
          )}
        </Form.Item>

        <Form.Item {...formItemLayout} label="参数描述">
        {getFieldDecorator('skuDesc', { 
          rules: [
            { required: true, message: '请输入描述' },
          ],
          initialValue: productParam != null ? productParam.skuDesc: ""
        })(
          <TextArea rows={4} />
        )}
      </Form.Item>
 
      <Form.Item {...formItemLayout} label="商品图片">
      {getFieldDecorator('mainImgList', { 

        })(
          <PicturesWall  handlePic={handleMainPic}/>
        )}
      </Form.Item>

      <Form.Item {...formItemLayout} label="商品详情">
        {getFieldDecorator('detailImgList', { 
        })(
          <PicturesWall  handlePic={handleDetailPic}/>
        )}
      </Form.Item>



      <Form.Item {...formItemLayout} label="商品描述">
        {getFieldDecorator('detailDesc', { 
          rules: [
            { required: true, message: '请输入描述' },
          ],
          initialValue: productParam != null ? productParam.detailDesc: ""
        })(
          <TextArea rows={4}/>
        )}
      </Form.Item>
      
      <Form.Item
        {...{
          wrapperCol: { span: 12, offset: 3 },
        }}
      >
        <Button type="primary" className={styles.submitBtn} htmlType="submit" style={{marginRight: '20px'}} >保存商品</Button>
        <Button type="primary" className={styles.submitBtn} htmlType="submit">发布上架</Button>
      </Form.Item>
    </Form>
    </Card>
  )
}

export default connect(({ submit, loading}) => ({ ...submit, loading }))(Form.create()(Submit));


function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

  
class PicturesWall extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    previewTitle: '',
    fileList: [
      // {
      // uid: "0",
      // name: "/api/upload/iphone-1.png",
      // status: "done",
      // url: "/api/upload/iphone-1.png"
      // },
      // {
      // uid: "1",
      // name: "/api/upload/iphone-2.png",
      // status: "done",
      // url: "/api/upload/iphone-2.png"
      // }
      ],
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    });
  };

  handleChange = ({ fileList }) => {
    this.setState({ fileList })
    this.props.handlePic(fileList)
   };


 
  render() {
 
    const { previewVisible, previewImage, fileList, previewTitle } = this.state;
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Upload
          action="/api/img/upload"
          name="image-file"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 8 ? null : uploadButton}
        </Upload>
        <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          onCancel={this.handleCancel}
        >
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
       {/* <Input placeholder="图片" value ={fileList.length}/> */}
       
      </div>
      
    );
  }
}