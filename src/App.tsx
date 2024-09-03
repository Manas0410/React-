import Draggable from "./Draggable/Draggable";
import InfiniteScroll from "./InfiniteScroll/InfiniteScroll";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TriggerToast from "./ToastComp/TriggerToast";
import Pagination from "./Pagination/Pagination";
import InfiniteCarousel from "./InfiniteCarousel/InfiniteCarousel";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/search" element={<Draggable />} />
        <Route path="/infinitescroll" element={<InfiniteScroll />} />
        <Route path="/toast" element={<TriggerToast />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/InfiniteCarousel" element={<InfiniteCarousel />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
1;
