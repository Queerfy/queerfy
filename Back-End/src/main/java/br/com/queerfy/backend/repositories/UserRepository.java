package br.com.queerfy.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import br.com.queerfy.backend.entities.User;

public interface UserRepository extends JpaRepository<User, Integer> {
}
