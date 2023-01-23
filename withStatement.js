// contoh with statement yang ambigu
const people = {
    depan: "Indra",
    tengah: "Kevin",
    belakang: "Filo",
}
const depan = "Qarib";
const belakang = "Shakil";
with (people) {
    console.info(depan); // niatnya nama nya yaitu : Qarib tetapi malah namanya : Indra
    console.info(tengah);
    console.info(belakang); // niatnya nama nya yaitu : Shakil teteapi malah namanya : Filo
}