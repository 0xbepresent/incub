jQuery(document).ready(function(){
    jQuery("#acc-submit").click(function(){
        if(edit == false){
            var type = "new";
        }else{
            var type = "edit";
        }
        var name = jQuery("#name").val();
        var descr = jQuery("#desc").val();
        var usracc = jQuery("#usracc").val();
        var passacc = jQuery("#passacc").val();
        $.post("xhr_add_edit_account/", {
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
    
    jQuery("a.acc_edit").click(function(){
        //Set values
        jQuery("#name").val($(this).parents("tr").find("td").eq(1).html());
        jQuery("#desc").val($(this).parents("tr").find("td").eq(2).html());
        jQuery("#usracc").val($(this).parents("tr").find("td").eq(3).html());
        jQuery("#passacc").val($(this).parents("tr").find("td").eq(4).html());
        jQuery(".contenido").hide();
        jQuery("#add_acc").fadeIn();
        edit = true;
        id = $(this).parents("tr").find("td").eq(0).html();
    });
});