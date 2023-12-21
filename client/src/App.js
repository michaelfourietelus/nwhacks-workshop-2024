import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TELUS_LOGO from './assets/TELUS_LOGO.svg';

import Form from './components/Form';
import Grid from './components/Grid';

import './App.css';


const App = () => {
  const [sleepData, setSleepData] = useState([]);
  const [newEntry, setNewEntry] = useState({ day: '', startTime: '', endTime: '', score: '' });

  useEffect(() => {
    // Fetch sleep data from the MongoDB database
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/sleep'); // Replace with your actual API endpoint
        setSleepData(response.data);
      } catch (error) {
        console.error('Error fetching sleep data', error);
      }
    };

    fetchData();
  }, []);

  const handleNewEntryChange = (e) => {
    const { name, value } = e.target;
    setNewEntry({ ...newEntry, [name]: value });
  };

  const handleNewEntrySubmit = async () => {
    try {
      const response = await axios.post('/api/sleep', newEntry); // Replace with your actual API endpoint
      setSleepData([...sleepData, response.data]);
      setNewEntry({ day: '', startTime: '', endTime: '', score: '' }); // Reset the form
    } catch (error) {
      console.error('Error saving new sleep entry', error);
    }
  };

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
      <Grid sleepData={sleepData} daysOfWeek={daysOfWeek} />
      <Form
        newEntry={newEntry}
        handleNewEntryChange={handleNewEntryChange}
        dayOptions={dayOptions}
        handleNewEntrySubmit={handleNewEntrySubmit}
      />
    </div>
  );
};

export default App;