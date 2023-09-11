import { useContext } from 'react';
import { FilmsContext } from '../context/FilmsProvider';
import Header from '../components/Header';
import FavoriteIcon from '../images/FavoriteIconBold.png';

import './Favorites.css';
import '../components/FilmCards.css';

export default function Favorites() {
  const { favorites, setFavorites } = useContext(FilmsContext);

  const removeFavorite = (film) => {
    const deleteFav = favorites.filter((fav) => fav.id !== film);

    setFavorites(deleteFav);
  };

  return (
    <div className="Favorites">
      <Header />

      <main className="card-container">

        {
          favorites.map((favorite, index) => (
            <section key={ index } className="card">
              <img src={ favorite.image } alt={ favorite.title } />

              <div className="description">
                <h2>{favorite.title}</h2>
                <p>{favorite.description}</p>
                <button
                  type="button"
                  onClick={ () => removeFavorite(favorite.id) }
                  className="buttonFavorite"
                >
                  <img src={ FavoriteIcon } alt="" className="favoriteIcon" />
                </button>
              </div>
            </section>
          ))
        }
      </main>
    </div>
  );
}
