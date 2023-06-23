module my_addrx::RetailShopTools {
	use std::vector;
        use std::debug;
	use std::string::{String,utf8};

	struct SupplyChain has key,drop, store,drop,copy  {
		list_of_supplyChains: vector<Supplier>   
	}
	struct RetailerShopRegistry has key,drop, store,drop,copy  {
		list_of_retailers: vector<Retailer>    
	}
    struct SupplierRegistry has key,drop, store,drop,copy  {
		list_of_suppliers: vector<Supplier>    
	}

	struct Retailer has key,drop, store,drop,copy  {
		name:String,                
		coordinates:u8,
        id:u64,
        description:String,
        retailAddress: address,
        linkedlists:SupplyChain,
        logoURL: String
	}

	struct Supplier has key,drop, store,drop,copy  {
		name:String,                
		coordinates:u8,
        id:u64,
        description:String,
        supplierAddress: address,
        logoURL: String
	}


	public fun create_retailer(newRetailer: Retailer,retailers: &mut RetailerShopRegistry): Retailer{
		vector::push_back(&mut retailers.list_of_retailers,newRetailer);
		return newRetailer
	}
		public fun create_Supplier(newSupplier: Supplier,suppliers: &mut SupplierRegistry): Supplier{
		vector::push_back(&mut suppliers.list_of_suppliers,newSupplier);
		return newSupplier
	}

public fun add_to_supply_chain(supplier_addresses: vector<address>, retailer: &mut Retailer) {
    let len = Vector::length(&supplier_addresses);

    let i = 0;
    while (i < len) {
        let supplier_addr = Vector::borrow(&supplier_addresses, i);

        Vector::push_back(&mut retailer.linkedlists.list_of_supplyChains, *supplier_addr);
        i = i + 1;
    };
}
	
	#[test]
 	fun test_create_Test_Retailer(){
		let retailer1 = Retailer {
			name:utf8(b"Tony"),
			coordinates:23,
			id: 2,
			description: (b"hello world description"),
			supplierAddress:0x10,
			linkedlists:[0],
			logoURL:utf8(b"link")
		};
		
        let retailers = Retailers{
			list_of_Retailers: vector::empty<Retailer>()
		};

		let createdRetailer = create_user(retailer1,&mut retailers);
        debug::print(&retailers);
        assert!(createdRetailer.name == utf8(b"Tony"),0);
	}
}