import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { UPDATE_PAGE_URL } from "../../../const/Api";
import "./BuilderToolbar.scss";
function BuilderToolbar({ pageBlocks }) {
  const navigate = useNavigate();

  const { sendRequest } = useFetch();
  const handlePageSave = async () => {
    localStorage.setItem("page", JSON.stringify([...pageBlocks]));
    // try {
    //    const response = await sendRequest(UPDATE_PAGE_URL, {
    //      method: "POST",
    //      body: JSON.stringify({ pageBlocks }),
    //    });
    //    console.log("Réponse de la requête :", response);
    //  } catch (error) {
    //    console.log("Erreur lors de la requête :", error);
    //  }
  };

  return (
    <div className="builder-toolbar box-shadow-medium">
      <button onClick={handlePageSave}>
        <img
          className="builder-toolbar-icone"
          src="../assets/icones/save.png"
          alt="sauvegarder"
        />
      </button>
    </div>
  );
}

export default BuilderToolbar;
