const http = require('http');
require('dotenv').config();
const app = require('./src/app');

const server = http.createServer(app);


server.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
});
