import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./Components/MyNavbar";
import MyFooter from "./Components/MyFooter";
import { Container } from "react-bootstrap";
import MovieGallery from "./Components/MovieGallery";
import TopBar from "./Components/TopBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyHomePage from "./Components/MyHomePage";
import MyTvShow from "./Components/MyTvShow";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <div className="App bg-dark">
      <BrowserRouter>
        <MyNavbar />
        <TopBar />
        <Routes>
          <Route path="/" element={<MovieGallery className="mt-5" fontSize="fs-1" textSize="fs-5" />} />
          <Route path="/home" element={<MyHomePage />} />
          <Route path="/tv-shows" element={<MyTvShow />} />
          <Route path="/movies" element={<MovieGallery category="Transformers" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <MyFooter></MyFooter>
      </BrowserRouter>
    </div>
  );
}

export default App;
