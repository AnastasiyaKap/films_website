import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Films from "./components/Films";
import Cartoons from "./components/Cartoons";
import Series from "./components/Series";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import MainLayout from "./layouts/MainLayout";
import SingleItem from "./components/SingleItem";
import AddNew from "./components/AddNew";
import initialFilms from "./data/films";
import initialSeries from "./data/series";
import initialCartoons from "./data/cartoons";
import Favorites from "./components/Favorites";

function App() {
  const [films, setFilms] = useState(initialFilms);
  const [cartoons, setCartoons] = useState(initialCartoons);
  const [series, setSeries] = useState(initialSeries);
  const [favorites, setFavorites] = useState([]);

  const addFavorites = (new_value) => {
    const updateArray = [...favorites, new_value];
    setFavorites([...new Set(updateArray)]);
    localStorage.setItem("favorites", JSON.stringify(updateArray));
  };

  const removeFavorites = (titleToRemove) => {
    const updateArray = favorites.filter(
      (element) => element.title !== titleToRemove
    );
    setFavorites(updateArray);
    localStorage.setItem("favorites", JSON.stringify(updateArray));
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              index
              element={
                <Home films={films} cartoons={cartoons} series={series} />
              }
            />
            <Route path="films" element={<Films films={films} />} />
            <Route path="series" element={<Series series={series} />} />
            <Route path="cartoons" element={<Cartoons cartoons={cartoons} />} />
            <Route
              path="series/:slug"
              element={<SingleItem items={series} setButton={addFavorites} />}
            />
            <Route
              path="cartoons/:slug"
              element={<SingleItem items={cartoons} setButton={addFavorites} />}
            />
            <Route
              path="films/:slug"
              element={<SingleItem items={films} setButton={addFavorites} />}
            />
            <Route
              path="favorites"
              element={
                <Favorites items={favorites} handleClick={removeFavorites} />
              }
            />

            <Route
              path="add-new"
              element={
                <AddNew
                  films={films}
                  cartoons={cartoons}
                  series={series}
                  setFilms={setFilms}
                  setCartoons={setCartoons}
                  setSeries={setSeries}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
