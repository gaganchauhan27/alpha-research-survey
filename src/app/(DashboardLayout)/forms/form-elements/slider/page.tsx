import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { SliderValueLabelProps } from "@mui/material/Slider";
import { SliderThumb } from "@mui/material/Slider";
import { Slider } from "@mui/material";
import Typography from "@mui/material/Typography";
import ParentCard from "@/components/shared/ParentCard";
import ChildCard from "@/components/shared/ChildCard";
import Breadcrumb from "@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb";
import PageContainer from "@/components/container/PageContainer";
import CustomSlider from "@/components/forms/theme-elements/CustomSlider";
import { IconVolume, IconVolume2 } from "@tabler/icons-react";

import VolumeSlider from "@/components/forms/form-elements/slider/VolumeSlider";
import RangeDefault from "@/components/forms/form-elements/slider/RangeDefault";
import DiscreteSlider from "@/components/forms/form-elements/slider/DiscreteSlider";
import RangeSlider from "@/components/forms/form-elements/slider/RangeSlider";
import DisabledSliderCode from "@/components/forms/form-elements/slider/code/DisabledSliderCode";
import DefaultsliderCode from "@/components/forms/form-elements/slider/code/DefaultsliderCode";
import VolumesliderCode from "@/components/forms/form-elements/slider/code/VolumesliderCode";
import CustomSliderCode from "@/components/forms/form-elements/slider/code/CustomSliderCode";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Slider",
  },
];

const MuiSlider = () => {
  return (
    <PageContainer title="Slider" description="this is Slider">
      {/* breadcrumb */}
      <Breadcrumb title="Slider" items={BCrumb} />
      {/* end breadcrumb */}
      <ParentCard title="Slider">
        <Grid container spacing={3}>
          {/* ------------------------------------------------------------------- */}
          {/* Custom */}
          {/* ------------------------------------------------------------------- */}
          <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
            <ChildCard title="Custom" codeModel={<CustomSliderCode />}>
              <CustomSlider defaultValue={[30]} />
            </ChildCard>
          </Grid>
          {/* ------------------------------------------------------------------- */}
          {/* Volume */}
          {/* ------------------------------------------------------------------- */}
          <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
            <ChildCard title="Volume" codeModel={<VolumesliderCode />}>
              <CustomSlider defaultValue={30} aria-label="volume slider" />
              <Box display="flex" alignItems="center">
                <Typography>
                  <IconVolume2 width={20} />
                </Typography>
                <Box ml="auto">
                  <Typography>
                    <IconVolume width={20} />
                  </Typography>
                </Box>
              </Box>
            </ChildCard>
          </Grid>
          {/* ------------------------------------------------------------------- */}
          {/* Range */}
          {/* ------------------------------------------------------------------- */}
          <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
            <RangeDefault />
          </Grid>
          {/* ------------------------------------------------------------------- */}
          {/* Default */}
          {/* ------------------------------------------------------------------- */}
          <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
            <ChildCard title="Default" codeModel={<DefaultsliderCode />}>
              <Slider defaultValue={30} />
            </ChildCard>
          </Grid>
          {/* ------------------------------------------------------------------- */}
          {/* Disabled */}
          {/* ------------------------------------------------------------------- */}
          <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
            <ChildCard title="Disabled" codeModel={<DisabledSliderCode />}>
              <Slider disabled defaultValue={30} />
            </ChildCard>
          </Grid>
          {/* ------------------------------------------------------------------- */}
          {/* Volume */}
          {/* ------------------------------------------------------------------- */}
          <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
            <VolumeSlider />
          </Grid>
          {/* ------------------------------------------------------------------- */}
          {/* Discrete */}
          {/* ------------------------------------------------------------------- */}
          <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
            <DiscreteSlider />
          </Grid>
          {/* ------------------------------------------------------------------- */}
          {/* Range Default */}
          {/* ------------------------------------------------------------------- */}
          <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
            <RangeSlider />
          </Grid>
        </Grid>
      </ParentCard>
    </PageContainer>
  );
};

export default MuiSlider;
