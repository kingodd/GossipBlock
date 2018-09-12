var Merchandise = artifacts.require("./Colleague.sol");

module.exports = function(deployer) {
  deployer.deploy(Merchandise);
};
