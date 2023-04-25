import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Header from "./components/Header";
import MoviesList from "./components/MoviesList";
import SingleFilm from "./components/SingleFilm.js";
import TVShowsList from "./components/TVShowsList";
import SingleTvshow from "./components/SingleTvshow.js";
import Terms from "./components/Terms";
import Error from "./components/Error";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/movies" element={<MoviesList />} />
          <Route path="/movies/:id" element={<SingleFilm />} />
          <Route path="/tvshows" element={<TVShowsList />} />
          <Route path="/tvshows/:id" element={<SingleTvshow />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}
