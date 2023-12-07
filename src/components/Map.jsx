import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10, 0, 0],
        scale: 900,
        center: [20, 20],
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies
        geography="/features.json"
        fill="#300d5c"
        stroke="#efe2ff"
        strokeWidth={1}
        
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      
      <Annotation
        subject={[28.8206, 29.8025]} // Update the subject to the coordinates of Egypt
        dx={-0}
        dy={-60}
        connectorProps={{
          stroke: "#fffff2",
          strokeWidth: 3,
          strokeLinecap: "round",
          
        }}
        
      >
        <text className=" font-bold text-pink-100 text-lg" x="35" y="105" textAnchor="end" alignmentBaseline="middle" fill="#fff">
          {"Egypt"} {/* Update the text content to "Egypt" */}
        </text>
      </Annotation>

      <Annotation
        subject={[47.4818, 29.3117]} // Update the subject to the coordinates of Kuwait
        dx={-0}
        dy={10}
        connectorProps={{
          stroke: "#fffff2",
          strokeWidth: 3,
          strokeLinecap: "round",
          
        }}
        
      >
        <text className=" font-bold text-pink-100 text-sm" x="20" y="15" textAnchor="end"  fill="#fff">
          {"Kuwait"} {/* Update the text content to "Egypt" */}
        </text>
      </Annotation>

      <Annotation
        subject={[35.2332,31.9522, ]} // Update the subject to the coordinates of Kuwait
        dx={-0}
        dy={-10}
        connectorProps={{
          stroke: "#fffff2",
          strokeWidth: 4,
          strokeLinecap: "round",
          
        }}
        
      >
        <text className=" font-bold text-pink-100 text-sm" x="50" y="35" textAnchor="end"  fill="#fff">
          {"Palestine"} {/* Update the text content to "Egypt" */}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
