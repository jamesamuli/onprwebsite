
const supportedLanguage = {
    en: 'en',
    fr: 'fr'
}
var currentLanguage = {}

function codeToType(LanguageCode) {
    switch (LanguageCode) {
        case 'fr':
            return supportedLanguage.fr;
        case 'en':
            return supportedLanguage.en;
        default:
            return supportedLanguage.fr
    }
}

function TypeToCode(Language) {
    switch (Language) {
        case supportedLanguage.fr:
            return 'fr'
        case supportedLanguage.en:
            return 'en'
        default:
            return 'fr'
    }
}

function onLanguageChangedTranslate(language) {
    switch (language) {
        case supportedLanguage.fr:
            currentLanguage = { code: 'fr' }
            break;
        case supportedLanguage.en:
            currentLanguage = { code: 'en' }
            break;
        default:
            supportedLanguage = { code: 'fr' }
            break;
    }
}

function setLanguageInLocalStorage(language) {
    return localStorage.setItem('crtLgg', language)
}

function getCurrentLanguageInLocalStorage() {
    return localStorage.getItem('crtLgg') ?? 'fr';
}


function loadAppSettings() {
    console.log('configuration loaded ...');
    // console.log(currentLanguage)
    if (localStorage.getItem('crtLgg')) {
        return currentLanguage = {
            code: getCurrentLanguageInLocalStorage()
        }
    } else {
        console.log("no setting was found");
        setLanguageInLocalStorage(TypeToCode(navigator.language.split("-")[0]))
        return currentLanguage = {
            code:getCurrentLanguageInLocalStorage()
        }
    }
}

// checking if the language as been set 

function languageCheckerSeter() {
    if (localStorage.getItem('crtLgg')) {
        currentLanguage = {
            code: getCurrentLanguageInLocalStorage()
        }
        console.log('the language was seted to ', currentLanguage)
    } else {
        loadAppSettings();
        console.log('first time loading language set to', currentLanguage)
    }
}

// end checking

const onLanguageChanged = (language) => {
    setLanguageInLocalStorage(language);
    onLanguageChangedTranslate(language)
    return currentLanguage;
}

function changeLanguage(code) {
    console.log('Language Changed');
    try {
        onLanguageChanged(codeToType(code))
    } catch (e) {
        console.log("Can't change language", e);
    }
}

