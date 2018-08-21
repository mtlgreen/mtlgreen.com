const getFormattedDate = date => {
  let day = new Date(date).toLocaleString('en-US', { day: 'numeric' })
  let month = new Date(date).toLocaleString('en-US', { month: 'short' })
  let year =
    new Date(date).getFullYear() < 2018
      ? new Date(date).toLocaleString('en-US', { year: 'numeric' })
      : null

  return { day, month, year }
}

export default getFormattedDate
