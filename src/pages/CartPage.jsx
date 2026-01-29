import Header from "../customer/Header";
import Cart from "../customer/Cart";
import { Link } from "react-router-dom";

function CartPage() {
  return (
    <>
      <Header />
      <div className="p-4">
        <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">Home</Link>
      </div>
      <Cart />
    </>
  );
}

export default CartPage;