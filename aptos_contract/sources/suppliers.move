address 0x1 {
module SupplierRegistry {
    use Std::Vector;

    struct Supplier has key {
        name: vector<u8>,
        coordinates: vector<u8>,
        id: u64,
        logoURL: vector<u8>,
        description: vector<u8>,
        supplier_address: address,
    }

    struct SupplierRegistry has key {
        suppliers: vector<Supplier>,
    }

    public fun create_registry(): SupplierRegistry {
        SupplierRegistry { suppliers: Vector::empty() }
    }

    public fun add_supplier(registry: &mut SupplierRegistry, supplier: Supplier) {
        Vector::push_back(&mut registry.suppliers, supplier);
    }

    public fun get_supplier_by_name(registry: &SupplierRegistry, name: vector<u8>): Option<Supplier> {
        let suppliers = &registry.suppliers;
        let len = Vector::length(suppliers);

        let i = 0;
        while (i < len) {
            let s = *Vector::borrow(suppliers, i);
            if (s.name == name) return Option::some(s);
            i = i + 1;
        };

        Option::none()
    }

    public fun get_supplier_by_address(registry: &SupplierRegistry, supplier_address: address): Option<Supplier> {
        let suppliers = &registry.suppliers;
        let len = Vector::length(suppliers);

        let i = 0;
        while (i < len) {
            let s = *Vector::borrow(suppliers, i);
            if (s.supplier_address == supplier_address) return Option::some(s);
            i = i + 1;
        };

        Option::none()
    }
}
}
