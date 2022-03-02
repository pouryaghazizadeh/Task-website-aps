import { Input } from "@mui/material";
import React from "react";

export default function input({ setGetText }) {
  return (
    <Input type="text" onChange={(e) => setGetText(e.target.value)}></Input>
  );
}
