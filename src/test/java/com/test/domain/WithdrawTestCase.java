package com.test.domain;
import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.wms.domain.daoImpl.CashManDaoImpl;
import com.wms.domain.pojo.CashPojo;


@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = { CashManDaoImpl.class })
public class WithdrawTestCase {

	@Autowired
	CashManDaoImpl cashManDaoImpl;
	
	private CashPojo cashPojo;
	static HashMap<Integer,Integer> cashbankmap=new HashMap<Integer,Integer>(); 
	private List<Integer> listInput;
	@Before
	public void intialize(){
		cashPojo=new CashPojo();
		cashPojo.setTwenty(30);
		cashPojo.setFifty(30);
		
		cashManDaoImpl.noteInstallation(cashPojo, cashbankmap);
		
		listInput=new ArrayList<Integer>();
		listInput.add(20);
		listInput.add(40);
		listInput.add(50);
		listInput.add(70);
		listInput.add(80);
		listInput.add(100);
		listInput.add(150);
		listInput.add(60);
		listInput.add(110);
		listInput.add(200);
		
	}
	
	@Test
	public void testWithdrawCashMethode() throws Exception {
		
		System.out.println("testWithdrawCashMethode==Started");
		for(Integer input: listInput){
			String output=cashManDaoImpl.withdrawCashMethode(input, cashbankmap);
			System.out.println("Output==="+output);
			if(output.contains("successfully")){
				assertTrue(true);
			}
			else{
				assertTrue(false);
				break;
			}

		}
	}
	
	@After
	public void afterMethode(){
		
		cashbankmap.clear();
	}

}
