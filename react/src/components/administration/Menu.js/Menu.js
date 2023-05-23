import "./Menu.scss";

function Menu({
  tabs,
  currentTab,
  setCurrentTab,
  currentTabName,
  setCurrentTabName,
}) {
  const handleTabClick = (tab) => {
    setCurrentTab(tab.component);
    setCurrentTabName(tab.name);
  };

  return (
    <>
      <nav className="admin-menu">
        <ul>
          {tabs.map((tab) => {
            return (
              <li
                key={tab.name}
                className={currentTabName === tab.name ? "current" : " "}
                onClick={(e) => handleTabClick(tab)}
              >
                {tab.name}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Menu;
