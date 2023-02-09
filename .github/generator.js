// Core Dependencies
const fs = require('fs')
const path = require('path')

// External Dependencies
const yaml = require('js-yaml');

const licensesData = []

function readLicensesData() {

    const licenses = fs.readdirSync(path.join(process.cwd(), 'licenses'))

    licenses.forEach(i => {
      
        const licenseInfo = fs.readFileSync(path.join(process.cwd(), 'licenses', i), 'utf-8');
        const jsonInfo = JSON.parse(licenseInfo);

        licensesData.push(jsonInfo);

    })

}

function setupEndpoints() {

    const publicPath = path.join(process.cwd(), 'public')

    fs.mkdirSync(publicPath)

}

// For each license, create their endpoints
function createLicenseEndpoints() {

    const publicPath = path.join(process.cwd(), 'public')
    const licensesPath = path.join(process.cwd(), 'public', 'licenses');

    licensesData.forEach(i => {

        const licensePath = path.join(licensesPath, i.id)

        // Data Endpoints
        fs.mkdirSync(licensePath)
        fs.writeFileSync(path.join(licensePath, 'index.json'), JSON.stringify(i));
        fs.writeFileSync(licensePath + ".json", JSON.stringify(i));
        fs.writeFileSync(licensePath + ".yaml", yaml.dump(i));

        // Raw Endpoints
        fs.writeFileSync(path.join(licensePath, 'raw.txt'), i.body)

    })

}

function createLicensesEndpoint() {

    const publicPath = path.join(process.cwd(), 'public')
    const licensesPath = path.join(process.cwd(), 'public', 'licenses');

    const licensesJson = licensesData.map(i => {

        return {
            id: i.id,
            name: i.name,
            url: `https://fairfield-programming.github.io/openlist/licenses/${i.id}`,
            since: i.since
        }

    })

    fs.mkdirSync(licensesPath)
    fs.writeFileSync(path.join(licensesPath, 'index.json'), JSON.stringify(licensesJson));
    fs.writeFileSync(path.join(publicPath, 'licenses.json'), JSON.stringify(licensesJson));
    fs.writeFileSync(path.join(publicPath, 'licenses.yaml'), yaml.dump(licensesJson));

}

setupEndpoints();
readLicensesData();
createLicensesEndpoint();
createLicenseEndpoints();