import MapComponent from "./MapComponent";
import "./App.css";

import "@esri/calcite-components/dist/calcite/calcite.css";
import "@arcgis/core/assets/esri/css/main.css";

const App = () => {
  return (
    <div className="App">
      <MapComponent />
    </div>
  );
};
export default App;
