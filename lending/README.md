## Source code

The source code included is the final production version of the protocol. Eventual changes (smart contracts updates, bug fixes, etc.) will be applied through subsequent merge requests.

### Run test using hardhat

1. Install dependencies

> yarn

2. Rename files

- Open node_modules/@typechian/ethers-v5/common.js.

Rename

```
exports.FACTORY_POSTFIX = '\_\_factory';
```

to

```
 exports.FACTORY_POSTFIX = 'Factory';
```

- Open node_modules/@typechian/ethers-v5/index.js.

Rename

```
const desiredSymbol = fileName + '\_\_factory';
```

to

```
const desiredSymbol = fileName + 'Factory';
```

3. Compile

> npx hardhat compile

4. Run test

> npx hardhat test --network localhost
