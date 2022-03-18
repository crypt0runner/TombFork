//const Glamour = artifacts.require("Glamour");
const GShares = artifacts.require("GShares");
//const GBond = artifacts.require("GBond");
//const GSharesRewardPool = artifacts.require("GSharesRewardPool");
//const Boardroom = artifacts.require("Boardroom");
//const Treasury = artifacts.require("Treasury");
//const Oracle = artifacts.require("Oracle");

module.exports = async function(callback) {
    try {
        const _GShares = await GShares.deployed()
        console.log('address__GShares:',_GShares.address)
        await _GShares.claimRewards() 






    }
    catch(error) {
      console.log(error)
    }
  
    callback()
  }
