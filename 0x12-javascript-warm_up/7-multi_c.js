#!/usr/bin/node
// three languages
const myVar = ['C is fun'];
const args = process.argv.slice(2);
if (args.length < 1) {
    console.log('Missing number of ocurrences');
} else {
    const x = args[0];
    for (let i = x; i > 0; i--) {
	console.log(myVar[0]);
    }
}
