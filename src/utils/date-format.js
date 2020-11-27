const getFullYear = async timestamp => {
  let date = new Date(timestamp)
  return `${date.getFullYear()}-${await addZero(date.getMonth() + 1)}-${await addZero(date.getDate())}`
}

const getFullHour = async timestamp => {
  let date = new Date(timestamp)
  return `${await addZero(date.getUTCHours())}:${await addZero(date.getMinutes())}:${await addZero(date.getSeconds())}`
}

const addZero = async num => {
  return String(num).padStart(2, '0')
}

module.exports = {
  getFullYear,
  getFullHour
}