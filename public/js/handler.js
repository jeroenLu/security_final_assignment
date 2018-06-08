$(function(){
	$("#sendButton").on("click",function(){
		var name = $("#name").val();
		var text = $("#secretText").val();
        var password = $("#password").val();
        
        console.log(name)
        console.log(text)
        console.log(password)
		if(name.length > 0 && password.length > 0){
			if(tekst.length > 0){
                // if text field is filled -> send new secret
				sendSecret(name,tekst,password);
			}else{
                // if text feild is empty get the secret
				getSecret(name,password);
			}
		}else{
			alert("naam en/of wachtwoord niet ingevuld")
		}
	})
})