
const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-address">
            <p>400 University Drive Suite 200 Coral Gables,</p>
            <p>FL 33134 USA</p>
          </div>
  
          <div className="footer-links">
            <h4>Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/shop">Shop</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
  
          <div className="footer-help">
            <h4>Help</h4>
            <ul>
              <li><a href="/payment-options">Payment Options</a></li>
              <li><a href="/returns">Returns</a></li>
              <li><a href="/privacy-policies">Privacy Policies</a></li>
            </ul>
          </div>
  
          <div className="footer-newsletter">
            <h4>Newsletter</h4>
            <form>
              <input
                type="email"
                placeholder="Enter Your Email Address"
                aria-label="Email Address"
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
  
        <div className="footer-bottom">
          <p>© 2022 Meubel House. All rights reserved</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  