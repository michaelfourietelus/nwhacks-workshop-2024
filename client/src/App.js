import React, { useState, useEffect } from "react";
import TELUS_LOGO from "./assets/TELUS_LOGO.svg";

import Form from "./components/Form";
import Grid from "./components/Grid";

import "./App.css";

import { createSleep, deleteSleep, getSleeps } from "./services/sleepService";

const App = () => {
  // React Hooks
  // sleepData initializes to empty array
  // newEntry initializes to an object with three variables, day, hours, and score,
  // all with values of empty strings
  const [sleepData, setSleepData] = ;
  const [newEntry, setNewEntry] = ;

  // Set the sleepData variable with data from our backend
  const getData = async () => {
    const result = await getSleeps();
    // Assign sleepData with the value of result bellow
  };

  useEffect(() => {
    getData();
  }, []);


  // Create a new sleep entry in the database and update the sleepData variable
  const handleNewEntrySubmit = async (e) => {
    const { name, value } = e.target;
    setNewEntry({ ...newEntry, [name]: value });
    await createSleep(newEntry.day, newEntry.hours, newEntry.score);
    setNewEntry({ day: "", startTime: "", endTime: "", score: "" }); // Reset the form
    await getData();
  };

  // Update the newEntry variable when the user types in the form
  const handleNewEntryChange = (e) => {
    // Assign const variables name and value to the value received from the form submission
    // Use the setNewEntry hook to set the new entry given the name and value
    // Very similar to handleNewEntrySubmit

  };


  // Delete a sleep entry from the database and update the sleepData variable
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

  // Map each day of the week to anelement for use in a dropdown menu.
  const dayOptions = daysOfWeek.map((day, index) => (
    <option key={index} value={day}>
      {day}
    </option>
  ));

  return (
    <div className="container">
      <img src={TELUS_LOGO} alt="TELUS Logo" className="logo" />
      <h1>Sleep Tracker</h1>
      {/* Fill out remaining code here */}
      {/* // Grid component that has props sleepData, daysOfWeek, and clearSleep */}
      
      {/* Form component that has props newEntry, dayOptions, handleNewEntryChange, and handleNewEntrySubmit */}

    </div>
  );
};

export default App;
