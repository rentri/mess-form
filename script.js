document.getElementById('veg-submit').addEventListener('click', countBSelect())

var bRadio = document.querySelectorAll('input[name="b_choose"]');

function countBSelect() {
    let i = 0;
    while (i < andRadio.length) {
        if (andRadio[i].checked) {
            i +=1;
        }
    }

    if (i<8) {
        console.log("is less") // doesnt work 
    } else {
        console.log("is not less")
    }
}

