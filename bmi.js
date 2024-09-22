function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    if (!isNaN(weight) && !isNaN(height) && weight > 0 && height > 0) {
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

        const circle = document.querySelector('.circle');
        const bmiValueElement = document.getElementById('bmiValue');
        const bmiCategoryElement = document.getElementById('bmiCategory');

        // Set stroke-dasharray based on BMI (max 40 for the circular bar)
        const percentage = Math.min((bmi / 40) * 100, 100);
        circle.style.strokeDasharray = `${percentage}, 100`;

        // Update BMI value and category text
        bmiValueElement.innerHTML = bmi;

        if (bmi < 18.5) {
            bmiCategoryElement.innerHTML = 'Underweight';
            circle.style.stroke = '#00aaff';  // Blue for underweight
        } else if (bmi < 24.9) {
            bmiCategoryElement.innerHTML = 'Normal';
            circle.style.stroke = '#00ff00';  // Green for normal
        } else if (bmi < 29.9) {
            bmiCategoryElement.innerHTML = 'Overweight';
            circle.style.stroke = '#ffae42';  // Orange for overweight
        } else {
            bmiCategoryElement.innerHTML = 'Obese';
            circle.style.stroke = '#ff4e42';  // Red for obese
        }
    } else {
        document.getElementById('bmiResult').innerHTML = "Please enter valid values.";
    }
}