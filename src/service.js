// (\w{3,}@[a-zA-Z_]{2,}?\.[a-zA-Z]{2,6})/g  email
//((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15})/g password
// ([A-za-z]{3,}) name

export const checkFormDataValid = (text, type) => {
    let emailRegex;
    switch (type) {
        case 'email' : {
            emailRegex=/(\w{3,}@[a-zA-Z_]{2,}?\.[a-zA-Z]{2,6})/g;
            return emailRegex.test(text);
        }
        case 'password' : {
            emailRegex=/((?=.*[a-z])(?=.*[A-Z]).{8,15})/g;
            return emailRegex.test(text);
        }
        case 'name' : {
            emailRegex=/([A-za-z]{3,})/;
            return emailRegex.test(text);
        }
    }
}
