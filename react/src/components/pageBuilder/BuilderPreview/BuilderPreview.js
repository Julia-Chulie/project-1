import { BLOCKS } from "../../../const/Blocks";
import "./BuilderPreview.scss";

function BuilderPreview({ setPageBlocks, pageBlocks }) {
  //Logique de grille
  //Retirer un element du tableau pageBlocks

  const handleRemoveBlock = (idx) => {
    const newBlockSet = [...pageBlocks];
    newBlockSet.splice(idx, 1);
    setPageBlocks(newBlockSet);
  };

  const handleRemoveChildBlock = (parentBlockId, childBlockId) => {
    const parentBlock = pageBlocks.find((block) => block.id === parentBlockId);
    if (parentBlock && parentBlock.children) {
      parentBlock.children = parentBlock.children.filter(
        (child) => child.id !== childBlockId
      );
      setPageBlocks([...pageBlocks]);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
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
      if (!parentBlock.children) {
        parentBlock.children = []; // Initialize children as an empty array if it's undefined
      }
      parentBlock.children.push(childBlock);
      setPageBlocks([...pageBlocks]);
    }
  };

  const handleMainDrop = (event) => {
    console.log(event);
    const blockId = event.dataTransfer.getData("blockId");
    const parentBlockId = event.target.getAttribute("data-parent");
    console.log(blockId, parentBlockId);
    if (blockId && parentBlockId) {
      event.stopPropagation();
      handleChildDrop(parentBlockId, blockId);
    } else {
      handleDrop(event);
    }
  };

  return (
    <div
      className="builder-preview"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {pageBlocks.map((block, idx) => (
        <div className="block-item" key={idx}>
          <div
            className="delete-single-block"
            onClick={() => handleRemoveBlock(idx)}
          >
            Remove
          </div>
          {!block.isAbleToHaveChildren ? (
            <div dangerouslySetInnerHTML={{ __html: block.content }}></div>
          ) : (
            <>
              <div style={block.style}>
                {block.children && block.children.length > 0 && (
                  <>
                    {block.children.map((child, idx) => (
                      <div>
                        <div
                          style={{ position: "relative" }}
                          key={idx}
                          dangerouslySetInnerHTML={{ __html: child.content }}
                        ></div>

                        <div
                          className="delete-single-block"
                          onClick={() =>
                            handleRemoveChildBlock(block.id, child.id)
                          }
                        >
                          Remove
                        </div>
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
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default BuilderPreview;
