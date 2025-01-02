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
    this.listItem = document.getElementById(name);
    this.theoryPart = document.getElementById('theory' + name);
    
    this.listItem.addEventListener('click', function () {
        activateContent(this.listItem, this.theoryPart)
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

units.forEach(unit => {
    unitChapters.push(new CreateUnit(unit));
})

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

function activateContent(listItem, theoryPart) {
    displayNoContent();
    theoryPart.style.display = 'flex';
    displayNoStyleContentID();
    listItem.style.boxShadow = '0 -5px 4px #28c428, 0 5px 4px #28c428';
}

// ------------ Keep this at the last. ------------------
document.addEventListener('DOMContentLoaded', () => {
    contentList.style.display = 'none';
    menuIcon.src = "./images/menuClosed.svg";
    activateContent(
        unitChapters[0].listItem, 
        unitChapters[0].theoryPart
    );
})