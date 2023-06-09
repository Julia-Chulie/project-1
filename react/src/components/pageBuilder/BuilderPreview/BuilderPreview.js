import React from "react";
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

  const handleRemoveChildBlock = (parentIdx, childBlockIdx) => {
    const parentBlock = pageBlocks[parentIdx];
    if (parentBlock && parentBlock.children) {
      parentBlock.children.splice(childBlockIdx, 1);
      setPageBlocks([...pageBlocks]);
    }
  };

  const handleMoveUp = (idx) => {
    if (idx > 0) {
      setPageBlocks((prevBlocks) => {
        const newBlocks = [...prevBlocks];
        const temp = newBlocks[idx];
        newBlocks[idx] = newBlocks[idx - 1];
        newBlocks[idx - 1] = temp;
        return newBlocks;
      });
    }
  };
  const handleMoveDown = (idx) => {
    if (idx < pageBlocks.length - 1) {
      setPageBlocks((prevBlocks) => {
        const newBlocks = [...prevBlocks];
        const temp = newBlocks[idx];
        newBlocks[idx] = newBlocks[idx + 1];
        newBlocks[idx + 1] = temp;
        return newBlocks;
      });
    }
  };
  const handleMoveChildUp = (parentIdx, childIdx) => {
    const parentBlock = pageBlocks[parentIdx];
    if (parentBlock && parentBlock.children && childIdx > 0) {
      const newChildSet = [...parentBlock.children];
      const temp = newChildSet[childIdx];
      newChildSet[childIdx] = newChildSet[childIdx - 1];
      newChildSet[childIdx - 1] = temp;
      parentBlock.children = newChildSet;
      setPageBlocks([...pageBlocks]);
    }
  };
  const handleMoveChildDown = (parentIdx, childIdx) => {
    const parentBlock = pageBlocks[parentIdx];
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
      const parentBlockId = event.target.getAttribute("data-parent");
      if (parentBlockId) {
        const parentIdx = parseInt(parentBlockId);
        const clonedBlock = JSON.parse(JSON.stringify(selectedBlock)); // Cloner le bloc
        handleChildDrop(parentIdx, clonedBlock);
      } else {
        const clonedBlock = JSON.parse(JSON.stringify(selectedBlock)); // Cloner le bloc
        setPageBlocks([...pageBlocks, clonedBlock]);
      }
    }
  };

  const handleChildDrop = (parentIdx, blockId) => {
    const updatedPageBlocks = JSON.parse(JSON.stringify(pageBlocks));
    const parentBlock = updatedPageBlocks[parentIdx];
    const childBlock = BLOCKS.find((block) => block.id === blockId);
    if (parentBlock && parentBlock.isAbleToHaveChildren && childBlock) {
      parentBlock.children.push(childBlock);
      setPageBlocks(updatedPageBlocks);
    }
  };

  const handleUpdateBlockContent = (parentIdx, blockIdx, newContent) => {
    const updatedBlocks = [...pageBlocks];

    if (parentIdx === undefined) {
      updatedBlocks[blockIdx].content = newContent;
    } else {
      const parentBlock = updatedBlocks[parentIdx];
      parentBlock.children[blockIdx].content = newContent;
    }

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
          {!block.isAbleToHaveChildren ? (
            <BasicBlock
              blockIdx={idx}
              block={block}
              handleUpdateBlockContent={handleUpdateBlockContent}
            />
          ) : (
            <ParentBlock
              parentIdx={idx}
              handleRemoveBlock={handleRemoveBlock}
              handleUpdateBlockContent={handleUpdateBlockContent}
              block={block}
              handleMoveChildUp={handleMoveChildUp}
              handleMoveChildDown={handleMoveChildDown}
              handleMainDrop={handleMainDrop}
              handleChildDrop={handleChildDrop}
              handleRemoveChildBlock={handleRemoveChildBlock}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default BuilderPreview;
