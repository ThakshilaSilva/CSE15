/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package keystroke;

import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Thakshila
 */
public class DBConnection {
 
    private static final String DRIVER="org.apache.derby.jdbc.EmbeddedDriver";
    private static final String JDBC_URL="jdbc:derby:KeyStroke;create=true";
    
    private Connection conn;
    
    public DBConnection(){
        try {
            this.conn= DriverManager.getConnection(JDBC_URL);
            if(conn != null){
                System.out.println("con");
            }
        } catch (SQLException ex) {
            Logger.getLogger(DBConnection.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    public void createTable(){
        
        try{
            DatabaseMetaData dbm=getConn().getMetaData();
            
            ResultSet table = dbm.getTables(null, null, "SystemUser", null);
            
            if(table.next()){
            
            }else{
               getConn().createStatement().execute("create table SystemUser (username varchar(30) primary key,password varchar(30) not null,time integer not null,average double not null )");
            }
        }catch(Exception e){
        
        }
        
    }

    /**
     * @return the conn
     */
    public Connection getConn() {
        return conn;
    }
    
}
