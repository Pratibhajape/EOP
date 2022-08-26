import Lottie from "lottie-react";
import about from "../Animations/about.json";
import ReactTypingEffect from 'react-typing-effect';
import Navbar from "../components/navbar.components";
import Header from "../components/header.components";
const About=()=>{
    return(
        <>
         <Navbar/>
         <Header/>
        <div class="container fst-italic text-center fs-1">
        <Lottie animationData={about} loop={true} style={{height:"80vh"}} />
        <h2>Dream oraganizer’s is an event management company. We organize events such as birthday parties ,
             Holi , anniversary parties , award ceremony and product launch events.</h2><br/>
        <h2>Our event management firms can handle a variety of specific event-related services, 
            which can range from few select services for clients with limited budget, to handling all creative,
             technical and logical aspect of the event. Our company fulfill all user requirements.</h2> <br/>

             <div class="text-primary fs-1 fw-bold">
             <ReactTypingEffect
       text={["How can we help you organize a successful event...?"]}
      />
      </div> 
             <h2>1. Dream oraganizer’s shall work on your event from beginning to end. You may relax and leave all the logistics to us.<br/>
     2. Venue Consultancy. Finding a venue in India is not as easy as people make it sound. While offering an extensive list of venues on our website, we know and have contact with hundreds of venues in the India, one of which will most definitely fit into your event scenario.<br/>
     3. We organise: product launches, birthday parties, anniversary, holi, awards ceremony and more.<br/>
     4. We give you more: transport services, photography, videography, furniture rental, entertainment, sound and lighting, branding, security, skilled staff,handle VIPs, catering and any event-related consultancy.</h2><br/>
             </div>
        </>
    )
}
export default About;