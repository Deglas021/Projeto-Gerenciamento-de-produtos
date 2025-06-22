package com.APIREST.crud.repositories;

import com.APIREST.crud.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepositories extends JpaRepository<Product,Integer> {

}
