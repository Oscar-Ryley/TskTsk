window.addEventListener('load', async function (event) {
    const response = await fetch('http://127.0.0.1:8080/tasks/all');
    const body= (await response.json());
    this.document.getElementById('container').innerHTML = '';
    for (const index in body) {
        const current = body[index];
        if (current.done == true){
            this.document.getElementById('container').insertAdjacentHTML('afterBegin',
            `            <div id="task-card" class="card border-light" >
            <div class="card-body">
                <div class="row">
                    <div class="col">
                        <h5 class="card-title">`+ current.name +`</h5>
                    </div>
                    <div class="col">
                        <p class="card-text" style="display: inline">Completed <input style="width:2rem" value="`+ current.completed +`"></input> out of `+ current.length +` total hours</p>
                    </div>
                    <div class="col-md-2">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                            <label class="form-check-label" for="flexCheckChecked">
                            Done?
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div><br>`
            );
        } else {
            this.document.getElementById('container').insertAdjacentHTML('afterBegin',
            `            <div id="task-card" class="card border-light" >
            <div class="card-body">
                <div class="row">
                    <div class="col">
                        <h5 class="card-title">`+ current.name +`</h5>
                    </div>
                    <div class="col">
                        <p class="card-text" style="display: inline">Completed <input style="width:2rem" value="`+ current.completed +`"></input> out of `+ current.length +` total hours</p>
                    </div>
                    <div class="col-md-2">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                            <label class="form-check-label" for="flexCheckChecked">
                            Done?
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div><br>`
            );
        };
    };
});
