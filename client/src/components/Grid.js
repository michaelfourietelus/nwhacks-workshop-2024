import React from 'react';

const Grid = ({ sleepData, daysOfWeek, clearSleep }) => {
  return (
    <div className="grid">
      {daysOfWeek.map(day => {
        const dayData = sleepData.find(d => d.day.toLowerCase() === day.toLowerCase());
        return (
          <div key={day} className="day">
            
            {/* Fill out remaining code here */}

          </div>
        );
      })}
    </div>
  );
};

export default Grid