import FilmCards from '../components/FilmCards';
import Header from '../components/Header';

import './Home.css';

export default function Home() {
  return (
    <div className="Home">
      <Header />
      <FilmCards />
    </div>
  );
}
