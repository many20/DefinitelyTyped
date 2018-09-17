// Type definitions for debounce 1.2
// Project: https://github.com/component/debounce
// Definitions by: Denis Sokolov <https://github.com/denis-sokolov>, Mario Adrian <https://github.com/many20>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function debounce<A extends Function>(fn: A, wait?: number, immediate?: boolean): A & { clear(): void; flush(): void; };
export = debounce;
