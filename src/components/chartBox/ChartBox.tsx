import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { Link } from "react-router-dom";
import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";

export type ChartBoxProps = {
  color: string;
  icon: React.ReactNode;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

export const ChartBox = (props: ChartBoxProps) => {
  return (
    <Stack
      direction={"row"}
      p={2}
      width={"calc(100% - 24px)"}
      height={"calc(100% - 24px)"}
      justifyContent={"space-between"}
    >
      <Stack justifyContent={"space-between"} sx={{ flex: 2 }}>
        <Stack direction={"row"} alignItems={"center"} gap={1}>
          {props.icon}
          <Typography variant="subtitle1">{props.title}</Typography>
        </Stack>
        <Typography variant="h4">{props.number}</Typography>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography variant="subtitle2" sx={{ color: props.color }}>
            View All
          </Typography>
        </Link>
      </Stack>

      <Stack alignItems={"flex-end"} justifyContent={"space-between"}>
        <Box width={100} height={50}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 5, y: 30 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>

        <Box>
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: "right",
              color: props.percentage < 0 ? "tomato" : "limegreen",
            }}
          >
            {props.percentage}%
          </Typography>
          <Typography variant="caption">This month</Typography>
        </Box>
      </Stack>
    </Stack>
  );
};
