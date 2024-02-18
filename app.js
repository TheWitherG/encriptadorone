/* Variables*/
let outputTexto = "";
let inputTexto = "";
let auxiliar = "";
let cajaSalida = document.querySelector('.outputbox');
let bloqueSalida = document.querySelector('.sinMensaje');
let botonCopia = document.querySelector('.botonCopiar');

/*Funciones*/
function capturaTexto(){   
    inputTexto = document.querySelector('.inputbox').value;
}
function mostrarTexto(){
    outputTexto=auxiliar;
    auxiliar=''; 
    bloqueSalida.style.display = 'none';
    cajaSalida.value = outputTexto;
    cajaSalida.style.pointerEvents = 'all';
    botonCopia.style.visibility = 'visible';
    document.querySelector('.inputbox').value='';
}
function copiar(){ 
    let aux=document.createElement('input');
    aux.setAttribute("value",document.querySelector('.outputbox').value);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand('copy');
    document.body.removeChild(aux);   
}
function encriptarTexto(){
    capturaTexto();    
    for (let index = 0; index < inputTexto.length; index++) {
        switch (inputTexto[index]) {
            case 'a':
                auxiliar += 'ai';
                break;

            case 'e':
                auxiliar += 'enter';
                break;
            
            case 'i':
                auxiliar += 'imes';
                break

            case 'o':
                auxiliar += 'ober';
                break;

            case 'u':
                auxiliar += 'ufat';
                break;

            default:
                auxiliar += inputTexto[index];
                break;
        }        
    }
    mostrarTexto();
}

function desencriptarTexto(){
    capturaTexto();    
    for (let index = 0; index < inputTexto.length; index++) {
        switch (inputTexto[index]) {
            case 'a':
                auxiliar += 'a';
                index += 1
                break;

            case 'e':
                auxiliar += 'e';
                index += 4
                break;
            
            case 'i':
                auxiliar += 'i';
                index += 3
                break

            case 'o':
                auxiliar += 'o';
                index += 3
                break;

            case 'u':
                auxiliar += 'u';
                index += 3
                break;

            default:
                auxiliar += inputTexto[index];
                break;
        }        
    }
    mostrarTexto();    
}
