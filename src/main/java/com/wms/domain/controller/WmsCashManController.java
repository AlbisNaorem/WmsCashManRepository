package com.wms.domain.controller;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.wms.domain.pojo.CashPojo;
import com.wms.domain.serviceInterface.CashManService;



@Controller
public class WmsCashManController{
	
	static HashMap<Integer,Integer> cashbankmap=new HashMap<Integer,Integer>(); 

	@Autowired
	CashManService cashManService;
	
	@RequestMapping(value = "loadMain")
	public ModelAndView startIndex(Model model) {
		
		model.addAttribute("cashPojo", new CashPojo());
		return new ModelAndView("index");
	}
	

	@RequestMapping(value = "withdraw")
	public ModelAndView withdraw(Model model) {
		return new ModelAndView("withdraw");
	}
	
	@RequestMapping(value = "installation")
	public ModelAndView installation(Model model) {
		
		model.addAttribute("cashPojo", new CashPojo());
		return new ModelAndView("installation");
	}
	
	@RequestMapping(value = "noteDetails")
	public @ResponseBody String noteDetails(Model model) {
		
		return cashManService.getNoteDetails(cashbankmap);
	}
	
	@RequestMapping(value = "installationData")
	public @ResponseBody String installationData(@ModelAttribute("cashPojo")CashPojo cashPojo ,
			Model model,BindingResult bind) {		
		return cashManService.noteInstallation(cashPojo, cashbankmap);
	}
	
	@RequestMapping(value = "withdrawCash")
	public @ResponseBody String withdrawCash(@RequestParam("amount")int amount ,
			Model model) {
		return cashManService.withdrawCashMethode(amount, cashbankmap);
	}
	
	
	

}
