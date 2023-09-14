package sb_amoba_kincs_mvc.rd.model.dto;

import sb_amoba_kincs_mvc.rd.model.User;

public class NewScoreRequestBodyDTO {

    private User user;
    private int playerClicks;


    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }

    public int getPlayerClicks() {
        return playerClicks;
    }
    public void setPlayerClicks(int playerClicks) {
        this.playerClicks = playerClicks;
    }


    @Override
    public String toString() {
        return "NewScoreRequestBodyDTO [user=" + user + ", playerClicks=" + playerClicks + "]";
    }

}
