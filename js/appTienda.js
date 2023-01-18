class Tienda {
    a;
    modificaValor(a){
        this.a=a;
        modifica(a);
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
        console.log("hola");
    }
}

let base = localStorage.getItem('base');
console.log(base);



