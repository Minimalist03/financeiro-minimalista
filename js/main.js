document.getElementById('form-gasto').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const valor = document.getElementById('valor').value;
    const categoria = document.getElementById('categoria').value;
    const data = new Date().toISOString();
    
    const gasto = {
        valor: parseFloat(valor),
        categoria,
        data
    };
    
    await fetch('https://nome-do-seu-projeto.herokuapp.com/api/gastos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(gasto)
    });

    alert('Gasto adicionado com sucesso!');
    document.getElementById('form-gasto').reset();
});
