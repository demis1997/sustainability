address 0x1 {
    module SupplierRegistry {
        struct Supplier {
            name: string,
            location: string,
            description: string,
            certification: string
        }


        vector<Supplier> suppliers;
        

        map<Address, vector<u64>> userSuppliers;


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
            

            let Supplier_index = Suppliers.push_back(new_Supplier) as u64;
            

            let supply_chain = userSuppliers[msg.sender];
            

            supply_chain.push_back(Supplier_index);
            

            userSuppliers[msg.sender] = supply_chain;
        }

        public get_user_Suppliers(): vector<Supplier> {
            let supply_chain = userSuppliers[msg.sender];
            let result: vector<Supplier> = Vector();
            

            for Supplier_index in supply_chain {
                let Supplier = Suppliers[Supplier_index as usize];
                result.push_back(Supplier);
            }
            
            return result;
        }
    }
}
