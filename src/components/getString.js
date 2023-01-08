const fastRead = () => {
    const text = document.getElementById('textArea').value
    const read = document.getElementById('shownText')

    const textToRead = text.split(' ').join()
    read.innerText = textToRead
}

export default fastRead