// commit.js
import simpleGit from "simple-git";

const git = simpleGit();

const makeYesterdayCommit = async () => {
  const date = "2025-03-19"; // 🔁 Change to whatever date you want
  const commitMessage = `Commit for ${date}`;

  try {
    // Add a dummy change (create a file or update a file)
    const fs = await import('fs');
    fs.writeFileSync("activity.txt", `Commit for ${date} - ${new Date().toISOString()}`);

    // Stage, commit, and push
    await git.add(".");
    await git.commit(commitMessage, { "--date": `"${date} 12:00:00"` });
    await git.push();

    console.log(`✅ Commit for ${date} pushed successfully!`);
  } catch (err) {
    console.error("❌ Error committing:", err);
  }
};

makeYesterdayCommit();
