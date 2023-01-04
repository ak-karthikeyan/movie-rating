import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const login = (e) => {
    if ((e.email === "admin@admin.com") & (e.password === "admin")) {
      navigate("/AdminPage");
      message.success("Login Successfull");
    } else {
      message.error("Invalid Email/Password");
    }
  };
  return (
    <div className="login">
      <Form className="loginForm" onFinish={login}>
        <Form.Item
          label="Email"
          name={"email"}
          rules={[
            { required: true, message: "This field is required" },
            { type: "email", message: "Entered e-mail is invalid!" },
          ]}
        >
          <Input placeholder="Enter your e-mail" />
        </Form.Item>
        <Form.Item
          label="Password"
          name={"password"}
          rules={[{ required: true, message: "This field is required" }]}
        >
          <Input placeholder="Enter your password" type="password" />
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          Login
        </Button>
      </Form>
    </div>
  );
}
export default AdminLogin;
