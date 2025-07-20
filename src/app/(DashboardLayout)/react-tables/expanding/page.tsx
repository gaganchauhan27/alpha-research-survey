import * as React from "react";

import Breadcrumb from "@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb";
import PageContainer from "@/components/container/PageContainer";
import TableExpanding from "@/components/react-table/TableExpanding";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Basic React Table",
  },
];

const ExpandingTable = () => {
  return (
    <PageContainer
      title="Expanding Table"
      description="this is Expanding Table"
    >
      {/* breadcrumb */}
      <Breadcrumb title="Expanding Table" items={BCrumb} />
      {/* end breadcrumb */}
      <TableExpanding />
    </PageContainer>
  );
};
export default ExpandingTable;
