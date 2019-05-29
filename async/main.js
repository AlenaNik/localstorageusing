// Carga el fichero config.json y busca el dataFilePath
// Carga el fichero ubicado en dataFilePath
// Imprime en la consola los usuarios mayores de 25 cuyo nombre empiece por la letra A (utiliza map, filter o reduce)
// Don't repeat yourself


    fetch('./config.json')
        .then(function(res) {
            return res.json();
        })
        .then(function(myJson) {
            console.log(myJson);
        }).then(function(dataFilePath) {
        console.log(JSON.stringify(dataFilePath));
        }).catch(function(error) {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
        });



// Version async/await

solve()
async function solve() {
    let res = await fetch('config.json')
    let data = await res.json()
    let res2 = await fetch(data.data.dataFilePath);
    let data2 = await res2.json();
    console.log(data2);
}


