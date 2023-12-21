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
                <input
                    type="time"
                    id="endTime"
                    name="endTime"
                    value={newEntry.endTime}
                    onChange={handleNewEntryChange}
                    placeholder="End Time"
                />
            </FormGroup>
            <FormGroup label="Sleep Score">
                <input
                    type="number"
                    id="score"
                    name="score"
                    value={newEntry.score}
                    onChange={handleNewEntryChange}
                    placeholder="Score"
                />
            </FormGroup>
            <button onClick={handleNewEntrySubmit}>Record New Sleep Entry</button>
        </div>
    );
};

export default Form;