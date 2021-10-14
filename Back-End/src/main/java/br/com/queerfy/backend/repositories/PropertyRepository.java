package br.com.queerfy.backend.repositories;

import br.com.queerfy.backend.entities.Property;
import br.com.queerfy.backend.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PropertyRepository extends JpaRepository<Property, Integer> {

    @Query(value = "select p from Property p where p.active = true")
    List<Property> findAllAvaliableProperties();
}
