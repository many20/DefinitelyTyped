import * as CBuffer from 'CBuffer';

new CBuffer(10); // empty buffer with size of 10
new CBuffer(1, 2, 3, 4); // buffer with size 4

//CBuffer(5); // For those who are really lazy, new is optional

const myBuff = new CBuffer(4);
myBuff.overflow = data => {
    console.log(data);
};

myBuff.push(1, 2, 3, 4); // nothing shows up yet
myBuff.push(5); // log: 1
