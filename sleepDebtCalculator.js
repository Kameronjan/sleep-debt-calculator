function getSleepHours(day) {
  if (day === "monday") {
    return 8;
  } else if (day === "tuesday") {
    return 7;
  } else if (day === "wednesday") {
    return 6;
  } else if (day === "thursday") {
    return 8;
  } else if (day === "friday") {
    return 5;
  } else if (day === "saturday") {
    return 9;
  } else if (day === "sunday") {
    return 7;
  }
}

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

function getIdealSleepHours() {
  const idealHours = 8;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep.");
  } else if (actualSleepHours > idealSleepHours) {
    console.log("You got" + (idealSleepHours - actualSleepHours) + "hours of sleep too much.");
  } else if (actualSleepHours < idealSleepHours) {
    console.log("You are missing" + (actualSleepHours - idealSleepHours) + "hours of sleep.");
  }
};
