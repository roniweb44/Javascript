function bmi() {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    

    let resultBmi = weight / (height/100) ** 2;
    let final = resultBmi.toFixed(2);

    if (final < 18.5) {
        final = final + " Underweight";
    } else if (final >= 18.5 && final < 24.9) {
        final = final + " Normal Range";
    } else if (final >= 25 && final < 29.9) {
        final = final + " Overweight";
    } else if (final >= 30 && final < 39.9) {
        final = final + " Obesity";
    } else if (final >= 40) {
        final = final + " Severe Obesity";
    } else {
        final = final + " Enter Valid Input";
    }

    document.getElementById("msg").innerHTML = final;

}