import { useEffect, useState } from "react";
import { About, Home, Contact, NotFound } from "./Pages";

const RenderElement = () => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const urlChange = () => setPath(window.location.pathname);

    window.addEventListener("popstate", urlChange);
    window.addEventListener("customNavigation", urlChange);

    return () => {
      window.removeEventListener("popstate", urlChange);
      window.removeEventListener("customNavigation", urlChange);
    };
  }, []);

  console.log(path);

  switch (path) {
    case "/home":
      return <Home />;
    case "/about":
      return <About />;
    case "/contact":
      return <Contact />;
    default:
      return <NotFound />;
  }
};

export const Router = () => {
  return <RenderElement />;
};

export const Link = ({ to, title }: { to: string; title: string }) => {
  const navigate = () => {
    window.history.pushState({}, "", to);
    window.dispatchEvent(new Event("customNavigation"));
  };
  return <div onClick={navigate}>{title}</div>;
};
