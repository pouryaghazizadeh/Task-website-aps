import * as React from "react";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { todoEdited } from "./store/reducer";
import { useDispatch } from "react-redux";

export default function EditTodo() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [change, setChange] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const description = e.target.edit.value;
    const id = location.state;

    if (description) {
      dispatch({ type: todoEdited.type, payload: { id, description } });
      navigate("/todo");
    }
    return;
  };
  console.log(location);
  return (
    <div>
      <Container>
        <Box
          component="form"
          autoComplete="off"
          onSubmit={(e) => handleSubmit(e)}
        >
          <TextField
            sx={{ width: "100%" }}
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            name="edit"
            value={change}
            onChange={(e) => setChange(e.target.value)}
          />
        </Box>
      </Container>
    </div>
  );
}
