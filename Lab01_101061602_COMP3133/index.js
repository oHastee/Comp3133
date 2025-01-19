const fs = require('fs');
const csv = require('csv-parser');

// File paths
const inputFile = 'input_countries.csv';
const canadaFile = 'canada.txt';
const usaFile = 'usa.txt';

// Step 1: Delete existing canada.txt and usa.txt files
function deleteFileIfExists(file) {
    if (fs.existsSync(file)) {
        fs.unlinkSync(file);
        console.log(`${file} deleted`);
    }
}

deleteFileIfExists(canadaFile);
deleteFileIfExists(usaFile);

// Step 2: Create streams to write to canada.txt and usa.txt
const canadaWriteStream = fs.createWriteStream(canadaFile, { flags: 'a' });
const usaWriteStream = fs.createWriteStream(usaFile, { flags: 'a' });

// Step 3: Process the CSV file
fs.createReadStream(inputFile)
    .pipe(csv())
    .on('data', (row) => {
        // Filter for Canada and write to canada.txt
        if (row.country.toLowerCase() === 'canada') {
            canadaWriteStream.write(`${row.country},${row.year},${row.population}\n`);
        }
        // Filter for United States and write to usa.txt
        if (row.country.toLowerCase() === 'united states') {
            usaWriteStream.write(`${row.country},${row.year},${row.population}\n`);
        }
    })
    .on('end', () => {
        console.log('CSV file processed successfully.');
        // Close the write streams after processing
        canadaWriteStream.end();
        usaWriteStream.end();
    })
    .on('error', (err) => {
        console.error(`Error processing CSV file: ${err.message}`);
    });
