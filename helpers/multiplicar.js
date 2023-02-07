const colors = require('colors');
const fs = require("fs");

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
  
      let salida  = "";
      let consola = "";
  
      for (let i = 1; i <= hasta; i++) {
        salida  += `${base} x ${i} = ${base * i}\n`;
        consola += `${base} ${'x'.blue } ${i} ${'='.blue } ${base * i}\n`;

      }

      if(listar){
        console.log("======================".blue);
        console.log(`  Tabla del: ${base}  `.blue);
  //    console.log('    Tabla del:',   base.blue );
        console.log("======================".blue);

        console.log(consola);
      }
  
      fs.writeFileSync(`./salida/tabla del ${base}.txt`, salida);
  
      return `tabla del ${base}.txt creada`;

  } catch (err) {
      throw err;
  }

};


// const crearArchivo = (base = 5) => {

//   return new Promise((resolve, reject) => {

//     console.log("======================".blue);
//     console.log(`  Tabla del: ${base}  `.blue);
//     console.log('   Tabla del:',   base .blue);
//     console.log("======================".blue);

//     let salida = "";

//     for (let i = 1; i <= 10; i++) {
//       salida += `${base} x ${i} = ${base * i}\n`;
//     }
//     console.log(salida);

//     fs.writeFileSync(`tabla del ${base}.txt`, salida);

//     resolve(`tabla del ${base}.txt creada`);
//   });
// };

module.exports = {
  crearArchivo,
};
