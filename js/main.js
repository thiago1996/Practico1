const tareaInput = document.getElementById("nuevaTareaInput");
let botonAgregarTarea = document.getElementById("agregarTarea");
let lista = document.getElementById("lista");
let botonFullScreen = document.getElementById("fullscreen");


botonAgregarTarea.addEventListener("click", function(e){
  e.preventDefault();
  textoTarea = tareaInput.value;
  agregarTarea(textoTarea);
});

botonFullScreen.addEventListener("click", function(e){
  if(document.documentElement.requestFullscreen){
    
  if(document.fullscreenElement == null){

    document.getElementById('fullscreen').className = 'exitFullscreen';
    document.documentElement.requestFullscreen();
 
  }
  else{
    document.getElementById('fullscreen').className = 'fullscreen';
    document.exitFullscreen();
  }
   }
});

function agregarTarea(texto) {

  const li= document.createElement("li");

  li.innerHTML = `
    <input type="checkbox" id="checkbox">
    <p>${texto}</p>
    <button id="copiarTarea" class="btn" onclick=copiarTarea(this)></button>
    <button id="compartirTarea" class="btn" onclick=compartirTarea(this)></button>
    <button id="eliminarTarea" class="btn" onclick="eliminarTarea(this)"></button>
  `;

  lista.prepend(li);
}

function eliminarTarea(b){

  b.parentElement.remove();
}

function copiarTarea(b){

  if(navigator.clipboard != undefined){
    navigator.clipboard.writeText(b.parentElement.children[1].innerText)
    .then(
      () => console.log("copiado!")
    )
  
    .catch(err => console.log("error!"));
  }
}

function compartirTarea(b){

  if(!("share" in navigator)){

alert("API WEB SHARE NO COMPATIBLE")
return;
} 

texto = b.parentElement.children[1].innerText;

  navigator.share({ 
    
    title:"Comparto una tarea de mi lista",
    text: texto,
    url:document.URL

    }
    ).then(
      () => console.log("compartido!")
    ) 
    .catch(err => console.log("error: ", error)
    );
  
}