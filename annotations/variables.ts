'use strict';
{
    let name: string = "Hello TS";
    let home = "abcde";
    home = "abc";
    console.log(home);
    let arr: number[] = [1, 2, 3, 4, 5];
    console.log(arr);

    class Car {

    }
    let car: Car = new Car();

    let point: { x: number; y: number } = {
        x: 10,
        y: 23,
    }
    function getName(id: number): string {
        return "India";
    }
    const getAge: (id: number) => number = (id) => {
        return 23;
    }
}

