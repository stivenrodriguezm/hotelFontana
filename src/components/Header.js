import logo from '../multimedia/LogoFontana.png'
import textoLogo from '../multimedia/TextoFontana.png'

const Header = () => {

    return (
        <header className="head">
            <div className='divLogo'>
                <img src={logo} className='logo'></img>
                <img src={textoLogo} className='textoLogo' ></img>
            </div>
            <div className='divMenu'>
                <nav className="menu">
                    <ul className='listaMenu'>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Sobre nosotros</a></li>
                        <li><a href="#">Galeria</a></li>
                        <li><a href="#">Reservas</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header