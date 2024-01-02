import React from "react";

const Form = ({
  newEntry,
  handleNewEntryChange,
  dayOptions,
  handleNewEntrySubmit,
}) => {
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
      <FormGroup label="Sleep Hours">
        <input
          type="number"
          id="hours"
          name="hours"
          value={newEntry.hours}
          onChange={handleNewEntryChange}
          placeholder="Hours"
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
