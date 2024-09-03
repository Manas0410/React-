const data = [
  { title: "card1" },
  { title: "card2" },
  { title: "card3" },
  { title: "card4" },
  { title: "card5" },
];

import "./InfiniteCarousel.styles.css";

const InfiniteCarousel = () => {
  return (
    <div className="w-full overflow-hidden continer">
      <section className="infinityCarouselContainer">
        {data.map((item, i) => (
          <div
            key={`item${i}`}
            className="h-20 w-[400px] bg-slate-300 text-white rounded-lg flex justify-center items-center"
          >
            {item.title}
          </div>
        ))}
        {data.map((item, i) => (
          <div
            key={`item${i}`}
            className="h-20 w-[400px] bg-slate-300 text-white rounded-lg flex justify-center items-center"
          >
            {item.title}
          </div>
        ))}
      </section>
    </div>
  );
};

export default InfiniteCarousel;
