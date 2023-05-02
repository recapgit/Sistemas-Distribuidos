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
        Produto produto4 = new Produto("Monitor 22\' Full HD", "Freesync, VA 1920x1080", 800.00, 44, null);
        Produto produto5 = new Produto("Air Fryer", "Inox, 110V", 459.90, 321, null);
        Produto produto6 = new Produto("Cadeira de escritório", "Couro, reclinável", 700.00, 50, null);
        Produto produto7 = new Produto("Fone de ouvido", "Alta qualidade de áudio", 50.00, 685, null);

        produtoRepository.save(produto1);
        produtoRepository.save(produto2);
        produtoRepository.save(produto3);
        produtoRepository.save(produto4);
        produtoRepository.save(produto5);
        produtoRepository.save(produto6);
        produtoRepository.save(produto7);
    }
}
