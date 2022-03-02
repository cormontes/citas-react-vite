import {useState, useEffect} from 'react';
import Error from './Error'

function Formulario({pacientes,setPacientes,paciente,setPaciente}) {
    //State de campos de formulario
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    //State de mensaje de Error
    const [error,setError] = useState(false);

    //Revisa cuando paciente tiene camnbios
    //Modifica los state de los campos
    useEffect(()=>{
        if(Object.keys(paciente).length > 0){
            console.log(paciente)
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    },[paciente])

    const generarId = () =>{
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);

        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //Validar campos de Formulario
        //valida si en alguno de los valores de array hay un espacio vacio
        if([nombre,propietario,email,fecha,sintomas].includes('')){
            console.log('Hay al menos un elemento vacio');
            setError(true);
            return;
        }
        setError(false);

        //Objeto pacientes
        const objetoPacientes = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas
        }

        if(paciente.id){
            //Editar registro
            objetoPacientes.id = paciente.id
            console.log(objetoPacientes)
            console.log(paciente)

            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPacientes : pacienteState)
            setPacientes(pacientesActualizados)
            setPaciente({})
        }else{
            //Nuevo registro
            objetoPacientes.id = generarId()
            setPacientes([...pacientes, objetoPacientes]);
        }
       
       //reiniciar el formulario
       setNombre("");
       setPropietario("");
       setEmail("");
       setFecha("");
       setSintomas("");
    }

    return (
        <div className='md:w-1/2 lg:w-2/5'>
            <h1 className=' font-black text-3xl text-center'>Seguimiento de Pacientes</h1>

            <p className='text-lg mt-5 mb-10 text-center'>
                Añade Pacientes y {''}
                <span className=' text-indigo-600 font-bold'>Administralos</span>
            </p>
            
            <form onSubmit ={handleSubmit} className=' bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5'>
                {error && <Error mensaje="Todos los campos son obligatorios"/> }
                <div className=' mb-5'>
                    <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>
                        Nombre Mascota
                    </label>
                    <input 
                        id='mascota'
                        type="text"
                        placeholder='Nombre de la mascota'
                        className=' border-2 mt-2 w-full p-2 rounded-md placeholder-gray-400'
                        value={nombre}
                        onChange={(e)=> setNombre(e.target.value)}
                    />
                </div>
                <div className=' mb-5'>
                    <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>
                        Nombre Propietario
                    </label>
                    <input 
                        id='propietario'
                        type="text"
                        placeholder='Nombre del propietario'
                        className=' border-2 mt-2 w-full p-2 rounded-md placeholder-gray-400'
                        value={propietario}
                        onChange={(e)=> setPropietario(e.target.value)}
                    />
                </div>
                <div className=' mb-5'>
                    <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>
                        Email propietario
                    </label>
                    <input 
                        id='email'
                        type="email"
                        placeholder='Email propietario'
                        className=' border-2 mt-2 w-full p-2 rounded-md placeholder-gray-400'
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>
                <div className=' mb-5'>
                    <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>
                        Alta
                    </label>
                    <input 
                        id='alta'
                        type="date"
                        className=' border-2 mt-2 w-full p-2 rounded-md placeholder-gray-400'
                        value={fecha}
                        onChange={(e)=> setFecha(e.target.value)}
                    />
                </div>
                <div className=' mb-5'>
                    <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>
                        Sintomas
                    </label>
                    <textarea 
                        id='intomas'
                        placeholder='Describe los sintomas'
                        className=' border-2 mt-2 w-full p-2 rounded-md placeholder-gray-400'
                        value={sintomas}
                        onChange={(e)=> setSintomas(e.target.value)}
                    />
                </div>
                <input 
                    type="submit"
                    className=' bg-indigo-600 w-full py-2 rounded-md text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors '
                    value={paciente.id ? "Editar paciente"  : "Agregar Paciente"} 
                />
            </form> 
        </div>
    )
}

export default Formulario
