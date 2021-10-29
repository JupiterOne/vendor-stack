# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## 1.0.0 - 2021-10-29

### Added

- Exported method `createVendorTypeFromName`, which is used to generate
  consistent vendor `_type` values for vendors which may have different names.
- Exported constant `VENDOR_PROPS_TO_OMIT`, which is used to strip out vendor
  properties that should not be propegated to all `Vendor` entities.
