import { Box, Typography } from "@mui/material";
import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";

export type BarChartBoxProps = {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
};

export const BarChartBox = (props: BarChartBoxProps) => {
  return (
    <Box sx={{ width: "100%", height: "100%", p: 2 }}>
      <Typography>{props.title}</Typography>
      <ResponsiveContainer width="90%" height={150}>
        <BarChart width={150} height={40} data={props.chartData}>
          <Tooltip
            contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
            labelStyle={{ display: "none" }}
            cursor={{ fill: "none" }}
          />
          <Bar dataKey={props.dataKey} fill={props.color} />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};
