import React, { useState, useEffect, useRef } from "react";
import parse from "html-react-parser";

function BasicBlock({ block, handleUpdateBlockContent, parentIdx, blockIdx }) {
  const { balise, style, name, content, contentEditable } = block;
  const textareaEl = useRef(null);
  const [html, setHtml] = useState(content);

  useEffect(() => {
    if (content) {
      textareaEl.current.innerHTML = content;
    }
  }, [content]);

  const handleContentChange = (event) => {
    const updatedContent = event.target.innerHTML;
    setHtml(updatedContent);
    handleUpdateBlockContent(parentIdx, blockIdx, updatedContent);
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(textareaEl.current);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);
  };

  let blockElement = "";
  let blockStyle = Object.entries(style).map(
    ([key, value]) => `${key}: ${value};`
  );

  if (contentEditable) {
    blockElement = React.createElement(
      `${balise}`,
      {
        style: style,
        contentEditable: contentEditable,
        onInput: contentEditable ? handleContentChange : undefined,
        ref: textareaEl,
      },
      parse(content)
    );
  } else {
    blockElement = parse(
      `<${balise} style="${blockStyle.join(" ")}">${content}</${balise}>`
    );
  }

  return <>{block && block.balise && blockElement}</>;
}

export default BasicBlock;
