document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('parallax-video');
    const overlay = document.getElementById('sound-overlay');

    // La vidéo commence en sourdine
    video.muted = true;
    
    // Force la lecture de la vidéo (auto-play)
    video.play().catch(error => {
        console.log('Erreur lors de la lecture de la vidéo : ', error);
    });

    // Fonction pour activer/désactiver le son et modifier le texte de l'overlay
    overlay.addEventListener('click', () => {
        if (video.muted) {
            video.muted = false; // Désactive le son
            //overlay.textContent = "Cliquez pour couper le son"; // Texte change après activation
        } else {
            video.muted = true; // Active le son
            //overlay.textContent = "Cliquez pour activer le son"; // Texte change après désactivation
        }
    });

    // Vérifier la visibilité des images de chapitre
    const chapterImages = document.querySelectorAll('.chapter-image');

    function checkVisibility() {
        const windowHeight = window.innerHeight;
        const windowTop = window.scrollY;

        chapterImages.forEach(image => {
            const imageTop = image.getBoundingClientRect().top + windowTop;
            if (imageTop < windowTop + windowHeight - 100) {
                image.classList.add('visible');
            }
        });
    }

    // Initialisation pour vérifier si les images sont visibles
    checkVisibility();

    // Ajout de l'écouteur d'événement pour le défilement
    window.addEventListener('scroll', checkVisibility);
});


document.addEventListener('DOMContentLoaded', () => {
    const modalChapter1 = document.getElementById("modalChapter1");
    const modalChapter2 = document.getElementById("modalChapter2");
    const chapter1Image = document.getElementById("chapter1");
    const chapter2Image = document.getElementById("chapter2");
    const closeChapter1 = document.getElementById("closeChapter1");
    const closeChapter2 = document.getElementById("closeChapter2");

    // Ouvrir le modal pour Chapter 1
    chapter1Image.addEventListener('click', () => {
        modalChapter1.style.display = "block";
    });

    // Ouvrir le modal pour Chapter 2
    chapter2Image.addEventListener('click', () => {
        modalChapter2.style.display = "block";
    });

    // Fermer le modal pour Chapter 1
    closeChapter1.addEventListener('click', () => {
        modalChapter1.style.display = "none";
    });

    // Fermer le modal pour Chapter 2
    closeChapter2.addEventListener('click', () => {
        modalChapter2.style.display = "none";
    });

    // Fermer les modals si on clique en dehors du contenu
    window.addEventListener('click', (event) => {
        if (event.target === modalChapter1) {
            modalChapter1.style.display = "none";
        }
        if (event.target === modalChapter2) {
            modalChapter2.style.display = "none";
        }
    });
});

// nouvel fenetre casts1
document.getElementById('casts-link1').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    window.open('../casts1/index.html', '_blank'); // Ouvre la page dans un nouvel onglet
});

// nouvel fenetre casts2
document.getElementById('casts-link2').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    window.open('../casts2/index.html', '_blank'); // Ouvre la page dans un nouvel onglet
});
// nouvel fenetre awards1
document.getElementById('awards-link1').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    window.open('../awards1/index.html', '_blank'); // Ouvre la page dans un nouvel onglet
});
// nouvel fenetre writers
document.getElementById('writers-link1').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    window.open('../writers/index.html', '_blank'); // Ouvre la page dans un nouvel onglet
});

document.getElementById('writers-link2').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    window.open('../writers/index.html', '_blank'); // Ouvre la page dans un nouvel onglet
});
document.getElementById('critics-link1').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    window.open('../wcritics1/index.html', '_blank'); // Ouvre la page dans un nouvel onglet
});
// nouvel fenetre info1
document.getElementById('info-link1').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    window.open('../info1/index.html', '_blank'); // Ouvre la page dans un nouvel onglet
});
// nouvel fenetre info2
document.getElementById('info-link2').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    window.open('../info2/index.html', '_blank'); // Ouvre la page dans un nouvel onglet
});
// nouvel fenetre awards2
document.getElementById('awards-link2').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    window.open('../awards2/index.html', '_blank'); // Ouvre la page dans un nouvel onglet
});
// nouvel fenetre crtics2

document.getElementById('critics-link2').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    window.open('../critics2/index.html', '_blank'); // Ouvre la page dans un nouvel onglet
});

const dropdown = document.querySelector('.dropdown');
const dropdownList = document.querySelector('.dropdown-list');

// Afficher/Masquer au survol
dropdown.addEventListener('mouseover', () => {
    dropdownList.style.display = 'block';
});

dropdown.addEventListener('mouseleave', () => {
    dropdownList.style.display = 'none';
});

