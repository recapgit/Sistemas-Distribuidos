package com.projetodevendas.projetoVendas;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
// import org.springframework.boot.autoconfigure.domain.EntityScan;
// import org.springframework.context.annotation.ComponentScan;
// import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
// @ComponentScan(basePackages = "controllers")
// @EntityScan(basePackages = "entities")
// @EnableJpaRepositories(basePackages = "com.projetodevendas.repository")
public class ProjetoVendasApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjetoVendasApplication.class, args);
	}

}
