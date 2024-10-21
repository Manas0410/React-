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
      </Routes>
    </Router>
  );
};

export default App;
1;
