import './style-introduction.css';
import '../../App.css';

function Introduction() {
    return (
        <div className="introduction">
            <section className="delivery" id="delivery">
                <div className="heading">
                    <span>Get Now</span>
                    <h1>Order With Uber Eats</h1>
                </div>

                <div className="container">
                    <div className="delivery-img">
                        <img src="assets/img/nossa-senhora.jpg"></img>
                    </div>

                    <div className="delivery-text">
                        <h2>Today Deserve delivery</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic voluptatem nihil voluptates cumque quidem molestias. Nihil cumque tempore nulla pariatur!</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic voluptatem nihil voluptates cumque quidem molestias. Nihil cumque tempore nulla pariatur!</p>
                        <a href="" className="btn">Order Now</a>
                    </div>
                </div>
            </section>

            <section className="app" id="app">
                <div className="heading">
                    <span>Our App</span>
                    <h1>Download App</h1>
                </div>

                <div className="container">
                    <div className="app-text">
                        <h2>Fall into an easier routine</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut est aut impedit ea esse eaque dolorem nostrum laudantium necessitatibus quis?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut est aut impedit ea esse eaque dolorem nostrum laudantium necessitatibus quis?</p>
                        <a href="" className="btn">Get App</a>
                    </div>

                    <div className="app-img">
                        <img src="assets/img/nossa-senhora-gracas.jpg"></img>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Introduction;