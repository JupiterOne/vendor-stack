const fs = require('fs');
const Path = require("path");
const vendorKeyFromName = require("../utils/snakeCase");

const vendorsPathPrefix = Path.join(__dirname, "..", "vendors");
const vendorFiles = fs.readdirSync(vendorsPathPrefix);

const vendorAliasToTypeMap = new Map()
const filesAlreadyCached = new Set()

const createVendorTypeFromName = (vendorName) => {
    if (vendorAliasToTypeMap[vendorName]) {
        return vendorAliasToTypeMap[vendorName]
    }
    for (const vendorFile of vendorFiles.filter((file) => !filesAlreadyCached.has(file))) {
        const vendor = require(Path.join(vendorsPathPrefix, vendorFile));
        for (const alias of [vendor.name, ...(vendor.alias ?? [])]) {
            vendorAliasToTypeMap.set(alias, vendor._type)
            if (vendorName == alias) {
                return vendor._type
            }
        }
        filesAlreadyCached.add(vendorFile)
    }
    return vendorKeyFromName(vendorName)
}

module.exports = createVendorTypeFromName
