package com.sunnycoast.produto.service;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

import com.sunnycoast.produto.model.Produto;
import com.sunnycoast.produto.repository.ProdutoRepository;
import com.sunnycoast.produto.controller.ProdutoController;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

/**
 * ProdutoController
 */

@Service
public class ProdutoService {

  public static final Logger logger = Logger.getLogger("global");

  ProdutoController produtoController;

  @Autowired
  private ProdutoRepository produtoRepository;

  public List<Produto> listar() {

    return produtoRepository.findAll();
  }

  public Produto adicionar(@RequestBody Produto produto) {
    return produtoRepository.save(produto);
  }

  public Optional<Produto> consultar(@PathVariable("id") Long id) {
    return produtoRepository.findById(id);
  }
  

  public void deletar(@PathVariable("id") Long id) {
    produtoRepository.deleteById(id);
  }

  public Produto alterar(@RequestBody Produto newProduto, @PathVariable Long id) {
    return produtoRepository.findById(id).map(produto -> {
      return produtoRepository.save(produto);
    }).orElseGet(() -> {
      newProduto.setId(id);
      return produtoRepository.save(newProduto);
    });
  }
}