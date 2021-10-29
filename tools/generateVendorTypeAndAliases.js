/**
 * Used to add `_type` and `aliases` properties onto each Vendor json.
 */

const fs = require("fs");
const Path = require("path");
const snakeCase = require("../utils/snakeCase");

const vendorsPathPrefix = Path.join(__dirname, "..", "vendors");
const vendorFiles = fs.readdirSync(vendorsPathPrefix);

for (const vendorFile of vendorFiles) {
  const vendor = require(Path.join(vendorsPathPrefix, vendorFile));
  vendor._type = vendor._type ?? snakeCase(vendor.name);
  vendor.aliases = vendor.aliases ?? [];
  fs.writeFileSync(
    Path.join(vendorsPathPrefix, vendorFile),
    JSON.stringify(vendor, null, 2)
  );
}

console.log(
  "You updated all the vendors with types and aliases. Good job. :)\n"
);
process.exit(0);
