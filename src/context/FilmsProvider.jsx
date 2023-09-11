// implemente a estrutura do context aqui.
import PropTypes from 'prop-types';

import { createContext, useCallback, useEffect, useMemo, useState } from 'react';

export const FilmsContext = createContext();

const URL_API = 'https://api-trybe-frontend.vercel.app/api/ghibli-animations';

function FilmsProvider({ children }) {
  const [films, setFilms] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [favorites, setFavorites] = useState([]);
  // console.log(isFetching);

  const fetchAPI = async (url) => {
    try {
      setIsFetching(true);

      const response = await fetch(url);
      const data = await response.json();
      setFilms(data);
    } catch (error) {
      throw new Error('API não encontrada');
    } finally {
      setIsFetching(false);
    }
  };

  const toggleFavorite = useCallback((addedFilm) => {
    const isAlreadyFavorite = favorites.some((favorite) => favorite.id === addedFilm.id);

    if (isAlreadyFavorite) {
      const removeFavorite = favorites.filter((favorite) => favorite.id !== addedFilm.id);
      setFavorites(removeFavorite);
    } else {
      setFavorites([...favorites, addedFilm]);
    }
  }, [favorites]);

  useEffect(() => {
    fetchAPI(URL_API);
  }, []);

  const values = useMemo(() => ({
    films, setFilms, isFetching, FilmsContext, favorites, setFavorites, toggleFavorite,
  }), [films, setFilms, isFetching, favorites, setFavorites, toggleFavorite]);

  return (
    <FilmsContext.Provider value={ values }>
      {children}
    </FilmsContext.Provider>
  );
}

FilmsProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default FilmsProvider;
