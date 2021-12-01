package com.sunnycoast.carrinho.controller;

import java.util.List;
import java.util.Optional;

import com.sunnycoast.carrinho.model.Cart;
import com.sunnycoast.carrinho.service.CartService;

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
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(value = "/carts")
public class CartController {


  @Autowired
  private CartService cartService;

  @GetMapping
  public List<Cart> listar() {
    return cartService.listar();
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public Cart adicionar(@RequestBody Cart carrinho) {
    return cartService.adicionar(carrinho);
  }

  @GetMapping(path = "/{id}")
  public Optional<Cart> consultar(@PathVariable("id") Long id) {
    return cartService.consultar(id);
  }

  @DeleteMapping(path = "/{id}")
  public void deletar(@PathVariable("id") Long id) {
    cartService.deletar(id);
  }

  @PutMapping(path = "/{id}")
  public Cart alterar(@RequestBody Cart newCarrinho, @PathVariable Long id) {
    return cartService.alterar(newCarrinho, id);
  }

}