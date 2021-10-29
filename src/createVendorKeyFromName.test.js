const { createVendorKeyFromName } = require('.')
const fs = require("fs");
const Path = require("path");

describe('#createVendorKeyFromName', () => {
    it('should default to snake_case', () => {
        expect(createVendorKeyFromName('something ThaT Does NoT HaVE A Matching Vendor')).toBe('something_that_does_not_have_a_matching_vendor')
    })

    const vendorsPathPrefix = Path.join(__dirname, "..", "vendors");
    const vendorFiles = fs.readdirSync(vendorsPathPrefix);
    for (const vendorFile of vendorFiles) {
        const vendor = require(Path.join(vendorsPathPrefix, vendorFile));
        for (const alias of [vendor.name, ...(vendor.alias ?? [])]) {
            it(`Should send back the correct vendor type for each vendor name and alias of ${vendor.name}`, () => {
                expect(createVendorKeyFromName(alias)).toBe(vendor._type)
            })
        }
    }
})
