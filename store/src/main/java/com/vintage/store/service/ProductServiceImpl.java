package com.vintage.store.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vintage.store.model.Product;
import com.vintage.store.repository.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductRepository productRepository;

	@Override
	public Optional<Product> getProduct(Long id) {
		
		return productRepository.findById(id);
	}

	@Override
	public List<Product> getProducts() {

		return productRepository.findAll();
	}

	@Override
	public Product createProduct(Product product) {
		
		return productRepository.save(product);
	}

}
