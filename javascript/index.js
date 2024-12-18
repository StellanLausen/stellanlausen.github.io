const debugMode = false;
const today = new Date().getDate();
// const today = 20;

$(document).ready(function() {
    if(today >= 8){
        $('#main').css('background-image', 'url("../assets/images/2400-christmas-new-year-festive-beautiful-winter-snow-covered-tree-christmas-background.jpg"');
    }

    shuffleDoors();
    applyLayout();

    // add EventListener
    initDoorAnimation();

    if(today >= 8) {
        $('.grid-item').css('color', '#232323FF');
        $('.grid-item').css('border-color', '#333333FF');
    };
});
function initDoorAnimation() {
    var doorArr = Array.from(document.querySelectorAll(".door"));

    $('.door').click(function(event) {
        if($(this).attr('id') == today){
            $(this).children( ".doorNumber" ).addClass('tada');
            $(this).children( ".doorNumber" ).addClass('animated');
            redirectToDay();
        } else {
            $(this).children( ".doorNumber" ).addClass('headShake');
            $(this).children( ".doorNumber" ).addClass('animated');
            setTimeout(() => {
            $(this).children( ".doorNumber" ).removeClass('headShake');
            $(this).children( ".doorNumber" ).removeClass('animated');
            }, 1000); // 10ms delay
        }
    });
}

async function redirectToDay(){
    setTimeout(() => {
        if(today > 9){
            location.href = 'html/day' + today + '.html';
        } else {
            location.href = 'html/day0' + today + '.html';
        }
    }, 1000);

}

function shuffleDoors() {
    let adventNumbers =  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
    shuffleArray(adventNumbers);
    for (let i = 0; i < 24; i++) {
        $('#door-container').append('<div id="'+adventNumbers[i]+'"  class="grid-item door"><p class="doorNumber">' + adventNumbers[i] + '</p></div>');
    }
}

function applyLayout() {
    gridLayout = [
        [[1],[3],[1],[3]],[[3],[5],[1],[4]],[[5],[7],[1],[2]],[[7],[9],[1],[3]],[[9],[11],[1],[4]],
        [[1],[3],[3],[6]],[[5],[7],[2],[4]],[[7],[9],[3],[5]],[[9],[10],[4],[6]],[[10],[11],[4],[6]],
        [[1],[4],[6],[7]],[[3],[7],[4],[6]],[[7],[9],[5],[7]],[[9],[11],[6],[8]],
        [[1],[3],[7],[9]],[[3],[4],[7],[9]],[[4],[7],[6],[10]],[[7],[9],[7],[8]],
        [[1],[4],[9],[11]],[[4],[7],[10],[11]],[[7],[9],[8],[9]],[[9],[11],[8],[10]],
        [[7],[9],[9],[11]],[[9],[11],[10],[11]]
    ]

    let allDoors = $('.door');
    for (let i = 23; i >= 0; i--) {
        // debug
        if(debugMode) (i % 2 === 0) ? $(allDoors[i]).css('background-color','gray') : $(allDoors[i]).css('background-color','lightblue');

        // "turn" gridLayout every second Day
        if(today % 2 === 0){
            // apply gridLayout to each door
            $(allDoors[i]).css('grid-column-start',gridLayout[i][0]);
            $(allDoors[i]).css('grid-column-end',gridLayout[i][1]);
            $(allDoors[i]).css('grid-row-start',gridLayout[i][2]);
            $(allDoors[i]).css('grid-row-end',gridLayout[i][3]);
        } else {
            // apply gridLayout to each door
            $(allDoors[i]).css('grid-column-start',gridLayout[i][2]);
            $(allDoors[i]).css('grid-column-end',gridLayout[i][3]);
            $(allDoors[i]).css('grid-row-start',gridLayout[i][0]);
            $(allDoors[i]).css('grid-row-end',gridLayout[i][1]);
        }
    }
}

function shuffleArray(array) {
        let currentIndex = array.length;

// While there remain elements to shuffle...
while (currentIndex !== 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
}
}