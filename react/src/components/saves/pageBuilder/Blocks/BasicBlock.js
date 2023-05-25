import React, { useEffect } from "react";
import parse from "html-react-parser";

function BasicBlock({ block, onSave }) {
  const { balise, style, name, contentEditable } = block;
  useEffect(() => {
    console.log(block);
  }, []);
  const blockStyle = Object.entries(style)
    .map(([key, value]) => `${key}: ${value};`)
    .join(" ");

  const handleContentChange = (event) => {
    const updatedContent = event.target.innerHTML;
    onSave(block.id, updatedContent);
  };

  const blockElement = `<${balise}  style="${blockStyle}" ${
    contentEditable ? "contentEditable" : ""
  } onInput="${
    contentEditable ? handleContentChange : ""
  }">${name}</${balise}>`;

  return <>{block && block.balise && parse(blockElement)}</>;
}

export default BasicBlock;
