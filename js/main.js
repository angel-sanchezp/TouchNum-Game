'strict'

var audioWrong = new Audio('sound/wrong.mp3');
var audioRight = new Audio('sound/right.mp3');
var audioWin = new Audio('sound/win.mp3');

var gBoard;
var gIntervalTime;
var isInitial;
var isMLevel;
var isSLevel;

// function initLevel(level){
//     if
// }

function initLevel() {
    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    isInitial = true;
    isMLevel = false;
    isSLevel = false;
    clearInterval(gIntervalTime);
    var elTimer = document.querySelector('.timer');
    elTimer.innerHTML = 0.0;
    play(nums, 4);

}

function play(nums, length) {
    gBoard = createBoard2(nums, length);
    renderBoard(gBoard);
}

function renderBoard(board) {
    var strHTML = ''
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < board[0].length; j++) {
            var cell = board[i][j];
            strHTML += `
            <td data-i="${i}" data-j="${j}" onclick="cellClicked(this, ${i}, ${j})" >
                 ${cell}
            </td>
            `
        }
        strHTML += '</tr>'
    }


    var elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML

}

var gPreviosNum = 0;

function cellClicked(elCell, cellI, cellJ) {
    var index = gBoard[cellI][cellJ];
    checkFinish(index);
    var nextNum = index + 1;
    if (index - 1 === gPreviosNum && index < nextNum) {
        audioRight.play();
        elCell.style.backgroundColor = 'rgb(72, 153, 190)';
        gPreviosNum = index;
    } else {
        audioWrong.play();
    }

}

var totalSeconds = 0;
function countTimer() {
    var elTimer = document.querySelector('.timer');
    ++totalSeconds;
    var hour = Math.floor(totalSeconds / 3600);
    var minute = Math.floor((totalSeconds - hour * 3600) / 60);
    var seconds = totalSeconds - (hour * 3600 + minute * 60);
    if (hour < 10)
        hour = "0" + hour;
    if (minute < 10)
        minute = "0" + minute;
    if (seconds < 10)
        seconds = "0" + seconds;
    elTimer.innerHTML = + minute + ":" + seconds;
    // .toFixed(3);
}

function mLevel() {
    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
        15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    var length = nums.length;
    isInitial = false;
    isMLevel = true;
    isSLevel = false;
    clearInterval(gIntervalTime);
    var elTimer = document.querySelector('.timer');
    elTimer.innerHTML = 0.0;
    play(nums, length);

}

function sLevel() {
    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
        19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
    var length = nums.length;
    isInitial = false;
    isMLevel = false;
    isSLevel = true;
    clearInterval(gIntervalTime);
    var elTimer = document.querySelector('.timer');
    elTimer.innerHTML = 0.0;
    play(nums, length);

}

function checkFinish(num) {

    if (num === 1) {
        gIntervalTime = setInterval(countTimer, 100);
    } else if (num === 16 && isInitial) {
        audioWin.play();
        clearInterval(gIntervalTime);
    } else if (num === 25 && isMLevel) {
        audioWin.play();
        clearInterval(gIntervalTime);
    } else if (num === 36 && isSLevel) {
        audioWin.play();
        clearInterval(gIntervalTime);
    }

}

function restart() {
    location.reload();
}













