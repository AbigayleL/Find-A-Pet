import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Dogs from "./pages/Dogs/Dogs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Dogs />
    </>
  );
}

export default App;
