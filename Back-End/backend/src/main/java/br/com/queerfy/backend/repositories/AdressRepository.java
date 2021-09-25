package br.com.queerfy.backend.repositories;

import br.com.queerfy.backend.entities.Adresses;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdressRepository extends JpaRepository<Adresses, Long> {}
