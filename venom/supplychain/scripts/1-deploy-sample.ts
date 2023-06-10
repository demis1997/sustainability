import { Address } from "locklift";
async function main() {
  const signer = (await locklift.keystore.getSigner("0"))!;
  const { contract: RetailShop, tx } = await locklift.factory.deployContract({
    contract: "RetailShop",
    publicKey: signer.publicKey,
    initParams: {
      _nonce: locklift.utils.getRandomNonce(),
      
    },
    constructorParams: {

    },
    value: locklift.utils.toNano(3),
  });

  console.log(`RetailShops deployed at: ${RetailShop.address.toString()}`);
}

main()
  .then(() => process.exit(0))
  .catch(e => {
    console.log(e);
    process.exit(1);
  });
