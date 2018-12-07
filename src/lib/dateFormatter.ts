
const dateFormatter = (date) => {
  if (date.length !== 30) { return }

  const segments = date.split(" ")

  return {
    day: segments[2],
    month: segments[1],
    time: segments[2],
    weekday: segments[0],
    year: segments[5],
  }
} 

export default dateFormatter;
