package sb_amoba_kincs_mvc.rd.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AppController {
    
    
    @GetMapping("/game/tictactoe")
    public String loadTictactoe(Model model) {

        model.addAttribute("tableSize", 3);

        return "amoba.html";
    }
}
