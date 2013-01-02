jQuery(document).ready(function(){
    jQuery("#registerform").validate({
        rules: {
            register_usuario: { required: true },
            register_email: { required: true, email: true },
            register_clave: { required: true }
        },
        messages: {
            register_usuario: "*Requeried",
            register_email: "*Requeried email format",
            register_clave: "*Requeried"
        },
        debug: true,
        submitHandler: function(form){
            var user = jQuery("#register_usuario").val();
            var email = jQuery("#register_email").val();
            var password = jQuery("#register_clave").val();
            jQuery.post("xhr_register/", {
                            user: user,
                            email: email,
                            password : password
                            }, 
                            function(data){
                                if(data === "1")
                                    window.location = "/";
                                else{
                                    jQuery("#msg_register").text(data);
                                    jQuery("#register_usuario").val(null);
                                    jQuery("#register_email").val(null);
                                    jQuery("#register_clave").val(null);
                                }
                            }
            );
       }
    });
    
});