const comments = [
  'Cuando salió de prisión, Hitler reorganizó y reunificó el Partido Nazi.',
  'hasta que la Primera Guerra Mundial le dio un nuevo rumbo a su vida. Se enlistó en el ejército; durante la guerra fue herido dos veces (en 1916 y 1918) y recibió varias medallas',
  'Los nazis lograron su avance electoral en 1930 al combinar la tecnología moderna',
  'la investigación moderna de los mercados políticos y la intimidación a través de la violencia'
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