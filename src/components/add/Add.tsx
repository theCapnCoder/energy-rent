import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { isTemplateExpression } from "typescript";

type Props = {
  slug: string;
  open: boolean;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Add = (props: Props) => {
  return (
    <Dialog
      open={props.open}
      onClose={() => props.setOpen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Box component="form">
        <DialogTitle id="alert-dialog-title">Add new {props.slug}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Box>
              {props.columns
                .filter((item) => item.field !== "id" && item.field !== "img")
                .map((column) => (
                  <TextField
                    key={column.field}
                    sx={{
                      m: 1,
                      width: "47%",
                    }}
                    name={column.field}
                    label={column.headerName}
                  />
                ))}
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.setOpen(false)}>Close</Button>
          <Button onClick={() => props.setOpen(false)} autoFocus>
            Send
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};
