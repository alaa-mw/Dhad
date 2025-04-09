import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {
  data: {
    value: string;
    label: string;
    color: string;
  };
};

const StatsCard = ({ data }: Props) => {
  return (
    <>
      <Box
        sx={{
          padding: "40px 2vw",
          backgroundColor: `${data.color.replace(/,\s*1\)$/, ", 0.1)")}`,
          borderRadius: "10px",
          textAlign: "center",
          lineHeight:1.1,
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: `${data.color}`, fontWeight: "bold" ,width:"200px"}}
        >
          {" "}
          {data.value}{" "}
        </Typography>

        <Typography sx={{ color: `${data.color}` }}>{data.label} </Typography>
      </Box>
    </>
  );
};

export default StatsCard;
