package com.xiaofanwo.dao;

import com.xiaofanwo.entity.User;


/**
 * @author Winfred   
 * @date 2016年4月22日 下午10:01:49 
 * @version V1.0  
 */
public interface UserDao {
	
	public User getUser(String id);
	
	public boolean exist(String id);
	
	public boolean add(User user);
	
}
