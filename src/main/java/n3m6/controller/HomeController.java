package n3m6.controller;

import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HomeController {

	@RequestMapping(value="/", method = RequestMethod.GET)
	public String homepage() {
		return "templates/view/index.html";
	}
	
	@RequestMapping(value="/index.html", method = RequestMethod.GET)
	public String homepageIndex() {
		return "templates/view/index.html";
	}

}