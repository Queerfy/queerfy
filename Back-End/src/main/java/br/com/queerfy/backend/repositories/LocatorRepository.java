package br.com.queerfy.backend.repositories;

import br.com.queerfy.backend.entities.LocatorEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocatorRepository extends JpaRepository<LocatorEntity, Long> { }
