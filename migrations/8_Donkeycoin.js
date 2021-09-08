const DC = artifacts.require("DonkeyCoin");
module.exports = function (deployer) {
    deployer.deploy(DC);
  };