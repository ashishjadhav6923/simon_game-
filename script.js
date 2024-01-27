var arr = [];
var chosenarr = [];
var level = 0;
var sqclicks = 0;
makearr();

$(document).keyup(function (event) {
    // $(".square").off('click', process);
    if (event.key === 's') {
        chosenarr=[];
        nextlevel();
        console.log(arr);
        $("h1").text("Level " + level);
        setTimeout(function () { glow(); }, 600);
        // $(".square").on('click', process);
    };
    if (event.key === 'r') {
        chosenarr=[];
        level = 1;
        $("h1").text("Level " + level);
        setTimeout(function () { glow(); }, 600);
        // $(".square").on('click', process);
    };
    if (event.key === 't') {
        chosenarr=[];
        $("h1").text("Level " + level);
        setTimeout(function () { glow(); }, 600);
        // $(".square").on('click', process);
    };
});

$(".square").on('click', process);


$('#playButton').on('touchstart', function () {
    chosenarr=[];
    nextlevel();
    console.log(arr);
    $("h1").text("Level " + level);
    setTimeout(function () { glow(); }, 600);
    // $(".square").on('click', process);
});

$('#restartButton').on('touchstart', function () {
    chosenarr=[];
    level = 1;
    $("h1").text("Level " + level);
    setTimeout(function () { glow(); }, 600);
    // $(".square").on('click', process);
});

$('#tryAgainButton').on('touchstart', function () {
    chosenarr = [];
    $("h1").text("Level " + level);
    setTimeout(function () { glow(); }, 600);
    // $(".square").on('click', process);

});

function pressed(chosenSquare) {
    $("#" + chosenSquare).addClass("pressed");
    setTimeout(function () {
        $("#" + chosenSquare).removeClass("pressed");
    }, 100);

}

function euuu(i) {
    console.log("eu called");
    let chosenSquare = "sq" + arr[i];
    $("#" + chosenSquare).addClass("pressed");
    setTimeout(function () {
        $("#" + chosenSquare).removeClass("pressed");
    }, 100);
};

function runLoopWithDelay(limit) {
    let i = 0;
    function runIteration() {
        euuu(i);
        i++;
        if (i < limit) {
            setTimeout(runIteration, 700);
        }
    }
    runIteration();
}

function glow() {
    console.log("glow called");
    // $(".square").off('click', process);
    runLoopWithDelay(level);
    // $(".square").on('click', process);
}

function makearr() {
    for (let i = 0; i < 20; i++) {
        let no = Math.floor(Math.random() * 4) + 1;
        arr[i] = no;
    }
};


function nextlevel() {
    level++;
};

function check(chosenarr) {
    let flag;
    for (let i = 0; i < level; i++) {
        if (chosenarr[i] === ("sq" + arr[i])) {
            flag = 1;
        } else {
            flag = 0;
        };
    };
    if (flag === 1) {
        $("h1").html("Level " + level + " passed" + "<br>Press S For Next Level");
        // setTimeout(function () {
        //     nextlevel();
        //     $("h1").text("Press S For Next Level");
        // }, 2000);
        chosenarr = [];
        sqclicks = 0;
    } else if (flag === 0) {
        $("h1").text("Level " + level + " failed");
        console.log(arr);
        console.log(chosenarr);
        chosenarr = [];
        sqclicks = 0;
        setTimeout(function () {
            $("h1").html("Press T For Another Try <br>Press R for Restart");
        }, 1000);
    }
}

var audio = new Audio("./sounds/click_effect.mp3");
function process() {
    audio.play();
    var chosenSquare = $(this).attr("id");
    pressed(chosenSquare);
    chosenarr.push(chosenSquare);
    sqclicks++;
    if (sqclicks === level) {
        check(chosenarr);
        makearr();
        chosenarr = [];
    }
}



