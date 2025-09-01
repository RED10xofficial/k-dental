"use client";

import type { StatisticProps } from "antd";
import { Statistic } from "antd";
import CountUp from "react-countup";

const formatter: StatisticProps["formatter"] = (value) => (
  <CountUp
    end={value as number}
    separator=","
    style={{ fontSize: "32px", fontWeight: "bold", color: "#e60076" }}
  />
);

const Statistics: React.FC<{
  title: string;
  value: number;
}> = ({ title, value }) => {
  return <Statistic title={title} value={value} formatter={formatter} />;
};

export default Statistics;
