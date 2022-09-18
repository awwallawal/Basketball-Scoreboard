let countHome = 0;
let countAway = 0;

let homeScore = document.getElementById('home-Score');
let awayScore = document.getElementById('away-Score');



function addOneHome(){
    countHome += 1;
    homeScore.textContent = countHome;
};

function addTwoHome(){
    countHome += 2;
    homeScore.textContent = countHome;
};

function addThreeHome(){
    countHome += 3;
    homeScore.textContent = countHome;
};

function addOneAway(){
    countAway += 1;
    awayScore.textContent = countAway;
};


function addTwoAway(){
    countAway += 2;
    awayScore.textContent = countAway;
};

function addThreeAway(){
    countAway += 3;
    awayScore.textContent = countAway;
};

