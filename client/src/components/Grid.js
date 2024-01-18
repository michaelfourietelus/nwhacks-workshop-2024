import React from 'react';

const Grid = ({ sleepData, daysOfWeek, clearSleep }) => {
  console.log(sleepData)
  return (
    <div className="grid">
      {daysOfWeek.map(day => {
          const dayData = sleepData.find(d => d.day.toLowerCase() === day.toLowerCase());
        return (
          <div key={day} className="day">
            <h3>{day}</h3>
            {dayData ? (
              <>
                <p>Sleep Hours: {dayData.hours}</p>
                <p>Sleep Score: {dayData.score}</p>
                <button onClick={() => clearSleep(dayData._id)}>Clear</button>
              </>
            ) : (
              <p className="no-data">No data</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Grid