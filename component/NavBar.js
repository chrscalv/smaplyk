import { PageHeader, Menu, Typography } from "antd"
import Link from "next/link";
const { SubMenu } = Menu

const NavBar = () => {
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <Menu theme="light" mode="horizontal">
            <Menu.Item>
              <Link href="/"><a>Beranda</a></Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/"><a>Artikel</a></Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="http://ppdb.smaplyk.sch.id/"><a>PPDB</a></Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="http://elearning2.smaplyk.sch.id/"><a>E-Learning</a></Link>
            </Menu.Item>
            <SubMenu key="about" title="Tentang Kami">
              <Menu.ItemGroup>
                <Menu.Item key="about:1"><Link href=""><a>Sejarah Paroki</a></Link></Menu.Item>
                <Menu.Item key="about:2">Pastor Paroki</Menu.Item>
                <Menu.Item key="about:3">Dewan Paroki</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default NavBar;