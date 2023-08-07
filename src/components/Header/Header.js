import './style-header.css';
import '../../App.css';

function Header() {
  return (
    <div className="header">
        <header>

            <a href='' className='logo'>
                <img src="/assets/img/logo1.jpg"></img>
            </a>

            <div className='bx bx-menu' id='menu-icon'></div>

            <ul className='navbar'>
              <li><a href='/home'>Home</a></li>
              <li><a href='/ns-fatima'>Conteúdo</a></li>
              <li><a href='#shop'>Shop</a></li>
              <li><a href='#app'>App</a></li>
              <li><a href='#sobre'>Sobre</a></li>
              <li><a href='#contato'>Contato</a></li>
            </ul>

        </header>
    </div>
  );
}

export default Header;