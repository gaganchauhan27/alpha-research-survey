"use client";
import React from "react";
import { useEffect, useState } from "react";

import { Grid, Box } from "@mui/material";
import PageContainer from "@/components/container/PageContainer";
// components
import YearlyBreakup from "@/components/dashboards/modern/YearlyBreakup";
import MonthlyEarnings from "@/components/dashboards/modern/MonthlyEarnings";
import TopCards from "@/components/dashboards/modern/TopCards";
import RevenueUpdates from "@/components/dashboards/modern/RevenueUpdates";
import EmployeeSalary from "@/components/dashboards/modern/EmployeeSalary";
import Customers from "@/components/dashboards/modern/Customers";
import Projects from "@/components/dashboards/modern/Projects";
import Social from "@/components/dashboards/modern/Social";
import SellingProducts from "@/components/dashboards/modern/SellingProducts";
import WeeklyStats from "@/components/dashboards/modern/WeeklyStats";
import TopPerformers from "@/components/dashboards/modern/TopPerformers";
import Welcome from "@/app/(DashboardLayout)/layout/shared/welcome/Welcome";

export default function Dashboard() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          {/* column */}
          <Grid item xs={12} lg={12}>
            <TopCards />
          </Grid>
          {/* column */}
          <Grid item xs={12} lg={8}>
            <RevenueUpdates isLoading={isLoading} />
          </Grid>
          {/* column */}
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} lg={12}>
                <YearlyBreakup isLoading={isLoading} />
              </Grid>
              <Grid item xs={12} sm={6} lg={12}>
                <MonthlyEarnings isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
          {/* column */}
          <Grid item xs={12} lg={4}>
            <EmployeeSalary isLoading={isLoading} />
          </Grid>
          {/* column */}
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Customers isLoading={isLoading} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Projects isLoading={isLoading} />
              </Grid>
              <Grid item xs={12}>
                <Social />
              </Grid>
            </Grid>
          </Grid>
          {/* column */}
          <Grid item xs={12} lg={4}>
            <SellingProducts />
          </Grid>
          {/* column */}
          <Grid item xs={12} lg={4}>
            <WeeklyStats isLoading={isLoading} />
          </Grid>
          {/* column */}
          <Grid item xs={12} lg={8}>
            <TopPerformers />
          </Grid>
        </Grid>
        <Welcome />
      </Box>
    </PageContainer>
  );
}
