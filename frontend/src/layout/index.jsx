import React from "react";
import "./AppLayout.css";
import { Layout, theme, Row, Col, Button } from "antd";
import { useNavigate } from "react-router-dom";
//import MoviesList from "../Components/MoviesList";
import AppRoutes from "../Components/Routes/index";
const { Header, Content, Footer } = Layout;

const AppLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/AdminLogin");
  };
  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <Layout className="layout">
      <Header>
        <Row gutter={16}>
          <Col>
            <Button type="ghost">
              <h3 className="logo">Movies360</h3>
            </Button>
          </Col>
          <Col push={19}>
            <Button onClick={navigateToHome}>Home</Button>
          </Col>
          <Col push={19}>
            <Button onClick={navigateToLogin}>Login</Button>
          </Col>
        </Row>

        {/* <div className="logo">Movies360</div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]} /> */}
      </Header>
      <Content
        style={{
          padding: "16px 50px",
        }}
      >
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          <AppRoutes />

          {/* <MoviesList /> */}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        {/* Ant Design ©2018 Created by Ant UED */}
      </Footer>
    </Layout>
  );
};
export default AppLayout;
