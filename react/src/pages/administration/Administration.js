import React, { useContext, useEffect, useState } from "react";
import Content from "../../components/administration/Content/Content";
import GestionPages from "../../components/administration/GestionPages/GestionPages";
import Menu from "../../components/administration/Menu.js/Menu";
import "./Administration.scss";
import GestionArticles from "../../components/administration/GestionArticles/GestionArticles";
import GestionBlocs from "../../components/administration/GestionBloc/GestionBlocs";
import GestionMedias from "../../components/administration/GestionMedias/GestionMedias";
import GestionCategories from "../../components/administration/GestionCategories/GestionCategories";
import GestionUsers from "../../components/administration/GestionUsers/GestionUsers";
import GestionSite from "../../components/administration/GestionSite/GestionSite";
import AdminContext from "../../components/context/AdminProvider";
import useFetch from "../../hooks/useFetch";
import { GET_ALL_PAGES, SITE_INFO_BY_USER } from "../../const/Api";

function Administration() {
  const tabs = [
    { name: "Pages", component: GestionPages },
    { name: "Articles", component: GestionArticles },
    { name: "Blocs", component: GestionBlocs },
    { name: "Medias", component: GestionMedias },
    { name: "Categories", component: GestionCategories },
    { name: "Users", component: GestionUsers },
    { name: "Site", component: GestionSite },
  ];
  const [currentTab, setCurrentTab] = useState(GestionPages);
  const [currentTabName, setCurrentTabName] = useState("Pages");

  const { setPages, setSiteInfo, setUser } = useContext(AdminContext);

  useEffect(() => {
    GetSiteInfosNPages();
  }, []);

  const { sendRequest } = useFetch();
  const GetSiteInfosNPages = async () => {
    try {
      const response = await sendRequest(SITE_INFO_BY_USER, {
        method: "POST",
        body: JSON.stringify({ id: 1 }),
      });
      setSiteInfo(response);
      try {
        const response = await sendRequest(GET_ALL_PAGES, {
          method: "POST",
          body: JSON.stringify({ id: 1 }),
        });
        setPages(response);
      } catch (error) {
        console.log("Erreur lors de la requête :", error);
      }
    } catch (error) {
      console.log("Erreur lors de la requête :", error);
    }
  };

  return (
    <div className="page-admin page">
      <Menu
        tabs={tabs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        currentTabName={currentTabName}
        setCurrentTabName={setCurrentTabName}
      />
      <Content>
        {currentTab && React.createElement(currentTab.type, currentTab.props)}
      </Content>
    </div>
  );
}

export default Administration;
