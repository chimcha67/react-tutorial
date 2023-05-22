import { Link } from "react-router-dom"
import '../components/nav.css'
const NavConponent = () =>{
    return <div className = "innerWidth navbar">
        <h3>Stanumy Estates</h3>
        <ul >
            <Link style={{ color:"white"}} to = "/">HOME</Link>
            <Link  style={{ color:"white"}} to = '/about'>MENU</Link>
            <Link  style={{ color:"white"}}>ABOUT</Link>
            <Link  style={{ color:"white"}}>CONTACT</Link>
            
           
        </ul>
    </div>
}

export default NavConponent