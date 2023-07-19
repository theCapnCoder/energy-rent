import { Box, Typography } from "@mui/material";
import { DataTable } from "../../components/dataTable";

export const Users = () => {
  return (
    <Box>
      <Typography variant="h4" my={2}>Users</Typography>
      <DataTable />
    </Box>
  );
};
