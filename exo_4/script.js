const input = document.createElement('input')
input.id = 'FilterInpunt'
input.placeholder = 'Filtrer les pays...'
input.style.width = '50%'
input.style.borderRadius = '15px'
input.style.padding = '10px'
document.body.prepend(input)

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

function filtrerPays(filtre) {
    ul.replaceChildren()

    const elementsLi = country
      .filter(p => p.toLowerCase().startsWith(filtre.toLowerCase()))
      .reduce((acc, countryNom) => {
        const li = document.createElement('li')
        li.textContent = countryNom
        acc.push(li)
        return acc
      }, [])
    elementsLi.forEach(li => ul.appendChild(li))
  }

  input.addEventListener('input', e => filtrerPays(e.target.value))
