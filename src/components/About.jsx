import React from "react";
import { Outlet } from "react-router-dom";
import { Chart } from "react-google-charts";

const About = () => {
  const popularity = [
    ["Country", "Popularity"],
    ["United Kingdom", 33.8],
    ["Germany", 35.5],
    ["Finland", 39.7],
    ["Australia", 42.7],
    ["Netherlands", 43.6],
    ["Sweden", 50.2],
    ["Denmark", 54.9],
    ["Canada", 56.3],
    ["Norway", 72.4],
    ["France", 42.4],
    ["Argentina", 20.1],
    ["Chile", 19.6],
    ["Mexico", 30.8],
    ["Brazil", 34.9],
    ["Spain", 40.1],
    ["Denmark", 70.6],
    ["New Zeland", 69.4],
    ["United States", 80.3],
  ];

  const subscriptions = [
    ["Year", "Subscriptions"],
    [2011, 21.5],
    [2012, 25.7],
    [2013, 25.6],
    [2014, 47.9],
    [2015, 62.7],
    [2016, 79.9],
    [2017, 99],
    [2018, 124.3],
    [2019, 151.5],
    [2020, 192.9],
    [2021, 219.7],
    [2022, 230.7],
    [2023, 232.5],
  ];
  const options = {
    title: "Company Performance",
    curveType: "function",
    legend: { position: "bottom" },
  };
  return (
    <div>
      <div className="charts">
        <div className="worldMap">
          <h2 style={{ color: "white" }}>Popularity by country</h2>
          <Chart
            chartEvents={[
              {
                eventName: "select",
                callback: ({ chartWrapper }) => {
                  const chart = chartWrapper.getChart();
                  const selection = chart.getSelection();
                  if (selection.length === 0) return;
                  const region = popularity[selection[0].row + 1];
                  console.log("Selected : " + region);
                },
              },
            ]}
            chartType="GeoChart"
            width="1300px"
            height="860px"
            data={popularity}
          />
        </div>
        <div className="lineChart">
          <h2 style={{ color: "white" }}>Subscriptions over time</h2>
          <Chart
            chartType="LineChart"
            width="1300px"
            height="400px"
            data={subscriptions}
            options={options}
          />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default About;

//00:29
