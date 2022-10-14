let form =document.querySelector("form");
let input =document.querySelector("input");
let result =document.querySelector("#result");

form.addEventListener("submit", (event)=> {
    event.preventDefault();
    let number = input.value;
    let translate = fizzBuzz(number);
    // console.log ("translate", translate)
    result.textContent = translate
})

function fizzBuzz(number){
        if (number % 3 ===0 && number %5 ===0){
            console.log("This is divisiable by 3 and 5")
            return "fizz buzz";
        }  else if (number %5 ===0){
            // console.log("buzz")
            return "buzz";
        }  else if (number %3 ===0 ){
            // console.log("fizz")
            return "fizz";
        } 
        else {
            return number;
        // console.log(number)
        }
    }


fizzBuzz();