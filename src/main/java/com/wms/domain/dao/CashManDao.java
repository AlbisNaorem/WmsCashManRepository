package com.wms.domain.dao;

import java.util.HashMap;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ResponseBody;

import com.wms.domain.pojo.CashPojo;

public interface CashManDao {

	public String noteInstallation(CashPojo cashPojo,HashMap<Integer,Integer> cashbankmap);
	public String getNoteDetails(HashMap<Integer,Integer> cashbankmap);
	public String withdrawCashMethode(int amount,HashMap<Integer,Integer> cashbankmap);
}
