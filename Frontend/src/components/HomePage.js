import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Cards from "./Cards";

import { fetchData } from "./store/middleware/api";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
    console.log("hi");
  }, [dispatch]);

  return (
    <div>
      <Cards />
    </div>
  );
};

export default HomePage;
