const Oracle = artifacts.require("Oracle");


    // ORACLE

        //IUniswapV2Pair _pair,uint256 _period, uint256 _startTime
module.exports = function (deployer) {
      deployer.deploy(Oracle,
        //IUniswapV2Pair _pair(Hermes),uint256 _period, uint256 _startTime
        "XX_GLAMOURPAIR",
        21600,
        XX_ORACLETIME       // !!!TIME!!!
        )



};