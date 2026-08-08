import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home'))
const SolucionesEmpresariales = lazy(() => import('../pages/SolucionesEmpresariales'))
const SoftwareALaMedida = lazy(() => import('../pages/SoftwareALaMedida'))
const Nube = lazy(() => import('../pages/Nube'))
const DevOps = lazy(() => import('../pages/DevOps'))
const DataScience = lazy(() => import('../pages/DataScience'))
const IA = lazy(() => import('../pages/IA'))
const Blockchain = lazy(() => import('../pages/Blockchain'))
const ConsultoriaEmpresarial = lazy(() => import('../pages/ConsultoriaEmpresarial'))
const Documentacion = lazy(() => import('../pages/Documentacion'))

const EmprendedoresM1B = lazy(() => import('../pages/EmprendedoresM1B'))
const SitiosWebPersonalizados = lazy(() => import('../pages/SitiosWebPersonalizados'))
const TiendaOnline = lazy(() => import('../pages/TiendaOnline'))
const Branding = lazy(() => import('../pages/Branding'))
const LandingPage = lazy(() => import('../pages/LandingPage'))
const IAM1B = lazy(() => import('../pages/IAM1B'))
const ConsultoriaEmprendedores = lazy(() => import('../pages/ConsultoriaEmprendedores'))

const BlogRecursos = lazy(() => import('../pages/BlogRecursos'))
const PreguntasFrecuentes = lazy(() => import('../pages/PreguntasFrecuentes'))
const Nosotros = lazy(() => import('../pages/Nosotros'))
const Historia = lazy(() => import('../pages/Historia'))
const TerminosCondiciones = lazy(() => import('../pages/TerminosCondiciones'))
const AvisoPrivacidad = lazy(() => import('../pages/AvisoPrivacidad'))

const Contacto = lazy(() => import('../pages/Contacto'))

function RouteFallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center bg-white" role="status" aria-live="polite">
      <span className="sr-only">Cargando página…</span>
      <div className="h-8 w-8 animate-pulse rounded-full bg-databrains-aqua/50" />
    </div>
  )
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<RouteFallback />}>
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
        <Route path="/emprendedores-m1b/ia" element={<IAM1B />} />
        <Route path="/emprendedores-m1b/consultoria" element={<ConsultoriaEmprendedores />} />

        <Route path="/blog-recursos" element={<BlogRecursos />} />
        <Route path="/blog-recursos/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
        <Route path="/blog-recursos/nosotros" element={<Nosotros />} />
        <Route path="/blog-recursos/historia" element={<Historia />} />
        <Route path="/blog-recursos/terminos-y-condiciones" element={<TerminosCondiciones />} />
        <Route path="/blog-recursos/aviso-de-privacidad" element={<AvisoPrivacidad />} />

        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Suspense>
  )
}
