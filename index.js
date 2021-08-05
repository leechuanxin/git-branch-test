import { writeFile } from 'fs';
let name = process.argv[2];
writeFile('data.json', name, (err) => console.error('err ->', err));
let name = process.argv[2];
console.log(`good day ${name}, are you well?`);
