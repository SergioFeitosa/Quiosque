package com.sunnycoast.entrega.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import com.sunnycoast.pedido.model.Pedido;

import lombok.Data;

@Data

@Entity
public class Delivery {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="delivery_id")
    private Long id;

    @Column(nullable = false)
    private Long quantidade;

    @Column
    private String observacao;

    @Column
    private String dataCriacao;

    @OneToOne
    @JoinColumn(name = "pedido_id")
    private Pedido pedido;


}
