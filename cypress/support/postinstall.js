const fs = require("fs/promises");

/**
 * Ensures that cypress can run all tests installed from @plugga-tech.
 * Script runs after npm install, se package.json for more info.
 **/
(async function linkTestsInNodeModulesFoderToCypressFolder() {
  try {
    try {
      await fs.unlink(__dirname + "/cypress/@plugga-tech");
    } catch (error) {}
    await fs.symlink(
      __dirname + "/node_modules/@plugga-tech",
      __dirname + "/cypress/@plugga-tech",
      "dir"
    );
  } catch (error) {
    console.error(error);
  }
})();
