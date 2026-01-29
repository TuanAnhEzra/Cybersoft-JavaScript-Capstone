import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing      from "./pages/Landing";
import CustomerHome from "./pages/CustomerHome";
import CartPage     from "./pages/CartPage";
import Admin        from "./pages/Admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/customer" element={<CustomerHome />} />
        <Route path="/cart"     element={<CartPage />} />
        <Route path="/admin"    element={<Admin />} />
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;