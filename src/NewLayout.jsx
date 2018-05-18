import React,{Component} from 'react';
import { Layout, Menu, Icon } from 'antd';
import NewButton from './NewButton';
import Dragger from './Dragger';
import BarGraph from './BarGraph';
import Welcome1 from './test1';
import Clock from './Clock';
import Form from './Form';
import FilterableProductTable from './FilterableProductTable';
const { Header, Sider, Content } = Layout;

var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPodTouch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus7'}
];

class NewLayout extends Component {
  constructor(props){
    super(props);
    this.state = {
    collapsed: false,
  };
  }
  
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            {/*Content
            <NewButton />
            <Clock />
            <Form />
            <BarGraph />
            <FilterableProductTable products={PRODUCTS} />*/}
            <Welcome1 name="world" />
             {/*<div className='bounds' >
                    <Dragger bounds='parent' >
                        <div>不能离开框框的范围</div>
                    </Dragger>
                    <Dragger bounds='parent' style={{ left: 200, margin: 10 }} >
                        <div>
                            <div>不能离开框框的范围</div>
                            <div>并且有10px的margin</div>
                        </div>
                    </Dragger>
                </div>*/}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default NewLayout;