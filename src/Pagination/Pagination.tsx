const data = [
  { id: 1, title: "t1" },
  { id: 2, title: "t2" },
  { id: 3, title: "t3" },
  { id: 4, title: "t4" },
  { id: 5, title: "t5" },
  { id: 6, title: "t6" },
  { id: 7, title: "t7" },
  { id: 8, title: "t8" },
  { id: 9, title: "t9" },
  { id: 10, title: "t10" },
  { id: 11, title: "t11" },
  { id: 12, title: "t12" },
  { id: 13, title: "t13" },
  { id: 14, title: "t14" },
  { id: 15, title: "t15" },
  { id: 16, title: "t16" },
  { id: 17, title: "t17" },
  { id: 18, title: "t18" },
  { id: 19, title: "t19" },
  { id: 20, title: "t20" },
  { id: 21, title: "t21" },
  { id: 22, title: "t22" },
  { id: 24, title: "t24" },
];

const RecordsPerPage = 5;

import { useState } from "react";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const ButtonCount = Math.ceil(data.length / RecordsPerPage);

  const Buttons = () => {
    const buttons = [];
    for (let i = 0; i < ButtonCount; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`flex rounded-lg p-4 ${
            i === currentPage ? "bg-gray-500" : " bg-slate-300"
          }`}
        >
          {i + 1}
        </button>
      );
    }
    return buttons;
  };

  const next = () => setCurrentPage((prev) => prev + 1);

  const prev = () => setCurrentPage((prev) => prev - 1);

  return (
    <section className="flex gap-4 flex-col justify-center items-center">
      {data
        .slice(currentPage * RecordsPerPage, (currentPage + 1) * RecordsPerPage)
        .map((item) => (
          <div
            key={item.id}
            className="h-20 w-[600px] bg-slate-300 text-white rounded-lg flex justify-center items-center"
          >
            {item.title}
          </div>
        ))}
      <div className="flex gap-2 items-center">
        <button
          className="flex rounded-lg p-2 bg-gray-200"
          onClick={prev}
          disabled={currentPage === 0}
        >
          {"<="}
        </button>
        {Buttons()}
        <button
          className="flex rounded-lg p-2 bg-gray-200"
          onClick={next}
          disabled={currentPage === ButtonCount - 1}
        >
          {"=>"}
        </button>
      </div>
    </section>
  );
};

export default Pagination;

// 1 => 0 - 4
// 2 => 5 - 9
// 3 => 10 - 14
