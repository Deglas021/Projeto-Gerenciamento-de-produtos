package com.APIREST.crud.controllers;

import com.APIREST.crud.model.Product;
import com.APIREST.crud.repositories.ProductRepositories;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    ProductRepositories repository;


    @GetMapping
    public ResponseEntity getAll(){
        List<Product> ListProduct =repository.findAll();
        return  ResponseEntity.status(HttpStatus.OK).body(ListProduct);
    }

}
