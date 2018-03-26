function showDescription(descript){
	$("#description").html("Description: " + descript);
}

function hideDescription(){
	$("#description").html("");
}

function validate(){
	var txtDob = $("#dateofbirth").val();
	var dob = new Date(dateofbirth);
	if(dob >= new Date()){
		alert("Date of Birth is not valid. Date has to be before today.");
		return false;
	}

	var numPhone = $("#phone").val();
	if(isNaN(numPhone) || numPhone.length !== 10){
		alert("Phone number is not valid or not in a valid format.")
		return false;
	}
}