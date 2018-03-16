<%@ taglib uri="http://www.springframework.org/tags/form" prefix="s"%>

	<script type="text/javascript">
		$(function() {
		
		 $.ajax({
			    type : "post",
			    url : "noteDetails",
			    cache : false,
			    success : function(response) {
			    	$("#displayNoteDetails").html(response);
			    },
			    error : function() {
			     alert('Error while request..');
			    }
			   }); 
		});
	
	function loadInstallation()
	{

	 $.ajax({
			    type : "post",
			    url : "installationData",
			    cache : false,
			    data: $("#formInstallation").serialize(),
			    success : function(response) {
			    	$("#displayNoteDetails").html(response);
			    },
			    error : function() {
				     alert('Please provide proper input..');
			    }
			   }); 
	
	} 
	 
	</script>
<div style="width: 100%">
<div style="float: left;width: 45%;">
<s:form modelAttribute="cashPojo" action="installationData" id="formInstallation">
  <table style="width: 50%"> 
  <thead>
  <tr>
  <th style="width: 10%">$Note</th><th>No of count</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>$20</td><td><s:input id="twenty" path="twenty" cssClass="textbox"  onfocus="if(this.value == 0) { this.value=''}" onblur="if (this.value == '') {this.value='0'}"/></td>
  </tr>
  <%-- <tr>
  <td>$40</td><td><s:input id="fourty" path="fourty" cssClass="textbox"  onfocus="if(this.value == 0) { this.value=''}" onblur="if (this.value == '') {this.value='0'}"/></td>
  </tr> --%>
  <tr>
  <td>$50</td><td><s:input id="fifty"  path="fifty" cssClass="textbox"  onfocus="if(this.value == 0) { this.value=''}" onblur="if (this.value == '') {this.value='0'}"/></td>
  </tr>
  <%-- <tr>
  <td>$70</td><td><s:input id="seventy"  path="seventy" cssClass="textbox"  onfocus="if(this.value == 0) { this.value=''}" onblur="if (this.value == '') {this.value='0'}"/></td>
  </tr>
  <tr>
  <td>$80</td><td><s:input id="eighty"  path="eighty" cssClass="textbox"  onfocus="if(this.value == 0) { this.value=''}" onblur="if (this.value == '') {this.value='0'}"/></td>
  </tr>
  <tr>
  <td>$100</td><td><s:input id="hundered"  path="hundered" cssClass="textbox"  onfocus="if(this.value == 0) { this.value=''}" onblur="if (this.value == '') {this.value='0'}"/></td>
  </tr>
  <tr>
  <td>$150</td><td><s:input id="oneFifty"  path="oneFifty" cssClass="textbox"  onfocus="if(this.value == 0) { this.value=''}" onblur="if (this.value == '') {this.value='0'}"/></td>
  </tr>
  <tr>
  <td>$60</td><td><s:input id="sixty"  path="sixty" cssClass="textbox"  onfocus="if(this.value == 0) { this.value=''}" onblur="if (this.value == '') {this.value='0'}"/></td>
  </tr>
  <tr>
  <td>$110</td><td><s:input id="oneHunderedTen"  path="oneHunderedTen" cssClass="textbox"  onfocus="if(this.value == 0) { this.value=''}" onblur="if (this.value == '') {this.value='0'}"/></td>
  </tr>
  <tr>
  <td>$200</td><td><s:input id="twoHundered"  path="twoHundered" cssClass="textbox"  onfocus="if(this.value == 0) { this.value=''}" onblur="if (this.value == '') {this.value='0'}"/></td>
  </tr> --%>
  </tbody>
</table>

  <div style="width: 100%;margin-top: 20px;"><!-- <div style="float: left;">Total:<div id="totalSum"></div> -->
  <input type="button" value="Install" onclick="loadInstallation()" style="width: 80px;height: 25px;font-size: 10px;float: left;margin-right: 10px;"/></div><!-- </div> -->


  </s:form>
</div>
<div style="float: right;width: 50%;"><div id="displayNoteDetails"></div></div>
</div>
