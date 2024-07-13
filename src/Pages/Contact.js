import './Contact.css';
import Navigation from '../Components/Navigation';
function Contact() {
  document.title = 'React page - Contact';
    return (
      <>
      <Navigation/>
        <div className="contact-container">
        <header className="contact-header">
          <h1>Contact Us</h1>
        </header>
        <section className="contact-info">
          <h2>Ask me !</h2>
          <p>You have any doubt and confusion About me then tell me. Via Chat or Call.</p>
        </section>
        <section className="contact-details">
          <h2>Contact Details</h2>
          <ul>
            <li><strong>Email:</strong> ajeetgym@gmail.com</li>
            <li><strong>Phone:</strong> (+91) 9981303575</li>
            <li><strong>Address:</strong> 0001 Pithamput(M.P.)</li>
          </ul>
        </section>
        <section className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            
            <button type="submit">Submit</button>
          </form>
        </section>
      </div>
    </>
    );
  }
  
export default Contact;
