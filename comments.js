const comments = [
  'Adolf Hitler (1889‑1945) nació el 20 de abril de 1889 en el pueblo de Braunau am Inn, en la frontera de la Alta Austria. En 1898',
  'hasta que la Primera Guerra Mundial le dio un nuevo rumbo a su vida. Se enlistó en el ejército; durante la guerra fue herido dos veces (en 1916 y 1918) y recibió varias medallas',
  'En octubre de 1919, Hitler se unió al que se convertiría en el Partido Nazi. En 1920,'
  ];

  let currentCommentIndex = 0;

  // Función para cambiar el comentario
  function changeComment() {
  const commentsContainer = document.getElementById('comments');
  commentsContainer.textContent = comments[currentCommentIndex];

  // Incrementa el índice del comentario actual
  currentCommentIndex++;

  // Si alcanzamos el final del arreglo, volvemos al principio
  if (currentCommentIndex >= comments.length) {
    currentCommentIndex = 0;
  }
  }

  // Cambiar el comentario inicial
  changeComment();

  // Establecer un intervalo para cambiar el comentario cada 3 segundos (3000 ms)
  setInterval(changeComment, 3000);