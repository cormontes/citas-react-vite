
import Pacientes from './Pacientes'

function ListadoPacientes({pacientes, setPaciente, eliminarPaciente}) {

    return (
        <div className=' md:w-1/2 lg:w-3/5 h-screen overflow-y-scroll'>

            {pacientes && pacientes.length ? (
                <>
                    <h1 className=' text-center font-black text-3xl'>Listado Pacientes</h1>
            
                    <p className='mt-5 mb-10 text-center text-xl'>
                        Administra tus {''}
                        <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
                    </p>
                    {pacientes.map((paciente)=>
                        <Pacientes
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />
                    )}
                </>
                
            ):(
                <>
                    <h1 className=' text-center font-black text-3xl'>No hay pacientes</h1>
            
                    <p className='mt-5 mb-10 text-center text-xl'>
                        Comienza agregando pacientes {''}
                        <span className='text-indigo-600 font-bold'>y aparecen en este lugar</span>
                    </p>
                </>
            )}
        </div>
    )
}

export default ListadoPacientes
