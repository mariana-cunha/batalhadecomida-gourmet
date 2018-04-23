// import {pF} from "./pFDB";

let chosenList;
let j = 1;
let imgPlate = document.getElementsByClassName('img-imgPlate');

const btnPF = document.getElementsByClassName('btn-pf');

btnPF.showList = (button) => {
    button.forEach((element) => {
        imgPlate.src = element.src;
        console.log(imgPlate);
        console.log(element);
        console.log(j);
        chosenList = button;
        j++;
    });
    console.log(chosenList);
    window.location.href = 'game.html';
};


let i = 1;
const chosenMeal = (list, value) => {
    let obj = list.indexOf(value);
    let temp = document.getElementsByClassName(i.toString());
    temp.innerHTML = `<img src='assets/DSC_0097.jpg' value=${obj.name} onclick="chosenMeal(chosenList, this.value)>`;
    console.log(temp);
    i++;
};

const pF = [
    {
        name: 'Lasanha',
        src: 'assets/DSC_0097.jpg',
    },
    {
        name: 'Peixe',
        src: 'assets/DSC_0097.jpg',
    },
    {
        name: 'nhoque',
        src: 'assets/DSC_0097.jpg',
    }
];
const drinks = [
    {
        name: 'caipirinha',
        src: 'assets/DSC_0097.jpg',
    },
    {
        name: 'beer',
        src: 'assets/DSC_0097.jpg',
    },
    {
        name: 'hibiscus tea',
        src: 'assets/DSC_0097.jpg',
    }
];
const desserts = [
    {
        name: 'brigadeiro',
        src: 'assets/DSC_0097.jpg',
    },
    {
        name: 'pizza choco',
        src: 'assets/DSC_0097.jpg',
    },
    {
        name: 'pudim',
        src: 'assets/DSC_0097.jpg',
    }
];
const breakfast = [
    {
        name: 'pao',
        src: 'assets/DSC_0097.jpg',
    },
    {
        name: 'cafe',
        src: 'assets/DSC_0097.jpg',
    },
    {
        name: 'sonho',
        src: 'assets/DSC_0097.jpg',
    }
];



