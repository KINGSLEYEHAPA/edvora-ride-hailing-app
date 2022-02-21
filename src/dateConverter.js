export const dataConverter = (theDate) => {
  let date = new Date(theDate).getDate();
  let month = new Date(theDate).getMonth();
  let year = new Date(theDate).getFullYear();
  let hours = new Date(theDate).getHours();
  let mins = new Date(theDate).getMinutes();

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  if (date < 10 && date >= 0) {
    date = "0" + date;
  } else if (date === 1 || date === 21 || date === 31) {
    date = date + "st";
  } else if (date === 2 || date === 22) {
    date = date + "nd";
  } else if (date === 3 || date === 23) {
    date = date + "rd";
  } else {
    date = date + "th";
  }

  if (hours < 10 && hours >= 0) {
    hours = "0" + hours;
  } else if (mins < 10 && mins >= 0) {
    mins = "0" + mins;
  }
  let today = `${date} ${months[month]} ${year} ${hours}:${mins} `;

  return today;
};
