onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

function showProposal() {
            document.querySelector('.flower').style.display = 'none';
            document.querySelector('.next-btn').style.display = 'none';
            document.getElementById('proposal-page').style.display = 'block';
        }

const noBtn = document.getElementById('noBtn');
        noBtn.addEventListener('mouseover', () => {
            const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
            const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
            noBtn.style.position = 'fixed';
            noBtn.style.left = x + 'px';
            noBtn.style.top = y + 'px';
        });

function createHearts() {
            for (let i = 0; i < 50; i++) {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                heart.innerHTML = '❤';
                heart.style.left = Math.random() * window.innerWidth + 'px';
                heart.style.bottom = '0';
                document.body.appendChild(heart);
                
                heart.addEventListener('animationend', () => {
                    heart.remove();
                });
            }
        }
