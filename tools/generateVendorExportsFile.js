const { promises: fs } = require("fs");
const path = require("path");

async function run() {
  const vendorList = await loadVendorList();
  console.log(`Vendor files loaded: ${vendorList.length}`);
  await writeVendorListFile(vendorList);
  console.log(`Successfully wrote vendor file list`);
}

async function loadVendorList() {
  const vendorBaseDir = path.join(__dirname, "..", "vendors");
  const vendorFileNames = await fs.readdir(vendorBaseDir);

  async function loadVendorFile(vendorFile) {
    const contents = await fs.readFile(path.join(vendorBaseDir, vendorFile));
    return JSON.parse(contents.toString());
  }

  const promises = [];

  for (const file of vendorFileNames) {
    promises.push(loadVendorFile(file));
  }

  return Promise.all(promises);
}

async function writeVendorListFile(vendorList) {
  const vendorListFilePath = path.join(__dirname, '../src/vendors.js');

  await fs.writeFile(
    vendorListFilePath,
    createVendorListFileContents(vendorList),
  );
}

function createVendorListFileContents(vendorList) {
  // Intentionally not pretty printed to keep byte size small
  const contents = JSON.stringify(vendorList);
// *** THIS FILE IS GENERATED FROM the "vendors" FOLDER CONTENTS VIA THE
// "generate-vendor-file-list" SCRIPT. DO NOT EDIT MANUALLY.***
return `// *** THIS FILE IS GENERATED FROM the "vendors" FOLDER CONTENTS VIA THE
// "generate-vendor-file-list" SCRIPT. DO NOT EDIT MANUALLY.***
module.exports = ${contents};`;
}

;(async () => {
  await run();
  process.exit(0);
})().catch((err) => {
  console.error(err, 'Error running script');
  process.exit(1);
});
