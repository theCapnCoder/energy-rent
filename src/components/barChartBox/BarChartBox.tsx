import { Box, Typography } from "@mui/material";
import { Bar, BarChart, ResponsiveContainer } from "recharts";
import { ChartBoxProps } from "../chartBox/ChartBox";

export const BarChartBox = (props: ChartBoxProps) => {
  return (
    <Box>
      <Typography></Typography>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={data}>
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};
