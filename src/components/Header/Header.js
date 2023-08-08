import './style-header.css';
import '../../App.css';
import { useEffect, useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="header">
        <header>

            <a href='' className='logo'>
                <img src="/assets/img/logo1.jpg"></img>
            </a>

            <div className={`bx bx-menu ${isMenuOpen ? 'bx-x' : ''}`} id="menu-icon" onClick={toggleMenu}></div>

            <ul className={`navbar ${isMenuOpen ? 'active' : ''}`}>
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