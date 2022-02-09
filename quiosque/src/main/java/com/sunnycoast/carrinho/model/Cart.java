package com.sunnycoast.carrinho.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.sunnycoast.produto.model.Produto;

import lombok.Data;

@Data

@Entity
@Table(name = "cart")
public class Cart {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="cart_id")
    private Long id;

    @Column(nullable = false)
    private Long quantidade;

    @Column(nullable = false)
    private Long telefone;

    @Column
    private String local;

    @Column
    private String observacao;

    @Column(nullable = false)
    private boolean isencao;

    @Column(nullable = false)
    private boolean enviado;

    @Column(nullable = false)
    private String dataCriacao;

    @Column(nullable = false)
    private String status;

    @OneToOne
    @JoinColumn(name = "produto_id")
    private Produto produto;
}
