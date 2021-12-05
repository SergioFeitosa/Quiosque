package com.sunnycoast.pedido.service;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

import com.sunnycoast.pedido.model.Pedido;
import com.sunnycoast.pedido.controller.PedidoController;
import com.sunnycoast.pedido.repository.PedidoRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

/**
 * PedidoController
 */

@Service
public class PedidoService {

  public static final Logger logger = Logger.getLogger("global");

  PedidoController pedidoController;

  @Autowired
  private PedidoRepository pedidoRepository;

  public List<Pedido> listar() {

    return pedidoRepository.findAll();
  }

  public Pedido adicionar(@RequestBody Pedido pedido) {
    return pedidoRepository.save(pedido);
  }

  public Optional<Pedido> consultar(@PathVariable("id") Long id) {
    return pedidoRepository.findById(id);
  }
  

  public void deletar(@PathVariable("id") Long id) {
    pedidoRepository.deleteById(id);
  }

  public Pedido alterar(@RequestBody Pedido newPedido, @PathVariable Long id) {
    return pedidoRepository.findById(id).map(pedido -> {
      pedido.setQuantidade(newPedido.getQuantidade());
      pedido.setObservacao(newPedido.getObservacao());
      pedido.setEnviado(newPedido.isEnviado());
          return pedidoRepository.save(pedido);
    }).orElseGet(() -> {
      newPedido.setId(id);
      return pedidoRepository.save(newPedido);
    });
  }
}
