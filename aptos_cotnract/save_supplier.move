address 0x1 {
    module SupplierRegistry {
        struct Supplier {
            name: string,
            location: string,
            description: string,
            certification: string
        }

        // storing supplier
        vector<Supplier> suppliers;
        
        // Mapping to store arrays of Supplier indexes for each user
        map<Address, vector<u64>> userSuppliers;

        // Function to add an Supplier
        public add_Supplier(
            name: string,
            location: string,
            description: string,
            certification: string
        ) {
            let new_Supplier = Supplier {
                name: name,
                location: location,
                description: description,
                certification: certification
            };
            
            // Add the new Supplier to the storage
            let Supplier_index = Suppliers.push_back(new_Supplier) as u64;
            
            // Get the user's Supplier array
            let supply_chain = userSuppliers[msg.sender];
            
            // Add the Supplier index to the user's array
            supply_chain.push_back(Supplier_index);
            
            // Update the user's Supplier array in the storage
            userSuppliers[msg.sender] = supply_chain;
        }

        // Function to retrieve all Suppliers for a user
        public get_user_Suppliers(): vector<Supplier> {
            let supply_chain = userSuppliers[msg.sender];
            let result: vector<Supplier> = Vector();
            
            // Iterate through the user's Supplier array and retrieve the Suppliers from storage
            for Supplier_index in supply_chain {
                let Supplier = Suppliers[Supplier_index as usize];
                result.push_back(Supplier);
            }
            
            return result;
        }
    }
}
