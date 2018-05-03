/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package keystroke;

import java.sql.Connection;

/**
 *
 * @author Thakshila
 */
public class KeyStroke {

    public static void main(String[] args) {
        
        DBConnection connect= new DBConnection();
        connect.createTable();
        Connection con=connect.getConn();
        MainForm mf=new MainForm(con);
        mf.setVisible(true);
        
    }
    
}
