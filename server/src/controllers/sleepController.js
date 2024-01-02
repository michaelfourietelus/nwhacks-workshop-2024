const { addValueToDb, getAllValuesFromDb, deleteValueFromDb } = require("../services/dbService")

const getSleeps = async () => {
  const values = await getAllValuesFromDb()
  return values
}

const addSleep = async (day, hours, score) => {
  return await addValueToDb(day, hours, score)
}

const deleteSleep = async (id) => {
  return await deleteValueFromDb(id)
}

module.exports = { getSleeps, addSleep, deleteSleep }