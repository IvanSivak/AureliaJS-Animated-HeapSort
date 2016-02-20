import {inject} from 'aurelia-framework';
import * as engine from 'engine';

export class AppHeapSort {    
    
    /**
     * Contructor function
     * Initializes the basic class properties
     */
    constructor(){
        this.title = 'AureliaJS Animated Heap Sort';
        this.buttonTitle = 'Generate';
        this.heapSize = 200;
        this.minValue = 1;
        this.maxValue = 300;
        this.elements = []; 
    }

    generate() {
        // Generate the random int array 
        this.elements = engine.getRandomIntArray(parseInt(this.heapSize), parseInt(this.minValue), parseInt(this.maxValue)).map((v, i, a) => {
            return { val: parseInt(v), index: i, style: `height: ${v}px; left: ${i * 7}px;` }
        });
        this.buttonTitle = 'Re-Generate';
    }
    
    heapSort(){
        if (this.elements.length == 0) return;
        engine.heapSort(this.elements);
        
        // Update the style
        this.elements.forEach((v, i, a) => {
            v.style = `height: ${v.val}px; left: ${v.index * 7}px;`;
        });
    }
}
