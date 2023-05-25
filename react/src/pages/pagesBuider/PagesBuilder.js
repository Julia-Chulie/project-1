import { useEffect, useState } from "react";
import BuilderPreview from "../../components/pageBuilder/BuilderPreview/BuilderPreview";
import BuilderSidebar from "../../components/pageBuilder/BuilderSidebar/BuilderSidebar";
import "./PagesBuilder.scss";
import TabSiteInfo from "../../components/pageBuilder/TabSiteInfo/TabSiteInfo";
import { BLOCKS } from "../../const/Blocks";
import { AdminProvider } from "../../components/context/AdminProvider";
import BuilderToolbar from "../../components/pageBuilder/BuilderToolbar/BuilderToolbar";
const pageData = {
  title: "Contact",
  slug: "/contact",
  description: "description de ma page contact",
};
function PagesBuilder() {
  const [pageBlocks, setPageBlocks] = useState([]);
  const [pageInfo, setPageInfo] = useState(pageData);

  const handleDragStart = (event, blockId) => {
    event.dataTransfer.setData("blockId", blockId);
  };

  useEffect(() => {
    console.log(pageBlocks);
  }, [pageBlocks]);

  return (
    <div className="page-builder page">
      <BuilderToolbar pageBlocks={pageBlocks} />
      <BuilderSidebar
        pageInfo={pageInfo}
        setPageInfo={setPageInfo}
        handleDragStart={handleDragStart}
      />

      <BuilderPreview pageBlocks={pageBlocks} setPageBlocks={setPageBlocks} />
    </div>
  );
}

export default PagesBuilder;
