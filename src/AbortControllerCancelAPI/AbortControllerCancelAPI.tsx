import axios from "axios";
import { useEffect, useState } from "react";

const AbortControllerCancelAPI = () => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    const abortcontroller = new AbortController();
    const { signal } = abortcontroller;

    axios.get("https://fakestoreapi.com/products/1", { signal });

    return () => {
      abortcontroller.abort();
    };
  }, [page]);

  return (
    <div>
      <button onClick={() => setPage((p) => p + 1)}>inc</button>
    </div>
  );
};

export default AbortControllerCancelAPI;
