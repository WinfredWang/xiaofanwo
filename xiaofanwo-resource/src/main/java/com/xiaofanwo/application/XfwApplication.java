package com.xiaofanwo.application;

import org.glassfish.jersey.filter.LoggingFilter;
import org.glassfish.jersey.server.ResourceConfig;

import com.fasterxml.jackson.jaxrs.json.JacksonJsonProvider;

/**
 * 
 * @author Winfred
 * @date 2016年7月1日
 * @version V1.0
 */
@SuppressWarnings("deprecation")
public class XfwApplication extends ResourceConfig {
    public XfwApplication() {
        // 服务类所在的包路径
        packages("com.xiaofanwo.resource");
        // 注册JSON转换器
        register(JacksonJsonProvider.class);
        // 打印访问日志，便于跟踪调试，正式发布可清除
        register(LoggingFilter.class);
    }
}