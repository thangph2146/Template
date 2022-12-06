import React from "react";
import {Form,Modal } from "antd";
import { IPropsModal } from "../../interface";


const ModalLogin = (props: IPropsModal) => {
  const { modal, setModal, handleRefresh } = props;
  const [form] = Form.useForm();

 
  const handleOk = () => {
    form.submit();
  };
  const handleCancel = () => {
    setModal({ isVisible: false, dataEdit: null });
    form.resetFields();
    handleRefresh();
  };
  const onFinish = (value: any) => {
   
  }


  return (
    <Modal
      className="main-modal" 
      visible={modal.isVisible}
      onOk={handleOk}
      onCancel={handleCancel} 
      closable={false}
    >
      <Form
        form={form}
        className="main-form" //important
        layout="vertical" //important
        name="basic"
        onFinish={onFinish}
      >
        
      </Form>
    </Modal>
  );
};

export default ModalLogin;
