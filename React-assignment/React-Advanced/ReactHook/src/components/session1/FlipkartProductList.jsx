import useFetchData from "../../hooks/useFetchData.js";

function FlipkartProductList() {
  const { data, loading, error } = useFetchData(
    "https://fakestoreapi.com/products"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Products</h2>

      {data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}

export default FlipkartProductList;