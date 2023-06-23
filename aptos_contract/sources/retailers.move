address 0x2 {
module RetailShopRegistry {
    use 0x1::SupplierRegistry::Supplier;
    use Std::Vector;

    struct SupplyChain has key {
        id: u64,
        suppliers: vector<Supplier>,
    }

    struct RetailShop has key {
        name: vector<u8>,
        coordinates: vector<u8>,
        id: u64,
        logoURL: vector<u8>,
        description: vector<u8>,
        retail_shop_address: address,
        supply_chains: vector<SupplyChain>,
    }

    struct RetailShopRegistry has key {
        retail_shops: vector<RetailShop>,
    }

    public fun create_registry(): RetailShopRegistry {
        RetailShopRegistry { retail_shops: Vector::empty() }
    }

    public fun add_retail_shop(registry: &mut RetailShopRegistry, shop: RetailShop) {
        Vector::push_back(&mut registry.retail_shops, shop);
    }

    public fun get_retail_shop_by_name(registry: &RetailShopRegistry, name: vector<u8>): Option<RetailShop> {
        let shops = &registry.retail_shops;
        let len = Vector::length(shops);

        let i = 0;
        while (i < len) {
            let s = *Vector::borrow(shops, i);
            if (s.name == name) return Option::some(s);
            i = i + 1;
        };

        Option::none()
    }

    public fun get_retail_shop_by_address(registry: &RetailShopRegistry, retail_shop_address: address): Option<RetailShop> {
        let shops = &registry.retail_shops;
        let len = Vector::length(shops);

        let i = 0;
        while (i < len) {
            let s = *Vector::borrow(shops, i);
            if (s.retail_shop_address == retail_shop_address) return Option::some(s);
            i = i + 1;
        };

        Option::none()
    }

    public fun add_supplier_to_supply_chain(registry: &mut RetailShopRegistry, shop_id: u64, supply_chain_id: u64, supplier: Supplier) {
        let shops = &mut registry.retail_shops;
        let len = Vector::length(shops);

        let i = 0;
        while (i < len) {
            let shop = Vector::borrow_mut(shops, i);
            if (shop.id == shop_id) {
                let chains = &mut shop.supply_chains;
                let chains_len = Vector::length(chains);

              let j = 0;
while (j < chains_len) {
    let chain = Vector::borrow_mut(chains, j);
    if (chain.id == supply_chain_id) {
        Vector::push_back(&mut chain.suppliers, supplier);
        return;
    }
    j = j + 1;
};

            }
            i = i + 1;
        };
    }

    public fun get_supply_chains(registry: &RetailShopRegistry, shop_id: u64): vector<SupplyChain> {
        let shops = &registry.retail_shops;
        let len = Vector::length(shops);

        let i = 0;
        while (i < len) {
            let shop = *Vector::borrow(shops, i);
            if (shop.id == shop_id) return shop.supply_chains;
            i = i + 1;
        };

        Vector::empty()
    }
}
}
