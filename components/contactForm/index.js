import { Form, Input, Button, message } from "antd";

const ContactForm = () => {
  const onFinish = () => {
    message.warning("Please contact us through email")
  };
  return (
    <Form
      className="login-form"
      name="login-form"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="name"
      >
        <Input placeholder="name" />
      </Form.Item>
      <Form.Item
        name="email"
      >
        <Input placeholder="email" />
      </Form.Item>

      <Form.Item
        name="phoneNumber"
      >
        <Input placeholder="phone number" />
      </Form.Item>

      <Form.Item  style={{textAlign:"center"}}>
        <Button type="primary" htmlType="submit">
          submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
