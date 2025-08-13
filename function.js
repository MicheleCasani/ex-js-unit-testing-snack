getInitials = (fullName) => {
    const char = fullName.split(' ')
    return char[0][0] + char[1][0]
}

const createSlug = (string) => {
    return string.toLowerCase()
}

const average = (numeri) => {
    return numeri.reduce((acc, number) => acc + number, 0) / numeri.length;
}

const createSlug2 = (string) => {
    return string.toLowerCase().split(' ').join('-');
}

const isPalindrome = (string) => {
    const reversedString = string.split('').reverse().join('');
    return string === reversedString;

}

const createSlug3 = (title) => {
    if (title === null || title === undefined || title === (''))
        throw new Error("Titolo non valido");
}

module.exports = {
    getInitials,
    createSlug,
    average,
    createSlug2,
    isPalindrome,
    createSlug3
};
