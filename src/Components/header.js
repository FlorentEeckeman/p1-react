import logo from '../img/logo/Booki@3x.png';
import './header.css';

const Header = () => {
    return (
        <div className='headerStyle'>
            <div className='logoHeader'>
            <img alt="logo" src={logo}></img>
            </div>
            <div className='menuHeader'>
            <ul>
                <li>Hébergement</li>
                <li>activités</li>
            </ul>
            </div>
        </div>
    )
}
export default Header