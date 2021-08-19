const Third = artifacts.require("ThirdContract");
module.exports = function (deployer) {
    deployer.deploy(Third);
  };