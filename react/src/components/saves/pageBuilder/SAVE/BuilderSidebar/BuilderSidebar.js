import { useState } from "react";
import "./BuilderSidebar.scss";
import TabSiteInfo from "../TabSiteInfo/TabSiteInfo";
import { BLOCKS } from "../../../const/Blocks";

function BuilderSidebar({ handleDragStart, setPageInfo, pageInfo }) {
  const [switchTabSidebar, setSwitchTabSidebar] = useState(false);

  return (
    <>
      <aside className="page-builder-sidebar sidebar-slide ">
        <header className="sidebare-tab-header">
          <button className="btn btn-back">
            <a href="/admin">
              <img src="../assets/icones/arrow.png" alt="retour" />
            </a>
          </button>
          <h1>{pageInfo.title} :</h1>
        </header>
        <div className="page-builder-switch-tab">
          <div
            className={`${!switchTabSidebar ? "current-tab" : ""}`}
            onClick={(e) => setSwitchTabSidebar(false)}
          >
            <p>Liste des blocs</p>
          </div>
          <div
            className={`${switchTabSidebar ? "current-tab" : ""}`}
            onClick={(e) => setSwitchTabSidebar(true)}
          >
            <p>Informations du site</p>
          </div>
        </div>
        {switchTabSidebar ? (
          <TabSiteInfo pageInfo={pageInfo} setPageInfo={setPageInfo} />
        ) : (
          <div className="builder-bloc-list sidebare-tab-container">
            {BLOCKS.map((bloc) => {
              return (
                <div
                  className="builder-bloc box-shadow-light"
                  key={bloc.id}
                  draggable={true}
                  onDragStart={(event) => {
                    handleDragStart(event, bloc.id);
                  }}
                >
                  <p>{bloc.name}</p>
                </div>
              );
            })}
          </div>
        )}
      </aside>
    </>
  );
}

export default BuilderSidebar;
