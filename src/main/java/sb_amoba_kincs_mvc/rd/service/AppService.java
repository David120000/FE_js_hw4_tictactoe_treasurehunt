package sb_amoba_kincs_mvc.rd.service;

import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import sb_amoba_kincs_mvc.rd.model.User;
import sb_amoba_kincs_mvc.rd.model.dto.PersistSuccessDTO;
import sb_amoba_kincs_mvc.rd.repository.UserRepository;

@Transactional 
@Service
public class AppService {
    
    @Autowired
    private UserRepository userRepo;


    public User logInUser(String userName, String password) {
        
        User user = null;
        Optional<User> optionalUser = userRepo.findById(userName);

        if(optionalUser.isPresent()) {
            
            if(optionalUser.get().getPassword().equals(password) == true) {
            
                user = optionalUser.get();
            }
        }
        


        return user;
    }


    public PersistSuccessDTO<User> newScore(User user, int newScore) {
        
        if(user.getHighScore() != null) {

            if(user.getHighScore() > newScore) {

                user.setHighScore(newScore);
                userRepo.save(user);
            }
        }
        else {

            user.setHighScore(newScore);
            userRepo.save(user);
        }
        

        userRepo.saveNewScore(user.getName(), newScore, LocalDateTime.now());

        return new PersistSuccessDTO<>(user, true);
    }


    public PersistSuccessDTO<User> updateUserData(User user) {
        
        userRepo.save(user);

        return new PersistSuccessDTO<>(user, true);
    }




}
