import { Link } from "react-router-dom";
import TMDB_logo from "../img/logo/tmdb.svg";

const viewTMDB = () => {
  window.open(`https://www.themoviedb.org/`);
};

const Footer = () => {
  return (
    <div className="max-w-full bg-stone-800">
      <div className="mx-auto items-center flex justify-between max-w-7xl">
        <div>
          <button onClick={viewTMDB}>
            <img src={TMDB_logo} alt="logo" className="w-48" />
          </button>
        </div>
        <div className="text-stone-200 py-3 flex flex-col">
          <h1 className="text-lg font-bold">Угоди</h1>
          <div className="flex gap-5">
            <Link to="/terms" className="text-sm">
              Умови користування
            </Link>
            <Link to="/" className="text-sm">
              Політика конфіденційності
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
