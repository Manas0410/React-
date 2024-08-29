import Draggable from "./Draggable/Draggable";
import PersistOnSearch from "./PersistOnSearch/PersistOnSearch";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/search" element={<Draggable />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
1;
