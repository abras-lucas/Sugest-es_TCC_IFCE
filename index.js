const customExpress = require('./config/customExpress')
const app = customExpress()

app.listen(3001, () => ('O servidor está funcionando na porta 3001!'))