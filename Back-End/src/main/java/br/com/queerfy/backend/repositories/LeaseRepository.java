package br.com.queerfy.backend.repositories;

import br.com.queerfy.backend.entities.Lease;
import org.apache.tomcat.jni.Local;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Repository
public interface LeaseRepository extends JpaRepository<Lease, Integer> {

    @Query(value =
            "select property.id from lease right join property on lease.property_id = property.id where lease.check_in not between ?1 and ?2 or lease.check_in is null and city = ?3", nativeQuery = true)
    List<Integer> getAllPropertiesFromDateAndCity(String date1, String date2, String city);



    @Query(value = "select * from lease where property_id = ?1", nativeQuery = true)
    List<Lease> getAllLeaseDatesFromId(Integer id);

    @Query(
            value = "select l from Lease l where l.user.id = ?1")
    List<Lease> findLeaseByUserId(Integer id);
}
