const BigNumber = require("bignumber.js");
const truffleAssert = require("truffle-assertions");

const MxxConverter = artifacts.require("MxxConverter");
const MockupMXX = artifacts.require("MockupMXX");

BigNumber.set({
  DECIMAL_PLACES: 48,
  ROUNDING_MODE: BigNumber.ROUND_DOWN,
  EXPONENTIAL_AT: [-48, 48],
});

contract("02_after_conversion", function (accounts) {
  const owner = accounts[0];
  const user = accounts[1];
  const bscUser = accounts[2];
  const burner = accounts[5];
  const MXX_DECIMAL = 8;
  const PERCENTAGE_DECIMAL = 8;
  const CONVERTER_FEE = 0.01;
  const CONVERT_RATIO = 0.01;
  const INTIAL_AVAILABLE_MXX = 415_000_000;
  let converterInstance;
  let mxxInstance;

  before(() => {
    web3.eth.defaultAccount = owner;
  });

  beforeEach("Initial contract instance", async () => {
    mxxInstance = await MockupMXX.new("Multiplier", "MXX");
    converterInstance = await MxxConverter.new(mxxInstance.address, burner);
  });

  it("should be able to set fee", async () => {
    const feeToSet = new BigNumber(0.05).shiftedBy(PERCENTAGE_DECIMAL).toString();
    await converterInstance.setFee(
      feeToSet
    );

    const feeAfter = Number(await converterInstance.feePcnt());
  
    await assert.equal(feeAfter, Number(feeToSet))
  });

  it("should be able to call completeConversion with existed conversion", async () => {
    const amountToDeposit = new BigNumber(100).shiftedBy(MXX_DECIMAL).toString();
    // ? Prepare MXX to deposit
    await mxxInstance.mint(user, amountToDeposit, {from: owner});
    // ? Approve MXX to Converter
    await mxxInstance.approve(converterInstance.address, amountToDeposit, {from: user});

    const deposit = await converterInstance.depositForConversion(
      user,
      amountToDeposit,
      {
        from: user,
      }
    );

    let _index;

    truffleAssert.eventEmitted(deposit, 'NewConversion', (event) => {
      const { index } = event;
      _index = index;

      return !(new BigNumber(index).isNaN());
    });

    await converterInstance.completeConversion(_index);

    await assert.isTrue(true, 'completeConversion is not success');
  });

  it("should throw if index is invalid", async () => {
    const complete = converterInstance.completeConversion(10);

    await truffleAssert.reverts(complete, 'Index out of range');
  });

  it("should throw if conversion status is not New/Pending", async () => {
    const amountToDeposit = new BigNumber(100).shiftedBy(MXX_DECIMAL).toString();
    // ? Prepare MXX to deposit
    await mxxInstance.mint(user, amountToDeposit, {from: owner});
    // ? Approve MXX to Converter
    await mxxInstance.approve(converterInstance.address, amountToDeposit, {from: user});

    const deposit = await converterInstance.depositForConversion(
      user,
      amountToDeposit,
      {
        from: user,
      }
    );

    let _index;

    truffleAssert.eventEmitted(deposit, 'NewConversion', (event) => {
      const { index } = event;
      _index = index;

      return !(new BigNumber(index).isNaN());
    });

    await converterInstance.completeConversion(_index);

    const complete = converterInstance.completeConversion(_index);

    await truffleAssert.reverts(complete, 'Invalid Status');
  });

  it("should emit valid ConversionCompleted event after completeConversion", async () => {
    const amountToDeposit = new BigNumber(100).shiftedBy(MXX_DECIMAL).toString();
    // ? Prepare MXX to deposit
    await mxxInstance.mint(user, amountToDeposit, {from: owner});
    // ? Approve MXX to Converter
    await mxxInstance.approve(converterInstance.address, amountToDeposit, {from: user});

    const deposit = await converterInstance.depositForConversion(
      user,
      amountToDeposit,
      {
        from: user,
      }
    );

    let _index;

    truffleAssert.eventEmitted(deposit, 'NewConversion', (event) => {
      const { index } = event;
      _index = index;

      return !(new BigNumber(index).isNaN());
    });

    const completeResult = await converterInstance.completeConversion(_index);

    truffleAssert.eventEmitted(completeResult, 'ConversionCompleted', (event) => {
      const { index } = event;
      _index = index;

      return index === _index;
    });

  });

  /**
   * ! Refund testcases:
   * - 
   */
  
});