<!-- Build & Test Workflow Status -->

[![Build & Test](https://github.com/HideoKun/TypeHubUtils/actions/workflows/node.js.yml/badge.svg)](https://github.com/HideoKun/TypeHubUtils/actions/workflows/node.js.yml)
[![codecov](https://codecov.io/gh/HideoKun/PureTypes/branch/main/graph/badge.svg)](https://codecov.io/gh/HideoKun/PureTypes)

<!-- Additional Badges -->

[![License](https://img.shields.io/github/license/HideoKun/TypeHubUtils)](https://github.com/HideoKun/TypeHubUtils/blob/main/LICENSE)
[![Issues](https://img.shields.io/github/issues/HideoKun/TypeHubUtils)](https://github.com/HideoKun/TypeHubUtils/issues)
[![Pull Requests](https://img.shields.io/github/issues-pr/HideoKun/TypeHubUtils)](https://github.com/HideoKun/TypeHubUtils/pulls)
[![Last Commit](https://img.shields.io/github/last-commit/HideoKun/TypeHubUtils)](https://github.com/HideoKun/TypeHubUtils/commits/main)

# PURE TYPES

## Goals

- make it friendly
- allow user to grow via helpful api (exact, exactArr, exactObj)
- edu first
- code is named and grouped
- Ai chat ?
- describe lib pattern in docs:
  - predicates: validator + true/false
  - filters: no validation, return org type
  - two step pattern, for optional args (no default args policy)

## GuideLines

- one func per file + tests
- always add js doc (describe usage)
- always describe input args (T extends string etc)

## Usage

- make it work
- test it with abstract stuff
- hack it -> new usages (SliceFront + prefix)

### Refs

TODO: String Methods from:

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
- https://ramdajs.com/docs/#toString
- https://lodash.com/docs/4.17.15#camelCase
- https://github.com/panzerdp/voca?tab=readme-ov-file#functions
- https://vocajs.pages.dev/#last

## organize by

- type
- type function
- dedicated data type (object, array, string etc)
- keywords
  - universal
  - deep
  - safe
  - valueOf
  - flatten
  - recursive
  - visuals(types display/ readability /ux )

## tests

- consistent
- inconsistent
- with consts literal
- with @ts-expect-error

## other

- definition of done
