function calcNumber() {
    let userOperator = prompt("Choose an operation \n + for addition \n - for substraction \n * for multiplication \n / for division",)
    if (userOperator == "+")
    { 
        let number1 = prompt("enter first number");
        let number2 = prompt("enter second number");
        let newnum1 = parseInt(number1 , 10)
        let newnum2 = parseInt(number2, 10)
        let answer = newnum1 + newnum2 ;
        alert("the answer is" + " " + answer);

    }
    else if (userOperator == "-")
    {
        let number1 = prompt("enter first number");
        let number2 = prompt("enter second number");
        let answer = number1 - number2 ;
        alert("the answer is" + " " + answer);

    }
    else if (userOperator == "*")
{
    let number1 = prompt("enter first number");
        let number2 = prompt("enter second number");
        let answer = number1 * number2 ;
        alert("the answer is" + " " + answer);
}
else if (userOperator == "/")
{
    let number1 = prompt("enter first number");
        let number2 = prompt("enter second number");
        let answer = number1 / number2 ;
        alert("the answer is" + " " + answer);
}
else {
    alert("invalid input. please try again")
}

}