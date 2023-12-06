function bmiCalculator (weight, height) {

    var bmi = weight / (height * height)
    var interpretation

    bmi = Math.round(bmi)
       
    if (bmi < 18.5) {
        interpretation = "Your BMI is "+ bmi +", so you are underweight."
    } else if(bmi >= 18.5 && bmi < 24.9){
        interpretation = "Your BMI is "+ bmi +", so you have a normal weight."
    }else {
        interpretation = "Your BMI is "+ bmi +", so you are overweight."
    }
    
    console.log(interpretation)
    return interpretation;
}

bmiCalculator(67,1.8)
