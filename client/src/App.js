import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TELUS_LOGO from './assets/TELUS_LOGO.svg';
import './App.css';


const App = () => {


  
  // Create options for the days of the week dropdown
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOptions = daysOfWeek.map((day, index) => (
    <option key={index} value={day}>{day}</option>
  ));

  // Create a grid for the 7 days of the week
  const grid = daysOfWeek.map(day => {
    const dayData = sleepData.find(d => d.day.toLowerCase() === day.toLowerCase());
    return (
      <div key={day} className="day">
        <h3>{day}</h3>
        {dayData ? (
          <>
            <p>Start Time: {dayData.startTime}</p>
            <p>End Time: {dayData.endTime}</p>
            <p>Sleep Score: {dayData.score}</p>
          </>
        ) : (
          <p className="no-data">No data</p>
        )}
      </div>
    );
  });

  return (
    <div className="container">
      <img src={TELUS_LOGO} alt="TELUS Logo" className="logo" />
      <h1>Sleep Tracker</h1>
      <div className="grid">
        {grid}
      </div>
      
      {/* Add page contents here */}

    </div>
  );
};

export default App;