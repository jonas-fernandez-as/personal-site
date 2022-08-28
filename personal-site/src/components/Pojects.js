import "./Projects.css"
import { Link } from "react-router-dom";
import pokemons from "../assets/pokemons.jpg"
import exercises from "../assets/exercises.jpg"
import artist from "../assets/artist.jpg"
import nestedselect from "../assets/nestedselect.jpg"
import searcher from "../assets/searcher.jpg"

export default function Projects(){
 return(
  <div>
 
  <h2>This is my collection of proyects</h2>
  <div className="figure-container" > 
  <h3>My first web site</h3>
  <figure className="fig">
  <a href="https://joyful-manatee-8ac071.netlify.app" target={"_blank"} rel="noreferrer">
   <img className="fig-img" src={artist} alt="artist-img" ></img>
   </a>
   <figcaption className="fig-figcaption">
    <p>
     This was my first proyect when i was learning HTML and CSS. All the images are made by me (because i'm visual artist too)
    </p>
    </figcaption>
  </figure>
  
  <h3>API TV shows</h3>
  <figure className="fig">
  <a href="https://soft-valkyrie-0c8848.netlify.app" target={"_blank"} rel="noreferrer">
   <img className="fig-img" src={searcher} alt="searcher-img" ></img>
   </a>
   <figcaption className="fig-figcaption">
    <p>
     On this API you can search TV shows 
    </p>
    </figcaption>
  </figure>
  
  <h3>My exercises with react</h3>
  <figure className="fig">
  <a href="https://voluble-baklava-71ec87.netlify.app" target={"_blank"} rel="noreferrer">
   <img className="fig-img" src={exercises} alt="exercises-img" ></img>
   </a>
   <figcaption className="fig-figcaption">
    <p>
     On this proyect(with a basic UI) i solve many diferent problems.
    </p>
    </figcaption>
  </figure>
  
  <h3>Nested selects</h3>
  <figure className="fig">
  <a href="https://heroic-bublanina-e5adc0.netlify.app" target={"_blank"} rel="noreferrer">
   <img className="fig-img" src={nestedselect} alt="nested-img" ></img>
   </a>
   <figcaption className="fig-figcaption">
    <p>
     This shows from an API diferent states of Argentina
    </p>
    </figcaption>
  </figure>

  <h3>Poke API</h3>
  <figure className="fig">
  <a href="https://luxury-yeot-28f118.netlify.app" target={"_blank"} rel="noreferrer">
   <img className="fig-img" src={pokemons} alt="poke-img" ></img>
   </a>
   <figcaption className="fig-figcaption">
    <p>
     This shows from an API all the pokemons created.
    </p>
    </figcaption>
  </figure>
  <div id="container">
   <Link className="tohome" to="/">Home</Link>
   </div>
  </div>
  
  </div>

 )
}