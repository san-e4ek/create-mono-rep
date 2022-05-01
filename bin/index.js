#!/usr/bin/env node
const download = require("download-git-repo");

const repoName = process.argv[2];

console.log("Initializing project..");

download("san-e4ek/monorepo-template", repoName, { clone: true }, (error) => {
  if (error) {
    console.error(`Everything was fine, then it wasn't:
    ${error}`);
    return;
  }
  console.log(`${repoName} created successfully!`);
});
