'strict'

function createBoard2(nums,length) {
    var length2 = length % 10;
    var board = [];
    for (var i = 0; i < length2; i++) {
        board.push([])
        for (var j = 0; j < length2; j++) {
            board[i][j] = drawNum2(nums,length);
        }
    }
    return board;
}

function drawNum2(nums) {
    var idx = parseInt(Math.random() * nums.length);
    var num = nums[idx];
    nums.splice(idx, 1);
    return num;
}

