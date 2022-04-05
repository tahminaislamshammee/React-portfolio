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
            <a href="#about"><BiBook/></a>
            <a href="#experience"><BiMessageDetail/></a>
            <a href="#services"><RiServiceFill/></a>
            <a href="#contact"><AiOutlineUser/></a>
        </nav>
    );
}
 
export default Nav;