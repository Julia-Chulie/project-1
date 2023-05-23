import "./Menu.scss";

function Menu({ tabs, currentTab, setCurrentTab }) {
  const handleTabClick = (tabComponent) => {
    setCurrentTab(tabComponent);
  };

  return (
    <>
      <nav className="admin-menu">
        <ul>
          {tabs.map((tab) => {
            return (
              <li
                key={tab.name}
                className={currentTab === tab.name ? "current" : " "}
                onClick={() => handleTabClick(tab.component)}
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
