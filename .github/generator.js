const fs = require('fs')
const path = require('path')

function setupEndpoints() {

    const publicPath = path.join(process.cwd(), 'public')

    fs.mkdirSync(publicPath)

}

function createLicensesEndpoint() {

    const publicPath = path.join(process.cwd(), 'public')
    const licensesPath = path.join(process.cwd(), 'public', 'licenses');
    const licensesJson = []

    fs.mkdirSync(licensesPath)
    fs.writeFileSync(path.join(licensesPath, 'index.json'), JSON.stringify(licensesJson, null, 4));
    fs.writeFileSync(path.join(publicPath, 'licenses.json'), JSON.stringify(licensesJson, null, 4));

}

setupEndpoints();
createLicensesEndpoint();