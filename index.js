// dice roll function
function d20Roll (diceQtn) {
    var result20 = []

    for (let i = 0; i < diceQtn; i++) {
        result20.push (Math.floor((Math.random()*20)+1));
        
    }

    var sum20 = 0

    for (let i = 0; i < result20.length; i++) {
        sum20 += result20[i];
        
    }

    var d20RollType = diceQtn+"d20"
    var d20RollResult = sum20
    var d20RollArray = "Rolled "+result20

    document.querySelector(".d20RollType").innerHTML = d20RollType
    document.querySelector(".d20RollResult").innerHTML = d20RollResult
    document.querySelector(".d20RollArray").innerHTML = d20RollArray

}

function d12Roll (diceQtn) {
    var result12 = []

    for (let i = 0; i < diceQtn; i++) {
        result12.push (Math.floor((Math.random()*12)+1));
        
    }

    var sum12 = 0

    for (let i = 0; i < result12.length; i++) {
        sum12 += result12[i];
        
    }

    var d12RollType = diceQtn+"d12"
    var d12RollResult = sum12
    var d12RollArray = "Rolled "+result12

    document.querySelector(".d12RollType").innerHTML = d12RollType
    document.querySelector(".d12RollResult").innerHTML = d12RollResult
    document.querySelector(".d12RollArray").innerHTML = d12RollArray

}

function d10Roll (diceQtn) {
    var result10 = []

    for (let i = 0; i < diceQtn; i++) {
        result10.push (Math.floor((Math.random()*10)+1));
        
    }

    var sum10 = 0

    for (let i = 0; i < result10.length; i++) {
        sum10 += result10[i];
        
    }

    var d10RollType = diceQtn+"d10"
    var d10RollResult = sum10
    var d10RollArray = "Rolled "+result10

    document.querySelector(".d10RollType").innerHTML = d10RollType
    document.querySelector(".d10RollResult").innerHTML = d10RollResult
    document.querySelector(".d10RollArray").innerHTML = d10RollArray

}

function d8Roll (diceQtn) {
    var result8 = []

    for (let i = 0; i < diceQtn; i++) {
        result8.push (Math.floor((Math.random()*8)+1));
        
    }

    var sum8 = 0

    for (let i = 0; i < result8.length; i++) {
        sum8 += result8[i];
        
    }

    var d8RollType = diceQtn+"d8"
    var d8RollResult = sum8
    var d8RollArray = "Rolled "+result8

    document.querySelector(".d8RollType").innerHTML = d8RollType
    document.querySelector(".d8RollResult").innerHTML = d8RollResult
    document.querySelector(".d8RollArray").innerHTML = d8RollArray

}

function d6Roll (diceQtn) {
    var result6 = []

    for (let i = 0; i < diceQtn; i++) {
        result6.push (Math.floor((Math.random()*6)+1));
        
    }

    var sum6 = 0

    for (let i = 0; i < result6.length; i++) {
        sum6 += result6[i];
        
    }

    var d6RollType = diceQtn+"d6"
    var d6RollResult = sum6
    var d6RollArray = "Rolled "+result6

    document.querySelector(".d6RollType").innerHTML = d6RollType
    document.querySelector(".d6RollResult").innerHTML = d6RollResult
    document.querySelector(".d6RollArray").innerHTML = d6RollArray

}

function d4Roll (diceQtn) {
    var result4 = []

    for (let i = 0; i < diceQtn; i++) {
        result4.push (Math.floor((Math.random()*4)+1));
        
    }

    var sum4 = 0

    for (let i = 0; i < result4.length; i++) {
        sum4 += result4[i];
        
    }

    var d4RollType = diceQtn+"d4"
    var d4RollResult = sum4
    var d4RollArray = "Rolled "+result4

    document.querySelector(".d4RollType").innerHTML = d4RollType
    document.querySelector(".d4RollResult").innerHTML = d4RollResult
    document.querySelector(".d4RollArray").innerHTML = d4RollArray

}

// d20 roll buttons
document.getElementById("d201").addEventListener ("click", function (e){d20Roll(1);});
document.getElementById("d202").addEventListener ("click", function (e){d20Roll(2);});
document.getElementById("d203").addEventListener ("click", function (e){d20Roll(3);});
document.getElementById("d204").addEventListener ("click", function (e){d20Roll(4);});
document.getElementById("d205").addEventListener ("click", function (e){d20Roll(5);});
document.getElementById("d206").addEventListener ("click", function (e){d20Roll(6);});
// d12 roll buttons
document.getElementById("d121").addEventListener ("click", function (e){d12Roll(1);});
document.getElementById("d122").addEventListener ("click", function (e){d12Roll(2);});
document.getElementById("d123").addEventListener ("click", function (e){d12Roll(3);});
document.getElementById("d124").addEventListener ("click", function (e){d12Roll(4);});
document.getElementById("d125").addEventListener ("click", function (e){d12Roll(5);});
document.getElementById("d126").addEventListener ("click", function (e){d12Roll(6);});
// d10 roll buttons
document.getElementById("d101").addEventListener ("click", function (e){d10Roll(1);});
document.getElementById("d102").addEventListener ("click", function (e){d10Roll(2);});
document.getElementById("d103").addEventListener ("click", function (e){d10Roll(3);});
document.getElementById("d104").addEventListener ("click", function (e){d10Roll(4);});
document.getElementById("d105").addEventListener ("click", function (e){d10Roll(5);});
document.getElementById("d106").addEventListener ("click", function (e){d10Roll(6);});
// d8 roll buttons
document.getElementById("d81").addEventListener ("click", function (e){d8Roll(1);});
document.getElementById("d82").addEventListener ("click", function (e){d8Roll(2);});
document.getElementById("d83").addEventListener ("click", function (e){d8Roll(3);});
document.getElementById("d84").addEventListener ("click", function (e){d8Roll(4);});
document.getElementById("d85").addEventListener ("click", function (e){d8Roll(5);});
document.getElementById("d86").addEventListener ("click", function (e){d8Roll(6);});
// d6 roll buttons
document.getElementById("d61").addEventListener ("click", function (e){d6Roll(1);});
document.getElementById("d62").addEventListener ("click", function (e){d6Roll(2);});
document.getElementById("d63").addEventListener ("click", function (e){d6Roll(3);});
document.getElementById("d64").addEventListener ("click", function (e){d6Roll(4);});
document.getElementById("d65").addEventListener ("click", function (e){d6Roll(5);});
document.getElementById("d66").addEventListener ("click", function (e){d6Roll(6);});
// d4 roll buttons
document.getElementById("d41").addEventListener ("click", function (e){d4Roll(1);});
document.getElementById("d42").addEventListener ("click", function (e){d4Roll(2);});
document.getElementById("d43").addEventListener ("click", function (e){d4Roll(3);});
document.getElementById("d44").addEventListener ("click", function (e){d4Roll(4);});
document.getElementById("d45").addEventListener ("click", function (e){d4Roll(5);});
document.getElementById("d46").addEventListener ("click", function (e){d4Roll(6);});