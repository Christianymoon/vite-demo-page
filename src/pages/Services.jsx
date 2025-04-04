import { Card } from "../components/Card";
import Tag from "../assets/image1.jpg";
import Poster from "../assets/lanadelreyposter.jpg";
import Desingner from "../assets/designer.jpg";
import { Link } from "react-router-dom";

export function Services() {


  const examples = [
    { title: "Tarjetas de presentación", description: "Tarjetas de presentación personalizadas para destacar tu marca o negocio.", imageUrl: Tag },
    { title: "Posters", description: "Posters personalizados para eventos, promociones o decoración.", imageUrl: Poster },
    { title: "Diseño Personalizado", description: "Creamos diseños únicos y exclusivos que se adaptan a tus necesidades y reflejan tu estilo.", imageUrl: Desingner },
  ];


  return (
    <div className="services p-8 bg-gray-50 text-gray-800 FirstFont">
      <h1 className="text-4xl font-bold mb-4">Servicios</h1>
      <p className="text-lg mb-6">Ofrecemos una variedad de servicios de impresión y diseño gráfico.</p>

      <section className="mt-8">
        <h1 className="text-2xl pb-5">Impresión Digital</h1>
        <p className="text-base text-wrap md:w-200">La impresión digital es un proceso de impresión que utiliza tecnología digital para transferir imágenes y texto directamente a una variedad de soportes. Este método es ideal para tiradas cortas y personalización.</p>
        <p className="text-base text-wrap md:w-200">Ofrecemos impresión digital de alta calidad en una variedad de formatos, incluyendo folletos, tarjetas de presentación, carteles y más. Nuestro equipo está listo para ayudarte a llevar tus ideas a la realidad.</p>
        <br />
        <h1>Contactanos para una compra personalizada</h1>
          <button className="mainbutton rounded-lg bg-gray-800 text-white px-4 py-2 mt-4 hover:bg-gray-700 transition duration-300 ease-in-out">
            <Link key="contactfromservices" to="/contact">Contactanos</Link>
          </button>

        <div className="cards flex flex-col md:flex-row items-center mt-10">
          {
            examples.map((example) => (
              <Card key="{example.title}" title={example.title} description={example.description} imageUrl={example.imageUrl} />
            ))
          }
        </div>

        <table id="#prices" className="table-auto font-sans mt-20 border-collapse border border-gray-400 w-full text-left">
          <caption className="text-lg font-semibold mb-2">Impresión de Tarjetas de presentación</caption>
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">Cantidad</th>
              <th className="border border-gray-400 px-4 py-2">Valor Unitario (MXN)</th>
              <th className="border border-gray-400 px-4 py-2">Valor Total (MXN)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 px-4 py-2">100</td>
              <td className="border border-gray-400 px-4 py-2">$2.29 MXN</td>
              <td className="border border-gray-400 px-4 py-2">$280.80 MXN</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">250</td>
              <td className="border border-gray-400 px-4 py-2">$1.15 MXN</td>
              <td className="border border-gray-400 px-4 py-2">$287.10 MXN</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">500</td>
              <td className="border border-gray-400 px-4 py-2">$0.75 MXN</td>
              <td className="border border-gray-400 px-4 py-2">$374.00 MXN</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">1000</td>
              <td className="border border-gray-400 px-4 py-2">$0.56 MXN</td>
              <td className="border border-gray-400 px-4 py-2">$561.00 MXN</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">2000</td>
              <td className="border border-gray-400 px-4 py-2">$0.44 MXN</td>
              <td className="border border-gray-400 px-4 py-2">$884.40 MXN</td>
            </tr>
          </tbody>
        </table>

          <table className="table-auto font-sans mt-10 border-collapse border border-gray-400 w-full text-left">
            <caption className="text-lg font-semibold mb-2">Opciones de Diseño</caption>
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">Tipo</th>
                <th className="border border-gray-400 px-4 py-2">Precio Agregado (MXN)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-4 py-2">Con diseño hecho</td>
                <td className="border border-gray-400 px-4 py-2">$0</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">Plantilla</td>
                <td className="border border-gray-400 px-4 py-2">$50 MXN</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">Personalizado</td>
                <td className="border border-gray-400 px-4 py-2">$100 MXN</td>
              </tr>
            </tbody>
          </table>

      </section>
    </div>
  )
}