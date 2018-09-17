// Type definitions for CBuffer 2.0
// Project: https://github.com/trevnorris/cbuffer
// Definitions by: Mario Adrian <https://github.com/many20>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

export = CBuffer;
export as namespace CBuffer;

//don't found a way to support 'CBuffer(1)' and 'new CBuffer(1)' syntax. So i prefered the new syntax.
//calling class as function:
//https://github.com/Microsoft/TypeScript/issues/2959


// declare function CBuffer<T = any>(size: number): CBufferClass<T>;
// declare function CBuffer<T = any>(...values: T[]): CBufferClass<T>;

// declare namespace CBuffer {
// }

//declare type CBuffer = CBufferClass;

declare class CBuffer/*CBufferClass*/ <T = any> {
    constructor(size: number);
    constructor(...values: T[]);

    /**
     * overflow - Set to function and will be called when data is about to be overwritten.
     */
    overflow: (overwrittenValue: T, buffer: CBuffer/*CBufferClass*/ <T>) => void;

    /* Mutator Methods */

    /**
     * pop - Removes the last element from a circular buffer and returns that element.
     */
    pop(): T;

    /**
     * push - Adds one or more elements to the end of a circular buffer and returns the new length.
     */
    //push(value: T): number;
    push(...values: T[]): number;

    /**
     * shift - Removes the first element from a circular buffer and returns that element.
     */
    shift(): T;

    /**
     * unshift - Adds one or more elements to the front of a circular buffer and returns the new length.
     */
    //unshift(value: T): number;
    unshift(...values: T[]): number;

    /**
     * reverse - Reverses the order of the elements of a circular buffer.
     */
    reverse(): this;

    /**
     * rotateLeft - Rotates all elements left 1, or n, times.
     */
    rotateLeft(cntr?: number): this;

    /**
     * rotateRight - Rotates all elements right 1, or n, times.
     */
    rotateRight(cntr?: number): this;

    /**
     * sort - Sorts the elements of a circular buffer. Unlike native sort, the default comparitor sorts by a > b.
     */
    sort(comparitor?: (a: T, b: T) => number): this;

    /* Accessor Methods */

    /**
     * indexOf - Returns the first (least) index of an element within the circular buffer equal to the specified value, or -1 if none is found.
     */
    indexOf(value: T, startAtIndex?: number): number;

    /**
     * lastIndexOf - Returns the last (greatest) index of an element within the circular buffer equal to the specified value, or -1 if none is found.
     */
    lastIndexOf(value: T, startAtIndex?: number): number;

    /**
     * sortedIndex - Returns the position some value would be inserted into a sorted circular buffer ranked by an optional comparitor.
     */
    sortedIndex(value: T, comparitor?: (a: T, b: T) => number, comparitorContext?: any): number;

    /* Iteration Methods */

    /**
     * every - Returns true if every element in the circular buffer satisfies the provided testing function.
     */
    every(callback: (value: T) => boolean, callbackContext?: any): boolean;

    /**
     * some - Returns true if at least one element in the circular buffer satisfies the provided testing function.
     */
    some(callback: (value: T) => boolean, callbackContext?: any): boolean;

    /**
     * forEach - Calls a function for each element in the circular buffer.
     */
    forEach(callback: (value: T) => void, callbackContext?: any): void;

    /* Calculation Methods */

    /**
     * avg - calculate the average value of a circular buffer
     */
    avg(): number;

    /**
     * sum - loop through each item in buffer and calculate sum
     */
    sum(): number;

    /**
     * median - loop through each item in buffer and calculate median
     */
    median(): number;

    /* Utility Methods */

    /**
     * empty - Equivalent to setting Array.length = 0.
     */
    empty(): this;

    /**
     * fill - Fill with passed argument. Also supports functions.
     */
    fill(arg: T | ValueFunction<T>): this;

    /**
     * first - Returns first value in circular buffer.
     */
    first(): T;

    /**
     * last - Returns last value in circular buffer.
     */
    last(): T;

    /**
     * get - Get value at specific index.
     */
    get(index: number): T;

    /**
     * set - Set value as specific index.
     */
    set(index: number, value: T): T;

    /**
     * toArray - Return clean ordered array of buffer.
     */
    toArray(): T[];

    /**
     * slice - Return a slice of the buffer as an array.
     */
    slice(startIndex: number, endIndex: number): T[];

    /**
     * isFull - is buffer full?
     */
    isFull(): boolean;
}

declare type ValueFunction<T> = () => T;
