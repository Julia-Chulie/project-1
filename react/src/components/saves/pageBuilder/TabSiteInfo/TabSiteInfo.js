import "./TabSiteInfo.scss";
function TabSiteInfo({ pageInfo, setPageInfo }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPageInfo((prevPageInfo) => ({
      ...prevPageInfo,
      [name]: value,
    }));
  };
  return (
    <div className="builder-site-info sidebare-tab-container ">
      <form>
        <div className="form-group">
          <label htmlFor="title" className="text-medium">
            Titre :
            <input
              className="box-shadow-light"
              name="title"
              type="text"
              value={pageInfo.title}
              onChange={handleChange}
            />
            {/* <p className="err-message">
                    Au moin 8 caractères et un chiffre
                  </p> */}
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="slug" className="text-medium">
            Slug :
            <input
              className="box-shadow-light"
              name="slug"
              type="text"
              value={pageInfo.slug}
              onChange={handleChange}
            />
            {/* <p className="err-message">
                    Au moin 8 caractères et un chiffre
                  </p> */}
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="description" className="text-medium">
            Description :
            <input
              className="box-shadow-light"
              name="description"
              type="text"
              value={pageInfo.description}
              onChange={handleChange}
            />
            {/* <p className="err-message">
                    Au moin 8 caractères et un chiffre
                  </p> */}
          </label>
        </div>
      </form>
    </div>
  );
}

export default TabSiteInfo;
