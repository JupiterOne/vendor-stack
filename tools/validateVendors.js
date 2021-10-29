const fs = require("fs");
const Path = require("path");
const omit = require("lodash.omit");

const Ajv = require("ajv");
const StringArray = require("../schema/StringArray.json");
const Vendor = require("../schema/Vendor.json");

// aliases and _type are used for mapping, no need to store on Vendor Entities.
const PROPS_TO_OMIT = ["aliases", "_type"];

const ajv = new Ajv();
const validate = ajv
  .addSchema(StringArray)
  .addSchema(Vendor)
  .getSchema("Vendor");

const vendorsPathPrefix = Path.join(__dirname, "..", "vendors");
const vendorFiles = fs.readdirSync(vendorsPathPrefix);

const invalidVendors = [];

for (const vendorFile of vendorFiles) {
  const vendor = require(Path.join(vendorsPathPrefix, vendorFile));
  const isVendorValid = validate(omit(vendor, PROPS_TO_OMIT));

  if (!isVendorValid) invalidVendors.push(vendorFile);
}

if (invalidVendors.length > 0) {
  console.error(
    `The following vendors were invalid. Please fix before committing.\n\n${invalidVendors.join(
      "\n"
    )}\n`
  );
  process.exit(1);
}

console.log("All vendors are valid. Good job. :)\n");
process.exit(0);
