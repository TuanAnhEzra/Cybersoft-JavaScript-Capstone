// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Home from './home/Home';
// import Customer from './customer/Customer';
// import Cart from './customer/Cart';
// import Admin from './admin/Admin';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/customer" element={<Customer />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/admin" element={<Admin />} />
//         <Route path="*" element={<div>404 - Page Not Found</div>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import Admin from "./pages/Admin";

import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/cart" element={<CartPage />} />

        <Route path="/admin" element={<Admin />} />

        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>

      {/* Footer luôn nằm dưới */}
      <Footer />
    </Router>
  );
}

export default App;