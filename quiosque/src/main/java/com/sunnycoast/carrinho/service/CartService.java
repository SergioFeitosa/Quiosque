package com.sunnycoast.carrinho.service;

import java.util.List;
import java.util.Optional;

import com.sunnycoast.carrinho.model.Cart;
import com.sunnycoast.carrinho.repository.CartRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;


/**
 * ProdutoController
 */

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    public List<Cart> listar() {
        return cartRepository.findAll();
    }
    
    public Cart adicionar(@RequestBody Cart carrinho) {



        return cartRepository.save(carrinho); 
    }
    
    public Optional<Cart> consultar(@PathVariable("id") Long id) {
        return cartRepository.findById(id);
    }
 
    public void deletar(@PathVariable("id") Long id) {
      cartRepository.deleteById(id);
    }

    public Cart alterar(@RequestBody Cart newCart, @PathVariable Long id) {
        return cartRepository.findById(id)
      .map(carrinho -> {
        carrinho.setQuantidade(newCart.getQuantidade());
        carrinho.setObservacao(newCart.getObservacao());
        return cartRepository.save(carrinho);
      })
      .orElseGet(() -> {
        newCart.setId(id);
        return cartRepository.save(newCart);
      });
    }
}