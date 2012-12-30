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
});