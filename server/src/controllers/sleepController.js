const { addValueToDb, getAllValuesFromDb, updateValueInDb, deleteValueFromDb } = require("../services/dbService")

const getSleeps = async () => {
  const values = await getAllValuesFromDb()
  return values
}

const addSleep = async (day, hours, score) => {
  return await addValueToDb(day, hours, score)
}

const updateSleep = async (id, day, hours, score) => {
  return await updateValueInDb(id, day, hours, score)
}

const deleteSleep = async (id) => {
  return await deleteValueFromDb(id)
}

module.exports = { getSleeps, addSleep, updateSleep, deleteSleep }