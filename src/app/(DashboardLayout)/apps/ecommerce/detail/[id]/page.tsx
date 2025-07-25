"use client";
import Grid from "@mui/material/Grid";
import ProductCarousel from "@/components/apps/ecommerce/productDetail/ProductCarousel";
import Breadcrumb from "@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb";
import PageContainer from "@/components/container/PageContainer";
import ProductDetail from "@/components/apps/ecommerce/productDetail";
import ProductDesc from "@/components/apps/ecommerce/productDetail/ProductDesc";
import ProductRelated from "@/components/apps/ecommerce/productDetail/ProductRelated";
import ChildCard from "@/components/shared/ChildCard";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Shop",
    to: "/apps/ecommerce/shop",
  },
  {
    title: "detail",
  },
];

const EcommerceDetail = () => {
  return (
    <PageContainer
      title="eCommerce Detail"
      description="this is eCommerce Detail"
    >
      {/* breadcrumb */}
      <Breadcrumb title="Product Detail" items={BCrumb} />
      <Grid
        container
        spacing={3}
        sx={{ maxWidth: { lg: "1055px", xl: "1200px" } }}
      >
        <Grid item xs={12} sm={12} lg={12}>
          <ChildCard>
            {/* ------------------------------------------- */}
            {/* Carousel */}
            {/* ------------------------------------------- */}
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} lg={6}>
                <ProductCarousel />
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                <ProductDetail />
              </Grid>
            </Grid>
          </ChildCard>
        </Grid>
        <Grid item xs={12} sm={12} lg={12}>
          <ProductDesc />
        </Grid>
        <Grid item xs={12} sm={12} lg={12}>
          <ProductRelated />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default EcommerceDetail;
