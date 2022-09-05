
const DA = artifacts.require("./DA.sol")

contract('DA', ([contractOwner, secondAddress, thirdAddress]) => {
  let DA

  // this would attach the deployed smart contract and its methods 
  // to the `DA` variable before all other tests are run
  before(async () => {
    DA = await DA.deployed()
  })

  // check if deployment goes smooth
  describe('deployment', () => {
    // check if the smart contract is deployed 
    // by checking the address of the smart contract
    it('deploys successfully', async () => {
      const address = await DA.address

      assert.notEqual(address, '')
      assert.notEqual(address, undefined)
      assert.notEqual(address, null)
      assert.notEqual(address, 0x0)
    })
  })

})

