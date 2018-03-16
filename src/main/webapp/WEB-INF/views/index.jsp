<!DOCTYPE html>
<html lang="en">
<head>
  <title>CashMan</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="/resources/css/enroll.css">
  
  <style type="text/css">


</style>
</head>
<body>

	<script type="text/javascript">
	$(function() { // when DOM is ready
		 $.ajax({
			    type : "post",
			    url : "installation",
			    cache : false,
			    success : function(response) {
			    	$("#containerDiv").html(response);
			    },
			    error : function() {
			     alert('Error while request..');
			    }
			   });
	   $("#withdraw").click(function(){
		   $.ajax({
			    type : "post",
			    url : "withdraw",
			    cache : false,
			    success : function(response) {
			    	$("#containerDiv").html(response);
			    },
			    error : function() {
			     alert('Error while request..');
			    }
			   });
			$(this).css("color", "#596ffa");
			$("#installation").css("color", "#666");
			$("#balanceId").css("color", "#666");


		});
		$("#installation").click(function(){
			 $.ajax({
			    type : "post",
			    url : "installation",
			    cache : false,
			    success : function(response) {
			    	$("#containerDiv").html(response);
			    },
			    error : function() {
			     alert('Error while request..');
			    }
			   });
			$(this).css("color", "#596ffa");
			$("#withdraw").css("color", "#666");
			$("#balanceId").css("color", "#666");
			
		});
		 $("#balanceId").click(function(){
		   $.ajax({
			    type : "post",
			    url : "noteDetails",
			    cache : false,
			    success : function(response) {
			    	$("#containerDiv").html(response);
			    },
			    error : function() {
			     alert('Error while request..');
			    }
			   });
			$(this).css("color", "#596ffa");
			$("#installation").css("color", "#666");
			$("#withdraw").css("color", "#666");

		});
		$("input").click(function(){
			alert("ddddd");
			$(this).val("");
		});
	});

	</script>
	<div align="left" style="width: 100%;" id="content">
					<h1>Welcome to CashMan Bank</h1>
	</div>
	<div align="left" style="width: 330px;margin-left: 5px;">
		<div style="float: left;padding-top: 10px" class="tabButton" id="installation">Installation</div><div style="float: left;padding-top: 10px;" class="tabButton" id="withdraw">Withdraw</div><div style="float: right;padding-top: 10px;" class="tabButton" id="balanceId">Balance</div>
	</div>
 	<div class="tabcontainer">
 	<div id="containerDiv" style="margin-top: 30px;margin-left: 20px;"></div>
 	</div>
</body>
</html>