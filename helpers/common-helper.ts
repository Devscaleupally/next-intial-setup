

export const setCookie = (cname : string, cvalue : string, exdays :any ) => {
  if(typeof window !== undefined) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    // let expires = "expires=" + d.toUTCString();
    // ";" + expires +  <======== // add this for expiration
    window.document.cookie = cname + "=" + cvalue + ";path=/";
  }
};
 

export const getCookie = (cname : string) => {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(window.document.cookie);
    const ca = decodedCookie.split(";");
    
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
  return "";
};

 


// For language code 
const languageMapping: Record<string, string> = {
  "English": 'en-US',
  'Spanish - Español': 'es-ES',
  'French - Français': 'fr-FR',
  'German - Deutsch': 'de-DE',
  'Italian - Italiano': 'it-IT',
  'Portuguese - Português': 'pt-PT',
  'Dutch - Nederlands': 'nl-NL',
  'Russian - Русский': 'ru-RU',
  'Chinese (Simplified) - 中文（简体）': 'zh-CN',
  'Chinese (Traditional) - 中文（繁體）': 'zh-TW',
  'Japanese - 日本語': 'ja-JP',
  'Korean - 한국어': 'ko-KR',
  'العربية- Arabic': 'ar-SA',
  'Hindi - हिन्दी': 'hi-IN',
  'Bengali - বাংলা': 'bn-BD',
  'Punjabi - ਪੰਜਾਬੀ': 'pa-IN',
  'Tamil - தமிழ்': 'ta-IN',
  'Telugu - తెలుగు': 'te-IN',
  'Urdu - اردو': 'ur-PK',
  'Turkish - Türkçe': 'tr-TR',
  'Polish - Polski': 'pl-PL',
  'Romanian - Română': 'ro-RO',
  'Swedish - Svenska': 'sv-SE',
  'Norwegian - Norsk': 'no-NO',
  'Danish - Dansk': 'da-DK',
  'Finnish - Suomi': 'fi-FI',
  'Greek - Ελληνικά': 'el-GR',
  'Czech - Čeština': 'cs-CZ',
  'Hungarian - Magyar': 'hu-HU',
  'Thai - ไทย': 'th-TH',
  'Vietnamese - Tiếng Việt': 'vi-VN',
};

export const getLangCode = (name : string) => {
  return languageMapping[name];
}