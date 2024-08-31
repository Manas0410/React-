import Draggable from "./Draggable/Draggable";
import InfiniteScroll from "./InfiniteScroll/InfiniteScroll";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TriggerToast from "./ToastComp/TriggerToast";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/search" element={<Draggable />} />
        <Route path="/infinitescroll" element={<InfiniteScroll />} />
        <Route path="/toast" element={<TriggerToast />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
1;
