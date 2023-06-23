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

	
	#[test]
 	fun test_create_Test_Retailer(){
		let retailer1 = Retailer {
			name:utf8(b"Tony"),
			coordinates:23,
			id: 2,
			description: (b"hello world description"),
			supplierAddress:0x10,
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