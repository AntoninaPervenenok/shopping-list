/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */

const sendInput = document.querySelector('#input');
const itemsList = document.querySelector('#items');

    if (event.key == 'Enter') {
        const messageText = sendInput.value;
        sendInput.value = '';
        newMessage.addEventListener('click', function() {
            newMessage.classList.toggle('done');
        })
    };
});