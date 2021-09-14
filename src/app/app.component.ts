    import { Component } from '@angular/core';
    import { MbscTimerOptions } from '../lib/mobiscroll/js/mobiscroll.angular.min.js';

    let lapsNr = 1;

    function format(ms) {

        return ms;
    }

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html'
    })
    export class AppComponent {
        timer: number;


        showCoords(event) {
          var x = event.pageX;
          var y = event.pageY;
          var coords = "X coords: " + x + ", Y coords: " + y;
          document.getElementById("demo").innerHTML = coords;
        }

        timerSettings: MbscTimerOptions = {

            lang: 'es',  // Specify language like: lang: 'pl' or omit setting to use default
            theme: 'ios',              // Specify theme like: theme: 'ios' or omit setting to use default
            themeVariant: 'dark',         // More info about themeVariant: https://docs.mobiscroll.com/4-10-9/angular/timer#opt-themeVariant
            display: 'inline',         // Specify display mode like: display: 'bottom' or omit setting to use default
            step: 0.001,                // More info about step: https://docs.mobiscroll.com/4-10-9/angular/timer#opt-step
            rows: 3,                   // More info about rows: https://docs.mobiscroll.com/4-10-9/angular/timer#opt-rows
            mode: 'stopwatch',     // More info about mode: https://docs.mobiscroll.com/4-10-9/angular/timer#opt-mode
            buttons: [],
            onStart: (event, inst) => {
                var W: string[];
                W = ['100', '300', '250', '300', '150', '200', '300', '100'];
                var A: string[];
                A = ['200', '100', '50', '300', '500', '600', '300', '200'];
                const button = document.getElementById('stop');
                button.style.width = W[lapsNr-1] + 'px;';
                const space = document.getElementById('space');
                space.style.width = A[lapsNr-1] + 'px;';
            },
            onReset: (event, inst) => {
                if(lapsNr > 8){
                  inst.hide();
                  const button = document.getElementById('stop');
                  button.style.display = 'none;';
                  const start = document.getElementById('start');
                  start.style.display = 'none;';
                }
            },
            onLap: (event, inst) => {  // More info about onLap: https://docs.mobiscroll.com/4-10-9/angular/timer#event-onLap
                const cont = document.getElementById('laps');
                const coords = document.getElementById('demo');
                const temp = document.createElement('tr');
                coords.click();

                temp.innerHTML = '<td>#' + lapsNr + '</td><td> - ' + format(event.lap) + ' - </td><td>' + coords.innerHTML + '</td>';
                cont.appendChild(temp);

                lapsNr++;
                inst.stop();
                inst.reset();
            }
        };


    }
