import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import AuthContext from "../auth/AuthContext";
import { AppContext } from "../AppContext";

export default function JobCard({ job }) {
  const navigate = useNavigate();
  const { user } = React.useContext(AuthContext);
  const { handleOpen } = React.useContext(AppContext);
  return (
    <Card sx={{ minWidth: 275, minHeight: 300 }}>
      <CardContent sx={{ minHeight: 230 }}>
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
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Button
          variant="contained"
          sx={{ backgroundColor: "orange" }}
          onClick={() => {
            if (user) {
              navigate(`/pageDetail/${job.id}`);
            } else {
              navigate(`/signInPage`);
              handleOpen();
            }
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
