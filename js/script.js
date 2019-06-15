document.getElementById('convertPositive').onclick = function() {
    GetNumber1(this.form);
}

document.getElementById('convertNegative').onclick = function() {
    GetNumber2(this.form);
}

// +
function GetNumber1(form) { 
    var sSt3 = ""
    var L_Decimal_Fraction = 0
    var Whole_Number = stripBad(form.txtNumber.value)
    strWhole_Number = Whole_Number
    var len_wn = Whole_Number.length
    for(i = 0; i <= len_wn; i++) {
        if(strWhole_Number.substring(0, i) < 1) {
            var Whole_Number2 = strWhole_Number.substring(i, len_wn);
            Whole_Number = Whole_Number2
        }
    }
    var Decimal_Fraction = stripBad(form.txtNumbe2.value)
    var Exponent_Number = parseInt(stripBad(form.txtNumbe3.value, 10))
    var Exponent_Number2 = Exponent_Number
    Exponent_Number = Exponent_Number + 1
    var Zero_s = ""
    nCheck = parseInt(form.txtNumber.value, 10)
    L_Decimal_Fraction = Decimal_Fraction.length
    var len2 = Decimal_Fraction.length
    Exponent_Number = Exponent_Number - L_Decimal_Fraction
    if(L_Decimal_Fraction > Exponent_Number2) {
        strDecimal_Fraction = Decimal_Fraction
        var len = Decimal_Fraction.length
        var ml5 = len - Exponent_Number2
        sSt3 = Whole_Number + strDecimal_Fraction.substring(0, len - ml5) + "." + strDecimal_Fraction.substring(len - ml5, len)
        form.txtResult.value = comma(sSt3)
    } else {
        for(i = 1; i < Exponent_Number; i++) {
            Zero_s = Zero_s + "0"
        }
        var sNumber = (Whole_Number + Decimal_Fraction + Zero_s)
        form.txtResult.value = comma(sNumber)
    }
}

// -
function GetNumber2(form) { 
    var sSt3 = ""
    var L_Decimal_Fraction = 0
    var L_Whole_Number = 0
    var Whole_Number = stripBad(form.txtNumber.value)
    strWhole_Number = Whole_Number
    var len_wn = Whole_Number.length
    for(i = -1; i <= len_wn; i++) {
        if(strWhole_Number.substring(0, i) < 1) {
            var Whole_Number2 = strWhole_Number.substring(i, len_wn);
            Whole_Number = Whole_Number2
        }
    }
    L_Whole_Number = Whole_Number.length
    var Decimal_Fraction = stripBad(form.txtNumbe2.value)
    var Exponent_Number = parseInt(stripBad(form.txtNumbe3.value, 10))
    var Exponent_Number2 = Exponent_Number
    Exponent_Number = Exponent_Number + 1
    nCheck = parseInt(form.txtNumber.value, 10)
    L_Decimal_Fraction = Decimal_Fraction.length
    var len2 = L_Whole_Number
    if(L_Whole_Number > Exponent_Number2) {
        strWhole_Number = Whole_Number
        var len = L_Whole_Number
        var ml5 = len - Exponent_Number2
        sSt3 = strWhole_Number.substring(0, ml5) + "." + strWhole_Number.substring(ml5, len) + Decimal_Fraction
        form.txtResult.value= comma(sSt3)
    } else {
        var Zero_s = ""
        var lnum4 = Exponent_Number - L_Whole_Number
        for(i = 1; i < lnum4; i++) {
            Zero_s = Zero_s + "0"
        }
        var sNumber =("0."+ Zero_s + Whole_Number + Decimal_Fraction)
        form.txtResult.value= comma(sNumber)
    }
}

function stripBad(string) {
    for(var i=0, output='', valid="eE-0123456789."; i<string.length; i++)
        if (valid.indexOf(string.charAt(i)) != -1)
            output += string.charAt(i)
    return output;
}


function comma(num) {
    var n = Math.floor(num);
    var myNum = num + "";
    var myDec = "" 
    if(myNum.indexOf('.',0) > -1) {
        myDec = myNum.substring(myNum.indexOf('.',0),myNum.length);
    }
    var arr=new Array('0'), i=0; 
    while(n > 0) {
        arr[i] = '' + n % 1000;
        n = Math.floor(n / 1000);
        i++;
    }
    arr = arr.reverse();
    for(var i in arr) if(i > 0)
    while(arr[i].length < 3) arr[i] = '0' + arr[i];
    return arr.join() + myDec;
}