let form = document.querySelector('form')
// console.log(form)
form.addEventListener('submit', function (e) {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if (height < 0 || height === '' || isNaN(height)) {
        result.innerHTML = `Enter a Valid height`
    }
    else if (weight < 0 || weight === '' || isNaN(weight)) {
        result.innerHTML = `Enter a Valid weight`
    }
    else{
        let bmi = (weight/((height*height)/10000)).toFixed(2)
        if(bmi<18.5){
            result.innerHTML = `BMI is ${bmi} and you are underweight`
        }
        else if(bmi>=18.5 && bmi<24.9){
            result.innerHTML = `BMI is ${bmi} and you are in Normal Weight`
        }
        else if(bmi>=25 && bmi<29.9){
            result.innerHTML = `BMI is ${bmi} and you are overweight`
        }
        else{
            result.innerHTML = `BMI is ${bmi} and you are obese`
        }
    }
})