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
      {pagesData.map((page, idx) => {
        return (
          <div
            className="page-list-single box-shadow-large text-medium "
            key={idx}
          >
            <h4 className="list-title"> {page.title}</h4>
            <div>
              <img
                className="list-icone"
                src="./assets/icones/editer.png"
                alt="editer"
              />

              <img
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
