// import {pF} from "./pFDB";

//------------------------------------------HOME AND MAIN PAGE----------------------------------------------------------
let imgPlate = document.querySelectorAll('.img-plate');
let namePlate = document.querySelectorAll('.plate-name');
let i = 0;
let j = 0;
let chosenList;

//-------------------------------------------Show first List------------------------------------------------------------
const showChosenList = (button) => {
    chosenList = button;

    document.querySelector('#container-home-page').setAttribute('id', 'container-home-page-hide');
    document.querySelector('#container-main-page-hide').setAttribute('id', 'container-main-page');

    button.forEach((element) => {
        validateElement(j, element);
    });
};

//-------------------------------------------Show Chosen Meal-----------------------------------------------------------
const showChosenMeal = (list, meal) => {
    let elementFounded = list.find(ele => ele.name === meal);
    validateElement(elementFounded.value, elementFounded);
};

//------------------------------Function to validate and to verify which is the result----------------------------------
const validateElement = (index, element) => {
    if (j === (chosenList.length * 2) - 2) {
        localStorage.setItem('result', JSON.stringify(element));
        window.location.href = 'winner.html';
    }

    if (index !== j) {
        if (element.value === 0 || element.value === 1) {
            i = 16;
        } else if (element.value === 2 || element.value === 3) {
            i = 17;
        } else if (element.value === 4 || element.value === 5) {
            i = 18;
        } else if (element.value === 6 || element.value === 7) {
            i = 19;
        } else if (element.value === 8 || element.value === 9) {
            i = 20;
        } else if (element.value === 10 || element.value === 11) {
            i = 21;
        } else if (element.value === 12 || element.value === 13) {
            i = 22;
        } else if (element.value === 14 || element.value === 15) {
            i = 23;
        } else if (element.value === 16 || element.value === 17) {
            i = 24;
        } else if (element.value === 18 || element.value === 19) {
            i = 25;
        } else if (element.value === 20 || element.value === 21) {
            i = 26;
        } else if (element.value === 22 || element.value === 23) {
            i = 27;
        } else if (element.value === 24 || element.value === 25) {
            i = 28;
        } else if (element.value === 26 || element.value === 27) {
            i = 29;
        } else if (element.value === 28 || element.value === 29) {
            i = 30;
        }
        setAttributes(i, element);
    } else {
        setAttributes(index, element);
    }
    j++;
};

//--------------------------------------Function to set Attributes------------------------------------------------------
const setAttributes = (index, element) => {
    imgPlate[index].setAttribute('src', element.src);
    imgPlate[index].setAttribute('alt', i.toString());
    imgPlate[index].setAttribute('name', element.name);
    imgPlate[index].setAttribute('onclick', 'showChosenMeal(chosenList, this.name)');
    namePlate[index].textContent = element.name;
    element.value = index;
    console.log(element);
};

//---------------------------------------------WINNER PAGE--------------------------------------------------------------
let imgPlateWinner = document.querySelector('.img-plate-winner');
let namePlateWinner = document.querySelector('.plate-name-winner');
let result = JSON.parse(localStorage.getItem('result'));
const btnAgain = document.querySelector('#btn-again');

if (imgPlateWinner) {
    console.log(result);
    console.log(imgPlateWinner, namePlateWinner);
    imgPlateWinner.setAttribute('src', result.src);
    imgPlateWinner.setAttribute('alt', result.name);
    namePlateWinner.textContent = result.name;

    btnAgain.addEventListener('click', () => {
        localStorage.clear();
        window.location.href = 'index.html';
    });
}




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



