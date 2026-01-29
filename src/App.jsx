import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import CustomerHome from "./pages/CustomerHome";
import CartPage from "./pages/CartPage";
import Admin from "./pages/Admin";

import Footer from "./customer/Footer";

// Layout cho customer
function CustomerLayout() {
  return (
    <>
      <CustomerHome />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Landing />} />

        {/* Customer + Footer */}
        <Route
          path="/customer"
          element={<CustomerLayout />}
        />

        <Route path="/cart" element={<CartPage />} />

        <Route path="/admin" element={<Admin />} />

        <Route path="*" element={<h1>404 - Not Found</h1>} />

      </Routes>
    </Router>
  );
}

export default App;
