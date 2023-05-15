const { selectVendorByNameOrAlias } = require('.');
const vendors = require('./vendors');

describe('#selectVendorByNameOrAlias', () => {
    it('should respond with correct vendor by vendor name and alias', () => {
        for (const vendor of vendors) {
            for (const alias of [vendor.name, ...(vendor.alias ?? [])]) {
                expect(selectVendorByNameOrAlias(alias)).toBe(vendor)
            }
        }
    });

    it('should default to undefined', () => {
        expect(selectVendorByNameOrAlias('something ThaT Does NoT HaVE A Matching Vendor')).toBeUndefined();
    });
})
