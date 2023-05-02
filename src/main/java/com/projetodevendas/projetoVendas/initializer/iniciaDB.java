package com.projetodevendas.projetoVendas.initializer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.projetodevendas.projetoVendas.entities.Produto;
import com.projetodevendas.projetoVendas.repositories.ProdutoRepository;

@Component
public class iniciaDB implements CommandLineRunner  {
    @Autowired
    private ProdutoRepository produtoRepository;

    @Override
    public void run(String... args) throws Exception {
        // criação de dados para popular o banco de dados, pois como ele funciona em memória, ele inicia vazio
        Produto produto1 = new Produto("Notebook Lenovo", "17 polegadas, 1TB SSD", 3000.00, 423, null);
        Produto produto2 = new Produto("Smartphone Motorola Moto G9", "Camera 49MP", 1500.00, 150, null);
        Produto produto3 = new Produto("Geladeira Brastemp", "450 litros, frost free, duplex", 3800.00, 98, null);

        produtoRepository.save(produto1);
        produtoRepository.save(produto2);
        produtoRepository.save(produto3);
    }
}
