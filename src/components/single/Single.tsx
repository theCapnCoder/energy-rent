import {
  Avatar,
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

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

type Props = {
  id: number;
  img?: string;
  title: string;
  info: object;
  chart?: {
    dataKeys: { name: string; color: string }[];
    data: object[];
  };
  activities?: { time: string; text: string }[];
};

export const Single = (props: Props) => (
  <Stack direction={"row"} gap={4}>
    <Box sx={{ flex: 1 }}>
      <Stack mb={2} direction="row" alignItems={"center"} gap={2}>
        <Avatar
          variant="rounded"
          src={props.img}
          sx={{ width: 100, height: 100 }}
        />
        <Typography variant="h5">{props.title}</Typography>
        <Button variant="contained" color="error" size="small">
          Update
        </Button>
      </Stack>

      {Object.entries(props.info).map((item) => (
        <Stack key={item[0]} direction="row" gap={1}>
          <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
            {item[0]}:
          </Typography>
          <Typography variant="subtitle1">{item[1]}</Typography>
        </Stack>
      ))}

      <Divider sx={{ my: 3 }} />

      {props.chart && (
        <Box key={props.chart.dataKeys[0].name} width={"80%"} height={400}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={props.chart.data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              {props.chart.dataKeys.map((dataKey) => (
                <Line
                  type="monotone"
                  dataKey={dataKey.name}
                  stroke={dataKey.color}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </Box>
      )}
    </Box>

    <Box sx={{ flex: 1 }}>
      <Typography variant="h5">Latest Activities</Typography>
      <List disablePadding sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {props.activities && (
          <>
            {props.activities.map((activity) => (
              <>
                <ListItem disableGutters alignItems="flex-start">
                  <ListItemText
                    primary={activity.text}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {activity.time}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider component="li" />
              </>
            ))}
          </>
        )}
      </List>
    </Box>
  </Stack>
);
