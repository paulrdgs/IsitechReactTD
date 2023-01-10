import './css/App.css';
import { useState } from 'react';


const App = () => {

  let tabnombre  = [1, 2, 9, 4, 5, 8, 7, 8, 9, 10];
  let tabmot  = ['test', 'ane', 'schtroummf', 'apéro', 'javascript'];
  let chaine = "bn,b,;v;sbs:b,ndbccxcv,nb,v,b;s";
  let caractere = ";";
  let tableaudetableau = [1, 2, [4, 8], [78, 65], [[1, 3], 5]];
  const first = 1;
  const seconde = 2;
  const val = {
    text: "coucou",
    value: 4,
    essaie: "oui",
  }


  const findLargestNumber = (tabnombre) => {
    alert(Math.max(...tabnombre));
  }

  const sortWords = (tabmot) => {
    alert(tabmot.sort())
  }

  const countOccurence = (chaine, caractere) => {
    let count = 0;
    for(const string of chaine)
    {
      if(string.includes(caractere))
      {
        count++;
      }
    }
    alert(count);
  }

  const flattenArray = (tableaudetableau) => {
    tableaudetableau.forEach(detab => {
      tableaudetableau.flat();
    })
    alert(tableaudetableau);
  }

  const removeDupes = (tabnombre) => {
    const newtab = new Set(tabnombre);
    console.log(newtab);
  }

  const swapvariables = (first, seconde) => {
    [first, seconde] = [seconde, first];
    alert("x="+first+"y="+seconde);
  }

  const sumArray = (tabnombre) => {
    let accumulator = 0;
    for (const value of tabnombre)
    {
      accumulator += value;
    }
    alert(accumulator);
  }

  const parseObj = (val) => {
    console.log(...Object.values(val));
    // fetch('https://localhost:7064/api/Utilisateur/AllUser')
    // .then((response) => {
    //   return response.json()
    // })
    // .then((result) => {
    //   console.log(result)
    // })
  }
  
  


  return (
    <>
      <p>{tabnombre}</p>
      <button onClick={() => findLargestNumber(tabnombre)}>+ grand nombre</button>

      <br></br>
      <br></br>

      <p>{tabmot}</p>
      <button onClick={() => sortWords(tabmot)}>Mot odre alphabétique</button>

      <br></br>
      <br></br>

      <p>{chaine}</p>
      <button onClick={() => countOccurence(chaine, caractere)}>caractère {caractere} dans chaine</button>
      
      <br></br>
      <br></br>

      <p>{tableaudetableau}</p>
      <button onClick={() => flattenArray(tableaudetableau)}>tableau plat</button>

      <br></br>
      <br></br>

      <p>{tabnombre}</p>
      <button onClick={() => removeDupes(tabnombre)}>virer les doublons</button>

      <br></br>
      <br></br>

      <p>x={first}, y={seconde}</p>
      <button onClick={() => swapvariables(first, seconde)}>inverser les valeurs</button>

      <br></br>
      <br></br>

      <p>{tabnombre}</p>
      <button onClick={() => sumArray(tabnombre)}>ajouter valeur tableau</button>

      <br></br>
      <br></br>

      <p>text:{val.text}, value:{val.value}, essaie:{val.essaie}</p>
      <button onClick={() => parseObj(val)}>recup valeur prop</button>
    </>
  )


}


export default App;