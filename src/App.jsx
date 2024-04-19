import { useEffect, useState } from "react";
import "./stylesheets/reset.css";
import "./stylesheets/App.css";
import { Loading } from "./components/Loading.jsx";
import { Boilerplate } from "./components/Boilerplate.jsx";

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  }, []);

  return <>{load ? <Loading /> : <Boilerplate />}</>;
}

export default App;
