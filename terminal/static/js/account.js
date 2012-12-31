jQuery(document).ready(function(){
    jQuery("#acc-submit").click(function(){
        var name = jQuery("#name").val();
        var descr = jQuery("#desc").val();
        var usracc = jQuery("#usracc").val();
        var passacc = jQuery("#passacc").val();
        $.post("xhr_add_account/", {
                            name: name, 
                            descr : descr,
                            usracc: usracc,
                            passacc: passacc
                            }, 
                            function(data){
                                jQuery("#msg").text(data);
                                window.location = "/";
                            }
            );
    });
    jQuery("a.acc_delete").click(function(){
       var id = $(this).parents("tr").find("td").eq(0).html();
       resp = confirm("Would you like delete Account? \nID:" + id);
       if(resp){
            $(this).parents("tr").fadeOut("normal", function(){
            $(this).remove();
            $.post("xhr_delete_account/", {
                            id: id
                            }, 
                            function(data){
                            }
            );
        });
       }
    });
    
});