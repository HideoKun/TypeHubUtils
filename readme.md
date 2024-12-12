<!-- Build & Test Workflow Status -->

[![Build & Test](https://github.com/HideoKun/TypeHubUtils/actions/workflows/node.js.yml/badge.svg)](https://github.com/HideoKun/TypeHubUtils/actions/workflows/node.js.yml)
[![codecov](https://codecov.io/gh/HideoKun/PureTypes/branch/main/graph/badge.svg)](https://codecov.io/gh/HideoKun/PureTypes)

<!-- Additional Badges -->

[![License](https://img.shields.io/github/license/HideoKun/TypeHubUtils)](https://github.com/HideoKun/TypeHubUtils/blob/main/LICENSE)
[![Issues](https://img.shields.io/github/issues/HideoKun/TypeHubUtils)](https://github.com/HideoKun/TypeHubUtils/issues)
[![Pull Requests](https://img.shields.io/github/issues-pr/HideoKun/TypeHubUtils)](https://github.com/HideoKun/TypeHubUtils/pulls)
[![Last Commit](https://img.shields.io/github/last-commit/HideoKun/TypeHubUtils)](https://github.com/HideoKun/TypeHubUtils/commits/main)

<p align="center">
  <img src="logo.svg" width="200px" align="center" alt="Pure Types Logo" />
  <h1 align="center">PureTypes</h1>
</p>

## Goals

- make it friendly
- allow user to grow via helpful api (exactUnion, exactFunc, exactArr, exactObj)
- edu first

## GuideLines

### Code

- ignore performance, praise readability!!!
- always describe generic type args (T extends string)
- always use Safe/Close front func wrapper (ex `Func<'x'>`) and UnSafe/Open main func (ex `Func<T, '', []>`) -> Partial Type Application
- when logic is messy extract it to new named func, avoid [this](https://github.com/sindresorhus/type-fest/blob/main/source/paths.d.ts#L123)
- when both logic branches are invoking same func compress them to one func helpers for picking arg values
- if there is to many args in one func, try to use props object to

### Files

- one func per file + tests
- always add js doc (describe usage and input)

### Dirs

```
/someDir
  /safe
  /unSafe
```

vs

```
Func/Safe
_Func/UnSafeFunc
_Helpers/Utils
```

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

## tests

- consistent
- inconsistent
- with consts literal
- with @ts-expect-error
- with never

## other

- definition of done
