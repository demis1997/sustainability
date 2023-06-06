module main_addr::supplierRegistry {

struct supplierList has store, drop, copy{
    suppliers:Table<u64, Supplier>,
    add_supplier_event: event::EventHandle<Supplier>
    supplier_List_counter:u64,
}

struct Supplier has store, drop, copy{
    supplier_id:u64,
    name: String,
    description: String,
    certification: String,
    coordinates: String,
}

struct SupplyChain has store, drop, copy{
    chain_id:u64,
    name:String,
    suppliers:Table<u64, Supplier>,
    add_to_chain_event: event::EventHandle<Supplier>
}

}