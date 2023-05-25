import { BLOCKS } from "../../../const/Blocks";
import BasicBlock from "../Blocks/BasicBlock";
import ParentBlock from "../Blocks/ParentBlock";
import "./BuilderPreview.scss";

function BuilderPreview({ setPageBlocks, pageBlocks }) {
  const handleRemoveBlock = (idx) => {
    const newBlockSet = [...pageBlocks];
    newBlockSet.splice(idx, 1);
    setPageBlocks(newBlockSet);
  };

  const handleRemoveChildBlock = (parentBlockId, childBlockIdx) => {
    const parentBlock = pageBlocks.find((block) => block.id === parentBlockId);
    console.log(parentBlock);
    if (parentBlock && parentBlock.children) {
      delete parentBlock.children[childBlockIdx];
      setPageBlocks([...pageBlocks]);
    }
  };

  const handleMoveUp = (idx) => {
    if (idx > 0) {
      const newBlockSet = [...pageBlocks];
      const temp = newBlockSet[idx];
      newBlockSet[idx] = newBlockSet[idx - 1];
      newBlockSet[idx - 1] = temp;
      setPageBlocks(newBlockSet);
    }
  };

  const handleMoveDown = (idx) => {
    if (idx < pageBlocks.length - 1) {
      const newBlockSet = [...pageBlocks];
      const temp = newBlockSet[idx];
      newBlockSet[idx] = newBlockSet[idx + 1];
      newBlockSet[idx + 1] = temp;
      setPageBlocks(newBlockSet);
    }
  };

  const handleMoveChildUp = (parentBlockId, childIdx) => {
    const parentBlock = pageBlocks.find((block) => block.id === parentBlockId);
    if (parentBlock && parentBlock.children && childIdx > 0) {
      const newChildSet = [...parentBlock.children];
      const temp = newChildSet[childIdx];
      newChildSet[childIdx] = newChildSet[childIdx - 1];
      newChildSet[childIdx - 1] = temp;
      parentBlock.children = newChildSet;
      setPageBlocks([...pageBlocks]);
    }
  };
  const handleMoveChildDown = (parentBlockId, childIdx) => {
    const parentBlock = pageBlocks.find((block) => block.id === parentBlockId);
    if (
      parentBlock &&
      parentBlock.children &&
      childIdx < parentBlock.children.length - 1
    ) {
      const newChildSet = [...parentBlock.children];
      const temp = newChildSet[childIdx];
      newChildSet[childIdx] = newChildSet[childIdx + 1];
      newChildSet[childIdx + 1] = temp;
      parentBlock.children = newChildSet;
      setPageBlocks([...pageBlocks]);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleMainDrop = (event) => {
    const blockId = event.dataTransfer.getData("blockId");
    const parentBlockId = event.target.getAttribute("data-parent");
    if (blockId && parentBlockId) {
      event.stopPropagation();
      handleChildDrop(parentBlockId, blockId);
    } else {
      handleDrop(event);
    }
  };
  const handleDrop = (event) => {
    event.preventDefault();
    const blockId = event.dataTransfer.getData("blockId");
    const selectedBlock = BLOCKS.find(
      (block) => block.id.toString() === blockId
    );
    if (selectedBlock) {
      setPageBlocks([...pageBlocks, selectedBlock]);
    }
  };

  const handleChildDrop = (parentBlockId, blockId) => {
    const parentBlock = pageBlocks.find((block) => block.id === parentBlockId);
    const childBlock = BLOCKS.find((block) => block.id === blockId);
    if (parentBlock && parentBlock.isAbleToHaveChildren && childBlock) {
      parentBlock.children.push(childBlock);
      setPageBlocks([...pageBlocks]);
    }
  };

  const handleUpdateBlockContent = (blockId, newContent) => {
    const updatedBlocks = pageBlocks.map((block) => {
      if (block.id === blockId) {
        return {
          ...block,
          content: newContent,
        };
      }
      return block;
    });
    setPageBlocks(updatedBlocks);
  };
  return (
    <div
      className="builder-preview box-shadow-medium"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {pageBlocks.map((block, idx) => (
        <div
          className={`block-item ${
            !block.isAbleToHaveChildren ? "builder-block" : ""
          }`}
          key={idx}
        >
          {/* Créer component TOOLBAR */}
          <div className="block-toolbar ">
            <div
              className="block-tool delete-single-block"
              onClick={() => handleRemoveBlock(idx)}
            >
              <img src="../assets/icones/cross.png" alt="Supprimer" />
            </div>
            <div
              className="move-up-single-block block-tool"
              onClick={() => handleMoveUp(idx)}
            >
              <img src="../assets/icones/chevron.png" alt="Remonter" />
            </div>
            <div
              className="move-down-single-block block-tool"
              onClick={() => handleMoveDown(idx)}
            >
              <img src="../assets/icones/chevron.png" alt="Descendre" />
            </div>
          </div>
          {/* Créer component TOOLBAR */}
          {!block.isAbleToHaveChildren ? (
            <BasicBlock
              block={block}
              onSave={(newContent) =>
                handleUpdateBlockContent(block.id, newContent)
              }
            />
          ) : (
            <>
              <ParentBlock
                handleRemoveBlock={handleRemoveBlock}
                handleUpdateBlockContent={handleUpdateBlockContent}
                block={block}
                handleMoveChildUp={handleMoveChildUp}
                handleMoveChildDown={handleMoveChildDown}
                handleMainDrop={handleMainDrop}
                handleChildDrop={handleChildDrop}
                handleRemoveChildBlock={handleRemoveChildBlock}
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default BuilderPreview;
