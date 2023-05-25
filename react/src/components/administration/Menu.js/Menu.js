import { useRef } from "react";
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

  const menuRef = useRef();

  const toggleMenu = () => {
    menuRef.current.classList.toggle("close-menu");
  };
  return (
    <>
      <nav ref={menuRef} className="admin-menu sidebar-slide">
        <div onClick={toggleMenu} className="burger">
          {" "}
          BURGER{" "}
        </div>
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
