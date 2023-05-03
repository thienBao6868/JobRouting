import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import data from "../data.json";
import { Box } from "@mui/material";

export default function DetailCard() {
  const params = useParams();
  const jobId = params.id;
  const job = data.find((job) => jobId === job.id);
  if (!job)
    return (
      <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
        No find job
      </Typography>
    );

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          {job.title}
        </Typography>
        <Typography variant="h5" component="div">
          {job.skills.map((item) => (
            <Box
              key={item + "job"}
              sx={{
                backgroundColor: "red",
                mr: 1,
                display: "inline-block",
                fontSize: 12,
                borderRadius: 5,
                padding: 0.7,
              }}
            >
              {item}
            </Box>
          ))}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {job.description}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          City: {job.city}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          salaryLow: {job.salaryLow}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          salaryHigh: {job.salaryHigh}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          postedDate: {job.postedDate}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          yearEX: {job.yrsXPExpected}
        </Typography>
      </CardContent>
    </Card>
  );
}
