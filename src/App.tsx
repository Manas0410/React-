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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/search" element={<Draggable />} />
        <Route path="/infinitescroll" element={<InfiniteScroll />} />
        <Route path="/toast" element={<TriggerToast />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/InfiniteCarousel" element={<InfiniteCarousel />} />
        <Route path="/memo" element={<Parent />} />
        <Route path="/sidebar" element={<SideBar />} />
        <Route path="/sidebar/:l1" element={<SideBar />} />
        <Route path="/sidebar/:l1/:l2" element={<SideBar />} />
        <Route path="/sidebar/:l1/:l2/:l3" element={<SideBar />} />
        <Route path="/sidebar/:l1/:l2/:l3/:l4" element={<SideBar />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/MemoryGame" element={<MemoryGame />} />
        <Route path="/logo" element={<Logo />} />
        <Route path="/abortcontroller" element={<AbortControllerCancelAPI />} />
        <Route path="/TitleAndFuzzySearch" element={<TitleAndFuzzySearch />} />
        <Route path="/progressbar" element={<ProgressBar />} />
        <Route path="/usememo" element={<UseMemo />} />
        <Route path="/usecallback" element={<UseCallBack />} />
      </Routes>
    </Router>
  );
};

export default App;
