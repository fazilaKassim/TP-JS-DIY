const URL = "https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json";
const ul = document.getElementById("states");
var states ;
axios.get(URL).then(res => {
    states = Object.values(res.data);
    display(res.data);

}).catch(err => console.log(err));
const input = document.getElementById("text");

function display(states) {
    videInner(ul);
    states = Object.values(states);
    states.forEach(state => {
        ul.innerHTML  += `<li> ${state}</li>`;
    });

    
}

function chercheEtat(states){
    var valeurInput = input.value;

    var resultatFiltre = states.filter(state => {return state.includes(valeurInput)});
    display(resultatFiltre);
}

function videInner(elemnt)
{
    elemnt.innerHTML = "";
}

input.oninput = () => {
    console.log(states)
    chercheEtat(states);
}