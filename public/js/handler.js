$(function(){
	$("#sendButton").on("click",function(){
		var name = $("#name").val();
		var text = $("#secretText").val();
        var password = $("#password").val();
       
		if(name.length > 0 && password.length > 0){
			if(text.length > 0){
                // if text field is filled -> send new secret
				sendSecret(name, text, password);
			}else{
                // if text feild is empty get the secret
				getSecret(name, password);
			}
		}else{
			alert("naam en/of wachtwoord niet ingevuld")
		}
	})
})

function getSecret(name,password){
	$.get("http://localhost:8080/secret?name="+name+"&password="+password,function(data){
		$("#secretText").val(data);
	});
}

function sendSecret(name, text, password){
	$.ajax({
		url:"http://localhost:8080/secret",
		method:"POST",
		data:{name: name, secret:text, password:password},
		success:function(data,status){
			$("#geheimeTekst").val("");
			$("#naam").val("");
            $("#wachtwoord").val("");           
		}
	})
}