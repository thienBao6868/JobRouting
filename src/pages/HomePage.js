import React from "react";
import JobCard from "../components/JobCard";
import data from "../data.json";
import { Container, Grid } from "@mui/material";
import PageTabs from "../components/PageTabs";
import { createContext } from "react";
import { useState } from "react";
import { AppContext } from "../AppContext";



const HomePage = () => {
 
  const { searchParams,listPageEnd,listPageStart} = React.useContext(AppContext);
  return (
   
      <Container>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          {data
            .filter((job) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = job.title.toLowerCase();
              if (name.startsWith(filter.toLowerCase())) return job;
            })
            .slice(listPageStart, listPageEnd)
            .map((job) => (
              <Grid key={job.id} item xs={12} md={6} lg={4}>
                <JobCard job={job} />
              </Grid>
            ))}
        </Grid>
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <PageTabs />
        </Container>
      </Container>
  );
};

export default HomePage;
