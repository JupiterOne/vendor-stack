# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed

- Previously, this module was using dynamic module imports for vendor files.
  Systems that use esbuild for bundling were unable to use this module as
  esbuild was unable to resolve which files to include in its bundle. This
  project has been updated to generate a `src/vendors.js` file based on the
  contents of the `vendors/` directory. `src/vendors.js` is imported into other
  project utilities, which will force the contents to be included in bundles.

## 2.0.0 - 2021-11-01

### Changed

- `createVendorTypeFromName` now returns `undefined` if a matching vendor is not
  found.

## 1.0.0 - 2021-10-29

### Added

- Exported method `createVendorTypeFromName`, which is used to generate
  consistent vendor `_type` values for vendors which may have different names.
- Exported constant `VENDOR_PROPS_TO_OMIT`, which is used to strip out vendor
  properties that should not be propegated to all `Vendor` entities.
