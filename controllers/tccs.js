module.exports = app =>{
    app.put('/tccs', (req, res) => res.send('Você está acessando a rota de tccs e está realizando um put!'))
    app.get('/tccs', (req, res) => res.send('Você está acessando a rota de tccs!'))
    app.post('/tccs', (req, res) => {
        console.log(req.body)
        res.send('Você está na rota de tccs e está realizando um post!')
    })
    app.delete('/tccs', (req, res) => {
        res.send('Você está na rota de tccs e está realizando um delete!')
    })
}