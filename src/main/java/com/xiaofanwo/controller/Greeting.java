package com.xiaofanwo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.xiaofanwo.dao.UserDao;
import com.xiaofanwo.entity.User;

/**
 * @author Winfred
 * @date 2016年4月20日 下午7:44:41
 * @version V1.0
 */
@RestController
@RequestMapping("/hello")
public class Greeting {

	@Autowired
	UserDao userDao;

	@RequestMapping(method = RequestMethod.POST)
	public String test(
			@RequestParam(value = "name", defaultValue = "World") String name) {
		return name;
	}

	@RequestMapping(value = "/user", method = RequestMethod.GET)
	public String test1() {
		User user = userDao.getUser(1);
		return user.getName();
	}
	
	
}
