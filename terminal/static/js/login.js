jQuery(document).ready(function(){
    jQuery("#login-submit").click(function(){
        var user = jQuery("#login-usuario").val();
        var password = jQuery("#login-clave").val();
        $.post("xhr_login/", {
                            user: user, 
                            password : password
                            }, 
                            function(data){
                                if(data === "1")
                                    window.location = "/account";
                                else{
                                    jQuery("#msg_login").text(data);
                                    jQuery("#login-usuario").val(null);
                                    jQuery("#login-clave").val(null);
                                }
                            }
            );
    });
});