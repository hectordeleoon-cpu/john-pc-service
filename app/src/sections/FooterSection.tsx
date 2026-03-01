import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook } from 'lucide-react';

interface FooterSectionProps {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  city: string;
  country: string;
}

export function FooterSection({
  phone,
  whatsapp,
  email,
  address,
  city,
  country
}: FooterSectionProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo.png"
                alt="John PC Service"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Tu tienda de confianza para computadoras, reparaciones y componentes gaming en República Dominicana.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-green-500 hover:text-white transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Productos</h3>
            <ul className="space-y-4">
              <li>
                <a href="#productos" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Laptops Gaming
                </a>
              </li>
              <li>
                <a href="#productos" className="text-gray-400 hover:text-blue-400 transition-colors">
                  PCs de Escritorio
                </a>
              </li>
              <li>
                <a href="#productos" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Componentes
                </a>
              </li>
              <li>
                <a href="#productos" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Periféricos
                </a>
              </li>
              <li>
                <a href="#productos" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Accesorios
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Soporte</h3>
            <ul className="space-y-4">
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Envíos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Garantía
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Devoluciones
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  {address}<br />
                  {city}, {country}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a href={`tel:${phone}`} className="text-gray-400 hover:text-blue-400 transition-colors">
                  TEL: {phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <a 
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  WhatsApp: {whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a href={`mailto:${email}`} className="text-gray-400 hover:text-blue-400 transition-colors">
                  {email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} John PC Service. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
