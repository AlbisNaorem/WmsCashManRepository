package com.wms.domain.daoImpl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Repository;

import com.wms.domain.dao.CashManDao;
import com.wms.domain.pojo.CashPojo;



@Repository
public class CashManDaoImpl implements CashManDao {

	public String noteInstallation(CashPojo cashPojo,HashMap<Integer,Integer> cashbankmap) {
		
		int amount=(cashPojo.getFifty()*50)+(cashPojo.getTwenty()*20);
		if(amount<500000) {
		cashbankmap.put(20, cashPojo.getTwenty());
		cashbankmap.put(50, cashPojo.getFifty()); 


		StringBuilder tabledata=new StringBuilder();
		tabledata.append("<table style='width: 50%'>");
		tabledata.append("<thead><tr><th>Note Installed Details</th></tr></thead>");
		if(cashbankmap.get(20)!=0){tabledata.append("<tr><td><b>"+cashbankmap.get(20)+"</b> $20 notes installed</td></tr>");}
		if(cashbankmap.get(50)!=0){tabledata.append("<tr><td><b>"+cashbankmap.get(50)+"</b> $50 notes installed</td></tr>");}
		tabledata.append("</table>");
		tabledata.append("<br/><span style='font-size:12px;'><b>Total $"+getTotal(cashbankmap)+" has Succesfully Installed</b></span>");

		
		return tabledata.toString();
		}
		else
		{
			return "Maximun capacity is 5 lakh.";	
		}
	}
	public int getTotal(HashMap<Integer,Integer> cashbankmap){
		
		  return (cashbankmap.get(20)*20)+(cashbankmap.get(50)*50);
		}
	
	public String getCombinationBoth(int amount,HashMap<Integer,Integer> cashbankmap) {
		
					
			List<Integer> fiftyList=new ArrayList<Integer>();
			for (int i=0; i<cashbankmap.get(50);i++) {
				fiftyList.add(50);	
			}
			List<Integer> twentyList=new ArrayList<Integer>();
			for (int i=0; i<cashbankmap.get(20);i++) {
				twentyList.add(20);	
			}
			int combination=0;
			int onlyfifty=0;
			int total=0;
			int twentyCount=1;
			int fiftyCount=1;
			int totalfifty=0;
			for (int i=0;i<fiftyList.size();i++) {
				totalfifty=totalfifty+fiftyList.get(i);
				total=totalfifty;
				for (int j=0;j<twentyList.size();j++) {
					total=total+twentyList.get(j);
					if(total==amount){
						combination=1;
						cashbankmap.put(50, cashbankmap.get(50)-fiftyCount);
						cashbankmap.put(20, cashbankmap.get(20)-twentyCount);
						return fiftyCount+ " $50 and "+twentyCount+" $20 notes successfully withdrawn";
					}
					twentyCount++;
				}
				fiftyCount++;
			}
			if(combination==0){
				total=0;
				twentyCount=1;
				for (Integer twenty : twentyList) {
						total=total+twenty;
						if(total==amount){
							onlyfifty=1;
							cashbankmap.put(20, cashbankmap.get(20)-twentyCount);
							return twentyCount+" $20 notes successfully withdrawn";
						}
					twentyCount++;
				}
				total=0;
				fiftyCount=1;
				if(onlyfifty==0){
					for (Integer fifty : fiftyList) {
							total=total+fifty;
							if(total==amount){
								onlyfifty=1;
								cashbankmap.put(50, cashbankmap.get(50)-fiftyCount);
								return fiftyCount+" $50 notes successfully withdrawn";
							}
							fiftyCount++;
					}
				}
				
		}
			return "Not Valid Amount";			
	}
	public String getNoteDetails(HashMap<Integer, Integer> cashbankmap) {
		StringBuilder tabledata=new StringBuilder();
		if(cashbankmap.size()!=0){
		tabledata.append("<table style='width: 50%'>");
		tabledata.append("<thead><tr><th>Note Installed Details</th></tr></thead>");
		if(cashbankmap.get(20)!=0){tabledata.append("<tr><td><b>"+cashbankmap.get(20)+"</b> $20 notes</td></tr>");}
		if(cashbankmap.get(50)!=0){tabledata.append("<tr><td><b>"+cashbankmap.get(50)+"</b> $50 notes</td></tr>");}
		tabledata.append("</table>");
		tabledata.append("<br/><span style='font-size:12px;'><b>Total $"+getTotal(cashbankmap)+"</b></span>");
		
		return tabledata.toString();
		}
		else{
			tabledata.append("You have Zero Balance. ");
			return tabledata.toString();
		}
		
	}
	public String withdrawCashMethode(int amount,
			HashMap<Integer, Integer> cashbankmap) {
		/*$20 $40 $50 $70 $80	$100 $150 $60 $110 $200*/
		
		if(amount>getTotal(cashbankmap)){
			return "Your balance is low. Please enter leser amount";
		}
		else if(amount==20){
			cashbankmap.put(20,cashbankmap.get(20)-1);
			return "1 $20 note successfully withrawl";

		}else if(amount ==50){
			cashbankmap.put(50,cashbankmap.get(50)-1);
			return "1 $50 note successfully withrawl";
		}
		else if(amount==30||amount==10||amount<10) {
			return "Only $20 and $50 notes are available";
		}
		else
		{
			if(amount%20==0&&cashbankmap.get(20)>5&&(amount/20)<=cashbankmap.get(20)) {
				
				int count=amount/20;
				return getBalance(count,20,amount,cashbankmap);
/*				cashbankmap.put(20,cashbankmap.get(20)-count);
				return amount+" successfully withrawl";
*/			}
			else if(amount%50==0&&cashbankmap.get(50)>1&&(amount/50)<=cashbankmap.get(50)){
				int count=amount/50;
				return getBalance(count,50,amount,cashbankmap);
				/*cashbankmap.put(50,cashbankmap.get(50)-count);
				return amount+" successfully withrawl";*/
			}
			else if(amount%20==0&&cashbankmap.get(50)<=1&&(amount/20)<=cashbankmap.get(20)) {
				int count=amount/20;
				return getBalance(count,20,amount,cashbankmap);
			}
			/*else if(amount%50!=0&&amount%20!=0){
				
				return getCombinationBoth(amount,cashbankmap);
			}*/
			else{
				return getCombinationBoth(amount,cashbankmap);
			}
				
		}
	}
	public String getBalance(int count,int denominator,int amount,HashMap<Integer, Integer> cashbankmap) {
		if(count>cashbankmap.get(denominator)) {
			return "Low Balance";
		}
		else
		{
			cashbankmap.put(denominator,cashbankmap.get(denominator)-count);
			return count+" $"+denominator+" notes successfully withraw";

		}
	}
}
