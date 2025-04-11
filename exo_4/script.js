const input = document.createElement('input')
input.id = 'FilterInput'
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

// Pour chaque pays dans le tableau "country"
country.forEach(countryNom => {
    const li = document.createElement('li'); //Crée un li
    li.textContent = countryNom; //Met le nom du pays en texte
    ul.append(li); //On ajoute li dans ul
});


function filtrerPays(filtre) {
    ul.replaceChildren() //Vide la liste

    //Filtre selon ce que tape l'utilisateur
    const elementsLi = country
      .filter(p => p.toLowerCase().startsWith(filtre.toLowerCase())) 
    //Transforme chaque nom filtré en élément
      .reduce((acc, countryNom) => {
        const li = document.createElement('li') //Crée un li
        li.textContent = countryNom //Met le nom du pays
        acc.push(li) //Ajoute le li au tableau
        return acc
      }, [])  //Départ de tableau vide
    elementsLi.forEach(li => ul.appendChild(li)) //On ajoute tous les li au ul
  }

  input.addEventListener('input', e => { filtrerPays(e.target.value) })
  //Quand l'utilisateur tape, on filtre les pays en direct