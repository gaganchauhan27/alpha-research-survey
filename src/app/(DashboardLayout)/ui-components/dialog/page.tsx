import { Grid } from "@mui/material";
import Breadcrumb from "@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb";
import PageContainer from "@/components/container/PageContainer";
import ParentCard from "@/components/shared/ParentCard";
import ChildCard from "@/components/shared/ChildCard";
import SimpleDialog from "@/components/ui-components/dialog/SimpleDialog";
import AlertDialog from "@/components/ui-components/dialog/AlertDialog";
import TransitionDialog from "@/components/ui-components/dialog/TransitionDialog";
import FormDialog from "@/components/ui-components/dialog/FormDialog";
import FullscreenDialog from "@/components/ui-components/dialog/FullscreenDialog";
import MaxWidthDialog from "@/components/ui-components/dialog/MaxWidthDialog";
import ScrollContentDialog from "@/components/ui-components/dialog/ScrollContentDialog";
import ResponsiveDialog from "@/components/ui-components/dialog/ResponsiveDialog";

import SimpleCode from "@/components/ui-components/dialog/code/SimpleCode";
import AlertCode from "@/components/ui-components/dialog/code/AlertCode";
import TransitionCode from "@/components/ui-components/dialog/code/TransitionCode";
import FormCode from "@/components/ui-components/dialog/code/FormCode";
import FullScreenCode from "@/components/ui-components/dialog/code/FullScreenCode";
import MaxWidthCode from "@/components/ui-components/dialog/code/MaxWidthCode";
import ScrollingContentCode from "@/components/ui-components/dialog/code/ScrollingContentCode";
import ResponsiveFullscreenCode from "@/components/ui-components/dialog/code/ResponsiveFullscreenCode";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Dialog",
  },
];

const MuiDialog = () => (
  <PageContainer title="Dialog" description="this is Dialog">
    {/* breadcrumb */}
    <Breadcrumb title="Dialog" items={BCrumb} />
    {/* end breadcrumb */}

    <ParentCard title="Dialog">
      <Grid container spacing={3}>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Simple" codeModel={<SimpleCode />}>
            <SimpleDialog />
          </ChildCard>
        </Grid>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Alert" codeModel={<AlertCode />}>
            <AlertDialog />
          </ChildCard>
        </Grid>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Transition" codeModel={<TransitionCode />}>
            <TransitionDialog />
          </ChildCard>
        </Grid>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Form" codeModel={<FormCode />}>
            <FormDialog />
          </ChildCard>
        </Grid>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Full screen" codeModel={<FullScreenCode />}>
            <FullscreenDialog />
          </ChildCard>
        </Grid>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Max width" codeModel={<MaxWidthCode />}>
            <MaxWidthDialog />
          </ChildCard>
        </Grid>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard
            title="Scrolling Content"
            codeModel={<ScrollingContentCode />}
          >
            <ScrollContentDialog />
          </ChildCard>
        </Grid>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard
            title="Responsive Fullscreen"
            codeModel={<ResponsiveFullscreenCode />}
          >
            <ResponsiveDialog />
          </ChildCard>
        </Grid>
      </Grid>
    </ParentCard>
  </PageContainer>
);
export default MuiDialog;
