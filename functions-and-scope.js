// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.
const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];


/* Opdracht  1: Cum Laude */

console.log("Cum Laude")
/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie? for loop
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat? length toevoegen
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden? opslaan in een variabele
// Log het antwoord in de terminal.

//1 ik maak een forloop die het cijfer 8 of hoger eruit haalt
//2 ik zorg dat deze een return geeft met cum laude
//3 ik maak een variabele die de cum laude cijfers opslaat en log deze in de terminal

// ---- Verwachte uitkomst: 6

let cumlaudestudent = 0;

for (let i = 0; i <grades.length; i++) {
    if (grades[i] >= 8) {
        cumlaudestudent = cumlaudestudent + 1
    }
}
    console.log(cumlaudestudent);




/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.
function cumLaude (arrayNumbers){
    let cumlaudestudent = 0

    for (let i = 0; i < arrayNumbers.length; i++) {
        if (arrayNumbers[i] >= 8) {
            cumlaudestudent = cumlaudestudent + 1
        }
    }
return cumlaudestudent;
}
const Outcome = cumLaude(grades);
console.log(Outcome);



// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3




/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend? totale score delen door het aantal cijfers
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen? totaal score en aantal indexen
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten? .length gebruiken
// Log het antwoord in de terminal.


// ---- Verwachte uitkomst: 6.642857142857143
let sum = 0;
for (let i = 0; i < grades.length; i++) {
    sum = sum + grades[i]};
console.log(sum/grades.length);



/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.
function averageGrade (arrayOfNumbers) {
    let sum = 0
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        sum = sum + arrayOfNumbers[i]
    } return sum / arrayOfNumbers.length
}

console.log(averageGrade(grades));
console.log(averageGrade([6, 4, 5]));
console.log(averageGrade([8, 9, 4, 6, 10]));


// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

const resultOfAverage=averageGrade(grades)
console.log(resultOfAverage.toFixed(2))

/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.
//let highest = 0;
//for (let i = 0; i <grades.length; i++) {
  //  if (grades[i] > highest) {
    //    highest = grades[i];
      //     }
//}
//console.log(highest);

// ---- Verwachte uitkomst: 9


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.
let highest = 0;
function highestGrade(arrayNMBRS){

    for (let i = 0; i < arrayNMBRS.length; i++)    {
        if (arrayNMBRS[i] > highest){
            highest = arrayNMBRS[i]
        }
    }
    return highest;
}
const outcome5 = highestGrade(grades);
const outcome6 = highestGrade([6, 4, 5]);
const outcome7 = highestGrade([8, 9, 4, 6, 10]);

console.log(outcome5);
console.log(outcome6);
console.log(outcome7);

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
