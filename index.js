function calcularRenda() {
    
    const rendas = [
        parseFloat(document.getElementById('renda1').value) || 0,
        parseFloat(document.getElementById('renda2').value) || 0,
        parseFloat(document.getElementById('renda3').value) || 0,
        parseFloat(document.getElementById('renda4').value) || 0,
        parseFloat(document.getElementById('renda5').value) || 0,
        parseFloat(document.getElementById('renda6').value) || 0,
        parseFloat(document.getElementById('renda7').value) || 0,
        parseFloat(document.getElementById('renda8').value) || 0,
        parseFloat(document.getElementById('renda9').value) || 0,
        parseFloat(document.getElementById('renda10').value) || 0
    ];

    
    const totalRenda = rendas.reduce((total, renda) => total + renda, 0);
    
    
    const numeroPessoas = rendas.length;

    
    const rendaPerCapita = totalRenda / numeroPessoas;

    
    document.getElementById('resultado').textContent = `Renda Per Capita: R$ ${rendaPerCapita.toFixed(2)}`;
}
