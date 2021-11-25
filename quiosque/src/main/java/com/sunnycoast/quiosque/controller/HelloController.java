package com.sunnycoast.quiosque.controller;

import java.util.List;
import java.util.Optional;

import com.sunnycoast.quiosque.model.Cliente;
import com.sunnycoast.quiosque.repository.ClienteRespository;

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
 * HelloController
 */

@RestController
@RequestMapping(value="/clientes")
public class HelloController {

    @Autowired
    private ClienteRespository clienteRepository;

    @GetMapping
    public List<Cliente> listar() {
        return clienteRepository.findAll();
    }
    
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Cliente adicionar(@RequestBody Cliente cliente) {
        return clienteRepository.save(cliente); 
    }
    
    @GetMapping(path = "/{id}")
    public Optional<Cliente> consultar(@PathVariable("id") Long id) {
        return clienteRepository.findById(id);
    }
 
    @DeleteMapping(path = "/{id}")
    public void deletar(@PathVariable("id") Long id) {
        clienteRepository.deleteById(id);
    }
    @PutMapping(path = "/{id}")
    public Cliente alterar(@RequestBody Cliente newCliente, @PathVariable Long id) {
        return clienteRepository.findById(id)
      .map(cliente -> {
        cliente.setNome(newCliente.getNome());
        return clienteRepository.save(cliente);
      })
      .orElseGet(() -> {
        newCliente.setId(id);
        return clienteRepository.save(newCliente);
      });
    }
 
    
}