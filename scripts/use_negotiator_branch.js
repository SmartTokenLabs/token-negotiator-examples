#! /usr/bin/env node

const {execSync} = require("child_process");
//const concurrently = require('concurrently');
//const path = require('path');

let packages = [
	"art-gallery-medium-article-website",
	"ecommerce-store-website",
	"hotel-bogota-active-negotiation-website",
	"hotel-bogota-passive-negotiation-website",
	"ticket-issuer-url-website",
	"token-outlet-website",
	"typescript-bare-bones-demo",
	"angular-bare-bones-demo",
	"vue-boilerplate",
];

const args = process.argv.slice(2);

const branch = args[0] ?? "staging";

/*const cmds = packages.map((pack) => ({
	command: "cd " + __dirname + "/../" + pack + " && npm i @tokenscript/token-negotiator@SNAPSHOT-" + branch,
	cwd: path.resolve(__dirname, '..', pack)
}));

concurrently(
	cmds,
	{
		killOthers: ['failure'],
		maxProcesses: 5
	}
);*/

// This is the old method of updating the package.json version, however this doesn't work to update snapshot versions
for (let pack of packages){

	/*const path = __dirname + "/../" + package + "/package.json";

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

	json.dependencies["@tokenscript/token-negotiator"] = "SNAPSHOT-" + branch;

	try {
		fs.writeFileSync(path, JSON.stringify(json, null, 2));
	} catch (e){
		console.log("Failed to write package.json: " + e.message);
	}*/

	execSync("cd " + __dirname + "/../" + pack + " && npm i @tokenscript/token-negotiator@SNAPSHOT-" + branch);
}