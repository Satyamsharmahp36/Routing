import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <nav>
               <Link id="home" to ="/home">Kalvium</Link>
                <div>
                <Link className="About" to ="/about">ABOUT</Link> 
                <Link className="About" to ="/contact">CONTACT</Link>
                </div>
                 
        </nav>
    )
}