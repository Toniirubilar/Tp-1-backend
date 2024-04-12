//creacion de las clases
class Persona {
    nombre; apellido; dni; estadoCivil;
    constructor(nombre, apellido, dni, estadoCivil){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.estadoCivil = estadoCivil;
}

set estadoCivil(nuevoEstadoCivil){
    this.estadoCivil = nuevoEstadoCivil;
}

imprimirPersona(){
    return "Nombre: "+ this.nombre +" Apellido: " + this.apellido + " DNI: "+ this.dni + " Estado Civil: " +this.estadoCivil + " ";
}

}


class Empleado extends Persona {
     anioDeIncorporacion; numDespacho;
     constructor(nombre, apellido, dni, estadoCivil, anioDeIncorporacion, numDespacho){
         super(nombre, apellido, dni, estadoCivil);
         this.anioDeIncorporacion = anioDeIncorporacion;
         this.numDespacho = numDespacho;
     }


     imprimirEmpleado(){
        return this.imprimirPersona() + " Año de incorporación: " + this.anioDeIncorporacion + " Número de despacho: " + this.numDespacho;
     }

 }



class Estudiante extends Persona{
    cursoMatriculado;
    constructor(nombre, apellido, dni, estadoCivil, cursoMatriculado){
        super(nombre, apellido,dni,estadoCivil);
        this.cursoMatriculado = cursoMatriculado;
    }

    imprimirEstudiante(){
        return this.imprimirPersona()+" Curso matriculado: " + this.cursoMatriculado + " ";
    }
}

class Profesor extends Empleado{
    departamento; curso;
    constructor(nombre, apellido,dni,estadoCivil, departamento, curso){
        super(nombre,apellido,dni,estadoCivil);
        this.curso = curso;
        this.departamento = departamento;
    }

    imprimirinfoProfesor(){
        return this.imprimirEmpleado() + " Departamento: " + this.departamento + " Curso: " + this.curso + " ";
    }
}

class personalServicio extends Empleado {
    seccionAsignada;
    constructor(nombre, apellido, dni, estadoCivil, anioDeIncorporacion, numDespacho, seccionAsignada){
        super(nombre, apellido, dni, estadoCivil, anioDeIncorporacion, numDespacho);
        this.seccionAsignada = seccionAsignada;
    }

    imprimirinfoPersonal(){
        return this.imprimirEmpleado() + " Seccion asignada: " + this.seccionAsignada + " ";
    }
}

class centroEducativo {
    listProfesores; listEstudiantes; listPersonalServicio; nombre;
    constructor(p_nombre){
        this.nombre = p_nombre;
        this.listProfesores = [];
        this.listEstudiantes = [];
        this.listPersonalServicio = [];
    }
    altaEstudiante(unEst){
        this.listEstudiantes.push(unEst);
    }

    altaProfesor(unProf){
        this.listProfesores.push(unProf);
    }

    altaPersonalServicio(unPerServ){
        this.listPersonalServicio.push(unPerServ);
    }

    bajaEstudiante(dni){
        this.listEstudiantes = this.listEstudiantes.filter(est => est.dni !== dni);
    }
    bajaProfesor(dni){
        this.listProfesores = this.listProfesores.filter(est => est.dni !== dni);
    }
    bajaPersonalServicio(dni){
        this.listPersonalServicio = this.listPersonalServicio.filter(est => est.dni !== dni);
    }

    imprimirlistEstudiantes(){
        let texto= "";
        this.listEstudiantes.forEach(function(unEst){texto += unEst.imprimirEstudiante()});
        return texto;
    }

    imprimirlistProfesores(){
        let texto= "";
        this.listProfesores.forEach(function(unEst){texto += unEst.imprimirinfoProfesor()});
        return texto;
    }

    imprimirlistPersonalServicio(){
        let texto= "";
        this.listPersonalServicio.forEach(function(unEst){texto += unEst.imprimirinfoPersonal()});
        return texto;
    }

}




its = new centroEducativo("its");

agus = new Estudiante("Agustin","Rubilar","41911940","Soltero","Matematicas");


ale = new Profesor("Alejandro","Arraigada","31313131","casado","Desarrollo");
ramon = new personalServicio("ramon","pepito","123131313","soltero","2010","15","portero")


its.altaEstudiante(agus);
its.altaEstudiante(agus);
its.altaEstudiante(agus);


its.altaProfesor(ale);
its.altaPersonalServicio(ramon);

its.bajaEstudiante();

// console.log(its.imprimirlistEstudiantes());
console.log(its.imprimirlistProfesores());

console.log(its.imprimirlistPersonalServicio());