let product_name = " wireless headphones PRO ";
let cleaned_name = product_name.trim();
let words = cleaned_name.toLowerCase().split();
let capatlized = words.map(word=>word.charAt(0).toUpperCase()+word.slice(1));
let title = capitalizedWords.join(" ");
title = title.replace("Pro", "Pro Edition");
console.log("Cleaned Product Title:", title);
console.log("Title Length:", title.length);