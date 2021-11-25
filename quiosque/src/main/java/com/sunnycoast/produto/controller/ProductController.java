package com.sunnycoast.produto.controller;

import java.util.List;
import java.util.Optional;

import com.sunnycoast.produto.model.Product;
import com.sunnycoast.produto.repository.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;


/**
 * ProdutoController
 */

@RestController
@RequestMapping(value="/products")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping
    public List<Product> listar() {
        return productRepository.findAll();
    }
    
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Product adicionar(@RequestBody Product produto) {
        return productRepository.save(produto); 
    }
    
    @GetMapping(path = "/{id}")
    public Optional<Product> consultar(@PathVariable("id") Long id) {
        return productRepository.findById(id);
    }
 
    @DeleteMapping(path = "/{id}")
    public void deletar(@PathVariable("id") Long id) {
      productRepository.deleteById(id);
    }
    @PutMapping(path = "/{id}")
    public Product alterar(@RequestBody Product newProduct, @PathVariable Long id) {
        return productRepository.findById(id)
      .map(produto -> {
        produto.setName(newProduct.getName());
        return productRepository.save(produto);
      })
      .orElseGet(() -> {
        newProduct.setId(id);
        return productRepository.save(newProduct);
      });
    }
 
    
}