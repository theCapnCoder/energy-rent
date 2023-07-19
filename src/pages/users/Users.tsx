import { Avatar, Box, Typography } from "@mui/material";
import { DataTable } from "../../components/dataTable";
import { GridColDef } from "@mui/x-data-grid";
import { userRows } from "../../data/data";

export const Users = () => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "avatar",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => {
        return <Avatar alt="Remy Sharp" src={params.row.img} />;
      },
    },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 170,
    },
    {
      field: "createdAt",
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

  return (
    <Box>
      <Typography variant="h4" my={2}>
        Users
      </Typography>
      <DataTable slug="user" columns={columns} rows={userRows} />
    </Box>
  );
};
