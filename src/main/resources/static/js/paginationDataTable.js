/*
 * Copyright Syntel Pvt Ltd
 * Developer By Albis
 * */
var defaultIndexPerPage=2;
var totalNoOfRecord=0;
var noOfRecordPerPage=10;
var counter=0;
var columnHeadNameList=new Array();
var searchlist=new Array();
var flagSearch=0;
var searchInputList="";

function getDefaultPaginationValue(defaultIndexPerPage,totalNoOfRecord,
		noOfRecordPerPage,counter,columnHeadNameList,url,sendtype,arraySearchList,flagSearchCheck,searchInputList){
/*	alert("getDefaultPaginationValue="+defaultIndexPerPage+","+totalNoOfRecord+","
			+noOfRecordPerPage+","+counter+","+
			columnHeadNameList+","+url+","+sendtype);*/
	
	this.defaultIndexPerPage=defaultIndexPerPage;
	this.totalNoOfRecord=totalNoOfRecord;
	this.noOfRecordPerPage=noOfRecordPerPage;
	this.counter=counter;
	this.columnHeadNameList=columnHeadNameList;
	this.url=url;
	this.sendtype=sendtype;
	this.flagSearch=flagSearchCheck;
	this.searchlist=arraySearchList;
	this.searchInputList=searchInputList;
	
	loadFtbJs.loadRecordWithData(
			url,
			sendtype,
			noOfRecordPerPage,
			1,
			columnHeadNameList);
	
	var count=parseInt(loadFtbJs.checkNoOfRecord(noOfRecordPerPage,totalNoOfRecord));
/*	alert("Before==Count//totalNoOfRecord//counter=="+count+"//"+totalNoOfRecord+"//"+counter);
*/	
		$("#pagelink").html("<ul>")
		$("#pagelink").append("<li>Pages:</li>");
		/*if(parseInt(defaultIndexPerPage)<parseInt(count))
		{$("#pagelink").append("<li><input type='button' class='buttonPagination' value='<' /></li>");}*/
		for(var i=1;i<=count;i++){
			if(i==1){
				$("#pagelink").append('<li class="firstlistitem"><a onclick="loadFtbJs.loadPaginationRecord('+noOfRecordPerPage+','+i+')">'+i+'</a></li>');
			}
			else if(i==parseInt(defaultIndexPerPage)){
	    		$("#pagelink").append('<li><a onclick="loadFtbJs.loadPaginationRecord('+noOfRecordPerPage+','+i+')">'+i+'</a></li>');
	    		counter=parseInt(counter)+1;
				break;
			}
			else{
			$("#pagelink").append('<li><a onclick="loadFtbJs.loadPaginationRecord('+noOfRecordPerPage+','+i+')">'+i+'</a></li>');
			}
			counter=parseInt(counter)+1;
		}
/*		alert("After==Count//totalNoOfRecord//counter=="+count+"//"+totalNoOfRecord+"//"+counter);
*/
		if(parseInt(counter)<parseInt(count))
		{
		var index=parseInt(index)+1;
		$("#pagelink").append('<li><input type="button" class="buttonPagination" onclick="loadFtbJs.nextPageIndex('+noOfRecordPerPage+',1,'+counter+')" value=">" /></li>');}
		$("#pagelink").append("</ul>");
		$("#pagelink").after("<div><input type='hidden' value='1' id='firstIndex'/><input type='hidden' value='"+counter+"' id='lastIndex'/></div>");
}


var loadFtbJs = {
		  loadPageIndex: function (noOfRecordPerPage) {
				
		    	counter=0;
				var count=parseInt(loadFtbJs.checkNoOfRecord(noOfRecordPerPage,totalNoOfRecord));
				/*alert("Count//totalNoOfRecord//counter=="+count+"//"+totalNoOfRecord+"//"+counter);*/

				loadFtbJs.loadRecordWithData(
						url,
						sendtype,
						noOfRecordPerPage,
						1,
						columnHeadNameList);
				
		    	$("#pagelink").html("<ul>")
		    	$("#pagelink").append("<li>Pages:</li>");
		    	for(var i=1;i<=count;i++){
		    		if(i==1){
		    			$("#pagelink").append('<li class="firstlistitem"><a onclick="loadFtbJs.loadPaginationRecord('+noOfRecordPerPage+','+i+')">'+i+'</a></li>');
		    		}
		    		else if(i==parseInt(defaultIndexPerPage)){
		        		$("#pagelink").append('<li><a onclick="loadFtbJs.loadPaginationRecord('+noOfRecordPerPage+','+i+')">'+i+'</a></li>');
		        		counter=parseInt(counter)+1;
		        		break;
		    		}
		    		else{
		    			$("#pagelink").append('<li><a onclick="loadFtbJs.loadPaginationRecord('+noOfRecordPerPage+','+i+')">'+i+'</a></li>');
		    		}
		    		counter=parseInt(counter)+1;

		    	}
/*				alert("Count//totalNoOfRecord//counter=="+count+"//"+totalNoOfRecord+"//"+counter);
*/		    	if(parseInt(counter)<parseInt(count))
				{
					var index=parseInt(index)+1;
					$("#pagelink").append('<li><input type="button" class="buttonPagination" onclick="loadFtbJs.nextPageIndex('+noOfRecordPerPage+',1,'+counter+')" value=">" /></li>');}
					$("#pagelink").append("</ul>");
					$("#firstIndex").val(1);
					$("#lastIndex").val(counter);
		    },
		getTotalNoOfRecord: function (url,sendtype) {
			var value="";
			$.ajax({
	        type : sendtype,
	        url : url,
	        cache : false,
	        success : function(response) {
	        	totalNoOfRecord=parseInt(totalNoOfRecord);
	        	
	        },
	        error : function() {
	         alert('Error while request..');
	        }
	       });
		},
		loadRecordWithData: function (url,sendtype,noOfRecordPerPage,pageIndex,columnHeadNameList) {
					$.ajax({
			        type : sendtype,
			        url : url+"?noOfRecordPerPage="+noOfRecordPerPage+"&pageIndex="+pageIndex+"&"+searchInputList+"="+searchlist+"&flagSearch="+flagSearch,
			        cache : false,
			        success : function(response) {
			        	text=response;
			        	var arrayOfTable=loadFtbJs.getTableHeader(columnHeadNameList);
			        	var stringHtml="";
			        	for(var i=0;i<arrayOfTable.length;i++){
			        		stringHtml=stringHtml+arrayOfTable[i];
			        	}
			        	$("#tableWithPagination").html(stringHtml);			        },
			        error : function() {
			         alert('Error while request..');
			        }
			       });
		},
		getTableHeader:function(columnList) {
			var dataObj = JSON.parse(text);
			var length = Object.keys(dataObj).length;
	        var listarray = new Array();
	        listarray.push("<table style='margin-left: 7px;'>");
	        listarray.push("<tr>");
	        for (var i = 0; i <columnList.length; i++) {
	        listarray.push("<th style='width:7%;'>" + columnList[i] + "</th>");
	        }
	        listarray.push("</tr>");
	        for (var key in dataObj){
		        listarray.push("<tr>");
		        for (var data in dataObj[key]){
	            listarray.push("<td>" + dataObj[key][data]+" &nbsp;</td>");
		        }
	            listarray.push("</tr>");
	        }
	        listarray.push("</table>");
	        return listarray;
	    },
	  
	    checkNoOfRecord:function (noOfRecordPerPage,totalNoOfRecord)
	    {
	    	var count=parseInt(totalNoOfRecord/noOfRecordPerPage);
	    	var countcheck=totalNoOfRecord%noOfRecordPerPage;
	    	if(countcheck!=0){
	    		count=parseInt(count)+1;
	    	}
	    	return count;
	    },
	    nextPageIndex:function (noOfRecordPerPage,firstIndex,lastIndex)
	    {
/*	    	alert("Before firstIndex//And//lastindex="+$("#firstIndex").val()+"//"+$("#lastIndex").val());
*/	    	var startIndex=$("#firstIndex").val();
	    	var endIndex=$("#lastIndex").val();
	    	var count=parseInt(loadFtbJs.checkNoOfRecord(noOfRecordPerPage,totalNoOfRecord));
			var k=1;
			counter=endIndex;
/*			alert("Before==Count//totalNoOfRecord//counter//firstIndex=="+count+"//"+totalNoOfRecord+"//"+counter+"//"+firstIndex);
*/
	    	var index=parseInt(endIndex)+1;
	    	$("#pagelink").html("<ul>")
	    	$("#pagelink").append("<li>Pages:</li>");
	    	$("#pagelink").append('<li><input type="button" class="buttonPagination" onclick="loadFtbJs.previousPageIndex('+noOfRecordPerPage+','+firstIndex+','+lastIndex+')" value="<" /></li>');
	    	for(var i=index;i<=count;i++){
	    		if(k==1){
	    			$("#pagelink").append('<li class="firstlistitem"><a onclick="loadFtbJs.loadPaginationRecord('+noOfRecordPerPage+','+i+')">'+i+'</a></li>');
	    		}
	    		else if(k==parseInt(defaultIndexPerPage)){
		    		$("#pagelink").append('<li><a onclick="loadFtbJs.loadPaginationRecord('+noOfRecordPerPage+','+i+')">'+i+'</a></li>');
		    		counter=parseInt(counter)+1;
		    		break;
	    		}
	    		else{
	    		$("#pagelink").append('<li><a onclick="loadFtbJs.loadPaginationRecord('+noOfRecordPerPage+','+i+')">'+i+'</a></li>');
	    		}
	    		counter=parseInt(counter)+1;
	    		k=parseInt(k)+1;
	    	}
/*			alert("After==Count//totalNoOfRecord//counter//firstIndex=="+count+"//"+totalNoOfRecord+"//"+counter+"//"+firstIndex);
*/	    	

	    	if(parseInt(counter)<parseInt(count))
	    	{
	    	$("#pagelink").append('<li><input type="button" class="buttonPagination" onclick="loadFtbJs.nextPageIndex('+noOfRecordPerPage+','+counter+','+counter+')" value=">" /></li>');}
	    	$("#pagelink").append("</ul>");
			$("#firstIndex").val(endIndex);
			$("#lastIndex").val(counter);
/*			alert("After firstIndex//And//lastindex="+$("#firstIndex").val()+"//"+$("#lastIndex").val());
*/	    },
	    previousPageIndex:function (noOfRecordPerPage,firstIndex,lastIndex)
	    {
/*	    	alert("Before firstIndex//And//lastindex="+$("#firstIndex").val()+"//"+$("#lastIndex").val());
*/	    	var count=parseInt(loadFtbJs.checkNoOfRecord(noOfRecordPerPage,totalNoOfRecord));
/*			alert("Before==Count//totalNoOfRecord//counter//startIndex=="+count+"//"+totalNoOfRecord+"//"+lastIndex+"//"+startIndex);
*/			var startIndex=$("#firstIndex").val();
			var endIndex=$("#lastIndex").val();
			var k=1;
			var i=parseInt(startIndex);
	    	var array=new Array();
			counter=parseInt(startIndex);
	    	var m=0;
	    	while(i>=1){
	    		array[m]=i;
	    		m=parseInt(m)+1;
	    		if(k==parseInt(defaultIndexPerPage)){
		    		counter=parseInt(counter)-1;
		    		break;
	    		}
	    		else{
	    		counter=parseInt(counter)-1;}
	    		k=parseInt(k)+1;	
	    		i=parseInt(i)-1;	
/*	    		alert("Inside==k="+k+"//i="+i+"//counter="+counter);
*/	    	}
/*	    	alert("Puuuuuuu=="+counter);
*//*	    	alert("noOfRecordPerPage//firstIndex//lastIndex="+noOfRecordPerPage+"//"+firstIndex+"//"+lastIndex);
*/	    	$("#pagelink").html("<ul>")
	    	$("#pagelink").append("<li>Pages:</li>");
	    	if(counter>1){
		    	$("#pagelink").append('<li><input type="button" class="buttonPagination" onclick="loadFtbJs.previousPageIndex('+noOfRecordPerPage+','+firstIndex+','+counter+')" value="<" /></li>');
	    	}
	    	
	    	var counterIndex=counter;
	    	
	    	var arrayRev=array.reverse();
/*	    	alert(arrayRev);
*/	    	k=1;
	    	for(var i=0;i<array.length;i++)
	    		{
		    		if(k==1){
		    			$("#pagelink").append('<li class="firstlistitem"><a onclick="loadFtbJs.loadPaginationRecord('+noOfRecordPerPage+','+arrayRev[i]+')">'+arrayRev[i]+'</a></li>');
		    		}
		    		else if(k==parseInt(defaultIndexPerPage)){
			    		$("#pagelink").append('<li><a onclick="loadFtbJs.loadPaginationRecord('+noOfRecordPerPage+','+arrayRev[i]+')">'+arrayRev[i]+'</a></li>');
			    		if(counterIndex==0){counter=parseInt(counter)+1;}
			    		break;
		    		}
		    		else{
		    		$("#pagelink").append('<li><a onclick="loadFtbJs.loadPaginationRecord('+noOfRecordPerPage+','+arrayRev[i]+')">'+arrayRev[i]+'</a></li>');
		    		}
		    		k=parseInt(k)+1;
		    		if(counterIndex==0){counter=parseInt(counter)+1;}
	    		}
/*			alert("After==Count//totalNoOfRecord//counter//startIndex=="+count+"//"+totalNoOfRecord+"//"+lastIndex+"//"+startIndex);
*/
	    	if(parseInt(counter)<parseInt(count))
	    	{
		    $("#pagelink").append('<li><input type="button" class="buttonPagination" onclick="loadFtbJs.nextPageIndex('+noOfRecordPerPage+','+firstIndex+','+counter+')" value=">" /></li>');}
/*	    	$("#pagelink").append("<li><input type='hidden' value='"+startIndex+"' id='firstIndex'/><input type='hidden' value='"+counter+"' id='lastIndex'/></li>");
*/	    	$("#pagelink").append("</ul>");
			$("#firstIndex").val(counter);
			$("#lastIndex").val(startIndex);
/*			alert("After firstIndex//And//lastindex="+$("#firstIndex").val()+"//"+$("#lastIndex").val()+"//counterIndex="+counterIndex);
*/	    },
	    loadPaginationRecord:function (noOfRecordPerPage,pagecount)
	    {
	    	var pageIndex=(((parseInt(noOfRecordPerPage)*parseInt(pagecount))+1)-parseInt(noOfRecordPerPage));
	    	/*alert(noOfRecordPerPage+"//"+pagecount+"//"+noOfRecordPerPage+"//"+columnHeadNameList+"//"+url+"//"+sendtype);*/
	    	loadFtbJs.loadRecordWithData(
					url,
					sendtype,
	    			noOfRecordPerPage,
	    			pageIndex,
	    			columnHeadNameList);
	    }
}
