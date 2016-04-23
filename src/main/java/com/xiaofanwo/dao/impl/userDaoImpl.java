package com.xiaofanwo.dao.impl;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

import com.xiaofanwo.dao.UserDao;
import com.xiaofanwo.entity.User;

/**
 * @author Winfred   
 * @date 2016年4月23日 下午10:39:40 
 * @version V1.0  
 */
public class userDaoImpl implements UserDao{
	
	private SessionFactory sessionFactory;

	/* (non-Javadoc)
	 * @see com.xiaofanwo.dao.UserDao#getUser(java.lang.String)
	 */
	public User getUser(String id) {
		// TODO Auto-generated method stub
		return null;
	}

	/* (non-Javadoc)
	 * @see com.xiaofanwo.dao.UserDao#exist(java.lang.String)
	 */
	public boolean exist(String id) {
		// TODO Auto-generated method stub
		return false;
	}

	/* (non-Javadoc)
	 * @see com.xiaofanwo.dao.UserDao#add(com.xiaofanwo.entity.User)
	 */
	public boolean add(User user) {
		// TODO Auto-generated method stub
		return false;
	}
}
