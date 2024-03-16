window.addEventListener('load', async function (event) {
    const response = await fetch('http://127.0.0.1:8080/tasks/all');
    const body= (await response.json());
    this.document.getElementById('container').innerHTML = '';
    for (const index in body) {
        const current = body[index];
        this.document.getElementById('container').insertAdjacentHTML('afterBegin',
        `<div class="card song-container my-auto" style="width: 18rem;"><div class="card-body"><h4 class="card-title">${current.name}</h4><p class="card-text"> Length: ${current.length} <br> Completed: ${current.completed}<br> Done?: ${current.done}</div></div> <br><br>`
        );
        };
});
