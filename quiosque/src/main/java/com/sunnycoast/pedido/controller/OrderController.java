package com.sunnycoast.pedido.controller;

import java.util.List;
import java.util.Optional;

import com.sunnycoast.pedido.model.Orders;
import com.sunnycoast.pedido.repository.OrderRepository;

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
@RequestMapping(value="/orders")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @GetMapping
    public List<Orders> listar() {
        return orderRepository.findAll();
    }
    
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Orders adicionar(@RequestBody Orders pedido) {
        return orderRepository.save(pedido); 
    }
    
    @GetMapping(path = "/{id}")
    public Optional<Orders> consultar(@PathVariable("id") Long id) {
        return orderRepository.findById(id);
    }
 
    @DeleteMapping(path = "/{id}")
    public void deletar(@PathVariable("id") Long id) {
      orderRepository.deleteById(id);
    }
    @PutMapping(path = "/{id}")
    public Orders alterar(@RequestBody Orders newOrder, @PathVariable Long id) {
        return orderRepository.findById(id)
      .map(pedido -> {
        pedido.setQuantidade(newOrder.getQuantidade());
        pedido.setObservacao(newOrder.getObservacao());
        return orderRepository.save(pedido);
      })
      .orElseGet(() -> {
        newOrder.setId(id);
        return orderRepository.save(newOrder);
      });
    }
 
    
}