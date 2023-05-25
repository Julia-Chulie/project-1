import { DELETE_PAGE_BY_ID } from "../../../../const/Api";
import useFetch from "../../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
function PagesList() {
  const pagesData = [
    {
      id: 7,
      title: "About",
      desc: " description About",
    },
    {
      id: 3,
      title: "Contact",
      desc: " description About",
    },
    {
      id: 4,
      title: "Accueil",
      desc: " description About",
    },
    {
      id: 13,
      title: "Découvrir",
      desc: " description About",
    },
  ];
  const { sendRequest } = useFetch();
  const navigate = useNavigate();

  const deletePage = async (elementId) => {
    try {
      const response = await sendRequest(DELETE_PAGE_BY_ID, {
        method: "POST",
        body: JSON.stringify({ id: elementId }),
      });
      console.log("Réponse de la requête :", response);
      //Retirer element de la liste
    } catch (error) {
      console.log("Erreur lors de la requête :", error);
    }
  };

  const editPage = async (elementId) => {
    navigate(`/admin/pageBuilder?id=${elementId}`);
  };

  const createPage = () => {
    //createPage ->
    //redirect pageBuilder/pageId
  };

  return (
    <div className="page-list ">
      {pagesData.map((page, idx) => {
        return (
          <div
            className="page-list-single box-shadow-large text-medium "
            key={idx}
          >
            <h4 className="list-title" onClick={() => editPage(page.id)}>
              {page.title}
            </h4>
            <div>
              <img
                onClick={() => editPage(page.id)}
                className="list-icone"
                src="./assets/icones/editer.png"
                alt="editer"
              />

              <img
                onClick={() => deletePage(page.id)}
                className="list-icone"
                src="./assets/icones/poubelle.png"
                alt="supprimer"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PagesList;
