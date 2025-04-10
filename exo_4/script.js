
const country = [
    "États-Unis", "Canada", "Royaume-Uni", "France", "Allemagne", "Italie", 
    "Espagne", "Australie", "Brésil", "Mexique", "Chine", "Japon", 
    "Inde", "Russie", "Afrique du Sud", "Égypte", "Argentine", "Corée du Sud", 
    "Suède", "Norvège", "Grèce", "Turquie", "Nouvelle-Zélande", "Indonésie", 
    "Belgique", "Suisse", "Portugal", "Pays-Bas", "Pologne", "Inde"
];

const ul = document.getElementById('country-list');

country.forEach(countryNom => {
    const li = document.createElement('li');
    li.textContent = countryNom; 
    ul.append(li); 
});
