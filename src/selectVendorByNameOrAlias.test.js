const { selectVendorByNameOrAlias } = require('.')
const fs = require("fs");
const Path = require("path");

describe('#selectVendorByNameOrAlias', () => {
    const vendorsPathPrefix = Path.join(__dirname, "..", "vendors");
    const vendorFiles = fs.readdirSync(vendorsPathPrefix);
    for (const vendorFile of vendorFiles) {
        const vendor = require(Path.join(vendorsPathPrefix, vendorFile));
        for (const alias of [vendor.name, ...(vendor.alias ?? [])]) {
            it(`Should send back the correct vendor for each vendor name and alias of ${vendor.name}`, () => {
                expect(selectVendorByNameOrAlias(alias)).toBe(vendor)
            })
        }
    }
    it('should default to undefined', () => {
        expect(selectVendorByNameOrAlias('something ThaT Does NoT HaVE A Matching Vendor')).toBeUndefined()
    })
})
