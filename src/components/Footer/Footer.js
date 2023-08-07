import './style-footer.css';
import '../../App.css';

function Footer() {
    return (
        <div className="footer">
            <section className="contact" id="contact">
                <div className="social">
                    <a href=""><i className="bx bxl-facebook"></i></a>
                    <a href=""><i className="bx bxl-twitter"></i></a>
                    <a href=""><i className="bx bxl-instagram"></i></a>
                    <a href=""><i className="bx bxl-youtube"></i></a>
                </div>

                <div className="links">
                    <a href="">Privacy Policy</a>
                    <a href="">Terms Of Use</a>
                    <a href="">Our Company</a>
                </div>
                <p>&#169; Mateus All Right Reserved.</p>
            </section>
        </div>
    );
}

export default Footer;