package com.test.domain;

import static org.junit.Assert.*;

import java.util.HashMap;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.wms.domain.daoImpl.CashManDaoImpl;
import com.wms.domain.pojo.CashPojo;


@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = { CashManDaoImpl.class })
public class InstallationTestCase {
	
	@Autowired
	CashManDaoImpl cashManDaoImpl;
	
	private CashPojo cashPojo;
	static HashMap<Integer,Integer> cashbankmap=new HashMap<Integer,Integer>(); 

	@Before
	public void intialize(){
		cashPojo=new CashPojo();
		cashPojo.setTwenty(10);
		cashPojo.setFifty(20);

	}
	
	@Test
	public void testNoteInstallation() throws Exception {
		
		System.out.println("InstallationTestCase===Started");
		
		cashManDaoImpl.noteInstallation(cashPojo, cashbankmap);
		assertEquals(2,cashbankmap.size());
		System.out.println("InstallationTestCase===Ended");
	}
	
	
	@After
	public void afterMethode(){
		
		cashbankmap.clear();
	}
}
