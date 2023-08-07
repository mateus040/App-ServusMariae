import './style-about.css';
import '../../App.css';

function About() {
    return (
        <div className="about">
            <section className="about" id="about">
                <div className="about-img">
                    <img src="assets/img/virgem-maria.png"></img>
                </div>

                <div className="about-text">
                    <h2>50 years of serving communities</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ex repellat natus! Rerum excepturi eveniet ullam, quidem temporibus cum doloribus!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ex repellat natus! Rerum excepturi eveniet ullam, quidem temporibus cum doloribus!</p>
                    <a href="" className="btn">Learn More</a>
                </div>
            </section>
        </div>
    );
}

export default About;