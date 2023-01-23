# -LT-33_With_Statement

The `"with"` statement di JavaScript adalah perintah yang digunakan untuk membuat konteks pada suatu objek yang digunakan dalam perintah yang ada dalam blok `"with"`. Ini memungkinkan Anda untuk mengakses properti objek tanpa harus mengetik nama objek tersebut setiap kali. Sintaks dari perintah `"with"` adalah sebagai berikut:

    with (object) {
        // code to be executed
    }

Di mana objek adalah objek yang akan digunakan sebagai konteks dalam blok perintah. Sebagai contoh:

    let person = {
        name: "John",
        age: 30,
        city: "New York"
    };

    with (person) {
        console.log(name);
        console.log(age);
        console.log(city);
    }

Dalam contoh di atas, kita menggunakan perintah `"with"` untuk menentukan objek `"person"` sebagai konteks dalam blok perintah dan mengakses properti dari objek tersebut tanpa harus mengetik nama objek setiap kali.

Perintah `"with"` sangat berguna ketika Anda bekerja dengan objek yang memiliki banyak properti dan Anda ingin mengakses properti tersebut dengan cara yang lebih ringkas. Namun, perintah ini sangat jarang digunakan karena dapat menyebabkan masalah pada performa dan keamanan kode, serta dapat menyebabkan kesalahan yang sulit diidentifikasi. 

Perintah with tidak disarankan digunakan dan di anjurkan untuk tidak digunakan karena bisa menyebabkan masalah yang sulit diidentifikasi dan kesalahan yang sulit untuk di debug. Dapat juga menyebabkan masalah pada performa dan keamanan kode. Pada JavaScript versi terbaru, perintah `"with"` tidak lagi didukung dan sebaiknya digantikan dengan metode lain seperti `"Object.assign()"` atau `"Object destructuring"` untuk mengakses properti dari objek.

Secara keseluruhan, perintah `"with"` dapat digunakan untuk membuat konteks pada suatu objek dan mengakses properti dari objek tersebut dengan cara yang lebih ringkas, namun perintah ini sangat jarang digunakan dan dapat menyebabkan masalah pada performa dan keamanan kode. Sebaiknya menghindari menggunakan perintah ini dan digantikan dengan metode lain yang lebih aman dan efisien.

Selain itu, perintah `"with"` dapat menyebabkan masalah pada scope dari variabel. Karena perintah ini menentukan konteks pada objek, variabel yang dideklarasikan dalam blok "with" mungkin tidak terdefinisi di luar blok "with" atau bahkan dapat menimpa variabel yang sudah dideklarasikan di luar blok `"with"`. Hal ini dapat menyebabkan kesalahan yang sulit diidentifikasi dan menyulitkan proses debugging.

Pada kesimpulannya, perintah `"with"` tidak direkomendasikan untuk digunakan dan harus dihindari dalam pemrograman JavaScript modern. Sebaiknya digunakan metode lain yang lebih aman dan efisien, seperti `"Object.assign()"` atau `"Object destructuring"` untuk mengakses properti dari objek dan menghindari masalah pada scope dan performa kode.
