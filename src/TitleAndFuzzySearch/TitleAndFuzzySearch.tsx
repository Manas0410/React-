import { useState, useEffect } from "react";
import axios from "axios";

// Define the product type
type Product = {
  id: string;
  title: string;
  // add more fields if needed (e.g., description, price, etc.)
};

const url =
  "https://mindler-dashboard.s3.us-east-2.amazonaws.com/products.json";

export default function TitleAndFuzzySearch() {
  const [data, setData] = useState<Product[]>([]);
  const [allData, setAllData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [SearchString, setSearchString] = useState<string>("");

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(url);
      const rawData = res.data.products;

      const transformedDataArray: Product[] = [];

      for (let key in rawData) {
        transformedDataArray.push({ ...rawData[key], id: key });
      }

      setData(transformedDataArray);
      setAllData(transformedDataArray);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Search logic
  useEffect(() => {
    const filtered = allData.filter((item) =>
      item.title.toLowerCase().includes(SearchString.toLowerCase())
    );
    setData(filtered);
  }, [SearchString, allData]);

  return (
    <div>
      <input
        type="text"
        value={SearchString}
        onChange={(e) => setSearchString(e.target.value)}
        placeholder="Search by title"
      />
      {loading ? (
        <p>Loading...</p>
      ) : data.length > 0 ? (
        data.map((item) => <p key={item.id}>{item.title}</p>)
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}
