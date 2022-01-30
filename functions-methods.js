// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

function getEmailDomain(email) {
    const getIndexNumber = email.indexOf("@");
    const domain=email.substring(getIndexNumber + 1);
    return domain;
}
const domain1=getEmailDomain("n.eeken@novi-education.nl");
const domain2=getEmailDomain("t.mellink@novi.nl");
const domain3=getEmailDomain("a.wiersma@outlook.com");
console.log(domain1);
console.log(domain2);
console.log(domain3);

/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

function typeOfEmail(email) {
    const getIndexNumber = email.indexOf("@");
    const domain = email.substring(getIndexNumber + 1);

    if (domain === "novi-education.nl") {
        return "Student"
    } else if (domain === "novi.nl") {
        return "Medewerker"
    } else {
    return "Extern"}
}

    const  email1 = typeOfEmail("novi.nlaapjesk@outlook.com");
    console.log(email1);



/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)

function checkEmailValidity (email){
    const containsMonkeyTail= email.includes("@");
    const noComma = email.includes (",");
    const endsWithDot = email.lastIndexOf(".");

    const checkDot = endsWithDot !==email.length -1

    if  (containsMonkeyTail && !noComma && checkDot)   {
        return "true"  }
    else {return "false"}


}
const emailadres1 = checkEmailValidity("n.eeken@novi.nl")
const emailadres2 = checkEmailValidity("tessmellink@novi.nl")
const emailadres3 = checkEmailValidity("n.eekenanovi.nl")
const emailadres4 = checkEmailValidity("n.eeken@novinl.")
const emailadres5 = checkEmailValidity("tessmellink@novi,nl")

console.log(emailadres1)
console.log(emailadres2)
console.log(emailadres3)
console.log(emailadres4)
console.log(emailadres5)

// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in