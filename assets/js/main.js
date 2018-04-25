// import {pF} from "./pFDB";

let imgPlate = document.querySelectorAll('.img-plate');
let namePlate = document.querySelectorAll('.plate-name');
let j = 0;
let chosenList;

//-------------------------------------------Show first List------------------------------------------------------------
const showChosenList = (button) => {
    chosenList = button;

    document.querySelector('#container-home-page').setAttribute('id', 'container-home-page-hide');
    document.querySelector('#container-main-page-hide').setAttribute('id', 'container-main-page');

    button.forEach((element) => {
        setElement(element);
    });
};

//-------------------------------------------Show Chosen Meal-----------------------------------------------------------
const showChosenMeal = (list, value) => {
    let elementFounded = list.find(ele => ele.name === value);
    setElement(elementFounded);
};

//--------------------------------------Function to set Attributes------------------------------------------------------
const setElement = (element) => {
    if (j === (chosenList.length * 2) - 1) {
        console.log(j);
        // change page;
        return;
    }
    imgPlate[j].setAttribute('src', element.src);
    imgPlate[j].setAttribute('alt', element.name);
    imgPlate[j].setAttribute('onclick', 'showChosenMeal(chosenList, this.alt)');
    namePlate[j].textContent = element.name;
    j++;
};

//--------------------------------------------DB Temporary--------------------------------------------------------------
const pF = [
    {
        name: 'Lasanha',
        src:  'assets/DSC_0097.jpg',
    },
    {
        name: 'Nhoque',
        src: 'assets/DSC_0097.jpg',
    },
    {
        name: 'Risoto',
        src: 'assets/DSC_0097.jpg',
    },
    {
        name: 'Feijoada',
        src: 'assets/DSC_0097.jpg',
    },
    {
        name: 'Rodizio de camarao',
        src: 'assets/DSC_0097.jpg',
    },
    {
        name: 'Bife e fritas',
        src: 'assets/DSC_0097.jpg',
    },
    {
        name: 'Macarrao a bolonhesa',
        src: 'assets/DSC_0097.jpg',
    },
    {
        name: 'Moqueca',
        src: 'assets/DSC_0097.jpg',
    },
    {
        name: 'Pizza',
        src: 'assets/DSC_0097.jpg',
    },
    {
        name: 'Pastel',
        src: 'assets/DSC_0097.jpg',
    },
    {
        name: 'Omelete',
        src: 'assets/DSC_0097.jpg',
    },
    {
        name: 'Sushi',
        src: 'assets/DSC_0097.jpg',
    },
    {
        name: 'Yakissoba',
        src: 'assets/DSC_0097.jpg',
    },
    {
        name: 'Strogonofe',
        src: 'assets/DSC_0097.jpg',
    },
    {
        name: 'Salada',
        src: 'assets/DSC_0097.jpg',
    },
    {
        name: 'Ceviche',
        src: 'assets/DSC_0097.jpg',
    },
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



