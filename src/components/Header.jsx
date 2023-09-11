import { Link, useLocation } from 'react-router-dom';
import FavoriteIcon from '../images/FavoriteIconBold.png';
import GhibliLogo from '../images/GhibliLogo.png';

import './Header.css';

export default function Header() {
  const { pathname } = useLocation();
  return (
    <header>
      <img src={ GhibliLogo } alt="Ghibli logo" className="ghibli-logo" />

      <nav>
        {
          pathname === '/favorites' ? (
            <div className="nav-div">
              <img src={ FavoriteIcon } alt="" />
              <Link to="/">Films</Link>
            </div>

          ) : (
            <div className="nav-div">
              <img src={ FavoriteIcon } alt="" />
              <Link to="/favorites">Favorites</Link>
            </div>
          )
        }

      </nav>
    </header>
  );
}
