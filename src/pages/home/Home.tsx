import { Box, BoxProps, Paper } from "@mui/material";
import { TopBox } from "../../components/topBox";
import { ChartBox } from "../../components/chartBox";
import {
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data/data";

export const Home = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gap: 3,
        gridTemplateColumns: "repeat(4, 1fr)",
        gridAutoRows: "minmax(180px, auto)",
      }}
    >
      <Paper sx={{ gridColumn: "span 1", gridRow: "span 3" }}>
        <TopBox />
      </Paper>
      <Paper>
        <ChartBox {...chartBoxUser} />
      </Paper>
      <Paper>
        <ChartBox {...chartBoxProduct} />
      </Paper>
      <Paper sx={{ gridColumn: "span 1", gridRow: "span 3" }}>6</Paper>
      <Paper>
        <ChartBox {...chartBoxRevenue} />
      </Paper>
      <Paper>
        <ChartBox {...chartBoxConversion} />
      </Paper>
      <Paper sx={{ gridColumn: "span 2", gridRow: "span 2" }}>7</Paper>
      <Paper>8</Paper>
      <Paper>9</Paper>
    </Box>
  );
};
