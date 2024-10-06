// Show Content list
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

// Switch content

const theoryCoverPage = document.getElementById('theoryCoverPage');
const theoryIntroduction = document.getElementById('theoryIntroduction');
const theoryCh01 = document.getElementById('theoryCh01');
const theoryCh02 = document.getElementById('theoryCh02');
const theoryCh03 = document.getElementById('theoryCh03');
const theoryCh04 = document.getElementById('theoryCh04');
const theoryCh05 = document.getElementById('theoryCh05');
const theoryCh06 = document.getElementById('theoryCh06');
const theoryCh07 = document.getElementById('theoryCh07');
const theoryCh08 = document.getElementById('theoryCh08');
const theoryCh09 = document.getElementById('theoryCh09');
const theoryCh10 = document.getElementById('theoryCh10');
const theoryCh11 = document.getElementById('theoryCh11');
const theoryCh12 = document.getElementById('theoryCh12');
const theoryCh13 = document.getElementById('theoryCh13');
const theoryCh14 = document.getElementById('theoryCh14');
const theoryCh15 = document.getElementById('theoryCh15');
const theoryCh16 = document.getElementById('theoryCh16');

const coverPage = document.getElementById('coverPage');
const Introduction = document.getElementById('Introduction');
const ch01 = document.getElementById('Ch01');
const ch02 = document.getElementById('Ch02');
const ch03 = document.getElementById('Ch03');
const ch04 = document.getElementById('Ch04');
const ch05 = document.getElementById('Ch05');
const ch06 = document.getElementById('Ch06');
const ch07 = document.getElementById('Ch07');
const ch08 = document.getElementById('Ch08');
const ch09 = document.getElementById('Ch09');
const ch10 = document.getElementById('Ch10');
const ch11 = document.getElementById('Ch11');
const ch12 = document.getElementById('Ch12');
const ch13 = document.getElementById('Ch13');
const ch14 = document.getElementById('Ch14');
const ch15 = document.getElementById('Ch15');
const ch16 = document.getElementById('Ch16');

const theoryChArr = [
    theoryCoverPage,
    theoryIntroduction,
    theoryCh01,
    theoryCh02,
    theoryCh03,
    theoryCh04,
    theoryCh05,
    theoryCh06,
    theoryCh07,
    theoryCh08,
    theoryCh09,
    theoryCh10,
    theoryCh11,
    theoryCh12,
    theoryCh13,
    theoryCh14,
    theoryCh15,
    theoryCh16,
]

const contentListIDs = [
    coverPage,
    Introduction,
    ch01,
    ch02,
    ch03,
    ch04,
    ch05,
    ch06,
    ch07,
    ch08,
    ch09,
    ch10,
    ch11,
    ch12,
    ch13,
    ch14,
    ch15,
    ch16,
]

function displayNoContent() {
    for (let index = 0; index < theoryChArr.length; index++) {
        const element = theoryChArr[index];
        element.style.display = 'none';
    }
}

function displayNoStyleContentID() {
    for (let index = 0; index < contentListIDs.length; index++) {
        const element = contentListIDs[index];
        element.style.boxShadow = 'none';
    }
}

coverPage.addEventListener('click', () => {activateContent(coverPage, theoryCoverPage)})
Introduction.addEventListener('click', () => {activateContent(Introduction, theoryIntroduction)})
ch01.addEventListener('click', () => {activateContent(ch01, theoryCh01)})
ch02.addEventListener('click', () => {activateContent(ch02, theoryCh02)})
ch03.addEventListener('click', () => {activateContent(ch03, theoryCh03)})
ch04.addEventListener('click', () => {activateContent(ch04, theoryCh04)})
ch05.addEventListener('click', () => {activateContent(ch05, theoryCh05)})
ch06.addEventListener('click', () => {activateContent(ch06, theoryCh06)})
ch07.addEventListener('click', () => {activateContent(ch07, theoryCh07)})
ch08.addEventListener('click', () => {activateContent(ch08, theoryCh08)})
ch09.addEventListener('click', () => {activateContent(ch09, theoryCh09)})
ch10.addEventListener('click', () => {activateContent(ch10, theoryCh10)})
ch11.addEventListener('click', () => {activateContent(ch11, theoryCh11)})
ch12.addEventListener('click', () => {activateContent(ch12, theoryCh12)})
ch13.addEventListener('click', () => {activateContent(ch13, theoryCh13)})
ch14.addEventListener('click', () => {activateContent(ch14, theoryCh14)})
ch15.addEventListener('click', () => {activateContent(ch15, theoryCh15)})
ch16.addEventListener('click', () => {activateContent(ch16, theoryCh16)})

function activateContent(contentID, content) {
    displayNoContent();
    content.style.display = 'flex';
    displayNoStyleContentID();
    contentID.style.boxShadow = '0 -5px 4px #28c428, 0 5px 4px #28c428';
}

// Keep this at the last.
document.addEventListener('DOMContentLoaded', () => {
    contentList.style.display = 'none';
    menuIcon.src = "./images/menuClosed.svg";
    activateContent(ch03, theoryCh03);
})
