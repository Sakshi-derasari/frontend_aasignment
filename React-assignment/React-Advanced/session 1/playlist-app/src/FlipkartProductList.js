import React from "react";
import useFetchData from "./useFetchData";

function FlipkartProductList() {
  const { data, loading, error } = useFetchData(
    "https://fakestoreapi.com/products"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <div>
      <h2>🛒 Product List</h2>
      {data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}

export default FlipkartProductList;