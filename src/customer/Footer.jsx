import "../assets/css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Cột 1 */}
        <div className="footer-col">
          <h3>📱 PhoneShop</h3>

          <p>
            Chuyên cung cấp điện thoại chính hãng,
            giá tốt, bảo hành uy tín.
          </p>
        </div>

        {/* Cột 2 */}
        <div className="footer-col">
          <h4>Liên hệ</h4>

          <p>📧 Email: support@phoneshop.vn</p>
          <p>📞 Hotline: 1900 9999</p>
          <p>📍 TP.HCM, Việt Nam</p>
        </div>

        {/* Cột 3 */}
        <div className="footer-col">
          <h4>Theo dõi</h4>

          <p>🌐 Facebook</p>
          <p>🌐 Instagram</p>
          <p>🌐 TikTok</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © 2026 PhoneShop | Designed by You ❤️
      </div>
    </footer>
  );
}
