import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import { DataTable } from "../../components/dataTable";
import { GridColDef } from "@mui/x-data-grid";
import { userRows } from "../../data/data";
import { useState } from "react";
import { Add } from "../../components/add";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <Avatar alt="Remy Sharp" src={params.row.img} />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 150,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 170,
  },
  {
    field: "createdAt",
    type: "string",
    headerName: "Created at",
    width: 160,
  },
  {
    field: "verified",
    headerName: "Status",
    width: 100,
    type: "boolean",
  },
];

export const Users = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Stack direction={"row"} alignItems={"center"} gap={2}>
        <Typography variant="h4" my={2}>
          Users
        </Typography>
        <Button onClick={() => setOpen(true)} variant="contained">
          Add New User
        </Button>
      </Stack>
      <DataTable slug="user" columns={columns} rows={userRows} />
      {open && (
        <Add slug="user" open={open} columns={columns} setOpen={setOpen} />
      )}
    </Box>
  );
};
