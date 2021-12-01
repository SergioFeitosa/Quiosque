package com.sunnycoast.produto.controller;

import java.util.List;
import java.util.Optional;

import com.sunnycoast.produto.model.Produto;
import com.sunnycoast.produto.model.Produto;
import com.sunnycoast.produto.model.Produto;
import com.sunnycoast.produto.repository.ProdutoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
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
@RequestMapping(value="/produtos")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProdutoController {

    @Autowired
    private ProdutoRepository produtoRepository;

    @GetMapping
    public List<Produto> listar() {
        return produtoRepository.findAll();
    }
    
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Produto adicionar(@RequestBody Produto produto) {
        return produtoRepository.save(produto); 
    }
    
    @GetMapping(path = "/{id}")
    public Optional<Produto> consultar(@PathVariable("id") Long id) {
        return produtoRepository.findById(id);
    }
 
    @DeleteMapping(path = "/{id}")
    public void deletar(@PathVariable("id") Long id) {
      produtoRepository.deleteById(id);
    }
    @PutMapping(path = "/{id}")
    public Produto alterar(@RequestBody Produto newProduto, @PathVariable Long id) {
        return produtoRepository.findById(id)
      .map(produto -> {
        produto.setNome(newProduto.getNome());
        return produtoRepository.save(produto);
      })
      .orElseGet(() -> {
        newProduto.setId(id);
        return produtoRepository.save(newProduto);
      });
    }
 
    
}