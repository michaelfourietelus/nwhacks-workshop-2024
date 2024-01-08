import React, { useState, useEffect } from "react";
import TELUS_LOGO from "./assets/TELUS_LOGO.svg";

import Form from "./components/Form";
import Grid from "./components/Grid";

import "./App.css";

import { createSleep, deleteSleep, getSleeps } from "./services/sleepService";

const App = () => {
  // React Hooks

  // sleepData hook
  const [sleepData, setSleepData] = useState([]);
  // newEntry hook
  const [newEntry, setNewEntry] = useState({ day: "", hours: "", score: "" });

  const getData = async () => {
    const result = await getSleeps();
    setSleepData(result);
  };

  // Set the sleepData variable with data from our backend
  useEffect(() => {
    getData();
  }, []);

  const handleNewEntryChange = (e) => {
    const { name, value } = e.target;
    setNewEntry({ ...newEntry, [name]: value });
  };

  const handleNewEntrySubmit = async (e) => {
    const { name, value } = e.target;
    setNewEntry({ ...newEntry, [name]: value });
    await createSleep(newEntry.day, newEntry.hours, newEntry.score);
    setNewEntry({ day: "", startTime: "", endTime: "", score: "" }); // Reset the form
    await getData();
  };

  const clearSleep = async (index) => {
    await deleteSleep(index);
    await getData();
  };

  // Create options for the days of the week dropdown
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOptions = daysOfWeek.map((day, index) => (
    <option key={index} value={day}>
      {day}
    </option>
  ));

  return (
    <div className="container">
      <img src={TELUS_LOGO} alt="TELUS Logo" className="logo" />

      {/* Fill out remaining code here */}
      
    </div>
  );
};

export default App;
