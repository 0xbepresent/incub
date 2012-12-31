jQuery(document).ready(function(){
//Manejador de tabs
        jQuery(".contenido").hide(); //Ocultar capas
        jQuery("div.tabs div:first").addClass("activa").show();
        jQuery(".contenido:first").show();
        // Sucesos al hacer click en una pestaña
        jQuery("div.tabs div").click(function() {
            jQuery("#name").val(null);
            jQuery("#desc").val(null);
            jQuery("#usracc").val(null);
            jQuery("#passacc").val(null);
            edit = false;
            id = 0;
            jQuery("div.tabs div").removeClass("activa"); //Borrar todas las clases "activa"
            jQuery(this).addClass("activa"); //Añadir clase "activa" a la pestaña seleccionada
            jQuery(".contenido").hide(); //Ocultar todo el contenido de la pestaña
            var activatab = jQuery(this).find("a").attr("href"); //Leer el valor de href para identificar la pestaña activa 
            jQuery(activatab).fadeIn(); //Visibilidad con efecto fade del contenido activo
            return false;
        });
});