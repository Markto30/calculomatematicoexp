function somar(){
    var tn1 = window.document.getElementById('numb1')
    var tn2 = window.document.querySelector('input#numb2')
    var res = window.document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a: <strong>${s.toExponential()}</strong>`

     }
     function subtrair(){
    var tn11 = window.document.getElementById('numb11')
    var tn22 = window.document.querySelector('input#numb22')
    var ress = window.document.getElementById('ress')
    var n11 = Number(tn11.value)
    var n22 = Number(tn22.value)
    var ss = n11 - n22
    res.innerHTML = `A subtração entre ${n11} e ${n22} é igual a: <strong>${ss.toExponential()}</strong>`
     }

     function multiplicar(){
    var tn111 = window.document.getElementById('numb111')
    var tn222 = window.document.querySelector('input#numb222')
    var resss = window.document.getElementById('resss')
    var n111 = Number(tn111.value)
    var n222 = Number(tn222.value)
    var sss = n111 * n222
    res.innerHTML = `A multiplicação entre ${n111} e ${n222} é igual a: <strong>${sss.toExponential()}</strong>`
     }

     function dividir(){
    var tn1111 = window.document.getElementById('numb1111')
    var tn2222 = window.document.querySelector('input#numb2222')
    var ressss = window.document.getElementById('ressss')
    var n1111 = Number(tn1111.value)
    var n2222 = Number(tn2222.value)
    var ssss = n1111 / n2222
    res.innerHTML = `A divisão entre ${n1111} e ${n2222} é igual a: <strong>${ssss.toExponential()}</strong>`
     }