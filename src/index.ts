import startCase from 'lodash.startcase';
import { KNOWN_VENDORS, VENDOR_APPS } from "./constants";
import { VendorData } from './types';

export function getVendorFromAppName(appName: string): VendorData {
  for (const [key, vendor] of Object.entries(VENDOR_APPS)) {
    if (appName.toLowerCase().includes(key)) {
      return checkProperties(vendor);
    }
  }

  return getVendor(appName);
}

export function getVendor(name: string): VendorData {
  for (const [key, vendor] of Object.entries(KNOWN_VENDORS)) {
    if (name.toLowerCase().includes(key)) {
      return checkProperties(vendor);
    }
  }

  return {
    name: startCase(name),
    displayName: startCase(name),
    _type: name.toLowerCase().replace(/\s/g, '_'),
  };
}

function checkProperties(vendor: VendorData) {
  if (!vendor.displayName) {
    vendor.displayName = vendor.name;
  }
  if (!vendor.webLink) {
    vendor.webLink = Array.isArray(vendor.website) ? vendor.website[0] : vendor.website;
  }
  if (!vendor._type) {
    vendor._type = vendor.name.toLowerCase().replace(/\s/g, '_');
  }
  return vendor;
}
