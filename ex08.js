let ativarCodeEx08 = document.getElementById('ativarCodeEx08')
let res8 = document.getElementById('res08')
let array8 = []
ativarCodeEx08.addEventListener('click', () => {
    let vetor = parseFloat(document.getElementById('inputCode8').value)
    if ((vetor == null) || (vetor == '') || (isNaN(vetor))) {
        alert('Digite um número válido!')
        return
    } else{
    if(array8.length < 7){
        array8.push(vetor)
    }
    if(array8.length < 7){
        res8.innerHTML = `O vetor digitado até agora foi: ${array8}`
    }
    if(array8.length == 7){
        let valor_atual = 0
        for(i=1;i<array8.length;i++){
            let j = i - 1
            valor_atual = array8[i]
            while(j>=0 && valor_atual > array8[j]){
                array8[j+1]=array8[j]
                j--
            }
            array8[j+1]=valor_atual
        }
        res8.innerHTML = `O o vetor ordenado fica: ${array8} <br>`
    } 
    
}
})