import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TELUS_LOGO from './assets/TELUS_LOGO.svg';
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
      <div className="grid">
        {grid}
      </div>
      <div className="form">
        <div className="form-group">
          <label htmlFor="day">Day:</label>
          <select
            id="day"
            name="day"
            value={newEntry.day}
            onChange={handleNewEntryChange}
            placeholder="Day"
          >
            <option value="">Select a day</option>
            {dayOptions}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="startTime">Start Sleep:</label>
          <input
            type="time"
            id="startTime"
            name="startTime"
            value={newEntry.startTime}
            onChange={handleNewEntryChange}
            placeholder="Start Time"
          />
        </div>
        <div className="form-group">
          <label htmlFor="endTime">End Sleep:</label>
          <input
            type="time"
            id="endTime"
            name="endTime"
            value={newEntry.endTime}
            onChange={handleNewEntryChange}
            placeholder="End Time"
          />
        </div>
        <div className="form-group">
          <label htmlFor="score">Sleep Score:</label>
          <input
            type="number"
            id="score"
            name="score"
            value={newEntry.score}
            onChange={handleNewEntryChange}
            placeholder="Score"
          />
        </div>
        <button onClick={handleNewEntrySubmit}>Record New Sleep Entry</button>
      </div>
    </div>
  );
};

export default App;