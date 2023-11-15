function display(val){
    document.getElementById('total').value += val
    document.getElementById('avg').value += val
    document.getElementById('grade').value += val
    document.getElementById('comment').value += val
}


function math(){
    var m1 = document.getElementById('number1').value
    var m2 = document.getElementById('number2').value
    var m3 = document.getElementById('number3').value

    var m4 = document.getElementById('total1').value = eval(m1) + eval(m2) + eval(m3)
    document.getElementById('total1') = m4
}

function eng(){
    var m1 = document.getElementById('number4').value
    var m2 = document.getElementById('number5').value
    var m3 = document.getElementById('number6').value

    var m4 = document.getElementById('total2').value = eval(m1) + eval(m2) + eval(m3)
    document.getElementById('total2') = m4
}

function bio(){
    var m1 = document.getElementById('number7').value
    var m2 = document.getElementById('number8').value
    var m3 = document.getElementById('number9').value

    var m4 = document.getElementById('total3').value = eval(m1) + eval(m2) + eval(m3)
    document.getElementById('total3') = m4
}


function chem(){
    var m1 = document.getElementById('number10').value
    var m2 = document.getElementById('number11').value
    var m3 = document.getElementById('number12').value

    var m4 = document.getElementById('total4').value = eval(m1) + eval(m2) + eval(m3)
    document.getElementById('total4') = m4
}

function phy(){
    var m1 = document.getElementById('number13').value
    var m2 = document.getElementById('number14').value
    var m3 = document.getElementById('number15').value

    var m4 = document.getElementById('total5').value = eval(m1) + eval(m2) + eval(m3)
    document.getElementById('total5') = m4
}

function total(){
    var t1 = document.getElementById('number1').value
    var t2 = document.getElementById('number2').value
    var t3 = document.getElementById('number3').value
    var t4 = document.getElementById('number4').value
    var t5 = document.getElementById('number5').value
    var t6 = document.getElementById('number6').value
    var t7 = document.getElementById('number7').value
    var t8 = document.getElementById('number8').value
    var t9 = document.getElementById('number9').value
    var t10 = document.getElementById('number10').value
    var t11 = document.getElementById('number11').value
    var t12 = document.getElementById('number12').value
    var t13 = document.getElementById('number13').value
    var t14 = document.getElementById('number14').value
    var t15 = document.getElementById('number15').value

    var t16 = document.getElementById('total').innerHTML = eval(t1) + eval(t2) + eval(t3) + eval(t4) + eval(t5) + eval(t6) + eval(t7) + eval(t8) + eval(t9)+ eval(t10) + eval(t11) + eval(t12) + eval(t13) + eval(t14) + eval(t15)

    document.getElementById('total').innerHTML = 'Hey,' + " " + document.getElementById('fullname').value + " " + 'Your score is' + " " + t16 + '/' + 500
}

function average(){
    var t1 = document.getElementById('number1').value
    var t2 = document.getElementById('number2').value
    var t3 = document.getElementById('number3').value
    var t4 = document.getElementById('number4').value
    var t5 = document.getElementById('number5').value
    var t6 = document.getElementById('number6').value
    var t7 = document.getElementById('number7').value
    var t8 = document.getElementById('number8').value
    var t9 = document.getElementById('number9').value
    var t10 = document.getElementById('number10').value
    var t11 = document.getElementById('number11').value
    var t12 = document.getElementById('number12').value
    var t13 = document.getElementById('number13').value
    var t14 = document.getElementById('number14').value
    var t15 = document.getElementById('number15').value

    var t16 = document.getElementById('average').innerHTML = Math.round(eval(t1) + eval(t2) + eval(t3) + eval(t4) + eval(t5) + eval(t6) + eval(t7) + eval(t8) + eval(t9)+ eval(t10) + eval(t11) + eval(t12) + eval(t13) + eval(t14) + eval(t15)) / 500 *100

    document.getElementById('average').innerHTML ='You have an average score of' + " " + t16 + '%'
}

function grade(){
    var t1 = document.getElementById('number1').value
    var t2 = document.getElementById('number2').value
    var t3 = document.getElementById('number3').value
    var t4 = document.getElementById('number4').value
    var t5 = document.getElementById('number5').value
    var t6 = document.getElementById('number6').value
    var t7 = document.getElementById('number7').value
    var t8 = document.getElementById('number8').value
    var t9 = document.getElementById('number9').value
    var t10 = document.getElementById('number10').value
    var t11 = document.getElementById('number11').value
    var t12 = document.getElementById('number12').value
    var t13 = document.getElementById('number13').value
    var t14 = document.getElementById('number14').value
    var t15 = document.getElementById('number15').value

    var t16 = document.getElementById('grade').innerHTML = Math.round(eval(t1) + eval(t2) + eval(t3) + eval(t4) + eval(t5) + eval(t6) + eval(t7) + eval(t8) + eval(t9)+ eval(t10) + eval(t11) + eval(t12) + eval(t13) + eval(t14) + eval(t15)) / 500 *100

    if (t16 >= 70) {
        document.getElementById('grade').innerHTML = 'Congratulations!' + " " + document.getElementById('fullname').value + " " +  'you have A'
    }
    else if (t16 >= 60 && t16 <= 69) {
        document.getElementById('grade').innerHTML = 'You have B'
    }
    else if (t16 >= 50 && t16 <= 59) {
        document.getElementById('grade').innerHTML = 'You have C'
    }
    else if (t16 >= 45 && t16 <= 49) {
        document.getElementById('grade').innerHTML = 'You have D'
    }
    else{ 
        document.getElementById('grade').innerHTML = 'Sorry! You failed'
    }
}

function comment(){
    var t1 = document.getElementById('number1').value
    var t2 = document.getElementById('number2').value
    var t3 = document.getElementById('number3').value
    var t4 = document.getElementById('number4').value
    var t5 = document.getElementById('number5').value
    var t6 = document.getElementById('number6').value
    var t7 = document.getElementById('number7').value
    var t8 = document.getElementById('number8').value
    var t9 = document.getElementById('number9').value
    var t10 = document.getElementById('number10').value
    var t11 = document.getElementById('number11').value
    var t12 = document.getElementById('number12').value
    var t13 = document.getElementById('number13').value
    var t14 = document.getElementById('number14').value
    var t15 = document.getElementById('number15').value

    var t16 = document.getElementById('comment').innerHTML = Math.round(eval(t1) + eval(t2) + eval(t3) + eval(t4) + eval(t5) + eval(t6) + eval(t7) + eval(t8) + eval(t9)+ eval(t10) + eval(t11) + eval(t12) + eval(t13) + eval(t14) + eval(t15)) / 500 * 100

    if (t16 >= 70) {
        document.getElementById('comment').innerHTML = 'Congratulations!,' + " " + document.getElementById('fullname').value + " " +  'you did an amazing job, keep it up.'
    }
    else if (t16 >= 60 && t16 <= 69) {
        document.getElementById('comment').innerHTML = 'Well-done' + " " + document.getElementById('fullname').value + " " + 'You can do better.'
    }
    else if (t16 >= 50 && t16 <= 59) {
        document.getElementById('comment').innerHTML = 'Hmmmmm!!! You can still do better'
    }
    else if (t16 >= 45 && t16 <= 49) {
        document.getElementById('comment').innerHTML = 'Keep pushing harder'
    }
    else{
        document.getElementById('comment').innerHTML = 'You failed woefully! but you can still do well'
    }
    
}