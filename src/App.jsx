import { useState } from "react";
import "./App.scss";
import "./styles/partials/_globals.scss";
import Dogs from "./pages/Dogs/Dogs";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="main">
        <HomePage />
        <Dogs />
      </div>
    </>
  );
}

export default App;
