package sb_amoba_kincs_mvc.rd.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sb_amoba_kincs_mvc.rd.model.User;
import sb_amoba_kincs_mvc.rd.repository.UserRepository;

@Service
public class AppService {
    
    @Autowired
    private UserRepository userRepo;


    public User logInUser(String userName, String password) {
        
        User user = null;
        
        Optional<User> optionalUser = userRepo.findById(userName);
        System.out.println("Opt. User: " + optionalUser);
        if(optionalUser.isPresent()) {
            
            if(optionalUser.get().getPassword().equals(password) == true) {
            
                user = optionalUser.get();
            }
        }
        


        return user;
    }




}
