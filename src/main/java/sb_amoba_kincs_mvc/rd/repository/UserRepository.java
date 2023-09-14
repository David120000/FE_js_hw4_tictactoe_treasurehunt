package sb_amoba_kincs_mvc.rd.repository;

import java.time.LocalDateTime;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import sb_amoba_kincs_mvc.rd.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {

    @Modifying
    @Query(value="INSERT INTO treasurehunt_scores (username, score, date) VALUES (:username, :score, :date)", nativeQuery = true)
    void saveNewScore(
            @Param("username") String userName, 
            @Param("score") int score, 
            @Param("date") LocalDateTime date
        );

    
}
