"use client";

import Breadcrumb from "@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb";
import PageContainer from "@/components/container/PageContainer";
import TypographyCommon from "@/components/ui-components/typography/TypographyCommon";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Typography",
  },
];

const CustomTypography = () => {
  return (
    <PageContainer title="Typography" description="this is Typography">
      {/* breadcrumb */}
      <Breadcrumb title="Typography" items={BCrumb} />
      {/* end breadcrumb */}
      <TypographyCommon />
    </PageContainer>
  );
};

export default CustomTypography;
