import "./App.scss";
import "./styles/partials/_globals.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import Cats from "./pages/Cats/Cats";
import Dogs from "./pages/Dogs/Dogs";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route></Route>
        <div className="main">
          <HomePage />
        </div> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/cats" element={<Cats />} />
        <Route path="/dogs" element={<Dogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
