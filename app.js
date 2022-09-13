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

    document.addEventListener('keydown', event => {
        if (event.ctrlKey && event.code === 'ArrowRight') {
            document.querySelector('#next-btn').click()
        } else if (event.ctrlKey && event.code === 'ArrowLeft') {
            document.querySelector('#prev-btn').click()
        }
    })

})
