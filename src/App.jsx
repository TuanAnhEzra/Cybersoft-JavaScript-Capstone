import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Customer from './customer/Customer';
import Admin from './admin/admin';
import Cart from './customer/Cart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Customer/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </Router>
  );
}

export default App
