import fetch from 'node-fetch';

interface toDo {
    id: number,
    title: string,
    completed: boolean,
}

(async function getPosts() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    try {
        const response = await fetch(url);
        if (response.status >= 400) {
            throw new Error(`Error ${response.status}`);
        }
        const todo = (await response.json()) as toDo;
        const { id, completed, title } = todo;
        printToDo(id, title, completed);
    }
    catch (e) {
        console.log(e.message);
    }
})();

const printToDo = (id: number, title: string, completed: boolean) => {
    console.log(`todo with title: ${title} and id: ${id} is complete ${completed}`)
};