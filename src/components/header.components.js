import { Parallax } from 'react-parallax';
import bg from "../Assets/bg.png";
const Header=()=>{
    return(
        <>
        <div class="container">
        <p class="fst-italic text-center fs-1">Dream Organizer's</p>
        </div>
       <Parallax
        
        bgImage={bg}
        bgImageAlt=""
        strength={20}
    >
        <p className="c-txt display-6 d-flex justify-content-center fst-Oleo Script Swash Caps fw-bold"><br/> </p>
    
        <div style={{ height: '450px' }} />
        </Parallax>
        
         </>
    )
}
export default Header;