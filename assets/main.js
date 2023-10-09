function calculateAge() {
  const dayInput = document.getElementById("day").value;
  const monthInput = document.getElementById("month").value;
  const yearInput = document.getElementById("year").value;

  // Clear existing error messages
  document.getElementById("dayError").textContent = "";
  document.getElementById("monthError").textContent = "";
  document.getElementById("yearError").textContent = "";
  document
    .querySelector(
      'label[for="day"]',
      'label[for="month"]',
      'label[for="year"]'
    )
    .classList.remove("error-label");
  document
    .getElementById("day", "month", "year")
    .classList.remove("red_border");

  // Check if any of the input fields are empty
  if (dayInput === "" || monthInput === "" || yearInput === "") {
    if (dayInput === "") {
      document.getElementById("dayError").textContent =
        "This field is required.";
      document.querySelector('label[for="day"]').classList.add("error-label");
      document.getElementById("day").classList.add("red_border");
    }
    if (monthInput === "") {
      document.getElementById("monthError").textContent =
        "This field is required.";
      document.querySelector('label[for="month"]').classList.add("error-label");
      document.getElementById("month").classList.add("red_border");
    }
    if (yearInput === "") {
      document.getElementById("yearError").textContent =
        "This field is required.";
      document.querySelector('label[for="year"]').classList.add("error-label");
      document.getElementById("year").classList.add("red_border");
    }
    return;
  }

  // Parse input values to integers
  const day = parseInt(dayInput);
  const month = parseInt(monthInput);
  const year = parseInt(yearInput);

  // Check for valid day
  if (day <= 0 || day > 31) {
    document.getElementById("dayError").textContent = "Must be a valid day.";
    document.querySelector('label[for="day"]').classList.add("error-label");
  }
  // Check for valid month
  if (month <= 0 || month > 12) {
    document.getElementById("monthError").textContent =
      "Must be a valid month.";
    document.querySelector('label[for="month"]').classList.add("error-label");
  }
  // Check for valid year
  if (year <= 0 || year > 2050) {
    document.getElementById("yearError").textContent = "Must be a valid year.";
    document.querySelector('label[for="year"]').classList.add("error-label");
  }

  // If any of the fields have errors, return early
  if (
    document.getElementById("dayError").textContent ||
    document.getElementById("monthError").textContent ||
    document.getElementById("yearError").textContent
  ) {
    return;
  }

  // Calculate age as before
  const birthDate = new Date(year, month - 1, day);
  const currentDate = new Date();

  const ageInMilliseconds = currentDate - birthDate;
  const ageInSeconds = ageInMilliseconds / 1000;
  const ageInMinutes = ageInSeconds / 60;
  const ageInHours = ageInMinutes / 60;
  const ageInDays = ageInHours / 24;
  const ageInMonths = ageInDays / 30.44; // Average number of days in a month
  const ageInYears = ageInMonths / 12;

  const yearsElement = document.querySelector(".title1 span");
  const monthsElement = document.querySelector(".title2 span");
  const daysElement = document.querySelector(".title3 span");

  yearsElement.textContent = Math.floor(ageInYears);
  monthsElement.textContent = Math.floor(ageInMonths % 12);
  daysElement.textContent = Math.floor(ageInDays % 30.44); // Remainder of days
}

document.getElementById("day").value = "";
document.getElementById("month").value = "";
document.getElementById("year").value = "";
