import { Layout } from "antd";
import NavBar from "../NavBar";
const { Header, Content, Footer } = Layout

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Layout className="mainLayout">
        <Header>
          <NavBar />
        </Header>
        <Content>
          {children}
        </Content>
      </Layout>
    </div>
  );
}

export default DefaultLayout;