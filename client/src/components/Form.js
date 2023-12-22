import React, { useState } from 'react';

const Form = ({ newEntry, handleNewEntryChange, dayOptions, handleNewEntrySubmit }) => {

    const FormGroup = ({ label, children }) => {
        return (
            <div className="form-group">
                <label htmlFor={label}>{label}:</label>
                {children}
            </div>
        );
    };

    return (
        <div className="form">
            <FormGroup label="Day">
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
            </FormGroup>
            <FormGroup label="Start Sleep">
                <input
                    type="time"
                    id="startTime"
                    name="startTime"
                    value={newEntry.startTime}
                    onChange={handleNewEntryChange}
                    placeholder="Start Time"
                />
            </FormGroup>
            <FormGroup label="End Sleep">
                     
                {/* Fill out remaining code here */}

            
            </FormGroup>
            <FormGroup label="Sleep Score">
                      
                {/* Fill out remaining code here */}

            
            </FormGroup>
            <button onClick={handleNewEntrySubmit}>Record New Sleep Entry</button>
        </div>
    );
};

export default Form;