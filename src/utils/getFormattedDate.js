const getFormattedDate = date => {
  let weekDay = new Date(date).toLocaleString('en-US', { weekday: 'short' })
  let year =
    new Date(date).getFullYear() < 2018
      ? new Date(date).toLocaleString('en-US', { year: 'numeric' })
      : ''
  let month = new Date(date).toLocaleString('en-US', { month: 'short' })
  let monthLong = new Date(date).toLocaleString('en-US', { month: 'long' })
  let day = new Date(date).toLocaleString('en-US', {
    day: 'numeric',
  })
  let time = new Date(date).toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
  })

  let timeShort = time.substring(0, time.length - 2)

  return { weekDay, year, month, monthLong, day, time, timeShort }
}

export default getFormattedDate
