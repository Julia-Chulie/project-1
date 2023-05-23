function PagesList() {
  const pagesData = [
    {
      title: "About",
      desc: " description About",
    },
    {
      title: "Contact",
      desc: " description About",
    },
    {
      title: "Accueil",
      desc: " description About",
    },
    {
      title: "Découvrir",
      desc: " description About",
    },
  ];

  return (
    <div className="page-list ">
      {pagesData.map((page) => {
        return (
          <div className="page-list-single box-shadow-light text-medium ">
            <h4 className="list-title"> {page.title}</h4>
            <div>
              <img className="list-icone" src="./assets/icones/editer.png" />

              <img className="list-icone" src="./assets/icones/poubelle.png" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PagesList;
