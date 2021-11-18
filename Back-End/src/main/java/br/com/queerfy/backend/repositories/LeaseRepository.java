package br.com.queerfy.backend.repositories;

import br.com.queerfy.backend.entities.Lease;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;

@Repository
public interface LeaseRepository extends JpaRepository<Lease, Integer> {
}
