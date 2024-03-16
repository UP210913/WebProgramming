// Elementos HTML
const userSelect = document.getElementById('usuarios');
const userContainer = document.getElementById('datosUsuario'); // Cambiado a 'datosUsuario'
const taskContainer = document.getElementById('tareasUsuario'); // Cambiado a 'tareasUsuario'

// Datos de los usuarios y tareas (copiados de tu pregunta)

// Función para mostrar los datos del usuario seleccionado
function mostrarDatosUsuario() {
  const select = document.getElementById("usuarios");
  const selectedUserId = parseInt(select.value);

  // Buscar el usuario seleccionado en el array de usuarios
  const usuario = usuarios.find(user => user.id === selectedUserId);

  // Mostrar los datos del usuario
  userContainer.innerHTML = `
    <h2>Datos del usuario</h2>
    <p>Nombre: ${usuario.firstname} ${usuario.lastname}</p>
    <p>Email: ${usuario.email}</p>
  `;
}

// Función para mostrar las tareas del usuario seleccionado
function mostrarTareasUsuario() {
  const selectedUserId = parseInt(userSelect.value);

  // Filtrar tareas del usuario seleccionado
  const tareasUsuario = tareas.filter(task => task.userId === selectedUserId);

  // Mostrar las tareas del usuario
  taskContainer.innerHTML = '<h2>Tareas del usuario:</h2>';
  if (tareasUsuario.length > 0) {
    const ul = document.createElement('ul');
    tareasUsuario.forEach(task => {
      const li = document.createElement('li');
      li.textContent = task.title;
      ul.appendChild(li);
    });
    taskContainer.appendChild(ul);
  } else {
    taskContainer.innerHTML += '<p>No hay tareas para este usuario.</p>';
  }
}

// Generar opciones de usuario al cargar la página
document.addEventListener("DOMContentLoaded", function() {
  // Generar opciones para cada usuario
  usuarios.forEach(usuario => {
    const option = document.createElement("option");
    option.value = usuario.id;
    option.textContent = `${usuario.firstname} ${usuario.lastname}`;
    userSelect.appendChild(option);
  });

  // Mostrar los datos del primer usuario al cargar la página
  mostrarDatosUsuario();
});

// Escuchar cambios en el select para mostrar los datos del usuario seleccionado
userSelect.addEventListener("change", mostrarDatosUsuario);

// Manejador de eventos para el botón "Mostrar Tareas"
document.getElementById("mostrarTareas").addEventListener("click", mostrarTareasUsuario);
