import React from 'react';

const Grid = ({ sleepData, daysOfWeek }) => {
  return (
    <div className="grid">
      {daysOfWeek.map(day => {
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
      })}
    </div>
  );
};

export default Grid