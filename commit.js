// const simpleGit = require("simple-git");
import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const git = simpleGit();

const makeSpecificCommit = async () => {
  const date = "2025-03-19"; // Manually set yesterday's date
  const commitMessage = `Commit for ${date}`;

  await git.add("."); // Stage all changes
  await git.commit(commitMessage, { "--date": `"${date} 12:00:00"` }); // Commit with the specified date
  await git.push(); // Push to GitHub

  console.log(`✅ Commit for ${date} pushed successfully!`);
};

makeSpecificCommit(1);
