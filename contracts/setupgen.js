const Glamour = artifacts.require("Glamour");
const GShares = artifacts.require("GShares");
const GBond = artifacts.require("GBond");
const GSharesRewardPool = artifacts.require("GSharesRewardPool");
const GenesisRewardPool = artifacts.require("GenesisRewardPool");
const Boardroom = artifacts.require("Boardroom");
const Treasury = artifacts.require("Treasury");
const Oracle = artifacts.require("Oracle");

module.exports = async function(callback) {
    try {

  

///////////////////////////////
//  function distributeReward(address _farmingIncentiveFund  //HSharesRewardPool
//      ) external onlyOperator {
    const _GenesisRewardPool = await GenesisRewardPool.deployed()
    console.log('address_GenesisRewardPool:',_GenesisRewardPool.address)

    await _GenesisRewardPool.add(1000,"XX_WAVAX",true,0)       // wavax liq.
    await _GenesisRewardPool.add(1000,"XX_USDC",false,0)      // usdc Liq.











    }
    catch(error) {
      console.log(error)
    }
  
    callback()
  }
