(function(){
    const titleQuestions = [...document.querySelectorAll('.questions__title')];

    titleQuestions.forEach(question => {
        question.addEventListener('click', () => {
            let answer = question.nextElementSibling;  // La respuesta está justo después de la pregunta
            let addPadding = question.parentElement;   // Para añadir el padding del contenedor

            // Alterna la clase para agregar o quitar el padding
            addPadding.classList.toggle('questions__padding--add');

            // Rota la flecha al hacer clic
            question.children[0].classList.toggle('questions__arrow--rotate');

            // Manipula el max-height para la animación
            if (answer.style.maxHeight) {
                // Si la respuesta tiene un max-height definido, lo eliminamos (se cierra)
                answer.style.maxHeight = null;
            } else {
                // Si no tiene un max-height definido, lo ajustamos al scrollHeight (se abre)
                answer.style.maxHeight = `${answer.scrollHeight}px`;
            }
        });
    });
})();
