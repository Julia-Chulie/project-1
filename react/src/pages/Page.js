import { useEffect, useState } from "react";

import { PageContent } from "../components/page/PageContent";

function Page(slug) {
  return <PageContent slug={slug}></PageContent>;
}
export default Page;
