package br.com.queerfy.backend.repositories;

import br.com.queerfy.backend.entities.Property;
import br.com.queerfy.backend.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PropertyRepository extends JpaRepository<Property, Integer> {
}
