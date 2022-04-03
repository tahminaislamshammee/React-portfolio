import Cta from "./Cta";
import Me from '../../assets/me.png'
import HeaderSocials from "./HeaderSocials";
import './header.css'
const Header = () => {
    return ( 
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Hajia Binte</h1>
                <h5 className="text-light">fullstack developer</h5>
                <Cta/>
                <HeaderSocials/>
                <div className="me">
                <img src={Me} alt="image" />

                <a href="#contact" className="scroll__down"> Scroll down</a>
                </div>
            </div>
        </header>
    );
}
 
export default Header;

