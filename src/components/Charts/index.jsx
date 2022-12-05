import React from "react";
import { Line } from "react-chartjs-2";
function Charts({ chartData }) {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Line Chart</h2>
      <Line
        data={chartData}
        
      />
    </div>
  );
}
export default Charts;