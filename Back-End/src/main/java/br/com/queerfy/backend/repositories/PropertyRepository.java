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

    @Query(value = "select * from property p where p.city = ?1", nativeQuery = true)
    List<Property> findAllPropertiesFromCity(String city);

    @Query(value = "select * from property p where p.space_type = ?1", nativeQuery = true)
    List<Property> findAllPropertiesWhereSpaceType(String spaceType);

}
