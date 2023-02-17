window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApi = '';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi).then(response => {
        return Response.json()
    }).then(Response =>{
        console. log("Website called function API");
        count = response.count;
        document.getElementById("counter").innerText = count;
    });
}