import PagesList from "./PagesList/PagesList";
import "./GestionPage.scss";
function GestionPages() {
  return (
    <section className="gestion-page admin-page-content">
      <header>
        <h2 className="text-high">Pages :</h2>
        <button className="btn btn-create-page btn-create text-medium">
          Nouvelle page
        </button>
      </header>
      <PagesList />
    </section>
  );
}

export default GestionPages;
