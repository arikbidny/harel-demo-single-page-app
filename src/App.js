import logo from './logo.svg';
import './App.css';
import { Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainHeader from './components/Header/MainHeader';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ProductsPage from './pages/Products';

const { Content } = Layout;

function App() {
  return (
    <div className='App'>
      <Layout className='layout'>
        <Router>
          <MainHeader />
          <Switch>
            <Content style={{ padding: '50px 100px' }}>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/about' component={AboutPage} />
              <Route exact path='/products' component={ProductsPage} />
            </Content>
          </Switch>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
