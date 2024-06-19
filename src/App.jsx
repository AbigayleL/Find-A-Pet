import { useState } from "react";
import "./App.scss";
import Dogs from "./pages/Dogs/Dogs";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HomePage />
      <Dogs />
    </>
  );
}

export default App;
