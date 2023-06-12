module main_addr::retailerRegistry {

  use aptos_framework::event;
  use std::string::String;
  use aptos_std::table::Table;
  use std::signer;
  use aptos_std::table::{Self, Table};
  use aptos_framework::account;
  use "suppliers.move"
  const E_NOT_INITIALIZED: u64 = 1;
  const ETASK_DOESNT_EXIST: u64 = 2;
  const ETASK_IS_COMPLETED: u64 = 3;

  struct RetailShop {
    name: String,
    coordinates: String,
    id: u64,
    logoURL: String,
    description: String,
    retailShopAddress: String,
    supplyChains: Table<String, supplierRegistry::Supplier>,
  }

  struct RetailerRegistry {
    retailShops: Table<String, RetailShop>,
    set_retail_shop_event: event::EventHandle<RetailShop>,
  }

  public entry fun create_registry(account: &signer) {
    let Retailer_registry = RetailerRegistry {
      retailShops: table::new(),
      set_retail_shop_event: account::new_event_handle<RetailShop>(account),
    };
    move_to(account, Retailer_registry);
  }

  public entry fun add_retail_shop(
    account: &signer,
    name: String,
    coordinates: String,
    id: u64,
    logoURL: String,
    description: String,
    retailShopAddress: String,
  ) acquires RetailerRegistry {
    let Retailer_registry = borrow_global_mut<RetailerRegistry>(signer::address_of(account));

    let retail_shop = RetailShop {
      name,
      coordinates,
      id,
      logoURL,
      description,
      retailShopAddress,
    };

    table::upsert(
      &mut Retailer_registry.retailShops,
      retail_shop.retailShopAddress.clone(),
      retail_shop,
    );

    event::emit_event<RetailShop>(
      &mut Retailer_registry.set_retail_shop_event,
      retail_shop,
    );
  }

  public fun get_retail_shop_by_address(
    account: &signer,
    retailShopAddress: String,
  ): &RetailShop acquires RetailerRegistry {
    let Retailer_registry = borrow_global::<RetailerRegistry>(signer::address_of(account));

    option::unwrap_or_else(
      table::find(&Retailer_registry.retailShops, retailShopAddress),
      abort!(ETASK_DOESNT_EXIST),
    )
  }

  public fun get_retail_shop_by_name(
    account: &signer,
    name: String,
  ): &[RetailShop] acquires RetailerRegistry {
    let Retailer_registry = borrow_global::<RetailerRegistry>(signer::address_of(account));

    table::filter_values(
      &Retailer_registry.retailShops,
      |retail_shop| retail_shop.name == name,
    )
  }

  public entry fun add_supplier_to_supply_chain(
  account: &signer,
  retailShopAddress: String,
  supplier: supplierRegistry::Supplier,
) acquires RetailerRegistry {
  let retailerRegistry = borrow_global_mut<RetailerRegistry>(signer::address_of(account));
  let retailShop = table::get_mut(&mut retailerRegistry.retailShops, retailShopAddress);
  
  if let Some(retailShop) = retailShop {
    table::upsert(
      &mut retailShop.supplyChains,
      supplier.supplierAddress.to_string(),
      supplier,
    );
  }
}
pub fun get_supply_chain(
  account: &signer,
  retailShopAddress: String,
  supplyChainName: String,
): (RetailShop, &[supplierRegistry::Supplier]) acquires RetailerRegistry {
  let retailerRegistry = borrow_global::<RetailerRegistry>(signer::address_of(account));
  let retailShop = table::get(&retailerRegistry.retailShops, retailShopAddress);

  if let Some(retailShop) = retailShop {
    let supplyChain = table::get(&retailShop.supplyChains, supplyChainName);
    if let Some(supplyChain) = supplyChain {
      return (retailShop, table::values(&supplyChain));
    }
  }

  abort!(ETASK_DOESNT_EXIST);
}

}
