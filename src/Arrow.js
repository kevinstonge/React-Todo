import React from "react";
import "./Arrow.scss";
class Arrow extends React.Component {
  render() {
    return (
      <svg viewBox="0 0 200 200" className="arrow">
        <g groupmode="layer" id="layer2" label="Layer 2">
          <path
            className="dark"
            d="M 4.2393378,200.13364 201.25395,102.66526 4.2393378,4.4108457 47.402488,102.14123 Z"
          />
        </g>
        <g
          label="Layer 1"
          groupmode="layer"
          id="layer1"
          transform="translate(0,-97)"
        >
          <path
            className="light"
            d="M 0.26726951,97.349664 197.28189,194.81804 0.26726951,293.07245 43.430418,195.34207 Z"
            id="path5069"
            connector-curvature="0"
          />
          <path
            className="dark"
            d="M 24.894097,121.81501 172.65506,194.91629 24.894097,268.6071 57.266458,195.30932 Z"
            id="path5069-0"
            connector-curvature="0"
          />
          <path
            className="light"
            d="M 42.93945,140.91971 153.76018,195.74567 42.93945,251.01378 67.218721,196.04044 Z"
            id="path5069-0-7"
            connector-curvature="0"
          />
        </g>
      </svg>
    );
  }
}
export default Arrow;
