import "./App.css";
import { Header } from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MovieProvider } from "./Contexts/MovieContext";
import React, { Suspense } from "react";

const WatchList = React.lazy(() =>
  import("./components/WatchList/WatchList")
);
const Watched = React.lazy(() => import("./components/Watched/Watched"));
const Search = React.lazy(() => import("./components/Search/Search"));

const App = () => {
  return (
    <MovieProvider>
      <div className="app">
        <Suspense fallback={<div></div>}>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<WatchList />} />
              <Route path="/watched" element={<Watched />} />
              <Route path="/addmovies" element={<Search />} />
            </Routes>
          </Router>
        </Suspense>
      </div>
    </MovieProvider>
  );
};

export default App;
