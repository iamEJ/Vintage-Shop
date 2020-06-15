package com.vintage.store.service;

import java.util.List;
import java.util.Optional;


import com.vintage.store.model.Product;

public interface ProductService {

	Optional<Product> getProduct(Long id);
	List<Product> getProducts();
	Product createProduct(Product product);
}
