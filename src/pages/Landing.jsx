import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="container text-center my-5">
      <h1 className="display-4 fw-bold mb-4">Phone Shop</h1>
      <p className="lead mb-5">Chọn vai trò để tiếp tục</p>

      <div className="row justify-content-center g-5">
        <div className="col-md-5">
          <Link to="/customer" className="btn btn-primary btn-lg w-100 py-5 shadow-lg">
            <div className="fs-1 mb-3">🛍️</div>
            <h3>Khách hàng</h3>
            <p className="fs-5">Mua sắm ngay</p>
          </Link>
        </div>
        <div className="col-md-5">
          <Link to="/admin" className="btn btn-danger btn-lg w-100 py-5 shadow-lg">
            <div className="fs-1 mb-3">🔧</div>
            <h3>Quản trị viên</h3>
            <p className="fs-5">Quản lý sản phẩm</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;