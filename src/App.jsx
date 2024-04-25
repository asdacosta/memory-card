import { useEffect, useState } from "react";
import "./stylesheets/reset.css";
import "./stylesheets/App.css";
import { Loading } from "./components/Loading.jsx";
import { Boilerplate } from "./components/Boilerplate.jsx";

function App() {
  const [load, setLoad] = useState(true);
  const [isVisible, setIsVisible] = useState("hidden");

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
      setIsVisible("visible");
    }, 2000);
  }, []);

  return (
    <>
      {load ? <Loading /> : null}
      <Boilerplate visible={isVisible} />
    </>
  );
}

export default App;
