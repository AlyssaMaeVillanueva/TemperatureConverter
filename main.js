function convert (){
    let selectedUnitFrom = document.getElementById("unitsFrom").selectedIndex;
    let selectedUnitTo = document.getElementById("unitsTo").selectedIndex;
  // alert (document.getElementById ("unitsFrom").selectedIndex);
  //alert (document.getElementById ("unitsTo").selectedIndex);

    /*if (document.getElementById ("unitsFrom").selectedIndex == 0 && document.getElementById ("unitsTo").selectedIndex == 1)
    {
        alert ("You want to convert centimeter to millimeter");
    }
else if (document.getElementById ("unitsFrom").selectedIndex == 0 && document.getElementById ("unitsTo").selectedIndex == 2){
        alert ("You want to convert centimeter to meter");

    }*/

    if (selectedUnitFrom == 0 && selectedUnitTo == 1){      

        cTof(document.getElementById ("txtInput").value);
    }
                      
    else if  (selectedUnitFrom == 0 && selectedUnitTo == 2) {
        cTok(document.getElementById ("txtInput").value) ;
    }
    else if (selectedUnitFrom == 0 && selectedUnitTo == 3){
        cToRan(document.getElementById ("txtInput").value)
    } 
    else if (selectedUnitFrom == 0 && selectedUnitTo == 4){
        cToRea(document.getElementById ("txtInput").value)
    } 
    else if (selectedUnitFrom == 1 && selectedUnitTo == 0){
        fToc(document.getElementById ("txtInput").value)
    } 
    else if (selectedUnitFrom == 1 && selectedUnitTo == 2){
        fTok(document.getElementById ("txtInput").value)
    } 
    else if (selectedUnitFrom == 1 && selectedUnitTo == 3){
        fToRan(document.getElementById ("txtInput").value)
    } 
    else if (selectedUnitFrom == 1 && selectedUnitTo == 4){
        fToRea(document.getElementById ("txtInput").value)
    } 
    else if (selectedUnitFrom == 2 && selectedUnitTo == 0){
        kToc(document.getElementById ("txtInput").value)
    } 
    else if (selectedUnitFrom == 2 && selectedUnitTo == 1){
        kTof(document.getElementById ("txtInput").value)
    } 
    else if (selectedUnitFrom == 2 && selectedUnitTo == 3){
        kTora(document.getElementById ("txtInput").value)
    }
    else if (selectedUnitFrom == 2 && selectedUnitTo == 4){
        kTore(document.getElementById ("txtInput").value)
    }
    else if (selectedUnitFrom == 3 && selectedUnitTo == 0){
        raToc(document.getElementById ("txtInput").value)
    }
    else if (selectedUnitFrom == 3 && selectedUnitTo == 1){
        raTof(document.getElementById ("txtInput").value)
    }
    else if (selectedUnitFrom == 3 && selectedUnitTo == 2){
        raTok(document.getElementById ("txtInput").value)
    }
    else if (selectedUnitFrom == 3 && selectedUnitTo == 4 ){
        raTore(document.getElementById ("txtInput").value)
    }
    else if (selectedUnitFrom == 4 && selectedUnitTo == 0 ){
        reToc(document.getElementById ("txtInput").value)
    }
    else if (selectedUnitFrom == 4 && selectedUnitTo == 1 ){
        reTof(document.getElementById ("txtInput").value)
    }
    else if (selectedUnitFrom == 4 && selectedUnitTo == 2 ){
        reTok(document.getElementById ("txtInput").value)
    }
    else if (selectedUnitFrom == 4 && selectedUnitTo == 3 ){
        reTora(document.getElementById ("txtInput").value)
    }



} // convert function closing

function cTof (enteredValue){
    var f = 0;
    f = enteredValue * (9/5) + 32;
    document.getElementById("lblResult").innerHTML = f;

}
function cTok (enteredValue){
    var k = 0;
    k = Number(enteredValue) + 273.15;
    document.getElementById("lblResult").innerHTML = k;
    console.log(typeof k);
    console.log(typeof enterValue);

}
function cToRan (enteredValue){
    var Ran = 0;
    Ran = enteredValue * 9/5 + 491.67;
    document.getElementById("lblResult").innerHTML = Ran;

}
function cToRea (enteredValue){
    var Rea = 0;
    Rea = enteredValue *  0.8;
    document.getElementById("lblResult").innerHTML = Rea;

}
function fToc (enteredValue){
    var c = 0;
    c = (enteredValue - 32)* 5/9;
    document.getElementById("lblResult").innerHTML = c;

}
function fTok (enteredValue){
    var k = 0;
    k = (enteredValue - 32) * 5/9 + 273.15;
    document.getElementById("lblResult").innerHTML = k;

}
function fToRan (enteredValue){
    var Ran = 0;
    Ran = Number(enteredValue) +459.67;
    document.getElementById("lblResult").innerHTML = Ran;

}
function fToRea (enteredValue){
    var Rea = 0;
    Rea = (enteredValue - 32)* 0.44444;
    document.getElementById("lblResult").innerHTML = Rea;

}
function kToc (enteredValue){
    var c = 0;
    c = enteredValue - 273.15;
    document.getElementById("lblResult").innerHTML = c;

}
function kTof (enteredValue){
    var f = 0;
    f = (enteredValue - 273.15) * 9/5 + 32;
    document.getElementById("lblResult").innerHTML = f;

}
function kTora (enteredValue){
    var ra = 0;
    ra = enteredValue *  1.8;
    document.getElementById("lblResult").innerHTML = ra;

}
function kTore (enteredValue){
    var re = 0;
    re = (enteredValue- 273.15) * 0.8;
    document.getElementById("lblResult").innerHTML = re;

}
function raToc (enteredValue){
    var c = 0;
    c = (enteredValue - 32 - 459.67) / 1.8;
    document.getElementById("lblResult").innerHTML = c;

}
function raTof (enteredValue){
    var f = 0;
    f = enteredValue - 459.67;
    document.getElementById("lblResult").innerHTML = f;

}
function raTok (enteredValue){
    var k = 0;
    k = enteredValue / 1.8;
    document.getElementById("lblResult").innerHTML = k;

}
function raTore (enteredValue){
    var re = 0;
    re = (enteredValue - 32 - 459.67) / 2.25;
    document.getElementById("lblResult").innerHTML = re;

}
function reToc (enteredValue){
    var c = 0;
    c= enteredValue * 1.25;
    document.getElementById("lblResult").innerHTML = c;

}
function reTof (enteredValue){
    var f = 0;
    f = enteredValue * 2.25 + 32;
    document.getElementById("lblResult").innerHTML = f;

}
function reTok (enteredValue){
    var k = 0;
    k = enteredValue * 1.25 + 273.15;
    document.getElementById("lblResult").innerHTML =  k;

}
function reTora (enteredValue){
    var ra = 0;
    ra = enteredValue * 2.25 + 32 + 459.67;
    document.getElementById("lblResult").innerHTML = ra;

}







