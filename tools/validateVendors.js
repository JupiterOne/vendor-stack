const fs = require('fs');
const Path = require('path');
const omit = require('lodash.omit');
const Ajv = require('ajv');
const { VENDOR_PROPS_TO_OMIT } = require('../src');

const ajv = new Ajv();

const schemasPath = Path.join(__dirname, '..', 'schema');
const schemaFiles = fs.readdirSync(schemasPath);

for (const schemaFile of schemaFiles) {
  const schema = require(Path.join(schemasPath, schemaFile));
  ajv.addSchema(schema);
}

const validate = ajv.getSchema('Vendor');

const vendorsPathPrefix = Path.join(__dirname, '..', 'vendors');
const vendorFiles = fs.readdirSync(vendorsPathPrefix);

const invalidVendors = [];

for (const vendorFile of vendorFiles) {
  const vendor = require(Path.join(vendorsPathPrefix, vendorFile));
  const isVendorValid = validate(omit(vendor, VENDOR_PROPS_TO_OMIT));

  if (!isVendorValid) invalidVendors.push(vendorFile);
}

if (invalidVendors.length > 0) {
  console.error(
    `The following vendors were invalid. Please fix before committing.\n\n${invalidVendors.join(
      '\n',
    )}\n`,
  );
  process.exit(1);
}

console.log('All vendors are valid. Good job. :)\n');
process.exit(0);
