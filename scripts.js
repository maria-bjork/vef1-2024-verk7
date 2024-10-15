/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = "bcdfghjklmnpqrstvwxz".split("");

/** Íslenskir samhljóðar */
const VOWELS = "aeiouyáéýúíóöæ".split("");

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns {boolean} `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === "string";

// Prófum fallið
console.assert(isString("hi") === true, "isString: skilar `true` fyrir streng");
console.assert(isString(42) === false, "isString: skilar `false` fyrir tölu");
console.assert(isString(null) === false, "isString: skilar `false` fyrir null");

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = " ") {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  if (isString(str)) {
    const words = split(str, " ");
    let longest = "";

    for (let i = 0; i < words.length; i++) {
      wordlength = words[i].length;
      if (wordlength > longest.length) {
        longest = words[i];
      }
    }

    return longest;
  }
  return null;
}
console.assert(
  longest("hæ heimur") === "heimur",
  "longest: skilar lengsta orði í streng"
);

console.assert(longest(false) === null, "longest: ef ekki strengur skila null");

function shortest(str) {
  if (isString(str)) {
    const words = split(str, " ");
    let shortest = "vaðlaheiðavegavinnuverkfærageymsluskúr";

    for (let i = 0; i < words.length; i++) {
      wordlength = words[i].length;
      if (wordlength < shortest.length) {
        shortest = words[i];
      }
    }

    return shortest;
  }
  return null;
}
console.assert(
  shortest("hæ heimur") === "hæ",
  "shortest: skilar stysta orði í streng"
);

console.assert(
  shortest(false) === null,
  "shortest: ef ekki strengur skila null"
);

function reverse(str) {
  if (isString(str)) {
    const split = str.split("");
    const reversed = split.reverse();

    return reversed.join("");
  }
  return null;
}
console.assert(
  reverse("halló") === "óllah",
  "reverse: snýr við einföldum streng"
);

console.assert(reverse(false) === null, "reverse: ef ekki strengur skila null");

function palindrome(str) {
  if (isString(str) && str !== "") {
    const reversed = reverse(str);
    if (str.toLowerCase() === reversed.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  } 
    return false;
}

console.assert(
  palindrome("kajak") === true,
  "palindrome: athugar hvort strenfur sé eins aftur á bak og áfram"
);

console.assert(
  palindrome("epli") === false,
  "palindrome: athugar hvort strenfur sé eins aftur á bak og áfram"
);

function vowels(str) {
  if (isString(str)) {
    let nrvowels = 0;
    const stafir = str.toLowerCase().split("");

    for (let i = 0; i < stafir.length; i++) {
      let stafur = stafir[i];
      if (VOWELS.includes(stafur)) {
        nrvowels += 1;
      }
    }
    return nrvowels;
  }
  return 0;
}
console.assert(
  vowels("halló") === 2,
  "vowels: finnur fjölda sérhljóða í streng"
);
console.assert(
  vowels("") === 0,
  "vowels: ef ekki strengur eða engir sérhljóðar þá skila 0"
);

function consonants(str) {
  if (isString(str)) {
    let nrconsonants = 0;
    const stafir = str.toLowerCase().split("");

    for (let i = 0; i < stafir.length; i++) {
      let stafur = stafir[i];
      if (CONSONANTS.includes(stafur)) {
        nrconsonants += 1;
      }
    }
    return nrconsonants;
  }
  return 0;
}
console.assert(
  consonants("halló") === 3,
  "consonants: finnur fjölda samhljóða í streng"
);
console.assert(
  consonants("") === 0,
  "consonants: ef ekki strengur eða engir samhljóðar þá skila 0"
);

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  alert(
    "Sláðu inn streng með nokkrum orðum til að fá:\n" +
      "- Lengsta orðið\n" +
      "- Stysta orðið\n" +
      "- Strenginn snúið við\n" +
      "- Fjölda sérhljóða í streng\n" +
      "- Fjölda samhljóða í streng\n" +
      "- Hvort strengurinn sé samhverfur"
  );

  let inputString = prompt("Sláðu inn streng með nokkrum orðum");

  const longestWord = longest(inputString);
  const shortestWord = shortest(inputString);
  const reverseString = reverse(inputString);
  const nrOfVowels = vowels(inputString);
  const nrOfConsonants = consonants(inputString);
  const isStringPalindrome = palindrome(inputString);

  alert(
    `Lengsta orðið í strengnum er: ${longestWord}\n` +
      `Stysta orðið í strengnum er: ${shortestWord}\n` +
      `Strengurinn snúinn við er: ${reverseString}\n` +
      `Fjöldi sérhljóða í strengnum er: ${nrOfVowels}\n` +
      `Fjöldi samhljóða í strengnum er: ${nrOfConsonants}\n` +
      `Strengurinn er ${
        isStringPalindrome ? "palindrome" : "er ekki palindrome"
      }`
  );

  const repeat = confirm("Viltu slá inn annan streng?");
  if (repeat) {
    start();
  }
}
