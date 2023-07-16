import { Box, Typography } from "@mui/material";
import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import { ChartBoxProps } from "../chartBox/ChartBox";

export const BarChartBox = (props: ChartBoxProps) => {
  return (
    <Box>
      <Typography>{props.title}</Typography>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={props.chartData}>
          <Tooltip />
          <Bar dataKey={props.dataKey} fill={props.color} />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};
