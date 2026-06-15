import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import SolucionesEmpresariales from '../pages/SolucionesEmpresariales'
import SoftwareALaMedida from '../pages/SoftwareALaMedida'
import Nube from '../pages/Nube'
import DevOps from '../pages/DevOps'
import DataScience from '../pages/DataScience'
import IA from '../pages/IA'
import Blockchain from '../pages/Blockchain'
import ConsultoriaEmpresarial from '../pages/ConsultoriaEmpresarial'
import Documentacion from '../pages/Documentacion'

import EmprendedoresM1B from '../pages/EmprendedoresM1B'
import SitiosWebPersonalizados from '../pages/SitiosWebPersonalizados'
import TiendaOnline from '../pages/TiendaOnline'
import Branding from '../pages/Branding'
import LandingPage from '../pages/LandingPage'
import ConsultoriaEmprendedores from '../pages/ConsultoriaEmprendedores'

import BlogRecursos from '../pages/BlogRecursos'
import PreguntasFrecuentes from '../pages/PreguntasFrecuentes'
import Nosotros from '../pages/Nosotros'
import Historia from '../pages/Historia'
import TerminosCondiciones from '../pages/TerminosCondiciones'
import AvisoPrivacidad from '../pages/AvisoPrivacidad'

import Contacto from '../pages/Contacto'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/soluciones-empresariales" element={<SolucionesEmpresariales />} />
      <Route path="/soluciones-empresariales/software-a-la-medida" element={<SoftwareALaMedida />} />
      <Route path="/soluciones-empresariales/nube" element={<Nube />} />
      <Route path="/soluciones-empresariales/devops" element={<DevOps />} />
      <Route path="/soluciones-empresariales/data-science" element={<DataScience />} />
      <Route path="/soluciones-empresariales/ia" element={<IA />} />
      <Route path="/soluciones-empresariales/blockchain" element={<Blockchain />} />
      <Route path="/soluciones-empresariales/consultoria-empresarial" element={<ConsultoriaEmpresarial />} />
      <Route path="/soluciones-empresariales/documentacion" element={<Documentacion />} />

      <Route path="/emprendedores-m1b" element={<EmprendedoresM1B />} />
      <Route path="/emprendedores-m1b/sitios-web-personalizados" element={<SitiosWebPersonalizados />} />
      <Route path="/emprendedores-m1b/tienda-online" element={<TiendaOnline />} />
      <Route path="/emprendedores-m1b/branding" element={<Branding />} />
      <Route path="/emprendedores-m1b/landing-page" element={<LandingPage />} />
      <Route path="/emprendedores-m1b/consultoria" element={<ConsultoriaEmprendedores />} />

      <Route path="/blog-recursos" element={<BlogRecursos />} />
      <Route path="/blog-recursos/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
      <Route path="/blog-recursos/nosotros" element={<Nosotros />} />
      <Route path="/blog-recursos/historia" element={<Historia />} />
      <Route path="/blog-recursos/terminos-y-condiciones" element={<TerminosCondiciones />} />
      <Route path="/blog-recursos/aviso-de-privacidad" element={<AvisoPrivacidad />} />

      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  )
}
