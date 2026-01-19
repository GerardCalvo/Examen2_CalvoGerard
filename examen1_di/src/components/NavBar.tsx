import {Link} from "react-router-dom";

import logo from "../../public/imgW/logo.webp";

export const Header = () => {
    return (
        <div>
            <header role="navigation">
                <div className="header">
                    <div>
                        <Link to="/">
                            <div className="divLogo">
                                <img className="logo"src={logo} alt="logo" />
                                <h1>Zona Gol</h1>
                            </div>
                        </Link>
                    </div>    
                    <div className="divLinks">
                        <Link to="/">Inici - </Link>
                        <Link to="/contacte">- Contacte - </Link>
                        <Link to="/imatges">- Samarretes</Link>
                    </div>
                </div>            
            </header>
        </div>
    );
};