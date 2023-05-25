import BasicBlock from "./BasicBlock";

function ParentBlock({
  block,
  handleRemoveChildBlock,
  handleMainDrop,
  handleMoveChildUp,
  handleMoveChildDown,
  handleRemoveBlock,
  handleUpdateBlockContent,
  handleChildDrop,
}) {
  return (
    <div style={block.style}>
      {block.children && block.children.length > 0 && (
        <>
          {block.children.map((child, idx) => (
            <div className="block-item builder-block" key={idx}>
              {/* Créer component TOOLBAR */}
              <div className="block-toolbar">
                <div
                  className="block-tool delete-single-block"
                  onClick={() => handleRemoveChildBlock(block.id, idx)}
                >
                  <img src="../assets/icones/cross.png" alt="Supprimer" />
                </div>

                <div
                  className="move-up-single-block block-tool"
                  onClick={() => handleMoveChildUp(block.id, idx)}
                >
                  <img src="../assets/icones/chevron.png" alt="Remonter" />
                </div>
                <div
                  className="move-down-single-block block-tool"
                  onClick={() => handleMoveChildDown(block.id, idx)}
                >
                  <img src="../assets/icones/chevron.png" alt="Descendre" />
                </div>
              </div>
              {/* Créer component TOOLBAR */}

              {child && !child.isAbleToHaveChildren ? (
                <>
                  <BasicBlock block={child} />
                </>
              ) : (
                <>
                  {/* <ParentBlock
                    block={child}
                    handleMainDrop={handleMainDrop}
                    handleChildDrop={handleChildDrop}
                    handleRemoveChildBlock={handleRemoveChildBlock}
                  /> */}
                </>
              )}
            </div>
          ))}
        </>
      )}
      <div
        className="child-drop-area"
        data-parent={block.id}
        onDrop={(event) => handleMainDrop(event)}
        onDragOver={(event) => event.preventDefault()}
      >
        <p>Glisser un élement</p>
      </div>
    </div>
  );
}

export default ParentBlock;
