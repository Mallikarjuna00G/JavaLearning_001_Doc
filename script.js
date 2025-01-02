// ----------- Show Content list ------------------
const contentList = document.querySelector('.contentList');
const menuIcon = document.getElementById('menuIcon');

menuIcon.addEventListener('click', () => {
    if(contentList.style.display === 'none') {
        contentList.style.display = 'block';
        menuIcon.src = "./images/menuOpened.svg";
    } else {
        contentList.style.display = 'none';
        menuIcon.src = "./images/menuClosed.svg";
    }
})


// ---------- Get all the necessary elements as units ---------------

function CreateUnit(name) {
    this.unit = name;
    this.listItem = document.getElementById(name);
    this.theoryPart = document.getElementById('theory' + name);
    this.fetched = false;
    
    this.listItem.addEventListener('click', function () {
        activateContent(this.unit);
    }.bind(this));
}

const units = [
    'CoverPage',
    'Introduction',
    'Ch01',
    'Ch02',
    'Ch03',
    'Ch04',
    'Ch05',
    'Ch06',
    'Ch07',
    'Ch08',
    'Ch09',
    'Ch10',
    'Ch11',
    'Ch12',
    'Ch13',
    'Ch14',
    'Ch15',
    'Ch16'
]

const unitChapters = [];

// ---------- Switch content ----------------

function displayNoContent() {
    unitChapters.forEach((unit) => {
        unit.theoryPart.style.display = 'none';
    })
}

function displayNoStyleContentID() {
    unitChapters.forEach((unit) => {
        unit.listItem.style.boxShadow = 'none';
    })
}

function activateContent(unit) {
    displayNoContent();
    if(unitChapters[units.indexOf(unit)].fetched !== true) {
        getUnit(unit);
    }
    unitChapters[units.indexOf(unit)].theoryPart.style.display = 'flex';
    displayNoStyleContentID();
    unitChapters[units.indexOf(unit)].listItem.style.boxShadow = '0 -5px 4px #28c428, 0 5px 4px #28c428';
}

async function getUnit(unit) {
    try {
        const fileName = unit.substring(0, 1).toLowerCase() + unit.substring(1);
        const response = await fetch('./pages/' + fileName + '.html');
        const content = await response.text();
        
        const parser = new DOMParser();
        const doc = parser.parseFromString(content, 'text/html');

        let tree = doc.getElementById('theory' + unit).innerHTML;
        unitChapters[units.indexOf(unit)].theoryPart.innerHTML = tree;
        unitChapters[units.indexOf(unit)].fetched = true;
    } catch(err) {
        console.log(err);
    }
}

// ------------ Keep this at the last. ------------------
document.addEventListener('DOMContentLoaded', () => {
    units.forEach(unit => {
        unitChapters.push(new CreateUnit(unit));
    });    
    contentList.style.display = 'none';
    menuIcon.src = "./images/menuClosed.svg";
    activateContent(
        units[0]
    );
})