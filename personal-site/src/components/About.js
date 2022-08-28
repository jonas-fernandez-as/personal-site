import  "./About.css"
import css from "../assets/css.png"
import git from "../assets/git.png"
import html from "../assets/html.png"
import js from "../assets/js.png"
import kali from"../assets/kali.png"
import msf from "../assets/msf.png"
import nmap from "../assets/nmap.png"
import ps from "../assets/ps.png"
import react from"../assets/react.png"
import ubuntu from "../assets/ubuntu.png"
import sublime from "../assets/sublime.png"
import linux from "../assets/linux.png"
import vscode from"../assets/vscode.png"
import netlify from"../assets/netlify.png"
import { Link } from "react-router-dom"

export default function About() {
  return (
   <div className="all-container">
        
    <div className="bg-image">

        <div className="bg-h2">
            <h2>About</h2>
        </div>
    </div>
    <div className="text-container">
    <div>
      
      <p>
        My name is Jonás Fernández. I was a student of arts since i born to
        2018, my mother and father are artists and they teached me since i was a
        child
      </p>
      <p>
        In the margin of this things, when i growed i leaveed my studys on the
        University of Cuyo and i run to my own home, paing the rent starting to
        work on gastronomic business
      </p>
      <p>
        My carrer was always better i learned much thins about bussines and
        thrating people, relationships, sacrifice and hard work. I allways study
        by myself always read books always want to learn something new
      </p>
      <p>
        I discover this world of technology on 2020 in the pandemy, fixing my
        computer. I left windows 10 and i start to use linux. In one moment to
        another and i was learning about hacking, using Kali linux, metasploit
        framework NMAP and other technologies
      </p>
      <p>
        In that point i was feeling like a person who dont know nothing about
        programming, i was using programs from another persons... and i was
        thinking that i have to pay the rent and work.. and i thing and i feel
        "this world is not to me, i dont have studies, i dont know nothing "..
        and i give up
      </p>
      <p>
        But the time pass and my curiosity and my wish to learn was much more
        bigger, and i start to learn by myself about programming. I hear that
        you dont need to be an universitary to get in on this world of IT and
        development. That push me to work harder and learn and dont give up
      </p>
      <p>
        Now i'm decided to make my dreams true and give up is not an option, i
        will become a profesional software developer, im an artist so i have
        many future on this world ,because the developers are artists and they
        make the people lives easy, giving they solutions to the problems
      </p>
      <p>
        You wont going to regret to have me in your lines of developers, i want
        to learn everithing, i have strength, i'm enough , im significant, im
        important and my interest is to be better to help all the world, all the
        people arround me and even the people who i dont know
      </p>
      <p>Thanks for read this lines</p>
      
    </div>
    </div>
    <div className="box-icons-container">
     <div className="icon-container_container">
     <h3 className="h3-black" >Main programs</h3>
     <div className="icon-container">
    <img className="icon" src={vscode} alt="html"></img>
    <img className="icon" src={sublime} alt="css"></img>
    <img className="icon" src={ubuntu} alt="js"></img>
    <img className="icon" src={linux} alt="react"></img>
    </div>
    
    <h3 className="h3-black">Main skills</h3>
    <div className="icon-container">
    <img className="icon" src={html} alt="html"></img>
    <img className="icon" src={css} alt="css"></img>
    <img className="icon" src={js} alt="js"></img>
    <img className="icon" src={react} alt="react"></img>
    <img className="icon" src={git} alt="git"></img>
    </div>
    <h3 className="h3-black">Other skills</h3>
    <div className="icon-container">
    <img className="icon" src={kali} alt="kali"></img>
    <img className="icon" src={msf} alt="msf"></img>
    <img className="icon" src={nmap} alt="nmap"></img>
    <img className="icon" src={ps} alt="ps"></img>
    <img className="icon" src={netlify} alt="kali"></img>
    </div>
    </div>
    </div>
    <h2><a href="https://drive.google.com/file/d/1xUoI2Ptis9eCTW8Sqe474hGvLs0-o9H7/view" target="_BLANK" rel="noreferrer">My Resume</a></h2>
    <div className="to-home-container">
    <Link className="to-home" to="/">Home</Link>
    </div>
    </div>    
  );
}


