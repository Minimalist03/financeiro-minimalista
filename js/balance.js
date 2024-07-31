document.addEventListener('DOMContentLoaded', async function() {
    try {
        const response = await fetch('http://localhost:3000/api/gastos/mensal');
        if (!response.ok) {
            throw new Error('Erro ao buscar dados do balanço mensal');
        }
        const balanco = await response.json();

        const balancoDiv = document.getElementById('balanco');
        balancoDiv.innerHTML = `
            <p>Total de Alimentação: R$ ${balanco.Alimentação.toFixed(2)}</p>
            <p>Total de Transporte: R$ ${balanco.Transporte.toFixed(2)}</p>
            <p>Total de Lazer: R$ ${balanco.Lazer.toFixed(2)}</p>
            <p>Total de Outros: R$ ${balanco.Outros.toFixed(2)}</p>
            <h2>Total Geral: R$ ${balanco.totalGeral.toFixed(2)}</h2>
        `;
    } catch (error) {
        console.error('Erro:', error);
        alert('Não foi possível carregar o balanço mensal.');
    }
});
