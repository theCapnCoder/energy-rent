import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { DataTable } from "../../components/dataTable";
import { Add } from "../../components/add";
import { GridColDef } from "@mui/x-data-grid";
import { productRows } from "../../data/data";

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
    field: "title",
    type: "string",
    headerName: "Title",
    width: 200,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 150,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    field: "producer",
    type: "string",
    headerName: "Producer",
    width: 200,
  },
  {
    field: "createdAt",
    type: "string",
    headerName: "Created at",
    width: 200,
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 150,
    type: "boolean",
  },
];

export const Products = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Stack direction={"row"} alignItems={"center"} gap={2}>
        <Typography variant="h4" my={2}>
          Products
        </Typography>
        <Button onClick={() => setOpen(true)} variant="contained">
          Add New Products
        </Button>
      </Stack>
      <DataTable slug="products" columns={columns} rows={productRows} />
      {open && (
        <Add slug="product" open={open} columns={columns} setOpen={setOpen} />
      )}
    </Box>
  );
}
