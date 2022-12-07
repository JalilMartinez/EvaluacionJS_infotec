class AdministradorArticulos{
    codigo = 0;
    descripcion = '';
    precio = 0;

   obtenerCodigo(){
    let inputValue = document.getElementById("codigo").value; 
    this.codigo=inputValue;
   }
   obtenerDescripcion(){
    let inputValue = document.getElementById("descripcion").value; 
    this.descripcion=inputValue;
   }
   obtenerPrecio(){
    let inputValue = document.getElementById("precio").value; 
    this.precio=inputValue;
   }

   añadeElementosTabla(base){
    let tabla = document.getElementById("tabla");
    let contenido = '<table border = \'1\' > ';
    for (let i = 0; i < base.length; i++) {
        let a = base[i];
        if(base[i]!=undefined){
            if(i==0){
                contenido += '<tr> <td>'+a.codigo+'</td> <td>'+a.descripcion+'</td> <td>'+a.precio+'</td>';   
                contenido += '<td> Borrrar </td>';  
                contenido += '<td>Seleccionar</td>  </tr>';
            }else{
                
                    contenido += '<tr> <td>'+a.codigo+'</td> <td>'+a.descripcion+'</td> <td>'+a.precio+'</td>';   
                    contenido += '<td> <button type="button" class="botonElimina" id="'+ i +'" onclick="borrarValores(this.id)">Borrar?</button> </td>';  
                    contenido += '</td> <td> <button type="button" id="'+ i +'" onclick="seleccionaValores(this.id)">SELECCIONAR</button> </td>  </tr>';
                }
        }
        
       
    }
    contenido+='</table>';
    tabla.innerHTML=contenido;
    this.actualizaTienda(base);
   }

   seleccionaValores(valores){
    let cod = document.getElementById('codigo');
    let des = document.getElementById('descripcion');
    let pre = document.getElementById('precio');
    cod.value=valores.codigo;
    des.value=valores.descripcion;
    pre.value=valores.precio;
   }
   actualizaTienda(base){
    let tabla = document.getElementById("productos");
    let contenido = '';
    for (let i = 1; i < base.length; i++) {
        let a = base[i];
        if(base[i]!=undefined){
                contenido += '<div class="producto"> <a href="producto.html">';
                contenido += '<img class="producto__imagen" src="imagenes/1.jpg" alt="imagen '+ a.descripcion+'">';   
                contenido += '<div class="producto__informacion">';  
                contenido += '<p class="producto__nombre">'+a.descripcion+'</p> <p class="producto__precio"> $'+a.precio+'</p></div></a></div></div><!--.PRODUCTO--> ';
    
        }
        
       
    }
    contenido+='<div class="grafico grafico--camisas"></div><div class="grafico grafico--node"></div>';
    tabla.innerHTML=contenido;

   }

}

// AQUI INICIA EL MAIN

let obtener = new AdministradorArticulos();
let base=[
    {
        codigo : 'Codigo',
        descripcion : 'Descripcion',
        precio : 'Precio',

    }];

const designarValores = () =>{//funciona cuando se oprime boton agregar

    //obtener valores de input
    obtener.obtenerCodigo();
    obtener.obtenerDescripcion();
    obtener.obtenerPrecio();
    
    //se hace un array con los valores obtenidos
    let datos={
        codigo: obtener.codigo,
        descripcion : obtener.descripcion,
        precio : obtener.precio
    };
    
    if(datos.codigo==0){
        alert('Debe de ingresar un codigo de articulo distinto a cero')
    }else{
        let pase=false;
        for (let i = 0; i < base.length; i++) {
            if(base[i]!=undefined){
                if(datos.codigo == base[i].codigo){
                    pase = true;
                }
            }
        }
        if (pase==false) {
            base.push(datos);//se agregan valores obtenidos a un array de objetos
        
            obtener.añadeElementosTabla(base);//se agregan valores a la tabla
        }else{
            alert('Ya existe un articulo con dicho codigo')
        }
    }
    
    
}
const modificarValores = () =>{//funciona cuando se oprime boton modificar


    
    //obtener valores de input
    obtener.obtenerCodigo();
    obtener.obtenerDescripcion();
    obtener.obtenerPrecio();
    
    //se hace un array con los valores obtenidos
    let datos={
        codigo: obtener.codigo,
        descripcion : obtener.descripcion,
        precio : obtener.precio
    };
    
    let pase=true;
    for (let i = 0; i < base.length; i++) {
        if(base[i]!=undefined){
            if(datos.codigo == base[i].codigo){
                base[i].descripcion=datos.descripcion;
                base[i].precio=datos.precio;
                obtener.añadeElementosTabla(base);//se actualiza la tabla 
                pase=false;
            }else if(datos.descripcion == base[i].descripcion){
                base[i].codigo=datos.codigo;
                base[i].precio=datos.precio;
                obtener.añadeElementosTabla(base);//se actualiza la tabla 
                pase=false;
            }
        }
    }
    if(pase==true){
        alert('No hay elemento que modificar');
    }
    
    
    
    
}



function borrarValores(id) {//funciona cuando se oprime boton borrar
    let op = confirm("Presiona aceptar para confirmar eliminacion");
    if(op==true){
        delete base[id];//se eliminan los datos del array de objetos
    
        obtener.añadeElementosTabla(base);//se actualiza la tabla
    }
    
}

function seleccionaValores(id) {//funciona cuando se oprime boton seleccionar
    let a = base[id];//se obtienen los datos de la posicion de acuerdo al boton precionado
    obtener.seleccionaValores(a);//se envian los datos a los input
}
