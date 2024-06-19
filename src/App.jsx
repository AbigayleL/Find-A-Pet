import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import "./styles/partials/_globals.scss";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" index element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
