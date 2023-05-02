package com.projetodevendas.projetoVendas.repositories;

import org.springframework.data.repository.CrudRepository;

import com.projetodevendas.projetoVendas.entities.Produto;

public interface ProdutoRepository extends CrudRepository<Produto, Integer> {

}