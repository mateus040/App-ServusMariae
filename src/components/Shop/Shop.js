import './style-shop.css';
import '../../App.css';

function Shop() {
  return (
    <div classNameName="shop">
        <section className="shop" id="shop">
        <div className="heading">
            <span>Shop Now</span>
            <h1>Shop Coffee</h1>
        </div>

        <div className="shop-container">
            <div className="box">
                <div className="box-img">
                    <img src="assets/img/cadeia.png"></img>
                </div>

                <div className="stars">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star-half"></i>
                </div>

                <h2>Cadeia Consagração</h2>
                <span>$ 12.4</span>
                <a href="" className="btn">Order Now</a>
            </div>

            <div className="box">
                <div className="box-img">
                    <img src="assets/img/imagemNS.png"></img>
                </div>

                <div className="stars">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star-half"></i>
                </div>

                <h2>Imagem N.S Fátima</h2>
                <span>$ 12.4</span>
                <a href="" className="btn">Order Now</a>
            </div>

            <div className="box">
                <div className="box-img">
                    <img src="assets/img/medalha.png"></img>
                </div>

                <div className="stars">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star-half"></i>
                </div>

                <h2>Medalha N.S Graças</h2>
                <span>$ 12.4</span>
                <a href="" className="btn">Order Now</a>
            </div>           
        </div>
    </section>
    </div>
  );
}

export default Shop;