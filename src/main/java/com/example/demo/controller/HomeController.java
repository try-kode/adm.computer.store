package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String index(){
        return "index";
    }

    @GetMapping("/contact")
    public String contact(){
        return "contact";
    }

    @GetMapping("/service")
    public String service(){
        return "service";
    }

    @GetMapping("/product")
    public String product(){
        return "product";
    }

    @GetMapping("/about")
    public String about(){
        return "about";
    }
}
