jQuery(document).ready(function(){
            jQuery("#textTerminal").focus();
            jQuery("#textTerminal").bind("keypress", function(e){
                if(e.keyCode==13){
                    var texto = jQuery("#textTerminal").val();
                    switch(texto){
                        case "clear": 
                            jQuery("#contenidoTermial").empty();
                            break;
                        case "login":
                            $("#login-modal").modal({
                                    onOpen: function(dialog){
                                        dialog.overlay.fadeIn("normal", function(){
                                           dialog.container.slideDown("normal", function(){
                                             dialog.data.fadeIn("normal");
                                           }); 
                                        });
                                    },
                                    onClose: function(dialog){
                                        dialog.data.fadeOut("normal", function(){
                                           dialog.container.slideUp("normal", function(){
                                             dialog.overlay.fadeOut("normal", function(){
                                                $.modal.close();
                                             });
                                           }); 
                                        });
                                    },
                                    overlayCss: {backgroundColor:"#504C4C"}
                                });
                            break;
                        default:
                            //Eniar datos via al Servidor
                            $.post("xhr_terminal/", {
                                texto: texto
                                }, function(data){
                                    jQuery("#contenidoTermial").append("root@misa-corp:$ "+data+"<br>");
                                }
                                );
                    }
                    jQuery("#textTerminal").val("");
                }
            });
        });