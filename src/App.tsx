import Draggable from "./Draggable/Draggable";
import InfiniteScroll from "./InfiniteScroll/InfiniteScroll";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TriggerToast from "./ToastComp/TriggerToast";
import Pagination from "./Pagination/Pagination";
import InfiniteCarousel from "./InfiniteCarousel/InfiniteCarousel";
import Parent from "./ReactMemo/Parent";
import SideBar from "./SideBar/SideBar";
import OTP from "./OTP/OTP";
import MemoryGame from "./MemoryGame/MemoryGame";
import Logo from "./Logo/logo";
import AbortControllerCancelAPI from "./AbortControllerCancelAPI/AbortControllerCancelAPI";
import TitleAndFuzzySearch from "./TitleAndFuzzySearch/TitleAndFuzzySearch";
import ProgressBar from "./ProgressBar/ProgressBar";
import UseMemo from "./Hooks/UseMemo";
import UseCallBack from "./Hooks/UseCallBack";
import { UseRef } from "./Hooks/UseRef";
import Navigator from "./Navigator";
import UseLayoutEffect from "./Hooks/UseLayoutEffect";
import TaskQueue from "./TaskQueue/TaskQueue";
import NavBar from "./CustomRouter/NavBar";
import ReactProfiler from "./Profiler/Profiler";
// import { Router } from "./CustomRouter/RouterMethods";
// import { ExampleContextProvider } from "./intcontext/ContextEx";
// import ABCComponent from "./intcontext/ABCComponent";
import Tictactoe from "./Tictactoe/Tictacto.js";
import SnakeLadder from "./Snakeladder/Board.js";
import FolderStructure from "./FolderStructure/FolderStructure.js";

export const routeConfig = [
  { path: "/search", name: "Draggable", element: <Draggable /> },
  {
    path: "/infinitescroll",
    name: "InfiniteScroll",
    element: <InfiniteScroll />,
  },
  { path: "/toast", name: "TriggerToast", element: <TriggerToast /> },
  { path: "/pagination", name: "Pagination", element: <Pagination /> },
  {
    path: "/InfiniteCarousel",
    name: "InfiniteCarousel",
    element: <InfiniteCarousel />,
  },
  { path: "/memo", name: "Memo (Parent)", element: <Parent /> },
  { path: "/sidebar", name: "Sidebar Root", element: <SideBar /> },
  { path: "/sidebar/:l1", name: "Sidebar L1", element: <SideBar /> },
  { path: "/sidebar/:l1/:l2", name: "Sidebar L2", element: <SideBar /> },
  { path: "/sidebar/:l1/:l2/:l3", name: "Sidebar L3", element: <SideBar /> },
  {
    path: "/sidebar/:l1/:l2/:l3/:l4",
    name: "Sidebar L4",
    element: <SideBar />,
  },
  { path: "/otp", name: "OTP", element: <OTP /> },
  { path: "/MemoryGame", name: "MemoryGame", element: <MemoryGame /> },
  { path: "/logo", name: "Logo", element: <Logo /> },
  {
    path: "/abortcontroller",
    name: "AbortController API",
    element: <AbortControllerCancelAPI />,
  },
  {
    path: "/TitleAndFuzzySearch",
    name: "Title Search",
    element: <TitleAndFuzzySearch />,
  },
  { path: "/progressbar", name: "Progress Bar", element: <ProgressBar /> },
  { path: "/usememo", name: "useMemo", element: <UseMemo /> },
  { path: "/usecallback", name: "useCallback", element: <UseCallBack /> },
  { path: "/useref", name: "useRef", element: <UseRef /> },
  {
    path: "/uselayouteffect",
    name: "useLayoutEffect",
    element: <UseLayoutEffect />,
  },
  { path: "/taskqu", name: "Task Queue", element: <TaskQueue /> },
  {
    path: "/reactprofiler",
    name: "React Profiler",
    element: <ReactProfiler />,
  },
  // {
  //   path: "/abc",
  //   name: "React Profiler",
  //   element: <ABCComponent />,
  // },
  {
    path: "/tictactoe",
    name: "Tictactoe",
    element: <Tictactoe />,
  },
  {
    path: "/snakeladder",
    name: "Snake and Ladder",
    element: <SnakeLadder />,
  },
  {
    path: "/folder",
    name: "Folder Structure",
    element: <FolderStructure />,
  },
];

const App = () => {
  return (
    // <ExampleContextProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Navigator />} />
        {routeConfig.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
    // </ExampleContextProvider>
    // <>
    //   <NavBar />
    //   <Router />
    // </>
  );
};

export default App;
