package com.sunnycoast.pedido.controller;

import java.util.List;
import java.util.Optional;

import com.sunnycoast.pedido.model.Pedido;
import com.sunnycoast.pedido.service.PedidoService;

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
@RequestMapping(value="/pedidos")
public class PedidoController {

    @Autowired
    private PedidoService pedidoService;

    @GetMapping
    public List<Pedido> listar() {
        return pedidoService.listar();
    }
    
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Pedido adicionar(@RequestBody Pedido pedido) {
        return pedidoService.adicionar(pedido); 
    }
    
    @GetMapping(path = "/{id}")
    public Optional<Pedido> consultar(@PathVariable("id") Long id) {
        return pedidoService.consultar(id);
    }
 
    @DeleteMapping(path = "/{id}")
    public void deletar(@PathVariable("id") Long id) {
      pedidoService.deletar(id);
    }
    @PutMapping(path = "/{id}")
    public Pedido alterar(@RequestBody Pedido newPedido, @PathVariable Long id) {
        return pedidoService.alterar(newPedido, id);
    }
}