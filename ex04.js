let ativarCodeEx04 = document.getElementById('ativarCodeEx04')
let res4 = document.getElementById('res04')
ativarCodeEx04.addEventListener('click', () => {
    let vetor4 = [ 1, 2, 3, 4, 5 ];
    let num4 = parseFloat(document.getElementById('inputCode4').value)

    for (let i = 0; i < vetor4.length; i++) {
        vetor4[i] += num4
    }

    if ((num4 == null) || (num4 == '') || (isNaN(num4))) {
        alert('Digite um número válido!')
        res4.innerHTML = ''
        return
    } else {
        res4.innerHTML = `O vetor multiplicado por ${num4} é: ${vetor4}`;
        console.log(vetor4);
    }
});