import './nav.css'
import {AiOutlineHome, AiOutlineContacts, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageDetail} from 'react-icons/bi'
import {RiServiceFill} from 'react-icons/ri'
import './nav.css'
import { useState } from 'react'
const Nav = () => {

    const [activeNav, setActiveNav] = useState("#");

    return ( 
        <nav>
            <a onClick={()=> setActiveNav("#")} className={activeNav === "#" ? "active" : " "} href="#"><AiOutlineHome/></a>
            <a onClick={()=> setActiveNav("#about")} className={activeNav === "#about" ? "active" : " "}href="#about"><BiBook/></a>
            <a onClick={()=> setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : " "}href="#experience"><BiMessageDetail/></a>
            <a onClick={()=> setActiveNav("#services")} className={activeNav === "#services" ? "active" : " "}href="#services"><RiServiceFill/></a>
            <a onClick={()=> setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : " "}href="#contact"><AiOutlineUser/></a>
        </nav>
    );
}
 
export default Nav;