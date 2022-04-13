const selectVendorByNameOrAlias = require('./selectVendorByNameOrAlias')

const createVendorTypeFromName = (vendorName) => {
    const vendor = selectVendorByNameOrAlias(vendorName) || {};
    return vendor._type;
}

module.exports = createVendorTypeFromName
