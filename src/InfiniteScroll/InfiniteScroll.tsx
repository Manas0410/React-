import { useEffect, useRef, useState } from "react";

type DataItem = {
  title: string;
};

const InfiniteScroll = () => {
  const [offset, setOffset] = useState<number>(1);
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=10`
        );
        const newData = await response.json();
        setData((prev) => [...prev, ...newData]);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchApi();
  }, [offset]);

  const captureDivRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setOffset((prev) => prev + 1);
    });

    if (captureDivRef.current) {
      observer.observe(captureDivRef.current);
    }

    return () => {
      if (captureDivRef.current) {
        observer.unobserve(captureDivRef.current);
      }
    };
  }, []);

  return (
    <section className="flex justify-center items-center gap-6 flex-col">
      <h1>Infinite Scroll</h1>
      {data.map((item, i) => (
        <div
          key={i}
          className="h-20 w-[600px] bg-slate-300 text-white rounded-lg flex justify-center items-center"
        >
          {item.title}
        </div>
      ))}
      {loading ? <div>Loading ...</div> : <div ref={captureDivRef}>ref</div>}
    </section>
  );
};

export default InfiniteScroll;
