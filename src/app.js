import {inject} from 'aurelia-framework';
import * as engine from 'engine';

export class AppHeapSort {    
    
    constructor(){
        this.title = 'AureliaJS Animated Heap Sort';
        this.heapSize = 200;
        this.minValue = 1;
        this.maxValue = 300;
        this.elements = []; 
    }

    generate() {
        this.elements = engine.getRandomIntArray(this.heapSize, this.minValue, this.maxValue).map((v, i, a) => {
            return { val: v, index: i }
        })
    }
}
