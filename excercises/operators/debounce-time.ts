import { distinctUntilChanged, fromEvent, pluck } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');

// Ejemplo 1
// deboundeTime: Retrasa la emición de un evento por los n segundos especificados
//click$.pipe(debounceTime(3000)).subscribe(console.log);

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');

/*
  deboundeTime: Retrasa la emición de un evento
  pluck: busca el atributo especificado dentro de la estructura de un objeto
  distincUntilChanged: solo emite un evento si es diferente al inmediatamente anterior
*/

input$
  .pipe(debounceTime(1000), pluck('target', 'value'), distinctUntilChanged())
  .subscribe(console.log);
