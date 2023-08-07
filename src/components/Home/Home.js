import './style-home.css';
import '../../App.css';

function Home() {
  return (
    <div className="home">
        <section className='home' id='home'>
            <div className='home-text'>
                <span>Welcome To</span>
                <h1>Servus Mariae</h1>
                <h2>Free Coffe is a <br /> tap away</h2>
                <a href='' className='btn'>Join Now</a>
            </div>

            <div className="home-img">
            <img src="/assets/img/home1.png"></img>
        </div>
        </section>
    </div>
  );
}

export default Home;