// Function to calculate age from date of birth
function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    const dob = new Date(dobInput);
    const today = new Date();

    if (!dobInput) return;  // If no date is selected, return early

    const years = today.getFullYear() - dob.getFullYear();
    const months = today.getMonth() - dob.getMonth();
    const days = today.getDate() - dob.getDate();

    let displayYears = years;
    let displayMonths = months;
    let displayDays = days;

    if (displayDays < 0) {
        displayMonths--;
        displayDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // Correct the day count
    }

    if (displayMonths < 0) {
        displayYears--;
        displayMonths += 12;
    }

    document.getElementById('years').value = displayYears;
    document.getElementById('months').value = displayMonths;
    document.getElementById('days').value = displayDays;

    // Also update the age fields to automatically update the date of birth input
    calculateDOB();
}

// Function to calculate date of birth from age
function calculateDOB() {
    const years = document.getElementById('age-years').value;
    const months = document.getElementById('age-months').value;
    const days = document.getElementById('age-days').value;

    // Ensure that all inputs are numbers
    if (years === '' || months === '' || days === '') return;

    const today = new Date();

    // Subtract the given years, months, and days from today's date
    let dob = new Date(today);
    dob.setFullYear(dob.getFullYear() - years);  // Subtract years
    dob.setMonth(dob.getMonth() - months);       // Subtract months
    dob.setDate(dob.getDate() - days);           // Subtract days

    // Format the result into a date (YYYY-MM-DD)
    const dobFormatted = dob.toISOString().split('T')[0];

    document.getElementById('dob-result').value = dobFormatted;

    // Update the age fields when the Date of Birth field is updated
    if (document.getElementById('dob').value !== '') {
        calculateAge();
    }
}
