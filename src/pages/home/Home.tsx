import { Box, Paper } from "@mui/material";
import { TopBox } from "../../components/topBox";
import { ChartBox } from "../../components/chartBox";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data/data";
import { BarChartBox } from "../../components/barChartBox";
import { PieChartBox } from "../../components/pieChartBox";
import { BigChartBox } from "../../components/BigChartBox";

export const Home = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gap: 3,
        gridTemplateColumns: {
          xs: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        },
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
      <Paper sx={{ gridColumn: "span 1", gridRow: "span 3" }}>
        <PieChartBox />
      </Paper>
      <Paper>
        <ChartBox {...chartBoxRevenue} />
      </Paper>
      <Paper>
        <ChartBox {...chartBoxConversion} />
      </Paper>
      <Paper
        sx={{
          display: { xs: "none", md: "block" },
          gridColumn: "span 2",
          gridRow: "span 2",
        }}
      >
        <BigChartBox />
      </Paper>
      <Paper>
        <BarChartBox {...barChartBoxVisit} />
      </Paper>
      <Paper>
        <BarChartBox {...barChartBoxRevenue} />
      </Paper>
    </Box>
  );
};
