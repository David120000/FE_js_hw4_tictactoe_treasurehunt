package sb_amoba_kincs_mvc.rd.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="users")
public class User {

    @Id
    @Column(name="name")
    private String name;

    @Column(name="password")
    private String password;

    @Column(name="lives")
    private int livesLeft;

    @Column(name="highscore")
    private Integer highScore;

    
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getLivesLeft() {
        return livesLeft;
    }

    public void setLivesLeft(int livesLeft) {
        this.livesLeft = livesLeft;
    }

    public Integer getHighScore() {
        return highScore;
    }

    public void setHighScore(Integer highScore) {
        this.highScore = highScore;
    }


    @Override
    public String toString() {
        return "User [name=" + name + ", password=" + password + ", livesLeft=" + livesLeft + ", highScore=" + highScore
                + "]";
    }

    
}
