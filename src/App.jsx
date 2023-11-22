import MapComponent from "./MapComponent";
import "./App.css";
// import { useSelector, useDispatch } from "react-redux";
// import { increment } from "./features/CounterSlice";

import "@esri/calcite-components/dist/calcite/calcite.css";
import "@arcgis/core/assets/esri/css/main.css";

const App = () => {
  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();

  return (
    <div className="App">
      <MapComponent />
    </div>
  );
};
export default App;
