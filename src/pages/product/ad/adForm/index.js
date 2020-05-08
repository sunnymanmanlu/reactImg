import React from 'react';
import { connect } from 'dva';
import moment from 'moment';
import { Card, Form, Input, Select, Button, DatePicker, message, Upload, Icon } from 'antd';
import styles from '@/styles/form/submit/index.less';
import router from 'umi/router';

const {  RangePicker, } = DatePicker;
const { TextArea } = Input;
const { Option } = Select;

const namespace = 'adForm';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

const Submit = ({
  formData,
  title,
  imgLoad,
  imageUrl,
  submit,
  options,
  loading,
  location,
  dispatch,
  form: { getFieldDecorator, validateFields,setFields,getFieldValue,setFieldsValue },
  ...restProps
}) => {
  console.log("url参数:",location.query)
  // 不可选择的时间
  const disabledDate = (current) => {
    return current && current > moment().endOf('day');
  }

  const formItemLayout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 12 },
  };

  const onCreateHomeFocus = (e) => {
    e.preventDefault();
    validateFields((error, values) => {
      
      if (error) {
        console.log(error)
      } else {
        let data = {...values}
        console.log("data"+data);
        // debugger;
        delete data.date
        data['startTime']= values.date[0].format('YYYY-MM-DD HH:mm:ss')
        data['endTime']= values.date[1].format('YYYY-MM-DD HH:mm:ss')
        console.log('提交的参数为',data)
        dispatch({
          type: `${namespace}/submitForm`,
          payload: data
        }).then((res) => {
          if (res.code === 200) {
            message.success('表单提交成功！')
            router.push('/product/ad')
          } else {
            message.error('表单提交失败')
          }
        })
        
      }
    })
  }

  const handleChange = info => {
    if (info.file.status === 'uploading') {
      console.log("uploadinguploadinguploadinguploading"+imageUrl);
      dispatch({
        type: `${namespace}/save`,
        payload: {
          imageUrl,
          imgLoad: true,
        }
      })
      return;
    }
    if (info.file.status === 'done') {
      console.log("vdonedonedonedone"+imageUrl);

      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        dispatch({
          type: `${namespace}/save`,
          payload: {
            imageUrl,
            imgLoad: false,
          }
        })
      );
    }
  };

  const handleReturn = () => {
    router.go(-1)
  }

  // 接口数据动态渲染下拉框
  const Options = options.map((item,index)=>{

    return <Option key={index} value={item}>{item}</Option>
  })

  const uploadButton = (
    <div>
      <Icon type={imgLoad ? 'loading' : 'plus'} />
      <div className="ant-upload-text">Upload</div>
    </div>
  );
  
  return (
    <Card title={title} className={styles.Card} extra={<a onClick={handleReturn}>返回</a>}>
      <Form onSubmit={onCreateHomeFocus}>
        <Form.Item {...formItemLayout} label="广告名称">
          {getFieldDecorator('name', {
            rules: [
              { required: true, message: '请输入广告名称' },
              { max: 20,message:'最多填写20个字符'}
            ],
            initialValue: formData&&formData.name||''
          })(
            <Input  placeholder="请输入广告名称" />,
          )}
        </Form.Item>

        <Form.Item {...formItemLayout} label="广告id" hidden>
          {getFieldDecorator('id', {
            initialValue: formData&&formData.id
          })(
            <Input  hidden />,
          )}
        </Form.Item>
        
        <Form.Item {...formItemLayout} label="生效时间">
          {getFieldDecorator('date', {
            rules: [
              { required: true, message: '请选择时间' },
            ],
            initialValue: [moment(formData.startTime), moment(formData.endTime)]
          })(
            <RangePicker />
          )}
        </Form.Item>
        <Form.Item {...formItemLayout} label="排序">
          {getFieldDecorator('seq', {
            rules: [
              { required: true, message: '请选择排序' },
            ],
            initialValue: formData&&formData.seq||''
          })(
            <Input  placeholder="请输入数字排序" />,
          )}
        </Form.Item>
        <Form.Item {...formItemLayout} label="跳转链接">
          {getFieldDecorator('redirectLink', {
            rules: [
              { required: true, message: '请输入跳转链接' },
            ],
            initialValue: formData&&formData.redirectLink||''
          })(
            <Input  placeholder="请输入跳转链接" />,
          )}
        </Form.Item>
        <Form.Item {...formItemLayout} label="广告图片">
          {getFieldDecorator('imgLink', {
            rules: [
              { required: false, message: '请上传广告图片' },
            ],
            
          })(
            <Upload
              name="image-file"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="/api/img/upload"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>
          )}
        </Form.Item>

        <Form.Item {...formItemLayout} label="广告描述">
          {getFieldDecorator('desc', {
            rules: [
              { required: false, message: '请输入广告描述' },
            ],
            initialValue: formData&&formData.desc||''
          })(
            <Input  placeholder="请输入广告描述" />,
          )}
        </Form.Item>


        <Form.Item 
          {...{
            wrapperCol: { span: 12, offset: 3 },
          }}
        >
            <Button type="primary" className={styles.submitBtn} htmlType="submit">提交</Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default connect(({ adForm, loading }) => ({ ...adForm, loading }))(Form.create()(Submit));