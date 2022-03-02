
function Pacientes({paciente, setPaciente, eliminarPaciente}) {
    //creamos variables para cada elemento del objeto
    const {nombre, propietario, email, fecha, sintomas, id} = paciente;

    const handleEliminar = () => {
        const respuesta = confirm('Desea Elminar El registro?');
        if(respuesta){
            eliminarPaciente(id)
        }
    }
    return (
            <div className='bg-white mx-5 my-10 px-5 py-10 shadow-md rounded-xl'>
                <p className='font-bold pb-5 uppercase text-gray-700'>
                    Nombre:{' '}
                    <span className='font-normal normal-case'>{nombre}</span>
                </p>
                <p className='font-bold pb-5 uppercase text-gray-700'>
                    Propietario:{''}
                    <span className='font-normal normal-case'>{propietario}</span>
                </p>
                <p className='font-bold pb-5 uppercase text-gray-700'>
                    Correo:{''}
                    <span className='font-normal normal-case'>{email}</span>
                </p>
                <p className='font-bold pb-5 uppercase text-gray-700'>
                    Fecha Alta:{''}
                    <span className='font-normal normal-case'>{fecha}</span>
                </p>
                <p className='font-bold pb-5 uppercase text-gray-700'>
                    Sintomas:{''}
                    <span className='font-normal normal-case'>{sintomas}</span>
                </p>
                <div className=" flex justify-between mt-10">
                    <button
                        type="button"
                        className=" py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                        onClick={()=> setPaciente(paciente)}
                    >Editar</button>
                    <button
                        type="button"
                        className=" py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                        onClick={handleEliminar}
                    >Eliminar</button>
                </div>
            </div>
    )
}

export default Pacientes
