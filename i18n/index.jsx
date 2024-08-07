import i18n from "i18next";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            "welcome": "This message is now in English"
        }
    },
    uz: {
        translation: {
            "welcome": "Hozir bu xabar O'zbek tilida"
        }
    },
    ru: {
        translation: {
            "welcome": "Это сообщение теперь на Pусском языке"
        }
    }
};

i18n
    .use({
        type: 'languageDetector',
        async: true,
        detect: async (cb) => {
            const language = (await AsyncStorage.getItem('language')) || 'uz';
            cb(language)
        }
    })

    .use(initReactI18next)
    .init({
        resources,
        // lng: 'uz',

        compatibilityJSON: 'v3',
        fallbackLng: 'uz',
        react: {
            useSuspense: false,
        },
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;