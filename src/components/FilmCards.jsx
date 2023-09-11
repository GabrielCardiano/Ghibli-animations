import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FilmsContext } from '../context/FilmsProvider';
import FavoriteIcon from '../images/FavoriteIconBold.png';

import './FilmCards.css';

function FilmCards() {
  const { films, isFetching, toggleFavorite } = useContext(FilmsContext);

  return (

    <main className="card-container">

      {isFetching && <h2>Carregando...</h2>}

      {
        films.map((film) => (
          <section key={ film.id } className="card">
            <img src={ film.image } alt={ film.title } />
            <div className="description">
              <h2>{film.title}</h2>
              <p>{film.description}</p>
              <button
                type="button"
                onClick={ () => toggleFavorite(film) }
                className="buttonFavorite"
              >
                <img src={ FavoriteIcon } alt="" className="favoriteIcon" />
              </button>
            </div>
          </section>
        ))
      }
    </main>
  );
}

FilmCards.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  // isFavorite: PropTypes.bool.isRequired,
};

export default FilmCards;
