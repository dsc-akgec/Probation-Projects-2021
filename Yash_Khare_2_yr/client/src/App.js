import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Cart from './components/Cart'
import Profile from './components/Profile'
import Logout from './components/Logout'
import ItemCard from './components/ItemCard'
import Electronics from './components/Electronics';
import Clothes from './components/Clothes';
import Books from './components/Books';
import HomeSupplies from './components/HomeSupplies';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/item/:id" element={<ItemCard />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/books" element={<Books />} />
        <Route path="/homesupplies" element={<HomeSupplies />} />
      </Routes>
    </div>
  );
}

export default App;
