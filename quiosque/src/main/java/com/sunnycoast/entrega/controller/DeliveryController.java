package com.sunnycoast.entrega.controller;

import java.util.List;
import java.util.Optional;

import com.sunnycoast.entrega.model.Delivery;
import com.sunnycoast.entrega.repository.DeliveryRepository;

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
@RequestMapping(value="/deliveries")
public class DeliveryController {

    @Autowired
    private DeliveryRepository deliveryRepository;

    @GetMapping
    public List<Delivery> listar() {
        return deliveryRepository.findAll();
    }
    
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Delivery adicionar(@RequestBody Delivery entrega) {
        return deliveryRepository.save(entrega); 
    }
    
    @GetMapping(path = "/{id}")
    public Optional<Delivery> consultar(@PathVariable("id") Long id) {
        return deliveryRepository.findById(id);
    }
 
    @DeleteMapping(path = "/{id}")
    public void deletar(@PathVariable("id") Long id) {
      deliveryRepository.deleteById(id);
    }
    @PutMapping(path = "/{id}")
    public Delivery alterar(@RequestBody Delivery newDelivery, @PathVariable Long id) {
        return deliveryRepository.findById(id)
      .map(entrega -> {
        entrega.setQuantidade(newDelivery.getQuantidade());
        entrega.setObservacao(newDelivery.getObservacao());
        entrega.setDataCriacao(newDelivery.getDataCriacao());
        return deliveryRepository.save(entrega);
      })
      .orElseGet(() -> {
        newDelivery.setId(id);
        return deliveryRepository.save(newDelivery);
      });
    }
 
    
}