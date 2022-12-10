function BMI(weight,height){
let x = weight / (height * height)
return x
}

// let result = BMI(50,150)
// console.log(result)

console.log(BMI(50,150))


function Status(BMI){
 if (BMI<18.5)
 return("لديك نقص في الوزن")
 else if (BMI>18.5 && BMI< 25)
 return("وزنك صحي")
 else(BMI > 25)
 return ("لديك زيادة في الوزن")
}

function calculate(){
   let weight =  document.getElementById("weight").value
    let height = document.getElementById("height").value
    let bmiResult= BMI(weight,height)
    let desc = Status(bmiResult)

    return document.getElementById("result").innerText = bmiResult+ " "+ desc;

}

