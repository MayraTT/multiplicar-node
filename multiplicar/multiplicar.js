const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`Alguno de los valores introducidos no es un número`)
            return;
        }

        console.log('========================='.green);
        console.log(`===== Tabla del ${base} =====`);
        console.log('========================='.green);

        for (let i = 0; i <= limite; i++) {
            console.log(` ${base} x ${i} = ${base * i} `);
        }
    });
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`Alguno de los valores introducidos no es un número`)
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += ` ${base} x ${i} = ${i * base}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`.green);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
}