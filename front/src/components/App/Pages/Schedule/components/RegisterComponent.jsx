import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { UserIcon } from '@heroicons/react/24/outline'
import { useForm } from '../../../../../hooks/useForm';
import "../styles.css";
import { useNavigate } from 'react-router-dom';
import { registerStudentAPI } from '../../../../../helpers/students';
import { validarNumeroCelularChileno, validarRut } from '../../../../../helpers/functions';

export const RegisterComponent = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(true);
    const cancelButtonRef = useRef(null);
    const [validateRut, setValidateRut] = useState('');
    const [validatePhone, setValidatePhone] = useState('');
    const [studentMsg, setStudentMsg] = useState({
        status: null,
        msg: ''
    });

    const [value, handleInputChange] = useForm({
        rut: '',
        name: '',
        email: '',
        phone: ''
    });

    const { rut, name, email, phone } = value;

    const handleStudentRegister = () => {
        const student = { rut, name, email, phone }

        if (rut === '' || name.trim === '' || email === '' || phone === '') {
            return;
        } else {
            if (validarRut(student.rut.trim()) === false) {
                setValidateRut('El Rut ingresado no es valido.');
                setTimeout(() => {
                    setValidateRut('');
                }, 3000)
            } else if (validarNumeroCelularChileno(phone.trim()) === false) {
                setValidatePhone('El Celular ingresado no es valido.');
                console.log(validatePhone);
                setTimeout(() => {
                    setValidatePhone('');
                }, 3000)
            } else {

                console.log(student);
                registerStudentAPI(student)
                    .then((std) => {
                        console.log(std);
                        if (std.status == 200) {
                            setStudentMsg({
                                status: 200,
                                msg: std.data
                            });

                            setTimeout(() => {
                                navigate('/');
                            }, 3500)
                        }

                        if (std.status == 404) {
                            setStudentMsg({
                                status: 404,
                                msg: std.data
                            });

                            setTimeout(() => {
                                navigate('/');
                            }, 3500)
                        }

                        if (std.status == 500) {
                            setStudentMsg({
                                status: 500,
                                msg: std.data
                            });

                            setTimeout(() => {
                                navigate('/');
                            }, 3500)
                        }
                    })
            }
        }
        setOpen(false);
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                                            <UserIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                                        </div>
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                Registrate para Agendar
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500">
                                                    La información a registrar debe estar relacionada al Alumno.
                                                </p>
                                            </div>
                                            <div className="mt-2">
                                                <form>
                                                    <div className='group-forms'>
                                                        <span>Rut Alumno</span>
                                                        <input
                                                            name="rut"
                                                            onChange={handleInputChange}
                                                            type="text"
                                                            className="rounded text-black-500 outline-none text-right"
                                                            placeholder='12345678-9'
                                                        />
                                                    </div>
                                                    {
                                                        (validateRut !== '') && <p>{validateRut}</p>
                                                    }
                                                    <div className='group-forms'>
                                                        <span>Nombre Alumno</span>
                                                        <input
                                                            name="name"
                                                            onChange={handleInputChange}
                                                            type="text"
                                                            className="rounded text-black-500 outline-none text-right"
                                                            placeholder='Nombre y Apellido'
                                                        />
                                                    </div>
                                                    <div className='group-forms'>
                                                        <span>Email</span>
                                                        <input
                                                            name="email"
                                                            onChange={handleInputChange}
                                                            type="text"
                                                            className="rounded text-black-500 outline-none text-right"
                                                            placeholder='email@email.com'
                                                        />
                                                    </div>
                                                    <div className='group-forms'>
                                                        <span>Teléfono Apoderado</span>
                                                        <input
                                                            name="phone"
                                                            onChange={handleInputChange}
                                                            type="text"
                                                            className="rounded text-black-500 outline-none text-right"
                                                            placeholder='911223344'
                                                        />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        onClick={handleStudentRegister}
                                        className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-300 sm:ml-3 sm:w-auto"
                                    >
                                        Registrar
                                    </button>
                                    <button
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={() => setOpen(false)}
                                        ref={cancelButtonRef}
                                    >
                                        Cancel
                                    </button>
                                </div>


                                {
                                    (validatePhone !== '') && <p className='alert-form-error animate__animated animate__bounceIn'>{validatePhone}</p>
                                }
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
