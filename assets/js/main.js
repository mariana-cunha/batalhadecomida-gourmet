// import {pF} from "./pFDB";

let imgPlate = document.querySelectorAll('.img-plate');
let namePlate = document.querySelectorAll('.plate-name');
let option = document.querySelectorAll('.option');
let j = 0;
let i = 0;
let chosenList;

const onClick = (button) => {
    chosenList = button;

    document.querySelector('#container-home-page').setAttribute('id', 'container-home-page-hide');
    document.querySelector('#container-main-page-hide').setAttribute('id', 'container-main-page');

    button.forEach((element) => {
        imgPlate[j].setAttribute('src', element.src);
        imgPlate[j].setAttribute('value', element.name);
        imgPlate[j].setAttribute('onclick', 'chosenMeal(chosenList, this.value)');
        namePlate[j].textContent = element.name;
        j++;
    });
};

const chosenMeal = (list, value) => {
    console.log(list, value);
    let temp = list.find(ele => ele.name === value);
    console.log(temp);
    // option[i].setAttribute('src', temp.src);
    i++;
};
// DB TEMPORARY
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
    },
    {
        name: 'Peixe',
        src: 'assets/DSC_0097.jpg',
    },
    {
        name: 'nhoque',
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



