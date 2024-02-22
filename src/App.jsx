import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { Layout, Anchor } from 'antd';
import NavBar from './NavBar';
import Search from './pages/Search';
import Profile from './pages/Profile';
import AuthProvider from './providers/authProvider';
import Callback from './pages/Callback';

const { Header, Content, Footer, Side } = Layout;

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="search" element={<Search />} />
          <Route path="profile" element={<Profile />} />
          <Route path="callback" element={<Callback />} />
          {/* <Route path="callback" element{} */}
        </Routes>
        <Footer style={{position: "fixed", bottom: 0, right: 0, opacity: 0.5 }}>&copy; 2014 @teboho </Footer>
      </BrowserRouter>      
    </AuthProvider>

  );
}

export default App;
