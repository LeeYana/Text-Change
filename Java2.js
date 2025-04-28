function checkInput() {

    var input = document.getElementById("userInput").value;

    if (isNaN(input) || input.trim() === "") {
        alert("Please put a number!");
    } else {

        var number = Number(input);

        if (number < 10) {
            alert("Number is lower than 10");
        } else {
            alert("Number is higher than 10");
        }
    }
}
