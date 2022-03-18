const Glamour = artifacts.require("Glamour");
const GShares = artifacts.require("GShares");
const GBond = artifacts.require("GBond");
const GSharesRewardPool = artifacts.require("GSharesRewardPool");
const Boardroom = artifacts.require("Boardroom");
const Treasury = artifacts.require("Treasury");
const Oracle = artifacts.require("Oracle");

module.exports = async function(callback) {
    try {

  
///////////////////////////////
//  function distributeReward(
//        address _launcherAddress  	// deployer address
//    ) external onlyOperator {
    const _Glamour = await Glamour.deployed()
    console.log('address_Glamour:', _Glamour.address)
    await _Glamour.distributeReward("XX_OpAddress")     // deployer address

///////////////////////////////
// Create Glamour liq.



///////////////////////////////
//  function distributeReward(address _farmingIncentiveFund  //HSharesRewardPool
//      ) external onlyOperator {
    const _GSharesRewardPool = await GSharesRewardPool.deployed()
    console.log('address_GSharesRewardPool:',_GSharesRewardPool.address)

    const _GShares = await GShares.deployed()
    console.log('address_GShares:',_GShares.address)
    await _GShares.distributeReward(_GSharesRewardPool.address)     //HSharesRewardPool

///////////////////////////////
// Create GShares liq.

/*

///////////////////////////////
    const _Treasury = await Treasury.deployed()
    console.log('address_Treasury:',_Treasury.address)
///////////////////////////////
//  function transferOperator(address newOperator_ //Treasury
//  ) public onlyOwner {
//    const _Glamour = await _Glamour.deployed()
    console.log('address_Glamour:',_Glamour.address)
    await _Glamour.transferOperator(_Treasury.address)


    ///////////////////////////////
//  function transferOperator(address newOperator_ //Treasury
//  ) public onlyOwner {
//    const _GShares = await GShares.deployed()
    console.log('address_GShares:',_GShares.address)
    await _GShares.transferOperator(_Treasury.address)


///////////////////////////////
//  function transferOperator(address newOperator_ //Treasury
//  ) public onlyOwner {
    const _GBond = await GBond.deployed()
    console.log('address_GBond:',_GBond.address)
    await _GBond.transferOperator(_Treasury.address)


///////////////////////////////
//  Create IUniswapV2Pair _pair(Hermes) !!
//   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//
// Deploy ORACLE FIRST !!
//  ^^^^^^^^^^^^^^^^^
//
//
const _Oracle = await Oracle.deployed()
console.log('address_Oracle:',_Oracle.address)





///////////////////////////////
// Add a new lp to the pool. Can only be called by the owner.
//    function add(
//        uint256 _allocPoint,      
//        IERC20 _token,            // Glamour liq. // GShares Liq.
//        bool _withUpdate,
//        uint256 _lastRewardTime
//    )
 //   const _GSharesRewardPool = await GSharesRewardPools.deployed()
    console.log('address_GSharesRewardPool:',_GSharesRewardPool.address)
    await _GSharesRewardPool.add(35500,"XX_GLAMOURPAIR",true,0)       // Glamour liq.
    await _GSharesRewardPool.add(24000,"XX_GSHARESPAIR",false,0)      // GShares Liq.



///////////////////////////////
//function initialize(
//    IERC20 _Glamour,
//    IERC20 _share,
//    ITreasury _treasury
//)
const _Boardroom = await Boardroom.deployed()
console.log('address_Boardroom:',_Boardroom.address);
await _Boardroom.initialize(_Glamour.address,_GShares.address,_Treasury.address)


///////////////////////////////
//function setOperator(address _operator) external onlyOperator {
 //   const _Boardroom = await Boardroom.deployed()
    console.log('address_Boardroom:',_Boardroom.address)
    await _Boardroom.setOperator(_Treasury.address)



///////////////////////////////
//function initialize(
//    address _Glamour,
//    address _bbond,
//    address _bshare,
//    address _GlamourOracle,
//    address _Boardroom,
//    uint256 _startTime
//)
//const _Treasury = await Treasury.deployed()
console.log('address_Treasury:',_Treasury.address)
await _Treasury.initialize(_Glamour.address,_GBond.address,_GShares.address,_Oracle.address,_Boardroom.address, XX_BONDTIME )       // !!!TIME!!!


///////////////////////////////
//function setExtraFunds(
//    address _daoFund,
//    uint256 _daoFundSharedPercent,
//    address _devFund,
//    uint256 _devFundSharedPercent,
//    address _team1Fund,
//    uint256 _team1FundSharedPercent
//)
//const _Treasury = await Treasury.deployed()
console.log('address_Treasury:',_Treasury.address)
await _Treasury.setExtraFunds("XX_DevFundAddress",1000,"XX_DevFundAddress",500,"XX_DevFundAddress",500)


///////////////////////////////
//function allocateSeigniorage()  

*/



    }
    catch(error) {
      console.log(error)
    }
  
    callback()
  }
