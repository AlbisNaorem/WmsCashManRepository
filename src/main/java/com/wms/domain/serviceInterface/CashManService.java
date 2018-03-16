package com.wms.domain.serviceInterface;

import java.util.HashMap;

import org.springframework.stereotype.Service;

import com.wms.domain.pojo.CashPojo;


public interface CashManService {
	
	public String noteInstallation(CashPojo cashPojo,HashMap<Integer,Integer> cashbankmap);
	public String getNoteDetails(HashMap<Integer,Integer> cashbankmap);
	public String withdrawCashMethode(int amount,HashMap<Integer,Integer> cashbankmap);

}
