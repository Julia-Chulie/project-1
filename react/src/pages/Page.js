import { useEffect, useState } from "react";
import getPage from "";
import { PageContent } from "../components/page/PageContent";

export const Page = ({ slug }) => {
  return <PageContent slug={slug}></PageContent>;
};
