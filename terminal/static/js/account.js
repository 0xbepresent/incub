jQuery(document).ready(function(){
    jQuery("#acc-submit").click(function(){
        if(key == 0)
            alert("The key is not load");
        else{
            if(edit == false){
                var type = "new";
            }else{
                var type = "edit";
            }
            //alert(jQuery("#name").val().toString());
            var name = encryptLongString(jQuery("#name").val(), key);
            var descr = encryptLongString(jQuery("#desc").val(), key);
            var usracc = encryptLongString(jQuery("#usracc").val(), key);
            var passacc = encryptLongString(jQuery("#passacc").val(), key);
            //alert(name);
            jQuery.post("xhr_add_edit_account/", {
                                    name: name, 
                                    descr : descr,
                                    usracc: usracc,
                                    passacc: passacc,
                                    id: id,
                                    type: type
                                    }, 
                                    function(data){
                                        jQuery("#msg").text(data);
                                        window.location = "/";
                                    }
                    );
        }
    });
    
    jQuery("a.acc_delete").click(function(){
       var id = jQuery(this).parents("tr").find("th").eq(0).html();
       if( key != 0 ){
           resp = confirm("Would you like delete Account? \nID:" + id);
           if(resp){
                jQuery(this).parents("tr").fadeOut("normal", function(){
                jQuery(this).remove();
                jQuery.post("xhr_delete_account/", {
                                id: id
                                }, 
                                function(data){
                                }
                );
            });
           }
        }
        else{alert("The key is not loaded");}
        
    });
    
    jQuery("a.acc_edit").click(function(){
        if(key != 0){
            //Set values
            jQuery("#name").val(jQuery(this).parents("tr").find("td").eq(0).html());
            jQuery("#desc").val(jQuery(this).parents("tr").find("td").eq(1).html());
            jQuery("#usracc").val(jQuery(this).parents("tr").find("td").eq(2).html());
            jQuery("#passacc").val(jQuery(this).parents("tr").find("td").eq(3).html());
            jQuery(".contenido").hide();
            jQuery("#add_acc").fadeIn();
            edit = true;
            id = jQuery(this).parents("tr").find("th").eq(0).html();
        }else{
            alert("The key is not loaded");
        }
    });
    
    jQuery("#sendkey").click(function(){
        //Send key and init
        if(jQuery("#txtkey").val().length == 16 || jQuery("#txtkey").val().length == 24 || jQuery("#txtkey").val().length == 32){
            key = init(jQuery("#txtkey").val());
            
            if(jQuery("table tr").length > 1){
                jQuery("table td").each(function(i,o){ 
                    var value = ( jQuery(":first-child", this).is(":input") ) ? jQuery(":first-child", this).val() : ( jQuery(this).text() != "" ) ? jQuery(this).text() : jQuery(this).html() ; 
                    var desen = decryptLongString(jQuery(this).text(), key);
                    //Si caracteres ilegales
                    //alert(desen);
                    if(desen != 0){
                        jQuery(this).text(desen);
                        jQuery(this).parents("tr").find(".acc_edit").css('display', 'block');
                        jQuery(this).parents("tr").find(".acc_delete").css('display', 'block');
                        jQuery("#keyLoaded").text("Key loaded  "+jQuery("#txtkey").val());
                        jQuery("#keypart").css('display', 'none');
                        jQuery("#desencryptpart").css('display', 'block');
                    }
                    else{
                        key = 0;
                    }
                }); 
            }else{
                jQuery("#keyLoaded").text("Key loaded  "+jQuery("#txtkey").val());
                jQuery("#keypart").css('display', 'none');
                jQuery("#desencryptpart").css('display', 'block');
            }
        }else{
            alert("Only keys of 16 24 32 bits");
        }
    });
    
    jQuery("#anothertkey").click(function(){
        window.location = "/";
    });
});