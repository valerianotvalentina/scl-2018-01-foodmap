window.onload = timeout;

function timeout() {
    window.setTimeout("redirect()", 5000)
}

function redirect() {
    window.location = "index.html"
    return
}