package com.sunnycoast.carrinho.service;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

import com.sunnycoast.carrinho.model.Cart;
import com.sunnycoast.carrinho.repository.CartRepository;
import com.sunnycoast.produto.controller.ProdutoController;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

/**
 * ProdutoController
 */

@Service
public class CartService {

  public static final Logger logger = Logger.getLogger("global");

  ProdutoController produtoController;

  @Autowired
  private CartRepository cartRepository;

  public List<Cart> listar() {

    return cartRepository.findAll();
  }

  public Cart adicionar(@RequestBody Cart cart) {
    return cartRepository.save(cart);
  }

  public Optional<Cart> consultar(@PathVariable("id") Long id) {
    return cartRepository.findById(id);
  }
  

  public void deletar(@PathVariable("id") Long id) {
    cartRepository.deleteById(id);
  }

  public Cart alterar(@RequestBody Cart newCart, @PathVariable Long id) {
    return cartRepository.findById(id).map(cart -> {
      cart.setQuantidade(newCart.getQuantidade());
      cart.setObservacao(newCart.getObservacao());
      cart.setEnviado(newCart.isEnviado());
      return cartRepository.save(cart);
    }).orElseGet(() -> {
      newCart.setId(id);
      return cartRepository.save(newCart);
    });
  }
}