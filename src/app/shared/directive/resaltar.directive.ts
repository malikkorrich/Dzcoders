import { Directive,ElementRef,HostListener,Input, OnInit, Renderer2 } from '@angular/core';

/* Los directivas tinen acceso al metodo onInit() implementando la interface onInit
@HostListener para escuchar y reaccionar a eventos del DOM
@Input se usa para recibir datos en un componente
ElementRef para obtener el elemento DOM en Angular
Renderer2 proporciona una API para acceder de forma segura a elementos nativos

*/


@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective implements OnInit {

  /*Instancias */
  constructor(private el:ElementRef , private render:Renderer2) { }


  ngOnInit(): void {
    console.log('NgOnInit Method not implemented.');
    
  }

  /*Envio de datos */
  @Input() colorBase:string ='';


  /*Set es una funcion que se invoca cada vez que haya cambio en la variable value */
  @Input('appResaltar') set reslatarColor (value:string) {
    this.render.setStyle(this.el.nativeElement,'background',value);
  }
  
  /*Eventos */
    /*[1] Modificando el dom usando Elementref*/
  @HostListener('mouseenter') onMouseEnter() {
    this.resaltar(this.colorBase || this.reslatarColor || 'red')
  }

  /*[2] Modificando el dom usando Renderer2*/
  @HostListener('mouseleave') onMouseLeave() {
    this.render.setStyle(this.el.nativeElement,'background','')
  }



  /*Metodo se invoca cuando occura el evento */
  private resaltar(color:string):void {
    this.el.nativeElement.style.background= color;
  }


}
