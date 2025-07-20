"use client";
import * as React from "react";
import {
  Box,
  Divider,
  Typography,
  Grid,
  Button,
  ListItem,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import List from "@mui/material/List";
import { useState } from "react";

const StyledAccordian = styled(Accordion)(() => ({
  boxShadow: "none",
  marginBottom: "0 !important",
  "&.Mui-expanded": {
    margin: "0",
  },
  "& .MuiAccordionSummary-root": {
    padding: 0,
    minHeight: "60px",
  },
  "& .MuiAccordionDetails-root": {
    padding: "0 0 20px",
  },
}));

const TabEmbedding = () => {
  const [expanded, setExpanded] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);

  const handleChange2 = () => {
    setExpanded(!expanded);
  };

  const handleChange3 = () => {
    setExpanded2(!expanded2);
  };

  const handleChange4 = () => {
    setExpanded3(!expanded3);
  };
  const handleChange5 = () => {
    setExpanded4(!expanded4);
  };

  return (
    <Grid container spacing={{ xs: 3, lg: 8 }}>
      <Grid item xs={12} lg={6}>
        <Image
          src="/images/frontend-pages/homepage/accordian_three.svg"
          width={500}
          height={500}
          style={{
            width: "100%",
            height: 500,
            objectFit: "contain",
          }}
          alt="img"
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Typography
          variant="h4"
          sx={{
            fontSize: {
              lg: "40px",
              xs: "35px",
            },
          }}
          fontWeight="700"
          lineHeight={1.2}
        >
          Explore the service of Communities & Panel
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontSize: {
              lg: "16px",
              xs: "12px",
            },
          }}
          fontWeight="500"
          mt={5}
        >
          Our market research expertise provides reliable data trusted by top
          consultancies, financial institutions, and leading research firms.
        </Typography>
        <Box mt={4}>
          <StyledAccordian expanded={expanded2} onChange={handleChange3}>
            <AccordionSummary
              expandIcon={
                expanded2 ? (
                  <IconMinus size="21" stroke="1.5" />
                ) : (
                  <IconPlus size="21" stroke="1.5" />
                )
              }
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography fontSize="17px" fontWeight="600">
                Strategic Planning
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul style={{ margin: 0, paddingLeft: "1.25rem" }}>
                <li>Crafting research strategies</li>
                <li>Designing screeners and interview guides</li>
                <li>Creating survey questionnaires and drafts</li>
                <li>Customizing surveys with multimedia elements</li>
                <li>Implementing typing tools</li>
                <li>Setting up online bulletin boards</li>
              </ul>
            </AccordionDetails>
          </StyledAccordian>
          <Divider />
          <StyledAccordian expanded={expanded} onChange={handleChange2}>
            <AccordionSummary
              expandIcon={
                expanded ? (
                  <IconMinus size="21" stroke="1.5" />
                ) : (
                  <IconPlus size="21" stroke="1.5" />
                )
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography fontSize="17px" fontWeight="600">
                Implementation
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul style={{ margin: 0, paddingLeft: "1.25rem" }}>
                <li>Recruiting community members</li>
                <li>Managing and hosting communities</li>
                <li>Moderating community interactions</li>
                <li>Recording calls and videos</li>
                <li>Transcribing content</li>
                <li>Translating materials</li>
                <li>Managing discussion threads</li>
                <li>Consolidating and cleaning data</li>
                <li>Extracting raw data</li>
              </ul>
            </AccordionDetails>
          </StyledAccordian>
          <Divider />
          <StyledAccordian expanded={expanded3} onChange={handleChange4}>
            <AccordionSummary
              expandIcon={
                expanded3 ? (
                  <IconMinus size="21" stroke="1.5" />
                ) : (
                  <IconPlus size="21" stroke="1.5" />
                )
              }
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography fontSize="17px" fontWeight="600">
                Data Interpretation
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul style={{ margin: 0, paddingLeft: "1.25rem" }}>
                <li>Synthesizing and analyzing insights</li>
                <li>Applying RIM weighting (Random Iterative Method)</li>
                <li>Conducting crosstab analysis</li>
                <li>
                  Performing MaxDiff analysis (also known as Best-Worst
                  analysis)
                </li>
                <li>Conducting conjoint analysis</li>
              </ul>
            </AccordionDetails>
          </StyledAccordian>
          <Divider />
          <StyledAccordian expanded={expanded4} onChange={handleChange5}>
            <AccordionSummary
              expandIcon={
                expanded4 ? (
                  <IconMinus size="21" stroke="1.5" />
                ) : (
                  <IconPlus size="21" stroke="1.5" />
                )
              }
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography fontSize="17px" fontWeight="600">
                Report Generation
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul style={{ margin: 0, paddingLeft: "1.25rem" }}>
                <li>Provision of interim post-interview summaries</li>
                <li>Automated and manual charting</li>
                <li>Creation of top-line reports</li>
                <li>Development of high-level reports or presentations</li>
                <li>Preparation of extended full reports or presentations</li>
                <li>Extraction of key insights</li>
                <li>Conducting hypothesis testing</li>
                <li>Offering white labeling options</li>
              </ul>
            </AccordionDetails>
          </StyledAccordian>
          <Divider />
          <Box mt={3}>
            <Button variant="contained" color="primary" size="large">
              Learn More
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default TabEmbedding;
