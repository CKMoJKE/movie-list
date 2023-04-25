import logo from "../img/logo/logo.png";
import "./Header.css";
import MoviesList from "./MoviesList";
import TVShowsList from "./TVShowsList";
import Footer from "./Footer";
import HomeBtn from "./HomeBtn";

export default function Header() {
  return (
    <div className="">
      <div className="header relative mx-auto max-w-7xl bg-no-repeat flex text-white">
        <div className="max-w-3xl flex flex-col mx-auto text-center items-center justify-center gap-5">
          <img className="m-12 w-1/4" src={logo} alt="Logo" />
          <div className="flex flex-col">
            <h1 className="m-4 text-3xl font-bold">
              Найкращий спосіб контролювати перегляди
            </h1>
            <p className="m-4 text-lg">
              My List - це сайт, який дає вам можливість створити власну
              колекцію улюблених фільмів, серіалів, отримувати рекоментації та
              сповіщення.
            </p>
          </div>
          <div className="my-4 flex gap-5">
            <input className="" label="Пошук" />
            <button className="">Пошук</button>
          </div>
        </div>
      </div>
      <div>
        <MoviesList />
        <TVShowsList />
      </div>
      <HomeBtn />
      <Footer />
    </div>
  );
}
