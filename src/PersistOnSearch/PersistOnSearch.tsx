import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const PersistOnSearch = () => {
  const [values, setValues] = useState({
    search: "",
    filter: "",
    page: "",
  });

  const [searchParams, setSearchParams] = useSearchParams();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setSearchParams({
      search: values.search,
      filter: values.filter,
      page: values.page,
    });
  };

  useEffect(() => {
    setValues({
      search: searchParams.get("search") || "",
      filter: searchParams.get("filter") || "",
      page: searchParams.get("page") || "",
    });
  }, []);

  return (
    <div>
      <div>
        Search: {values.search}| Filter: {values.filter}| Page: {values.page}
      </div>
      <input
        type="text"
        onChange={onChange}
        placeholder="search"
        name="search"
        value={values.search}
      />
      <input
        type="text"
        onChange={onChange}
        placeholder="value"
        name="filter"
        value={values.filter}
      />
      <input
        type="number"
        onChange={onChange}
        placeholder="page"
        name="page"
        value={values.page}
      />
    </div>
  );
};

export default PersistOnSearch;
