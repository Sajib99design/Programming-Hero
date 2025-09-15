const addStore = () => {
    
    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;


    const data = { id, name };
    const textData = JSON.stringify(data);
    // console.log(textData);
    localStorage.setItem(id, textData);



    const test = document.getElementById('test');
    test.addEventListener('click', function () {
        let data2 = localStorage.getItem(id);
        console.log(JSON.parse(data2));
    });

    const clear = document.getElementById('clear');
    clear.addEventListener('click', function () {
        let clearAll = localStorage.clear();
        console.log(clearAll);
    });

};
