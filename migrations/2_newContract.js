const newContract = artifacts.require("newContract");

module.exports = function (deployer) {
  deployer.deploy(newContract);
};
