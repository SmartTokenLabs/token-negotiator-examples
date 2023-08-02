#! /usr/bin/env node

const concurrently = require('concurrently');
const path = require('path');
const {env} = require("shelljs");

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
	"vue-vite-boilerplate"
];

const args = process.argv.slice(2);

const branch = args[0] ?? "staging";

const projects = args[1] ?? null;

packages = packages.filter((path) => {
	return !projects || projects.indexOf(path) > -1
});

const cmds = packages.map((pack) => ({
	command: `
		echo "//npm.pkg.github.com/:_authToken=${env.GPR_KEY}" >> .npmrc
		echo "@tokenscript:registry=https://npm.pkg.github.com" >> .npmrc
		cat .npmrc
		npm i @tokenscript/token-negotiator@SNAPSHOT-${branch}
	`,
	cwd: path.resolve(__dirname, '..', pack)
}));

concurrently(
	cmds,
	{
		killOthers: ['failure'],
		maxProcesses: 5
	}
);