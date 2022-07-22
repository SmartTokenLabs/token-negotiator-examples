#! /usr/bin/env node

let fs = require("fs");

let packages = [
	"art-gallery-medium-article-website",
	"ecommerce-store-website",
	"hotel-bogota-active-negotiation-website",
	"hotel-bogota-passive-negotiation-website",
	"ticket-issuer-url-website",
	"token-outlet-website",
	"typescript-bare-bones-demo"
];

const args = process.argv.slice(2);

const branch = args[0] ?? "staging";

for (let package of packages){

	const path = __dirname + "/../" + package + "/package.json";

	if (!fs.existsSync(path)){
		console.log("package.json does not exist");
		return;
	}

	let json;

	try {

		const fileContents = fs.readFileSync(path);

		json = JSON.parse(fileContents.toString());

	} catch (e){
		console.log("package.json is invalid: " + e.message);
		return;
	}

	json.dependencies["@tokenscript/token-negotiator"] = "git://github.com/tokenScript/token-negotiator.git#" + branch;

	try {
		fs.writeFileSync(path, JSON.stringify(json, null, 2));
	} catch (e){
		console.log("Failed to write package.json: " + e.message);
	}

}