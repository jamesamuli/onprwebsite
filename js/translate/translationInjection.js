languageCheckerSeter();
const upperNavigationMenu = document.querySelector('#upper_navigation_menu')
const bottomNavigationMenu = document.querySelector('#bottom_navigation_menu')
const mainLanguageDisplayer = document.querySelector('.language_changer')
const selectLanguage = document.querySelector('.list_language')



console.log(bottomNavigationMenu)

// console.log(Data.languages[currentLanguage.code])
// console.log(selectLanguage);
// console.log(Data.menu[currentLanguage.code][Object.keys(Data.menu[currentLanguage.code])[1]])


/**
 * List Injection function must have one parametter
 * containing a list [] of queried element
 * for example document.queryselectorAll('li')
 * and will loop through and innner Proper dynamic html list element
 * but the thing wich should not be forgotten is htlm list elements 
 * sould be equal to the list object data from your provider object.
 */
function listInjection(ListToBeInjected){
    ListToBeInjected.querySelectorAll('li').forEach((e, indexofELement) => {
        for (let i = 0; i < Object.keys(Data.menu[currentLanguage.code]).length; i++) {
            let content = Data.menu[currentLanguage.code][Object.keys(Data.menu[currentLanguage.code])[i]]
            if (i == indexofELement) {
                // console.log(content)
                e.lastElementChild.innerHTML = content;
            }
            // else {
            //     console.log(
            //         `
            //             The last element couldn't be mounted ... 
            //             check if the list provide equal 
            //             to Data.menu object element
            //         `
            //     )
            // }
        }
        // console.log(e)
    })
}

listInjection(upperNavigationMenu)

/**
 * injection of the language wich is current on the page
 */
mainLanguageDisplayer.querySelector('img').setAttribute('src', Data.languages[currentLanguage.code].flag)
mainLanguageDisplayer.querySelector('p').innerText = Data.languages[currentLanguage.code][currentLanguage.code]


/**
 * 
 * injection of the the language displayerchanger
 */

Object.values(Data.languages).map((e, i) => {

    console.log(Data.languages[currentLanguage.code].fr)

    selectLanguage.innerHTML += `<div class="singlelist_container" tabindex="0">
    <input 
        type="radio" 
        name= "language" 
        id=${i === 0 ?
            Data.languages[currentLanguage.code].fr
            : Data.languages[currentLanguage.code].en
        }
        value = ${e.code}
        ${e.code === currentLanguage.code ? 'checked' : ''}
    >
    <label 
        for=${i === 0 ?
            Data.languages[currentLanguage.code].fr
            : Data.languages[currentLanguage.code].en
        } 
        class="labelcontainer"
    >
        <img 
            src=${e.flag} 
            alt="flag language" 
            width="25" height="25"
        >
        <p>
        ${i === 0 ?
            Data.languages[currentLanguage.code].fr
            : Data.languages[currentLanguage.code].en
        } 
        </p>
    </label>
</div>`
})

selectLanguage.querySelectorAll('input[type=radio][name="language"]').forEach(input => {
    input.addEventListener('change', (event) => {
        event.stopPropagation();
        event.preventDefault();
        if (input.value === currentLanguage.code) {
            console.log("Can't change the same language ... ")
        } else {
            changeLanguage(input.value)
            document.location.reload(true)
        }
    })
})


