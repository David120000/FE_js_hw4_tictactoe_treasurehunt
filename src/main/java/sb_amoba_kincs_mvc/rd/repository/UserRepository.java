package sb_amoba_kincs_mvc.rd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import sb_amoba_kincs_mvc.rd.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {

    

    
}
