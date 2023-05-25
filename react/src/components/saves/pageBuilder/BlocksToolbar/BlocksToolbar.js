function BlocksToolbar({ handleRemoveBlock, idx }) {
  return (
    <div className="delete-single-block" onClick={handleRemoveBlock(idx)}>
      <img src="../assets/icones/cross.png" alt="supprimer" />
    </div>
  );
}
export default BlocksToolbar;
