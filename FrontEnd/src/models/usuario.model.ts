export interface Usuario  {
    id? : number;
    nombre: string;
    apellido: string;
    email: string;
    contrasenia: string;
    token?: string;    
}