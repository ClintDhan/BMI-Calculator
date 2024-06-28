function calculateBMI (weight, height) {
    return weight / Math.pow(height, 2);
}

alert("Your BMI is "+ Math.floor(calculateBMI(65, 1.8)));