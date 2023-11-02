const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const res = document.getElementById('res');
const informacao = document.getElementById('informacao');
const verificar = document.getElementById('verificar');

verificar.addEventListener("click", function() {
    if (peso.value.length == 0 || altura.value.length == 0) {
        alert('[ERRO] Faltam dados! Favor verificar e tentar novamente.');
    } else {
        const p = Number(peso.value);
        const a = Number(altura.value);
        const valorAltura = (a * a) / 10000;
        const valorPeso = p / valorAltura;
        const imc = valorPeso.toFixed(2);
        

        res.innerHTML = `Seu IMC é: ${imc}`;
        
        if (imc < 18.5) {
            informacao.innerHTML = 'Você está abaixo do peso.';
        } else if (imc >= 18.6 && imc <= 24.9) {
            informacao.innerHTML = 'Você está dentro do peso.';
        } else if (imc >= 25 && imc <= 29.9) {
            informacao.innerHTML = 'Você está acima do peso.';
        } else if (imc >= 30 && imc <= 34.9) {
            informacao.innerHTML = 'Você está com obesidade grau I.';
        } else if (imc >= 35 && imc <= 39.9) {
            informacao.innerHTML = 'Você está com obesidade grau II.';
        } else {
            informacao.innerHTML = 'Você está com obesidade grau III.';
        }
    }
});
