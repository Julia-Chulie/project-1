import { useEffect, useState } from "react";
import getPage from "";

export const PageContent = ({ slug }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    setContent(getPage(slug));
  }, []);

  return <>{content & content}</>;
};
