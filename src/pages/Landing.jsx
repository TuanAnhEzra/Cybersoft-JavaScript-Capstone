import { Link } from "react-router-dom";
import "./Landing.css";

function Landing() {
  return (
    <div className="landing-container">

      <div className="landing-card">

        <h1 className="landing-title">📱 Phone Shop</h1>

        <p className="landing-subtitle">
          Chọn vai trò để tiếp tục
        </p>

        <div className="landing-buttons">

          {/* Customer */}
          <Link to="/customer" className="landing-box user">
            <div className="icon">🛍️</div>
            <h3>Khách hàng</h3>
            <p>Mua sắm sản phẩm</p>
          </Link>

          {/* Admin */}
          <Link to="/admin" className="landing-box admin">
            <div className="icon">🔧</div>
            <h3>Quản trị viên</h3>
            <p>Quản lý hệ thống</p>
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Landing;
