$(document).ready(function() {
	_buildGrid();
		});

var _buildGrid = function() {
	// create the data array

var dataSet = [];
	var i = 1;
	var serialnumber = "";
	var paydate = "";
var boxes = "";
var dueamount = "";
var paidamount = "";

while (true) {

serialnumber= "i_" + i + "_serialnumber";
paydate= "i_" + i + "_paydate";
boxes = "i_" + i + "_boxes";
dueamount = "i_"+ i + "_dueamount";
paidamount = "i_"+ i + "_paidamount";
		
if (!$('input[name="' + paydate+ '"]').length) {
      break;
}
var data1= $('input[name="' + serialnumber + '"]').val();
var data2= $('input[name="' + paydate + '"]').val();
var data3= $('input[name="' + boxes + '"]').val();
var data4= $('input[name="' + dueamount + '"]').val();
var data5= $('input[name="' + paidamount + '"]').val();

		var row = i;
												
		var jsonObj = { "0": data1, "1": data2,"2": data3,"3":data4,"4":data5,"DT_RowId": row };

		i++;
		dataSet.push(jsonObj);

	}

	$('#payorder_data_table').DataTable({
		"scrollY":        "342px",
        "scrollCollapse": true,
        "paging":         false,
		data : dataSet,
		columns : [
{ "title":"Serial Number" },
{ "title":"Pay Date" },
{ "title": "Boxes" },
{ "title": "Due Amount($)" },
{ "title": "Paid Amount($)" }
		]
});
	var table = $('#payorder_data_table').DataTable();
	
}