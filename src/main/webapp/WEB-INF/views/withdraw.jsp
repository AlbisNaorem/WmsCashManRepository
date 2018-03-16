<%@ taglib uri="http://www.springframework.org/tags/form" prefix="s"%>
<script type="text/javascript">
	function loadWithdraw()
	{
	 	$.ajax({
			    type : "post",
			    url : "withdrawCash?amount="+$("#amount").val(),
			    cache : false,
			    success : function(response) {
			    	$("#containerDiv").html(response);
			    },
			    error : function() {
				     alert('Please provide proper input..');
			    }
			   }); 
	
	} 
	 
	</script>
	<table style="margin-left: 4px;margin-top:10px;margin-bottom: 5%;width: 25%">
		<thead>
			<tr>
				<th style="width: 20%;" colspan="2">Welcome User</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td style="widtd: 5%;">Enter Amount:</td>
				<td style="widtd: 15%;"><input type="text" style="width: 150px;" id="amount"/></td>
			</tr>
				<tr>
				<td style="widtd: 5%;"></td>
				<td style="widtd: 15%;"><input type="button" value="Submit" onclick="loadWithdraw()" style="width: 70px;"/></td>
			</tr>
		</tbody>
	</table>