import React from "react";
import NavBar from "../NavBar";
import Homes from "../../redux/features/home/Homes";
export default function Home() {
  return (
    <>
      <NavBar />
      <Homes />
    </>
  );
}
