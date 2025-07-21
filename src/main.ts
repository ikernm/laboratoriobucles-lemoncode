import "./style.css";

type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

// Laboratorio Módulo 8.1 - Array Methods

// Apartado 1
/*
const especialidadPediatra: Especialidad = "Pediatra";

const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => {
  const resultadoA: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === especialidadPediatra) {
      resultadoA.push(pacientes[i]);
    }
  }
  return resultadoA;
};

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]) => {
  const resultadoB: Pacientes[] = [];
  for (let i=0; i<pacientes.length; i++) {
    if (pacientes[i].especialidad === especialidadPediatra && pacientes[i].edad < 10){
      resultadoB.push(pacientes[i]);
    }
};
return resultadoB;
}

console.log(obtenPacientesAsignadosAPediatria(pacientes));
console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

// Apartado 2

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {

  let activarProctolo = false;

  for (let i = 0; i < pacientes.length; i++) {

    if (pacientes[i].temperatura > 39 && pacientes[i].frecuenciaCardiaca > 100) {

      console.log(`El paciente ${pacientes[i].nombre} ${pacientes[i].apellidos} debe activar el protocolo de urgencia.`);
      activarProctolo = true;
      return activarProctolo;
    }
  }
  return activarProctolo;
};

console.log(activarProtocoloUrgencia(pacientes));

// Apartado 3

const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {
    const pacientesReasignados: Pacientes[] = [];
    
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad !== "Medico de familia") {
        const pacienteReasignado: Pacientes = {
            ...pacientes[i],
            especialidad: "Medico de familia",
        };
        pacientesReasignados.push(pacienteReasignado);
        }  
    }
    return pacientesReasignados;  
    
};

console.log(reasignaPacientesAMedicoFamilia(pacientes));

// Apartado 4

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let citasConPediatras = false;

    for (let i = 0; i < pacientes.length; i++) {

        if (pacientes[i].especialidad === "Pediatra") {
            citasConPediatras = true;
            return citasConPediatras;
        }
    }
    return citasConPediatras;
};

console.log(HayPacientesDePediatria(pacientes));

// Apartado 5

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {
  
    const resultado: NumeroPacientesPorEspecialidad = {
        medicoDeFamilia: 0,
        pediatria: 0,
        cardiologia: 0,
    };
    
    for (let i = 0; i < pacientes.length; i++) {
        switch (pacientes[i].especialidad) {
        case "Medico de familia":
            resultado.medicoDeFamilia++;
            break;
        case "Pediatra":
            resultado.pediatria++;
            break;
        case "Cardiólogo":
            resultado.cardiologia++;
            break;
        }
    }
    
    return resultado;

};

console.log(cuentaPacientesPorEspecialidad(pacientes));

// Laboratorio Módulo 8.2 - Array Methods

// Apartado 1

const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => {
  return pacientes.filter(paciente => paciente.especialidad === "Pediatra");
};

console.log(obtenPacientesAsignadosAPediatria(pacientes));

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => {
  //return pacientes.filter(pacientes => pacientes.especialidad === "Pediatra" && pacientes.edad < 10);
  return pacientes.reduce<Pacientes[]>((acumulador, paciente) => {
    if (paciente.especialidad === "Pediatra" && paciente.edad < 10) {
      acumulador.push(paciente);  
    }
    return acumulador;
  }, []);
}

console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));
*/
// Apartado 2

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  return pacientes.some(paciente => paciente.temperatura > 39 && paciente.frecuenciaCardiaca > 100);
}

console.log(activarProtocoloUrgencia(pacientes));

// Apartado 3
/*
const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {
  return pacientes.map((paciente) => {
    if (paciente.especialidad === "Pediatra") {
      return { 
        ...paciente, 
        especialidad: "Medico de familia" 
      };
    }
    return paciente;
  });
}

console.log(reasignaPacientesAMedicoFamilia(pacientes));

// Apartado 4

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  return pacientes.some(paciente => paciente.especialidad === "Pediatra");
};

console.log(HayPacientesDePediatria(pacientes));

// Apartado 5

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {
  return {
    medicoDeFamilia: pacientes.filter(paciente => paciente.especialidad === "Medico de familia").length,
    pediatria: pacientes.filter(paciente => paciente.especialidad === "Pediatra").length,
    cardiologia: pacientes.filter(paciente => paciente.especialidad === "Cardiólogo").length,
  }
};

console.log(cuentaPacientesPorEspecialidad(pacientes));
*/