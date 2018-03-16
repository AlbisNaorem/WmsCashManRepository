function loadfullErrorComentCustomer(id,indexId,size){
	var value=$("#"+indexId+"_errorlist").val();
	var openWindow = window.open('', '', 'height=400,width=600');  
    openWindow.document.write('<html><head><title>Error Comment</title>'); 
    openWindow.document.write("<link rel='stylesheet' href='/resources/css/enroll.css'>");
    
	   openWindow.document.write('<div style="overflow:auto;height:500px;"><table style="width:500px;height:auto;margin-top:10px;margin-left:10px;">');
	   openWindow.document.write('<tr><th>Sr No.</th><th>Customer Number</th><th>Error Comment</th></tr>');
    if(value.indexOf(",")==-1){
		   openWindow.document.write('<tr><td style="width:10%;">1. </td><td style="width:10%;">'+id+'</td><td style="width:80%;">'+value+'</td></tr>'); 
    }
    else
 	   {
 		var arrayvalue=value.split(",");
 		var index=1;
 		for(var i=0;i<arrayvalue.length;i++){
 	   		   openWindow.document.write('<tr><td style="width:10%;">'+index+'</td><td style="width:10%;">'+id+'</td><td style="width:80%;">'+arrayvalue[i]+'</td></tr>'); 
 			index++;
 		}
 	   }
		openWindow.document.write('</table></div>');
    openWindow.document.write('</body></html>');
    openWindow.document.close();  
}

function loadfullErrorComentAccount(id,indexId,size){
	var value=$("#"+indexId+"_errorlist").val();
	var openWindow = window.open('', '', 'height=400,width=600');  
    openWindow.document.write('<html><head><title>Error Comment</title>'); 
    openWindow.document.write("<link rel='stylesheet' href='/resources/css/enroll.css'>");
    
	   openWindow.document.write('<div style="overflow:auto;height:500px;"><table style="width:500px;height:auto;margin-top:10px;margin-left:10px;">');
	   openWindow.document.write('<tr><th>Sr No.</th><th>Account Number</th><th>Error Comment</th></tr>');
    if(value.indexOf(",")==-1){
		   openWindow.document.write('<tr><td style="width:10%;">1. </td><td style="width:10%;">'+id+'</td><td style="width:80%;">'+value+'</td></tr>'); 
    }
    else
 	   {
 		var arrayvalue=value.split(",");
 		var index=1;
 		for(var i=0;i<arrayvalue.length;i++){
 	   		   openWindow.document.write('<tr><td style="width:10%;">'+index+'</td><td style="width:10%;">'+id+'</td><td style="width:80%;">'+arrayvalue[i]+'</td></tr>'); 
 			index++;
 		}
 	   }
		openWindow.document.write('</table></div>');
    openWindow.document.write('</body></html>');
    openWindow.document.close();  
}

function printDiv() 
{  
       var divContents = document.getElementById("printdivcontent").innerHTML;  
       var printWindow = window.open('', '', 'height=400,width=600');  
       printWindow.document.write('<html><head><title>Print DIV Content</title>'); 
       printWindow.document.write("<link rel='stylesheet' href='/resources/css/enroll.css'>");
       printWindow.document.write('</head><body >');  
       printWindow.document.write(divContents);  
       printWindow.document.write('</body></html>');
       printWindow.document.close();  
       printWindow.print();  
 }

function loadAccountEditPage(id) {
		    	alert(id);
		  }

function loadSearchRecord(searchText) {
	alert(status);
	/*var value="";
	$.ajax({
    type : "post",
    url : "getTotalRecordForSearch?searchText"+searchText,
    cache : false,
    success : function(response) {
    	var defaultIndexPerPage=5;
    	var totalNoOfRecord=parseInt(response);
    	var noOfRecordPerPage=10;
    	var counter=0;
    	var url="loadCustomerPaginationData";
    	var sendtype="post";
    	var columnHeadNameList=new Array();
    	columnHeadNameList.push("Customer Number");
    	columnHeadNameList.push("User Name");
    	columnHeadNameList.push("Status");
    	columnHeadNameList.push("Comments");
    	
    	getDefaultPaginationValue(
    			defaultIndexPerPage,
    			totalNoOfRecord,
    			noOfRecordPerPage,
    			counter,
    			columnHeadNameList,
    			url,
    			sendtype);    	
    },
    error : function() {
     alert('Error while request..');
    }
   });*/
	
	
	
}
