import React, { useEffect, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const LeetCodeStats = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch("https://leetcode-stats-api.herokuapp.com/Abhi_sharma_003")
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

  if (!stats) return <p>Loading...</p>;

  const totalData = [
    { name: "Easy", value: stats.easySolved },
    { name: "Medium", value: stats.mediumSolved },
    { name: "Hard", value: stats.hardSolved },
  ];

  const submissionsData = [
    { name: "Total Submissions", value: stats.totalSubmissions },
    { name: "Accepted", value: stats.totalAccepted },
    {
      name: "Rejected",
      value: stats.totalSubmissions - stats.totalAccepted,
    },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Total Questions Solved on LeetCode: {stats.totalSolved}</h2>

      <h3>Difficulty Breakdown</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={totalData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#c084f5" />
        </BarChart>
      </ResponsiveContainer>

      <h3>Submission Stats</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={submissionsData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {submissionsData.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LeetCodeStats;
