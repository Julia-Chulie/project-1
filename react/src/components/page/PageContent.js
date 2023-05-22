import { useEffect, useState } from "react";
import getPage from "";

function PageContent({ slug }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    setContent(getPage(slug));
  }, []);

  return <>{content & content}</>;
}

export default PageContent;
