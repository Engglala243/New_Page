import './Home.css';
import Navigation from '../Components/Navigation';
// import Header from '../Components/Header';
function Home() {
    document.title = 'React page - Home';
    return (
    <>
      <Navigation/>
      <div class="home-container">
        <header className="home-header">
          <h1>Home Page</h1>
        </header>
        <section className="home-welcome">
          <h2>Welcome!</h2>
          <p>Welcome to my first React home page. This is a simple home page created using React.</p>
        </section>
        <section className="home-introduction">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique magni molestiae fugit explicabo optio esse nobis aliquam distinctio, facere saepe!</p>
        </section>
        <section className="home-contact">
          <h2>Contact Us</h2>
          <p>If you have any questions, Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <ul>
            <li>Email: ajeetgym@gmail.com</li>
            <li>Phone:(+91) 9981303575</li>
          </ul>
        </section>
      </div>
    </>
    );
  }
  
export default Home;
  