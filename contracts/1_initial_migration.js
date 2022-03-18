
const Glamour = artifacts.require("Glamour");
const GShares = artifacts.require("GShares");
const GBond = artifacts.require("GBond");
const GSharesRewardPool = artifacts.require("GSharesRewardPool");
const GenesisRewardPool = artifacts.require("GenesisRewardPool");
const Boardroom = artifacts.require("Boardroom");
const Treasury = artifacts.require("Treasury");
const Oracle = artifacts.require("Oracle");


/*

module.exports = function (deployer) {
  deployer.deploy(GenesisRewardPool,
        //GShares
        "0x16ee2Cc3426069DC15D3dfC2Ac874C14AFd84058",
        "XX_DevFundAddress",
        1646926209        // !!!TIME!!!
        )
  */      

module.exports = function (deployer) {
  deployer.deploy(Glamour,
        // uint256 _taxRate, address _taxCollectorAddress
        0000000000000000000000,
        "XX_DevFundAddress",
        ).then(function () {
    return deployer.deploy(GShares,
      //time, _communityFund, address _devFund, address _team1Fund
      XX_GSHARESTIME ,      // !!!TIME!!!
      "XX_DevFundAddress",
      "XX_DevFundAddress",
      "XX_DevFundAddress"
      ).then(function () {
    return deployer.deploy(GBond
      ).then(function () {
    return deployer.deploy(GSharesRewardPool,
      //GShares
      GShares.address,
      XX_GSHARESPOOLTIME       // !!!TIME!!!
      ).then(function () {
    return deployer.deploy(GenesisRewardPool,
      //GShares
      Glamour.address,
      "XX_DevFundAddress",
      XX_GENTIME        // !!!TIME!!!
      ).then(function () {
    return deployer.deploy(Boardroom
      ).then(function () {
    return deployer.deploy(Treasury
      )
      });
      });
      });
      });
      });
  });



/*
module.exports = function (deployer) {
  deployer.deploy(Glamour,
    // uint256 _taxRate, address _taxCollectorAddress
    0000000000000000000000,
    "XX_OpAddress",
    )
    
module.exports = function (deployer) {
      deployer.deploy(GShares,
        //_communityFund, address _devFund, address _team1Fund
        "XX_DevFundAddress",
        "XX_DevFundAddress",
        "XX_DevFundAddress"
        )
    

module.exports = function (deployer) {
      deployer.deploy(GBond
        )



module.exports = function (deployer) {
      deployer.deploy(GSharesRewardPool,
        //GShares
        "0xcA7309C11b35Abfe47Fb06731343BEF9b849Ec3A",
        0
        )


module.exports = function (deployer) {
      deployer.deploy(Boardroom
        )



module.exports = function (deployer) {
      deployer.deploy(Treasury
        )



*/

// ORACLE
/*
        //IUniswapV2Pair _pair,uint256 _period, uint256 _startTime
module.exports = function (deployer) {
      deployer.deploy(Oracle,
        //IUniswapV2Pair _pair(Hermes),uint256 _period, uint256 _startTime
        "0xc5c7e67BfEb1B2c337282a0Bd978D6674768794F",
        21600,
        0
        )
*/


};
