import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";
import liknedin from "../assets/linkedin.png"
import github from "../assets/github.png"
export default function Contact () {
 return(
 <div>
 <h2 id="contacth2">Contact</h2>
 <ContactForm/>
  
  

  <div className="contact-icons-container">
  <a href="https://www.linkedin.com/in/jon%C3%A1s-fern%C3%A1ndez-as/" target="_blank" rel="noreferrer"><img src={liknedin} alt="linkedin"></img></a>
   <a href="https://github.com/jonas-fernandez-as" target="_blank" rel="noreferrer"><img src={github} alt="github"></img></a>
  </div>
    

    <div className="to-home-container">
    <Link className="to-home" to="/">Home</Link>
    </div>
 </div>
 )
}