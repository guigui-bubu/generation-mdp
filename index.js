const dataLowerCase = "azertyuiopqsdfghjklmwxcvbn";
const dataUpperCase = dataLowerCase.toUpperCase();  // pour les avoir en majuscule
const dataNumbers = "0123456789";
const dataSymbols = "$^*ù!:;,";
const rangeValue = document.getElementById('password-length');
const passwordOutput = document.getElementById('password-output');

function generatePassword(){
    let data =[];
    let password ="";
    // on push dans le tableau data la checxbox checked, en utilisant ... pour avoir un seul tableau
    if ( lowercase.checked) data.push(...dataLowerCase)
    if ( uppercase.checked) data.push(...dataUpperCase)
    if ( numbers.checked) data.push(...dataNumbers)
    if ( symbols.checked) data.push(...dataSymbols)

    // si pas de checkbox selectionnés, message d'alerte
    if(data.length === 0) {
        alert('veuillez sélectionner des critéres');
        return
    }
   
    // on boucle sur la valeur de l'input range  pour générer autant de lettre demandée 
    for (i=0; i<rangeValue.value; i++){
        password += (data[Math.floor(Math.random() * data.length)])

    }

    passwordOutput.value = password;

    //copier le mot de passe pour l'utilisateur
    /*passwordOutput.select();
    document.execCommand('copy');

    generateButton.textContent = "copié"*/

    
}


generateButton.addEventListener('click', generatePassword)