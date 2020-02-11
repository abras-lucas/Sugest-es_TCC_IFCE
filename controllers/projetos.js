module.exports = app => {
    app.put('/projetos', (req, res) => res.send('Você está acessando a rota de projetos e está realizando um put!'))
    app.get('/projetos', (req, res) => res.send('Você está acessando a rota de projetos!'))
    app.post('/projetos', (req, res) => {
        console.log(req.body)
        res.send('Você está na rota de projetos e está realizando um post!')
    })
    app.delete('/projetos', (req, res) => {
        res.send('Você está na rota de projetos e está realizando um delete!')
    })
}