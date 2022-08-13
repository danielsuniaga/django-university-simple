const btnEliminacion = document.querySelectorAll(".btnEliminacion")

(function(){

    btnEliminacion.forEach(btn => {

        btn.addEventListener('click', function(e){

            let confirmation=confirm("¿Confirma la eliminación del curso?")

            if(!confirmation)
            {
                e.preventDefault();
            }

        })

    });

})();