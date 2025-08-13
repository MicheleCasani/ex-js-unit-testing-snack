const { getInitials, createSlug, average, createSlug2, isPalindrome, createSlug3, findPostById } = require('./function');


// 🏆 Snack 1
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."


test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials('Michele Casani')).toBe('MC');
})

// 🏆 Snack 2
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug restituisce una stringa in lowercase."


test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug("Questo è un test")).toBe("questo è un test");
})

// 🏆 Snack 3
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione average calcola la media aritmetica di un array di numeri."

test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    expect(average(1, 2, 3, 4, 5)).toBe(3);
})

// 🏆 Snack 4
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug sostituisce gli spazi con -."

test("La funzione createSlug2 sostituisce gli spazi con -.", () => {
    expect(createSlug2("Questo e un test")).toBe("questo-e-un-test");
})


// 🏆 Snack 5
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione isPalindrome verifica se una stringa è un palindromo."

test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    expect(isPalindrome("anna")).toBe(true);
    expect(isPalindrome("michele")).toBe(false);
})


// 🏆 Snack 6
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug lancia un errore se il titolo è vuoto o non valido."

test("La funzione createSlug3 lancia un errore se il titolo è vuoto o non valido.", () => {
    expect(() => createSlug3()).toThrow("Titolo non valido");
})

// 🏆 Snack 7
// Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug.
// Creare un test che verifichi le seguenti descrizioni:
// 👉 "La funzione findPostById restituisce il post corretto dato l’array di post e l’id"
// Creare uno o più test aggiuntivi che controllino che la struttura dati passati sia conforme (ogni post ha le proprietà id, title e slug, viene passato un id numerico).

const posts = [
    { id: 1, title: "Post 1", slug: "post-1" },
    { id: 2, title: "Post 2", slug: "post-2" },
    { id: 3, title: "Post 3", slug: "post-3" }
];

test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
    expect(findPostById(posts, 1)).toEqual({ id: 1, title: "Post 1", slug: "post-1" });
})