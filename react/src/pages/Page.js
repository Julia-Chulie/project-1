import React, { useEffect, useState } from "react";
import parse from "html-react-parser";

function renderBlock(block) {
  const { balise, style, content, children } = block;
  const Tag = balise;

  return (
    <Tag style={style}>
      {parse(content)}
      {children.map((child) => renderBlock(child))}
    </Tag>
  );
}

function Page() {
  const [pageContent, setPageContent] = useState([]);

  useEffect(() => {
    const content = localStorage.getItem("page");
    setPageContent(JSON.parse(content));
  }, []);

  return <>{pageContent.map((block) => renderBlock(block))}</>;
}

export default Page;
