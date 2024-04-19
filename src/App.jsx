import { useEffect, useState } from "react";
import "./stylesheets/reset.css";
import "./stylesheets/App.css";
import { Loading } from "./components/Loading.jsx";
import { Boilerplate } from "./components/Boilerplate.jsx";
import { getImgUrls } from "./components/FetchImgs.jsx";

function App() {
  const [load, setLoad] = useState(true);
  const [imgUrls, setImgUrls] = useState(null);

  useEffect(() => {
    setImgUrls(getImgUrls());
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  }, []);

  return <>{load ? <Loading /> : <Boilerplate urls={imgUrls} />}</>;
}

export default App;
