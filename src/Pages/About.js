import './About.css';
import Navigation from '../Components/Navigation';
function About() {
    return (
    <>
    <Navigation/>
      <div className="about-container">
        <header className="about-header">
          <h1>About Us</h1>
        </header>
        <section className="about-content">
          <h2>Our Story</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tenetur explicabo quia quo. Adipisci, eveniet nesciunt ea iure ipsam consequatur.</p>
        </section>
        <section className="about-team">
          <h2>Our Team</h2>
          <div className="team-member">
            <h3>Ajeet ji Rajput</h3>
            <p>Lead Developer</p>
          </div>
          <div className="team-member">
            <h3>Aadarsh guru ji</h3>
            <p>Founder & CEO</p>
          </div>
        </section>
        <section className="about-values">
          <h2>Our Values</h2>
          <ul>
            <li>Innovation</li>
            <li>Integrity</li>
            <li>Customer Satisfaction</li>
          </ul>
        </section>
      </div>
    </>
    );
  }
  
export default About;