package com.projetodevendas.projetoVendas.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projetodevendas.projetoVendas.entities.Produto;
import com.projetodevendas.projetoVendas.repositories.ProdutoRepository;

@RestController
@CrossOrigin("*")
@RequestMapping("/produtos")
public class ProdutoController {
    // public String texto(){
    // return "Olá mundo";
    // }

    @Autowired
    private ProdutoRepository produtoRepository;
    
    @GetMapping
    public List<Produto> listaProdutos() {
        System.out.println("chegou no get");
        return (List<Produto>) produtoRepository.findAll();
    }

    @PostMapping
    public Produto cadastrarProduto(@RequestBody Produto produto) {
        Produto novoProduto = produtoRepository.save(produto);
        return novoProduto;
    } 

    @PutMapping
    public Produto editarProduto(@RequestBody Produto produto) {
        Produto produtoEditado = produtoRepository.save(produto);
        return produtoEditado;
    } 

    @DeleteMapping("/{id}")
    public Optional<Produto> excluirProduto(@PathVariable Integer id){ //recebe o id pelo parâmetro da req.
        Optional<Produto> produto = produtoRepository.findById(id);
        produtoRepository.deleteById(id);
        return produto;
    }
}
