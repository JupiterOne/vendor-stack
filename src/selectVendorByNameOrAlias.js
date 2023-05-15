const vendors = require('./vendors');

const vendorAliasMap = createVendorPointerMap(vendors);

const selectVendorByNameOrAlias = (vendorName) => {
    const index = vendorAliasMap.get(vendorName);
    return index >= 0 ? vendors[index] : undefined;
}

function createVendorPointerMap(vendors) {
    // Map<string, number> where the key is the vendor name or alias, and the
    // value is the index in the `vendors` array.
    const vendorAliasMap = new Map();

    for (let i = 0; i < vendors.length; i++) {
        const vendor = vendors[i];

        for (const alias of [vendor.name, ...(vendor.alias ?? [])]) {
            vendorAliasMap.set(alias, i);
        }
    }

    return vendorAliasMap;
}

module.exports = selectVendorByNameOrAlias;
