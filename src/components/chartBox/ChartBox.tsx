import { EmojiPeople, PeopleAlt } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { Link } from "react-router-dom";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const ChartBox = () => {
  return (
    // <Stack direction={"row"} p={2} sx={{ height: "calc(100% - 24px)" }}>
    <Stack
      direction={"row"}
      p={2}
      width={"calc(100% - 24px)"}
      height={"calc(100% - 24px)"}
      // height={"100%"}
      justifyContent={"space-between"}
    >
      <Stack justifyContent={"space-between"} sx={{ flex: 2 }}>
        <Stack direction={"row"} alignItems={"center"} gap={1}>
          <PeopleAlt />
          <Typography variant="subtitle1">Total Users</Typography>
        </Stack>
        <Typography variant="h4">1,234</Typography>
        <Link to="/">
          <Typography variant="subtitle2">View All</Typography>
        </Link>
      </Stack>

      <Stack alignItems={"flex-end"} justifyContent={"space-between"}>
        <Box width={100} height={50}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={300} height={100} data={data}>
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>

        <Box>
          <Typography variant="subtitle1" sx={{ textAlign: "right" }}>
            45%
          </Typography>
          <Typography variant="caption">This month</Typography>
        </Box>
      </Stack>
    </Stack>
  );
};
