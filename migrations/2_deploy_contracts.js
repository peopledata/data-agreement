const DA = artifacts.require("./DA.sol");

module.exports = (deployer) => {
  deployer.deploy(DA).then(() => {
    console.log('Deployed at: ', DA.address)
  });
};