import React from "react";
import "./Home.scss";
import { useGetAllItemsQuery } from "../../Services/Services";
import Loader from "../Loader/Loader"
import CardItem from "../../components/CardItem/CardItem";

const Home = () => {
  const { data, isLoading, error } = useGetAllItemsQuery();

  const renderLoading = () => <Loader />;
  const renderError = () => <div>{error}</div>;
  const renderItems = () => (
    <div>
      {data?.map((item) => (
        <CardItem item={item} />
      ))}
    </div>
  );

  return <div className="home">{isLoading ? renderLoading() : error ? renderError() : renderItems()}</div>;
};

export default Home;
