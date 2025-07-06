// Navigator.tsx
import { Link } from "react-router-dom";
import { routeConfig } from "./App";

const Navigator = () => {
  const baseRoutes = routeConfig.filter((r) => !r.path.includes(":"));

  return (
    <div style={{ padding: "1rem" }}>
      <h2 className="text-lg font-bold">🧭 Components Navigator</h2>
      <ul style={{ lineHeight: "2" }}>
        {baseRoutes.map((route) => (
          <li key={route.path}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigator;
