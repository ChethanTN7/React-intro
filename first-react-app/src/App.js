import "./App.css";
import FunctionComponent from "./pages/FunctionComponents";
import { Routes, Route } from "react-router-dom";
// HOC layouts
import BaseHoc from "./hoc/BaseHoc";

function App() {
  return (
    <Routes>
      <Route
        path="/func"
        element={
          <BaseHoc>
            <FunctionComponent />
          </BaseHoc>
        }
      ></Route>
    </Routes>
  );
}

export default App;
