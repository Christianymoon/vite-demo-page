// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export function ContactForm() {
  const [state, handleSubmit] = useForm("xvgkwbdz");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-gray-800 shadow-md rounded-md">
        <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
            Dirección de correo electronico
        </label>
        <input
            id="email"
            type="email"
            name="email"
            className="w-full text-white p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
        <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            className="text-red-500 text-sm mb-2"
        />
        <label htmlFor="message" className="block text-white text-sm font-medium text-gray-700 mb-2">
            Mensaje
        </label>
        <textarea
            id="message"
            name="message"
            className="w-full text-white p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
        <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            className="text-red-500 text-sm mb-2"
        />
        <button 
            type="submit" 
            disabled={state.submitting}
            className="w-full mainbutton bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
            Enviar
        </button>
    </form>
);
}
