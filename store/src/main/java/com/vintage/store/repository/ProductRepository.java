package com.vintage.store.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vintage.store.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>{

}
