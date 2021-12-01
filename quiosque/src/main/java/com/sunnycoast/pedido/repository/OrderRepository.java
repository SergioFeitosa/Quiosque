package com.sunnycoast.pedido.repository;

import com.sunnycoast.pedido.model.Pedido;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Pedido, Long> {
    
}
