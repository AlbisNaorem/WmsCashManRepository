package com.wms.domain.serviceImpl;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import com.wms.domain.pojo.CashPojo;
import com.wms.domain.serviceInterface.CashManService;
import com.wms.domain.dao.CashManDao;

@Service
public class CashManServiceImpl implements CashManService {

	@Autowired
	private CashManDao cashManDao;
	
	public String noteInstallation(CashPojo cashPojo,HashMap<Integer,Integer> cashbankmap) {
		// TODO Auto-generated method stub
		return cashManDao.noteInstallation(cashPojo,cashbankmap);
	}

	public String getNoteDetails(HashMap<Integer, Integer> cashbankmap) {
		// TODO Auto-generated method stub
		return cashManDao.getNoteDetails(cashbankmap);
	}

	public String withdrawCashMethode(int amount,
			HashMap<Integer, Integer> cashbankmap) {
		// TODO Auto-generated method stub
		return cashManDao.withdrawCashMethode(amount, cashbankmap);
	}

	

}
