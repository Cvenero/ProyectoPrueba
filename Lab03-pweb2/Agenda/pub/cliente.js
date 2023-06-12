document.addEventListener("DOMContentLoaded", () => {
    showHome();
  });
  
  function showHome() {
    const notes = document.querySelector("#cambiar");
    notes.innerHTML = `
      <h2></h2>
      <p>Escuela Profesional de Ingeniería de Sistemas, de la Universidad Nacional de San Agustín de Arequipa </p>
      <p>2023 - Creando eventos para agenda</p>
    `;
  }

  
  function showNotes() {
    var notes = document.querySelector("#cambiar");
    notes.innerHTML = "<h2>Agenda guardada</h2>";
    mostrarLis();
  }
  
  function showCreateView() {
    const notes = document.querySelector("#cambiar");
    notes.innerHTML = `
      <h2>Create Note</h2>
      <form id="createNoteForm">
        <input type="text" id="title" placeholder="Titulo">
        <textarea id="contenido" placeholder="EVENTO"></textarea>
        <input type="submit" value="Crear">
      </form>
    `;
}
  function mostrarLis() {
    console.log("entro");
    const url = 'http://localhost:3005/enlistar';
   
      data => {
        document.querySelector("#cambiar").innerHTML= data.text;
        var txt= document.querySelector("#cambiar").innerHTML;
        console.log(txt);
        txt= "<h2>Agenda creada</h2><br><ol><li>" +txt.replace(/,/g, "</li><li>") + "</li></ol>";
        console.log(txt);
        document.querySelector("#cambiar").innerHTML= txt;
      }
    
  }