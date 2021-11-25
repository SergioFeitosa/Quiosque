package com.sunnycoast.pedido.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data

@Entity
public class Orders {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long quantidade;

    @Column(nullable = false)
    private Long telefone;

    @Column(nullable = false)
    private String local;

    @Column(nullable = false)
    private String observacao;

    @Column(nullable = false)
    private String isencao;

    @Column(nullable = false)
    private String enviado;

    @Column(nullable = false)
    private String releaseDate;

    private Long productId;

}
