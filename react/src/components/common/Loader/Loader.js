import { useContext } from "react";
import "./Loader.scss";
import LoaderContext from "../../context/LoaderProvider";
function Loader() {
  const { loading } = useContext(LoaderContext);

  if (!loading) {
    return null; // Ne rien afficher si loading est false
  }
  return (
    <div className="loader-container">
      <span className="loader"></span>
    </div>
  );
}
export default Loader;
