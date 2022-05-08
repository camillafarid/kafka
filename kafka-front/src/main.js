const url = app.route

function getAPI() {

    axios.post(url)
        .then(response => {
            console.log(response)
        })
        .catch(error => console.log(error))
}

getAPI()