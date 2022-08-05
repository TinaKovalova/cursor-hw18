// (\w{3,}@[a-zA-Z_]{2,}?\.[a-zA-Z]{2,6})/g  email
//((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15})/g password
// ([A-za-z]{3,}) name

export const checkFormDataValid = (text, type) => {
    let regex;
    switch (type) {
        case 'email' : {
            regex=/(\w{3,}@[a-zA-Z_]{2,}?\.[a-zA-Z]{2,6})/g;
            return regex.test(text);
        }
        case 'password' : {
            regex=/((?=.*[a-z])(?=.*[A-Z]).{8,15})/g;
            return regex.test(text);
        }
        case 'text' : {
            regex=/([A-za-z]{3,})/g;
            return regex.test(text);
        }
    }
}
