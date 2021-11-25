package com.sunnycoast.carrinho.repository;

import com.sunnycoast.carrinho.model.Cart;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {
    
}
