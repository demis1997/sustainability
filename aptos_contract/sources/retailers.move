module my_addrx::RetailShopTools {
	use std::vector;
        use std::debug;
	use std::string::{String,utf8};

	struct SupplyChain has key,drop, store,drop,copy  {
		list_of_users: vector<Supplier>   
	}
	struct RetailerShopRegistry has key,drop, store,drop,copy  {
		list_of_users: vector<Retailer>    
	}
    struct SupplierRegistry has key,drop, store,drop,copy  {
		list_of_users: vector<Supplier>    
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


        //creating a user by adding the user to the existing list and returning the user
	public fun create_user(newUser: User,users: &mut Users): User{
		vector::push_back(&mut users.list_of_users,newUser);
		return newUser
	}
	
	#[test]
	fun test_create_friend(){
		let user1 = User {
			name:utf8(b"Tony"),
			age:50,
		};
		
        let users = Users{
			list_of_users: vector::empty<User>()
		};

		let createdUser = create_user(user1,&mut users);
        debug::print(&users);
        assert!(createdUser.name == utf8(b"Tony"),0);
	}
}