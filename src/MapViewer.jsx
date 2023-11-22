import MapView from "@arcgis/core/views/MapView.js";
import Map from "@arcgis/core/Map";
import esriConfig from "@arcgis/core/config";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import { useEffect, useRef, useState } from "react";

esriConfig.apiKey =
  "AAPKc8c2724210bb416bbfd08a4d8f8387f2LH0wjbm-EntRAxTpaCxx4_VBop5PXsy9pFFQ3gJZQZD2qt74lmd-Ib8tpGHHXzFk";

const MapViewer = () => {
  const mapView = useRef(null);
  const [county, setCounty] = useState("");

  useEffect(() => {
    if (!!!mapView.current) return;
    const myMap = new Map({
      basemap: "topo",
    });

    const view = new MapView({
      center: [-119.4593, 36.9014],
      map: myMap,
      container: mapView.current,
      zoom: 5,
    });

    const layer = new FeatureLayer({
      url: "https://services7.arcgis.com/hlMdSb52QtwGdnlO/arcgis/rest/services/sb535dacresultsdatadictionary_f_2022xlsx_sb535_tract_all_data_2022/FeatureServer/0",
      outFields: ["Approximate_Location", "Total_Population", "Drinking_Water"],
    });

    layer.renderer = {
      type: "simple",
      symbol: {
        type: "simple-marker",
        size: 5,
        color: "blue",
      },
    };
    layer.popupTemplate = {
      content: "{Approximate_Location}",
    };
    view.on("click", async (e) => {
      const { results } = await view.hitTest(e);
      const arrayOfFilteredResults = results.filter(
        (result) => result.graphic.layer === layer
      );
      if (arrayOfFilteredResults.length > 0) {
        const graphic = arrayOfFilteredResults[0].graphic;
        const symbolAttributes = graphic.attributes;
        console.log(graphic.attributes);
        console.log(e.mapPoint.latitude);
        console.log(e.mapPoint.longitude);
        setCounty(symbolAttributes.Approximate_Location);
      }
    });
    myMap.add(layer);
    return () => myMap.destroy();
  }, [mapView]);

  return (
    <div>
      <div>{county}</div>
      <div ref={mapView} style={{ height: "100vh" }}></div>
    </div>
  );
};

export default MapViewer;
