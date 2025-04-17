document.getElementById('formulario-contato').addEventListener('submit', function (e) {
    e.preventDefault()
  
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const mensagem = document.getElementById('mensagem').value
    const feedback = document.getElementById('mensagem-enviada')
  
    if (nome && email && mensagem) {
      feedback.textContent = 'Mensagem enviada com sucesso! 💌'
      feedback.style.color = '#38bdf8'
  
      // limpa os campos
      this.reset()
    } else {
      feedback.textContent = 'Preencha todos os campos!'
      feedback.style.color = 'red'
    }
  
    // remover feedback após 4 segundos
    setTimeout(() => feedback.textContent = '', 4000)
  })