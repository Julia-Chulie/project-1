import React, { useEffect, useState } from "react";
import parse from "html-react-parser";

function EditableBlock({ block, onSave }) {
  const [editableContent, setEditableContent] = useState("");
  const [htmlElement, setHtmlElement] = useState("");

  useEffect(() => {
    if (block) {
      setHtmlElement(block.balise);
      setEditableContent(block.content);
    }
  }, [block]);

  const handleContentChange = (event) => {
    setEditableContent(event.target.innerHTML);
  };

  const handleContentBlur = () => {
    onSave(editableContent); // Appeler la fonction onSave avec le contenu modifié
  };
}

export default EditableBlock;
