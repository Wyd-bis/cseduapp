
let isHost = false;

function login() {
    const code = document.getElementById('hostcode').value;
    isHost = code === 'Joy_manna';

    document.getElementById('login-container').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
}

function openPanel(type) {
    document.getElementById(`${type}-panel`).classList.remove('hidden');
}

function closePopup() {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => popup.classList.add('hidden'));
}

function storeFile(event, type) {
    if (!isHost) return alert('Only host can upload files.');
    const file = event.target.files[0];
    const list = document.getElementById(`${type}List`);
    const item = document.createElement('p');
    item.textContent = file.name;
    list.appendChild(item);
}
