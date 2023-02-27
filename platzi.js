class PlatziReactive {
    constructor (options) {
        this.origin = options.data()
    }

    mount () {
        document.querySelectorAll('*[p-text]').forEach(element => {
            this.pText(element, this.origin, element.getAttribute('p-text'))
        })
    }

    pText (element, target, name) {
        element.innerText = target[name]
    }

    pModel () {}
}

var Platzi = {
    createApp (options) {
        return new PlatziReactive(options)
    }
}