import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TELUS_LOGO from './assets/TELUS_LOGO.svg';

import Form from './components/Form';
import Grid from './components/Grid';

import './App.css';


const App = () => {

  // React Hooks
  const [sleepData, setSleepData] = useState([]);
  const [newEntry, setNewEntry] = useState({ day: '', startTime: '', endTime: '', score: '' });

  useEffect(() => {
    // Fetch sleep data from the MongoDB database
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/getSleepData'); 
        setSleepData(response.data);
      } catch (error) {
        console.error('Error fetching sleep data', error);
      }
    };
    fetchData();
  }, []);

  const handleNewEntrySubmit = async () => {
    try {
      const response = await axios.post('/api/addSleepData', newEntry); // Replace with your actual API endpoint
      setSleepData([...sleepData, response.data]);
      setNewEntry({ day: '', startTime: '', endTime: '', score: '' }); // Reset the form
    } catch (error) {
      console.error('Error saving new sleep entry', error);
    }
  };

  const handleNewEntryChange = (e) => {
    const { name, value } = e.target;
    setNewEntry({ ...newEntry, [name]: value });
  };

  // Create options for the days of the week dropdown
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 
  // Create mapping dayOptions that maps the day to an index to be used when selecting a day on the form
  const dayOptions = daysOfWeek.map((day, index) => (
    <option key={index} value={day}>{day}</option>
  ));

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