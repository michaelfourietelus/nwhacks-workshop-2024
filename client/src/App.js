import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TELUS_LOGO from './assets/TELUS_LOGO.svg';

import Form from './components/Form';
import Grid from './components/Grid';

import './App.css';


const App = () => {

  // React Hooks
  // sleepData hook
  // newEntry hook

  // Set the sleepData variable with data from our backend
  useEffect(() => {
    
  }, []);

  const handleNewEntrySubmit = async () => {
    try {
     
    } catch (error) {
    }
  };

  const handleNewEntryChange = (e) => {
    
  };

  // Create options for the days of the week dropdown
  //const daysOfWeek
 
  // Create mapping dayOptions that maps the day to an index to be used when selecting a day on the form
  //const dayOptions

  return (
    <div className="container">
      <img src={TELUS_LOGO} alt="TELUS Logo" className="logo" />

      {/* Fill out remaining code here */}

    </div>
  );
};

export default App;