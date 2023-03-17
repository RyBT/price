package com.example.price.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

@Controller
public class DataController {

    @GetMapping("/list")
    @ResponseBody
    public Map<String, Object> list() {
        Map<String, Object> result = new HashMap<>();
        result.put("data",new String[]{});
        result.put("code",0);
        result.put("msg",0);
        result.put("count",0);
        return result;
    }
}
