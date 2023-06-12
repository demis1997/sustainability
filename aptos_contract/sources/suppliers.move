module main_addr::supplierRegistry {

  use aptos_framework::event;
  use std::string::String;
  use aptos_std::table::Table;
  use std::signer;
  use aptos_std::table::{Self, Table};
  use aptos_framework::account;
  
  const E_NOT_INITIALIZED: u64 = 1;
  const ETASK_DOESNT_EXIST: u64 = 2;
  const ETASK_IS_COMPLETED: u64 = 3;

  struct Supplier {
    name: String,
    coordinates: String,
    id: u64,
    logoURL: String,
    description: String,
    supplierAddress: address,
  }

  struct SupplierRegistry {
    suppliers: Table<String, Supplier>,
    set_supplier_event: event::EventHandle<Supplier>,
  }

  public entry fun create_registry(account: &signer) {
    let supplier_registry = SupplierRegistry {
      suppliers: table::new(),
      set_supplier_event: account::new_event_handle<Supplier>(account),
    };
    move_to(account, supplier_registry);
  }

  public entry fun add_supplier(
    account: &signer,
    name: String,
    coordinates: String,
    id: u64,
    logoURL: String,
    description: String,
    supplierAddress: address,
  ) acquires SupplierRegistry {
    let supplier_registry = borrow_global_mut<SupplierRegistry>(signer::address_of(account));

    let supplier = Supplier {
      name,
      coordinates,
      id,
      logoURL,
      description,
      supplierAddress,
    };

    table::upsert(
      &mut supplier_registry.suppliers,
      supplier.supplierAddress.to_string(),
      supplier,
    );

    event::emit_event<Supplier>(
      &mut supplier_registry.set_supplier_event,
      supplier,
    );
  }

  public fun get_supplier_by_address(
    account: &signer,
    supplierAddress: address,
  ): &Supplier acquires SupplierRegistry {
    let supplier_registry = borrow_global::<SupplierRegistry>(signer::address_of(account));

    option::unwrap_or_else(
      table::find(&supplier_registry.suppliers, supplierAddress.to_string()),
      abort!(ETASK_DOESNT_EXIST),
    )
  }

  public fun get_supplier_by_name(
    account: &signer,
    name: String,
  ): &[Supplier] acquires SupplierRegistry {
    let supplier_registry = borrow_global::<SupplierRegistry>(signer::address_of(account));

    table::filter_values(
      &supplier_registry.suppliers,
      |supplier| supplier.name == name,
    )
  }
}
