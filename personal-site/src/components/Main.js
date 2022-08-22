import "./Main.css"
import { useState } from "react";




export default function Main() {
  const [isShownWelcome, setIsShownWelcome] = useState(false);
  const [isShownMyName, setIsShownMyName] = useState(false);
  const [isShownJonas, setIsShownJonas] = useState(false);

  
  return (
    <body>
    <main>
      <h1>
        <div className="h1-container">
        <div  className="label-Welcome" 
        onMouseEnter={()=>setIsShownWelcome(true)} 
        onMouseLeave={()=>setIsShownWelcome(false)}
        > 
        {isShownWelcome===true ?(<a className="hide-text" href="about">About</a>):(<p className="visible-text">Welcome</p>)}   
           
        </div>
        <div className="label-my-name"
        onMouseEnter={()=>setIsShownMyName(true)} 
        onMouseLeave={()=>setIsShownMyName(false)}
        >
        {isShownMyName===true?(<a className="hide-text" href="works">Projects</a>):(<p className="visible-text">To my</p>)}
          
          
        </div>
        <div className="label-is-jonas"
        onMouseEnter={()=>setIsShownJonas(true)} 
        onMouseLeave={()=>setIsShownJonas(false)}
        
        >
        {isShownJonas===true?(<a className="hide-text" href="contact">Contact</a>):(<p className="visible-text">Website!</p>)}  
          
          
        </div>
        </div>
      </h1>
      <img className="bg-img" src="https://i.postimg.cc/nh1qv7Td/tumblr-oaos3gp2g-C1sdxisjo1-1280.jpg" alt="img"/>
    </main>
    </body>
  );
}
