#! /usr/bin/env node
//import { exec } from 'child_process';
//import { exec } from 'shelljs'

var shell = require('shelljs');

/**
 * Execute simple shell command (async wrapper).
 * @param {String} cmd
 * @return {Object} { stdout: String, stderr: String }
 */
/*async function sh(cmd) {
    return new Promise(function (resolve, reject) {
        exec(cmd, { shell: '/bin/bash' }, (err, stdout, stderr) => {
            if (err) {
                reject(err);
            } else {
                resolve({ stdout, stderr });
            }
        });
    });
}*/

async function main() {

    // TODO: set gh-pages specific configs
    /*try {
        let cwd = await sh("which npm");

        console.log(cwd);

        await sh("npm run github-pages-build");
    } catch (e){
        console.log(e);
    }*/

    let buildRes = shell.exec("npm run build");

    if (buildRes.code > 0){
        console.log("Build failed!");

        return;
    }

    console.log("Build completed! Moving build artifacts..");
}

main();
