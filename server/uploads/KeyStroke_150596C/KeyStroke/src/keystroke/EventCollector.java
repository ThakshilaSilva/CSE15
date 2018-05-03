/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package keystroke;

import java.util.ArrayList;

/**
 *
 * @author Thakshila
 */
public class EventCollector {
    
    private ArrayList<Long> keyPressedTime;
    private ArrayList<Long>keyReleasedTime;
    
    public EventCollector(){
        keyPressedTime=new ArrayList<>();
        keyReleasedTime=new ArrayList<>();
    }

    /**
     * @return the keyPressedTime
     */
    public ArrayList<Long> getKeyPressedTime() {
        return keyPressedTime;
    }

    /**
     * @param keyPressedTime the keyPressedTime to set
     */
    public void setKeyPressedTime() {
        Long time = System.currentTimeMillis();
        keyPressedTime.add(time);
    }

    /**
     * @return the keyReleasedTime
     */
    public ArrayList<Long> getKeyReleasedTime() {
        return keyReleasedTime;
    }

    /**
     * @param keyReleasedTime the keyReleasedTime to set
     */
    public void setKeyReleasedTime() {
         Long time = System.currentTimeMillis();
        keyReleasedTime.add(time);
    }

    /**
     * @param keyPressedTime the keyPressedTime to set
     */
    public void setKeyPressedTime(ArrayList<Long> keyPressedTime) {
        this.keyPressedTime = keyPressedTime;
    }

    /**
     * @param keyReleasedTime the keyReleasedTime to set
     */
    public void setKeyReleasedTime(ArrayList<Long> keyReleasedTime) {
        this.keyReleasedTime = keyReleasedTime;
    }
    
    
}
