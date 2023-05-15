const { createVendorTypeFromName } = require('.');
const vendors = require('./vendors');

describe('#createVendorTypeFromName', () => {
    it('should respond with correct vendor type for each vendor name and alias', () => {
        for (const vendor of vendors) {
            for (const alias of [vendor.name, ...(vendor.alias ?? [])]) {
                expect(createVendorTypeFromName(alias)).toBe(vendor._type)
            }
        }
    });

    it('should default to undefined', () => {
        expect(createVendorTypeFromName('something ThaT Does NoT HaVE A Matching Vendor')).toBeUndefined()
    });
});
