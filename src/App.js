import "./App.css";
import { Header } from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WatchList } from "./components/WatchList/WatchList";
import { Watched } from "./components/Watched/Watched";
import { Search } from "./components/Search/Search";
import { MovieProvider } from "./Contexts/MovieContext";

const App = () => {
  return (
    <MovieProvider>
      <div className="app">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<WatchList />} />
            <Route path="/watched" element={<Watched />} />
            <Route path="/addmovies" element={<Search />} />
          </Routes>
        </Router>
      </div>
    </MovieProvider>
  );
};

export default App;
