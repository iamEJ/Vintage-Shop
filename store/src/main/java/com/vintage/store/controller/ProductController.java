package com.vintage.store.controller;

import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.vintage.store.model.Product;
import com.vintage.store.service.ProductService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@GetMapping("/products")
	@ResponseStatus(HttpStatus.OK)
	public List<Product> getAll(){
		return productService.getProducts();
	}
	
	@GetMapping("/{id}")
	@ResponseStatus(HttpStatus.OK)
	public Optional<Product> getProduct( @PathVariable Long id) {
		return productService.getProduct(id);
	}
	
	@PostMapping("/products")
	@ResponseStatus(HttpStatus.CREATED)
	public Product create(@RequestBody Product product) {
		return productService.createProduct(product);
	}
}
