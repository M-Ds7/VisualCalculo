const comments = [
  'El 1 de septiembre de 1939, Adolf Hitler anunció la invasión de Polonia después que soldados regulares de este país hubieran.',
  'creada por el geógrafo alemán Friedrich Ratzel, y que consistía en la anexión de territorios con el propósito final de alcanzar el desarrollo de un país',
  'Las trincheras de la IGM fueron sustituidas por la movilidad de la guerra relámpago en la Segunda, apareciendoarmas apropiadas para las nuevas doctrinas militares',
  'AMETRALLADORA MG42,PPSH-41,MP40,PANZER VI TIGER y el V2'
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