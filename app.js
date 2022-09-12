document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#imgElement').addEventListener('click', () => {
        document.querySelectorAll('.modal').forEach(node => {
        node.style.display = 'block'
        })
    })


    document.querySelector('.image-modal').addEventListener('click', () => {
        document.querySelectorAll('.modal').forEach(node => {
            node.style.display = 'none'
        })
    })

    document.querySelector('#modal-img').addEventListener('click', e => {
        e.stopPropagation()
    })
})
