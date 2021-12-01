package com.sunnycoast.produto.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.sunnycoast.carrinho.model.Cart;
import com.sunnycoast.pedido.model.Pedido;

import lombok.Data;

@Data

@Entity
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "produto_id")
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false)
    private String descricao;

    @Column(nullable = false)
    private String categoria;

    @Column(nullable = false)
    private String codigo;

    @Column(nullable = false)
    private Float preco;

    @Column(nullable = false)
    private String imagemUrl;

    @Column(nullable = false)
    private String tempoPreparacao;

    @Column(nullable = false)
    private Float avaliacao;

    @Column(nullable = false)
    private String dataCriacao;

}
