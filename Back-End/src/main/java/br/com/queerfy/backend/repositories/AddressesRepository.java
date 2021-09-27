package br.com.queerfy.backend.repositories;

import br.com.queerfy.backend.entities.Addresses;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressesRepository extends JpaRepository<Addresses, Integer> {
}
