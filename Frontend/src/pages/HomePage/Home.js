import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Cards from "./Cards";
import { getDataHome } from "../../redux/homeSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataHome());
  }, [dispatch]);

  return (
    <div>
      <Cards />
    </div>
  );
};

export default Home;