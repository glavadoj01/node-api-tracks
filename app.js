require('dotenv').config()
const epxress = require('express')
const cors = require('cors')
const app = epxress()
const { dbConnect } = require('./config/mongo')

const PORT = process.env.PORT || 3000
const IP_LOCAL = process.env.IP_LOCAL || '0.0.0.0'
app.use(cors())
app.use(epxress.json())
app.use(epxress.static('public'));
app.use('/api/1.0', require('./app/routes'))

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Tu API es http://${IP_LOCAL}:${PORT}/api/1.0`)
})