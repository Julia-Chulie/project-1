import React, { useEffect, useState } from "react";
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
  const [currentTab, setCurrentTab] = useState(<GestionPages />);
  useEffect(() => {
    console.log(currentTab);
  }, [currentTab]);
  return (
    <div className="page-admin">
      <Menu tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <Content>
        {currentTab && React.createElement(currentTab.type, currentTab.props)}
      </Content>
    </div>
  );
}

export default Administration;
