
const DA = artifacts.require("./DA.sol")
contractOwner = '0x0a8ba09a8ecaa62073777916ea0034f0d04b29e6'
secondAddress = '0xe4040e9a6db914e208afe9320304fd57a54e172b'
thirdAddress = '0xb8A41B640e2Bba6d9Cb4A4555a5A8386039556Df'


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

