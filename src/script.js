// Show Contact

const showContact = (chevron, card) => {
    const chevronBtn = document.querySelector(chevron);
    const cardEl = document.querySelector(card);

    if (chevron && card) {
        chevronBtn.addEventListener('click', () => {
            chevronBtn.classList.toggle('active');
            cardEl.classList.toggle('active');
        });
    }
}

showContact('[data-card-btn]', '[data-card]');

// Contact form

function oninputFalse() {
    document.getElementsByTagName('textarea')[0].value ? document.querySelector('.btn').classList.add('active') : document.querySelector('.btn').classList.remove('active');
}

document.getElementsByTagName('form')[0].addEventListener('submit', (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const webhookData = {
        content: 'Pesan baru dari website Nedi (dy)',
        embeds: [{
            title: '[Detail Pesan]',
            fields: [{
                name: 'Pesan', value: formData.get('message')
            }]
        }]
    };

    fetch('https://discord.com/api/webhooks/1200445530833170503/vk2OzoRMgAGvWkDKR1gU7Pz41cF_6pDOvOmP_1nQh4l8DqDaAVOE9Rlm6RE9p2kwbGt4', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(webhookData)
    })
    .then(response => {
        if (response.ok) {
            alert('Pesan Berhasil Terkirim');
            form.reset();
        } else {
            alert('Pesan Gagal Terkirim');
        }
    })
    .catch(error => {
        console.error('Oops.. Ada yang salah:', error);
        alert('Terjadi kesalahan');
    });
});
