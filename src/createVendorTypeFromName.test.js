const { createVendorTypeFromName } = require('.')
const fs = require("fs");
const Path = require("path");

describe('#createVendorTypeFromName', () => {
    const vendorsPathPrefix = Path.join(__dirname, "..", "vendors");
    const vendorFiles = fs.readdirSync(vendorsPathPrefix);
    for (const vendorFile of vendorFiles) {
        const vendor = require(Path.join(vendorsPathPrefix, vendorFile));
        for (const alias of [vendor.name, ...(vendor.alias ?? [])]) {
            it(`Should send back the correct vendor type for each vendor name and alias of ${vendor.name}`, () => {
                expect(createVendorTypeFromName(alias)).toBe(vendor._type)
            })
        }
    }
    it('should default to undefined', () => {
        expect(createVendorTypeFromName('something ThaT Does NoT HaVE A Matching Vendor')).toBeUndefined()
    })
})
