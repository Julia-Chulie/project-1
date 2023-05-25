import React from "react";
import BasicBlock from "./BasicBlock";

function ParentBlock({
  block,
  handleRemoveChildBlock,
  handleMainDrop,
  handleMoveChildUp,
  handleMoveChildDown,
  handleUpdateBlockContent,
  handleChildDrop,
  parentIdx,
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
                  onClick={() => handleRemoveChildBlock(parentIdx, idx)}
                >
                  <img src="../assets/icones/cross.png" alt="Supprimer" />
                </div>

                <div
                  className="move-up-single-block block-tool"
                  onClick={() => handleMoveChildUp(parentIdx, idx)}
                >
                  <img src="../assets/icones/chevron.png" alt="Remonter" />
                </div>
                <div
                  className="move-down-single-block block-tool"
                  onClick={() => handleMoveChildDown(parentIdx, idx)}
                >
                  <img src="../assets/icones/chevron.png" alt="Descendre" />
                </div>
              </div>
              {/* Créer component TOOLBAR */}

              {child && !child.isAbleToHaveChildren ? (
                <>
                  <BasicBlock
                    parentIdx={parentIdx}
                    blockIdx={idx}
                    block={child}
                    handleUpdateBlockContent={handleUpdateBlockContent}
                  />
                </>
              ) : (
                <>
                  <ParentBlock
                    block={child}
                    handleMainDrop={handleMainDrop}
                    handleChildDrop={handleChildDrop}
                    handleRemoveChildBlock={handleRemoveChildBlock}
                  />
                </>
              )}
            </div>
          ))}
        </>
      )}
      <div
        className="child-drop-area"
        data-parent={parentIdx}
        onDrop={(event) => handleMainDrop(event)}
        onDragOver={(event) => event.preventDefault()}
      >
        <p>Glisser un élément</p>
      </div>
    </div>
  );
}

export default ParentBlock;
