package sb_amoba_kincs_mvc.rd.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import sb_amoba_kincs_mvc.rd.model.User;
import sb_amoba_kincs_mvc.rd.service.AppService;

@Controller
public class AppController {
    
    @Autowired
    private AppService service;

    
    @GetMapping("/game/tictactoe")
    public String loadTictactoe(Model model) {

        model.addAttribute("tableSize", 3);

        return "amoba.html";
    }

    @GetMapping("/game/treasurehunt")
    public String loadTreasureHuntLogin() {

        return "login.html";
    }

    @PostMapping("/game/treasurehunt")
    public String loadTreasureHuntGame(
            Model model,
            @RequestParam(name="username") String userName,
            @RequestParam(name="password") String password
        ) {

        User user = service.logInUser(userName, password);
        String targetPage = "login.html";

        if(user != null) {
            targetPage = "thgame.html";
            model.addAttribute("user", user);
        }
        else {
            model.addAttribute("message", "ERROR: User not found or the password was incorrect.");
        }

         
        return targetPage;
    }
}
