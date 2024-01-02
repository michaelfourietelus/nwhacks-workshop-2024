import axios from 'axios';

const backendUrl = 'http://localhost:8080';

const getSleeps = async () => {
  let results = {};
  try {
    results = await axios.get(`${backendUrl}/sleeps`);
    return results.data;
  } catch (err) {
    console.log(err);
    return results;
  }
};

const deleteSleep = async (id) => {
  let results = {};
  try {
    results = await axios.delete(`${backendUrl}/sleeps/${id}`);
    return results.data;
  } catch (err) {
    console.log(err);
    return results;
  }
};

const createSleep = async (day, hours, score) => {
  let results = {};
  try {
    results = await axios.post(`${backendUrl}/sleeps`, { day: day, hours: hours, score: score });
    return results.data;
  } catch (err) {
    console.log(err);
    return results;
  }
};

export { getSleeps, deleteSleep, createSleep };
