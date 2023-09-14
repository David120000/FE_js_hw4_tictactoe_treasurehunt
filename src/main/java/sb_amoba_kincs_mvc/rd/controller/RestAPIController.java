package sb_amoba_kincs_mvc.rd.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import sb_amoba_kincs_mvc.rd.model.User;
import sb_amoba_kincs_mvc.rd.model.dto.NewScoreRequestBodyDTO;
import sb_amoba_kincs_mvc.rd.model.dto.PersistSuccessDTO;
import sb_amoba_kincs_mvc.rd.service.AppService;

@RestController
public class RestAPIController {
    
    @Autowired
    private AppService service;


    @PostMapping("/game/treasurehunt/newscore")
    public PersistSuccessDTO<User> persistNewScore(
            @RequestBody NewScoreRequestBodyDTO request
        ) {
        
        System.out.println(request);
        PersistSuccessDTO<User> result = service.newScore(request.getUser(), request.getPlayerClicks());

        return result;
    }

    @PostMapping("/game/treasurehunt/playerdied")
    public PersistSuccessDTO<User> updateUserLives(
            @RequestBody User request
        ) {
        
        System.out.println(request);
        PersistSuccessDTO<User> result = service.updateUserData(request);

        return result;
    }
}
