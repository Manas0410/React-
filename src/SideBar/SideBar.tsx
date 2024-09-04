import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import SideBarData from "./SideBarData.json";

type MenuType = {
  Route: string;
  path: string;
  hasChildren: boolean;
  children?: MenuType[];
};

const SideBar = () => {
  const Accordian = ({ Name, data }: { Name: string; data: MenuType[] }) => {
    const [OpenAccordian, setOpenAccordian] = useState(false);
    return (
      <div className="my-2">
        <div
          onClick={() => setOpenAccordian((prev) => !prev)}
          className="flex items-center justify-between cursor-pointer p-2 bg-gray-200 hover:bg-gray-300 rounded-md"
        >
          <span className="text-gray-700">{Name}</span>
          {OpenAccordian ? (
            <ChevronDown className="w-4 h-4 text-gray-500" />
          ) : (
            <ChevronRight className="w-4 h-4 text-gray-500" />
          )}
        </div>
        {OpenAccordian && (
          <div className="ml-4 mt-2">
            <ShowMenu data={data} />
          </div>
        )}
      </div>
    );
  };

  const ShowMenu = ({ data }: { data: MenuType[] }) => {
    return (
      <div className="space-y-2">
        {data.map((item, index) =>
          item.hasChildren ? (
            <Accordian
              key={`${item.Route}-${index}`} // Unique key
              Name={item.Route}
              data={item.children || []}
            />
          ) : (
            <Link
              key={`${item.Route}-${index}`}
              to={item.path}
              className="block p-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md"
            >
              {item.Route}
            </Link>
          )
        )}
      </div>
    );
  };

  return (
    <aside className="w-64 bg-white shadow-md p-4 h-screen">
      <ShowMenu data={SideBarData} />
    </aside>
  );
};

export default SideBar;
