// choose_state.addEventListener("change",
// function(){document.getElementById("bod").innerText="CoronaWeb"})


// function state_asm(){
//     document.getElementById("bod").innerText="Assam"
// }

function getOption() {
    selectElement = document.querySelector('#choose_state');

    output = selectElement.value;

    // document.querySelector('.output').textContent = output;
} 

function display(){
    getOption();
    ans = "You selected " + output;
    document.querySelector('.output').textContent = ans;
}


document.getElementById('box1').innerText="Cases"