
const fullscreenIcon = document.getElementById('fullscreenIcon');
const game = document.getElementById('game');
const page_header = document.querySelector('.page_header');
const page_footer = document.querySelector('.page_footer');
fullscreenIcon.addEventListener('click', toggleFullscreen);

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        page_header.style.display = 'none';
        page_footer.style.display = 'none';
        game.style.height = '100vh';
        game.style.position = 'absolute';
        game.style.top = '0';
        game.classList.add('fullscreen');
        document.documentElement.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
    } else {
        game.style.height = 'auto';
        page_header.style.display = 'flex';
        page_footer.style.display = 'flex';
        game.classList.remove('fullscreen');
        document.exitFullscreen();
    }
}