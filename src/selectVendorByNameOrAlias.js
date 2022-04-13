const fs = require('fs');
const Path = require("path");

const vendorsPathPrefix = Path.join(__dirname, "..", "vendors");
const vendorFiles = fs.readdirSync(vendorsPathPrefix);

const vendorAliasMap = new Map();
const filesAlreadyCached = new Set();

const selectVendorByNameOrAlias = (vendorName) => {
    const lookup = vendorAliasMap.get(vendorName);
    if (lookup) {
        return lookup;
    }
    const uncachedFiles = vendorFiles.filter((file) => !filesAlreadyCached.has(file));
    for (const vendorFile of uncachedFiles) {
        const vendor = require(Path.join(vendorsPathPrefix, vendorFile));
        for (const alias of [vendor.name, ...(vendor.alias ?? [])]) {
            vendorAliasMap.set(alias, vendor)
            if (vendorName === alias) {
                return vendor;
            }
        }
        filesAlreadyCached.add(vendorFile);
    }
}

module.exports = selectVendorByNameOrAlias;
