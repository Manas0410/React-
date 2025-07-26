import { Link } from "./RouterMethods";

const NavBar = () => {
  return (
    <div className="h-14 flex gap-8 justify-center items-center bg-blue-300 text-white">
      <Link to={"/home"} title={"Home"} />
      <Link to={"/about"} title={"About"} />
      <Link to={"/contact"} title={"Contact"} />
    </div>
  );
};

export default NavBar;
