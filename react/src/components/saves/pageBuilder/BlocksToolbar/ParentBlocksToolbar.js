function BlocksToolbar({ deleteElement }) {
  return (
    <div className="delete-single-block" onClick={deleteElement}>
      <img src="../assets/icones/cross.png" alt="supprimer" />
    </div>
  );
}
export default BlocksToolbar;
