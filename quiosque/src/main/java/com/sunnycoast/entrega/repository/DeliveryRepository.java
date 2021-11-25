package com.sunnycoast.entrega.repository;

import com.sunnycoast.entrega.model.Delivery;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeliveryRepository extends JpaRepository<Delivery, Long> {
    
}
