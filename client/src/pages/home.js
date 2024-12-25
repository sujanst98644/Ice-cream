import React from "react";
import Front from "../components/home/front";
import Categories from "../components/home/categories";
import Choices from "../components/home/choices";

const Home = () => {
  return (
      <div className="px-[120px]">
        <Front />
        <Categories />
        <Choices />
      </div>

  );
};

export default Home;
