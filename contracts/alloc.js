//const Glamour = artifacts.require("Glamour");
//const GShares = artifacts.require("GShares");
//const GBond = artifacts.require("GBond");
//const GSharesRewardPool = artifacts.require("GSharesRewardPool");
//const Boardroom = artifacts.require("Boardroom");
const Treasury = artifacts.require("Treasury");
//const Oracle = artifacts.require("Oracle");

module.exports = async function(callback) {
    try {
        const _Treasury = await Treasury.deployed()
        console.log('address_Treasury:',_Treasury.address)
        await _Treasury.allocateSeigniorage() 






    }
    catch(error) {
      console.log(error)
    }
  
    callback()
  }
