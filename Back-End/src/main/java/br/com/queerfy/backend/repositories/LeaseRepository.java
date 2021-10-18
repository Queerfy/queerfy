package br.com.queerfy.backend.repositories;

import br.com.queerfy.backend.entities.Lease;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LeaseRepository extends JpaRepository<Lease, Integer> {
}
