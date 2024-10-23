import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import BottomInfo from '../components/bottominfo/BottomInfo';


const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Nombre es requerido'),
    lastName: Yup.string().required('Apellidos son requeridos'),
    email: Yup.string().email('Correo no válido').required('Correo electrónico es requerido'),
    phone: Yup.string().required('Teléfono es requerido'),
    shippingAddress: Yup.string().required('Dirección de envío es requerida'),
    city: Yup.string().required('Ciudad es requerida'),
    postalCode: Yup.string().required('Código postal es requerido'),
    country: Yup.string().required('País es requerido'),
    password: Yup.string()
        .min(8, 'Ingrese al menos 8 caracteres')
        .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Debe contener al menos un carácter especial')
        .required('Contraseña es requerida'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), undefined], 'Las contraseñas deben coincidir')
        .required('Confirmación de contraseña es requerida'),
    communicationPreferences: Yup.boolean(),
    paymentMethod: Yup.string().required('Seleccione un método de pago'),
});

const RegistrationForm = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <>
            <style>
                {`
                    input:-webkit-autofill,
                    input:-webkit-autofill:hover,
                    input:-webkit-autofill:focus,
                    input:-webkit-autofill:active {
                        transition: background-color 5000s ease-in-out 0s;
                        -webkit-text-fill-color: white !important;
                        border-bottom: 2px solid #38b2ac !important;
                    }
                `}
            </style>

            <div className="relative  grid text-center content-start bg-cover bg-center p-6 bg-gradient"
                style={{
                    backgroundImage:
                        'linear-gradient(to bottom, rgba(0,0,0,0) 80%, rgba(17,24,39,1)), url("https://personal123.sirv.com/pexels-francesco-ungaro-1726970.jpg")',
                }}>
                <div className="w-auto mx-auto p-4 bg-gray-900/70 shadow-2xl rounded-2xl mb-20">
                    <h1 className="text-lg font-bold mb-4 text-green-300">Registro de Clientes</h1>

                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            email: '',
                            phone: '',
                            shippingAddress: '',
                            city: '',
                            postalCode: '',
                            country: '',
                            password: '',
                            confirmPassword: '',
                            communicationPreferences: false,
                            paymentMethod: '',
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            console.log(values);
                            alert('Registro exitoso');
                        }}
                    >
                        {() => (
                            <Form className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {/* Nombre */}
                                <div>
                                    <Field
                                        name="firstName"
                                        type="text"
                                        placeholder="Nombre"
                                        className="mt-1 block w-full px-2 py-1 bg-transparent border-b-2 border-gray-300 text-white placeholder-gray-300 text-sm focus:outline-none focus:border-green-300"
                                    />
                                    <div className="h-5">
                                        <ErrorMessage name="firstName" component="div" className="text-red-600 text-xs" />
                                    </div>
                                </div>

                                {/* Apellidos */}
                                <div>
                                    <Field
                                        name="lastName"
                                        type="text"
                                        placeholder="Apellidos"
                                        className="mt-1 block w-full px-2 py-1 bg-transparent border-b-2 border-gray-300 text-white placeholder-gray-300 text-sm focus:outline-none focus:border-green-300"
                                    />
                                    <div className="h-5">
                                        <ErrorMessage name="lastName" component="div" className="text-red-600 text-xs" />
                                    </div>
                                </div>

                                {/* Correo Electrónico */}
                                <div>
                                    <Field
                                        name="email"
                                        type="email"
                                        placeholder="Correo Electrónico"
                                        className="mt-1 block w-full px-2 py-1 bg-transparent border-b-2 border-gray-300 text-white placeholder-gray-300 text-sm focus:outline-none focus:border-green-300"
                                    />
                                    <div className="h-5">
                                        <ErrorMessage name="email" component="div" className="text-red-600 text-xs" />
                                    </div>
                                </div>

                                {/* Teléfono */}
                                <div>
                                    <Field
                                        name="phone"
                                        type="text"
                                        placeholder="Teléfono"
                                        className="mt-1 block w-full px-2 py-1 bg-transparent border-b-2 border-gray-300 text-white placeholder-gray-300 text-sm focus:outline-none focus:border-green-300"
                                    />
                                    <div className="h-5">
                                        <ErrorMessage name="phone" component="div" className="text-red-600 text-xs" />
                                    </div>
                                </div>

                                {/* Dirección de Envío */}
                                <div className="md:col-span-2">
                                    <Field
                                        name="shippingAddress"
                                        type="text"
                                        placeholder="Dirección de Envío"
                                        className="mt-1 block w-full px-2 py-1 bg-transparent border-b-2 border-gray-300 text-white placeholder-gray-300 text-sm focus:outline-none focus:border-green-300"
                                    />
                                    <div className="h-5">
                                        <ErrorMessage name="shippingAddress" component="div" className="text-red-600 text-xs" />
                                    </div>
                                </div>

                                {/* Ciudad */}
                                <div>
                                    <Field
                                        name="city"
                                        type="text"
                                        placeholder="Ciudad"
                                        className="mt-1 block w-full px-2 py-1 bg-transparent border-b-2 border-gray-300 text-white placeholder-gray-300 text-sm focus:outline-none focus:border-green-300"
                                    />
                                    <div className="h-5">
                                        <ErrorMessage name="city" component="div" className="text-red-600 text-xs" />
                                    </div>
                                </div>

                                {/* Código Postal */}
                                <div>
                                    <Field
                                        name="postalCode"
                                        type="text"
                                        placeholder="Código Postal"
                                        className="mt-1 block w-full px-2 py-1 bg-transparent border-b-2 border-gray-300 text-white placeholder-gray-300 text-sm focus:outline-none focus:border-green-300"
                                    />
                                    <div className="h-5">
                                        <ErrorMessage name="postalCode" component="div" className="text-red-600 text-xs" />
                                    </div>
                                </div>

                                {/* País */}
                                <div>
                                    <Field
                                        name="country"
                                        type="text"
                                        placeholder="País"
                                        className="mt-1 block w-full px-2 py-1 bg-transparent border-b-2 border-gray-300 text-white placeholder-gray-300 text-sm focus:outline-none focus:border-green-300"
                                    />
                                    <div className="h-5">
                                        <ErrorMessage name="country" component="div" className="text-red-600 text-xs" />
                                    </div>
                                </div>

                                {/* Contraseña */}
                                <div>
                                    <div className="relative">
                                        <Field
                                            name="password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Contraseña"
                                            className="mt-1 block w-full px-2 py-1 bg-transparent border-b-2 border-gray-300 text-white placeholder-gray-300 text-sm focus:outline-none focus:border-green-300"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="text-white absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                                        >
                                            {showPassword ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M10 3C5.5 3 1.7 6.1.5 10c1.2 3.9 5 7 9.5 7s8.3-3.1 9.5-7c-1.2-3.9-5-7-9.5-7zm0 12c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z" />
                                                </svg>
                                            )}
                                        </button>
                                    </div>
                                    <div className="h-5">
                                        <ErrorMessage name="password" component="div" className="text-red-600 text-xs" />
                                    </div>
                                </div>

                                {/* Confirmación de Contraseña */}
                                <div className="md:col-span-2">
                                    <div className="relative">
                                        <Field
                                            name="confirmPassword"
                                            type={showConfirmPassword ? "text" : "password"}
                                            placeholder="Confirmación de Contraseña"
                                            className="mt-1 block w-full px-2 py-1 bg-transparent border-b-2 border-gray-300 text-white placeholder-gray-300 text-sm focus:outline-none focus:border-green-300"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="text-white absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                                        >
                                            {showConfirmPassword ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M10 3C5.5 3 1.7 6.1.5 10c1.2 3.9 5 7 9.5 7s8.3-3.1 9.5-7c-1.2-3.9-5-7-9.5-7zm0 12c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z" />
                                                </svg>
                                            )}
                                        </button>
                                    </div>
                                    <div className="h-5">
                                        <ErrorMessage name="confirmPassword" component="div" className="text-red-600 text-xs" />
                                    </div>
                                </div>

                                {/* Preferencias de Comunicación */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm text-white font-medium">
                                        <Field type="checkbox" name="communicationPreferences" className="mr-2" />
                                        Suscribirse a la newsletter y ofertas especiales
                                    </label>
                                </div>

                                {/* Método de Pago */}
                                <div className="md:col-span-2">
                                    <Field
                                        as="select"
                                        name="paymentMethod"
                                        className="mt-1 block w-full px-2 py-1 bg-transparent border-b-2 border-gray-300 text-white placeholder-gray-300 text-sm focus:outline-none focus:border-green-300"
                                    >
                                        <option className="bg-gray-900 " value="">Seleccione método de pago</option>
                                        <option className="bg-gray-900" value="tarjeta">Tarjeta de Crédito/Débito</option>
                                        <option className="bg-gray-900" value="paypal">PayPal</option>
                                    </Field>
                                    <div className="h-5">
                                        <ErrorMessage name="paymentMethod" component="div" className="text-red-600 text-xs" />
                                    </div>
                                </div>

                                {/* Botón de Enviar */}
                                <div className="md:col-span-2">
                                    <button
                                        type="submit"
                                        className="w-[300px] py-2 px-4 bg-gray-900 text-white font-bold border border-green-300 rounded-md hover:bg-gray-700 text-sm"
                                    >
                                        Registrarse
                                    </button>
                                </div>

                                <div className="md:col-span-2">
                                    <p className="text-[12px] text-white">
                                        ¿Ya tienes una cuenta? <a href="/" className="text-green-300 underline">Inicia Sesión</a>
                                    </p>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
            <div className='flex justify-center mt-10'>
                <BottomInfo />
            </div>
        </>
    );
};

export default RegistrationForm;