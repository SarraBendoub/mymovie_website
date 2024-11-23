// Sélectionne toutes les colonnes contenant les images
const columns = document.querySelectorAll('.column');

// Ajoute l'effet au survol de chaque colonne
columns.forEach(column => {
    column.addEventListener('mouseenter', () => {
        column.style.transform = 'scale(1.1)'; // Agrandit la colonne
    });

    column.addEventListener('mouseleave', () => {
        column.style.transform = 'scale(1)'; // Réinitialise la taille de la colonne
    });
});