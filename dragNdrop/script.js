function allowDrop(event) {
    event.preventDefault();

}


function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}



function drop(event) {

    event.preventDefault();

    let data = event.dataTransfer.getData("text");

    if (data + "dropbox" == event.target.id) {
        event.target.appendChild(document.getElementById(data));
    }

}

