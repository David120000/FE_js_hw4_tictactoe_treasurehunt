package sb_amoba_kincs_mvc.rd.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import sb_amoba_kincs_mvc.rd.model.User;

@RestController
public class RestAPIController {
    
    @PostMapping("/game/treasurehunt/newscore")
    public Object persistNewScore(
            @RequestParam(name="user") User user,
            @RequestParam(name="newScore") int score
        ) {
        
            

        return null;
    }
}
