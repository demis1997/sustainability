module my_addrx::RetailerSuppliers {

use std::signer;
use std::vector;
use std::simple_map::{Self, SimpleMap};

const E_NOT_RETAILER: u64 = 0;
const E_RETAILER_NOT_REGISTERED: u64 = 1;
const E_RETAILER_ALREADY_REGISTERED: u64 = 2;
const E_SUPPLIER_ALREADY_ADDED: u64 = 3;
const E_SUPPLIER_NOT_FOUND: u64 = 4;

struct Supplier {
    name: String,
    id: u64,
    description: String,
    address: address
}

struct Retailer {
    name: String,
    id: u64,
    description: String,
    address: address,
    suppliers: vector<Supplier>
}

public fun assert_is_retailer(acc: &signer, retailers: &mut vector<Retailer>) {
    let addr = signer::address_of(acc);
    let len = Vector::length(retailers);
    let i = 0;

    while (i < len) {
        let retailer = Vector::borrow(retailers, i);
        if (retailer.address == addr) return;
        i = i + 1;
    };
    
    abort E_NOT_RETAILER;
}

public fun register_retailer(acc: &signer, retailers: &mut vector<Retailer>, name: String, id: u64, description: String) {
    let addr = signer::address_of(acc);
    let len = Vector::length(retailers);
    let i = 0;

    while (i < len) {
        let retailer = Vector::borrow(retailers, i);
        if (retailer.address == addr) {
            abort E_RETAILER_ALREADY_REGISTERED;
        }
        i = i + 1;
    };

    let new_retailer = Retailer {
        name: name,
        id: id,
        description: description,
        address: addr,
        suppliers: Vector::empty()
    };

    Vector::push_back(retailers, new_retailer);
}

public fun add_supplier(acc: &signer, retailers: &mut vector<Retailer>, supplier: Supplier) {
    let addr = signer::address_of(acc);
    let len = Vector::length(retailers);
    let i = 0;

    while (i < len) {
        let retailer = Vector::borrow_mut(retailers, i);
        if (retailer.address == addr) {
            let suppliers_len = Vector::length(&retailer.suppliers);
            let j = 0;
            
            while (j < suppliers_len) {
                let existing_supplier = Vector::borrow(&retailer.suppliers, j);
                if (existing_supplier.id == supplier.id) {
                    abort E_SUPPLIER_ALREADY_ADDED;
                }
                j = j + 1;
            }

            Vector::push_back(&mut retailer.suppliers, supplier);
            return;
        }
        i = i + 1;
    };
    
    abort E_RETAILER_NOT_REGISTERED;
}

public fun get_suppliers(acc: &signer, retailers: &mut vector<Retailer>): vector<Supplier> {
    let addr = signer::address_of(acc);
    let len = Vector::length(retailers);
    let i = 0;

    while (i < len) {
        let retailer = Vector::borrow(retailers, i);
        if (retailer.address == addr) {
            return retailer.suppliers;
        }
        i = i + 1;
    };
    
    abort E_RETAILER_NOT_REGISTERED;
}

}
