import { Box, Stack, Typography } from "@mui/material";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Tablet", value: 300, color: "#00C49F" },
  { name: "Desktop", value: 300, color: "#FFBB28" },
  { name: "Laptop", value: 200, color: "#FF8042" },
];

export const PieChartBox = () => {
  return (
    <Stack p={2} height={"95%"} justifyContent={"space-between"}>
      <Typography variant="h5">Leads by Source</Typography>
      <ResponsiveContainer width={"99%"} height={300}>
        <PieChart>
          <Tooltip
            contentStyle={{ background: "white", borderRadius: "5px" }}
          />
          <Pie
            data={data}
            innerRadius={"70%"}
            outerRadius={"90%"}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map(({ name, color }) => (
              <Cell key={name} fill={color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <Stack direction="row" justifyContent={"space-between"}>
        {data.map(({ name, value, color }) => (
          <Stack key={name} gap={1} alignItems={"center"}>
            <Stack direction={"row"} gap={1} alignItems={"center"}>
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  bgcolor: color,
                  borderRadius: "50%",
                }}
              />
              <Typography variant="caption">{name}</Typography>
            </Stack>
            <Typography>{value}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};
