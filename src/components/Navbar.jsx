import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { nav } from '../data/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronDown, faXmark } from '@fortawesome/free-solid-svg-icons'
import DataBrainsLogo from './DataBrainsLogo'

export default function Navbar() {
  const [openMobile, setOpenMobile] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [openMobileSection, setOpenMobileSection] = useState('soluciones')
  const location = useLocation()

  useEffect(() => {
    setOpenMobile(false)
    setOpenDropdown(null)
  }, [location.pathname])

  const navLinkClass = ({ isActive }) =>
    `relative flex min-h-20 items-center px-2 text-[12px] font-semibold transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-databrains-coral focus-visible:ring-offset-2 lg:px-3 lg:text-[13px] xl:px-4 xl:text-[15px] ${
      isActive
        ? 'text-databrains-slate after:absolute after:bottom-0 after:left-4 after:h-1 after:w-11 after:rounded-full after:bg-databrains-coral'
        : 'text-databrains-slate hover:text-databrains-teal'
    }`

  const dropdowns = [
    { id: 'soluciones', label: 'Soluciones Empresariales', to: '/soluciones-empresariales', items: nav.soluciones },
    { id: 'emprendedores', label: 'Emprendedores M1B', to: '/emprendedores-m1b', items: nav.emprendedores },
    { id: 'blog', label: 'Blog / Recursos', to: '/blog-recursos', items: nav.blog },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between px-5 min-[860px]:px-10 lg:px-8">
        <div className="flex items-center gap-8 min-[860px]:gap-10 xl:gap-12">
          <Link
            to="/"
            className="rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-databrains-coral focus-visible:ring-offset-2"
            aria-label="Ir al inicio de DataBrains"
          >
            <DataBrainsLogo iconClassName="h-9 w-9" textClassName="text-[23px]" />
          </Link>

          <nav className="hidden items-center gap-2 min-[860px]:flex lg:gap-4 xl:gap-6" aria-label="Navegación principal">
            <NavLink to="/" className={navLinkClass}>Inicio</NavLink>

            {dropdowns.map((dropdown) => (
              <div
                key={dropdown.id}
                className="relative"
                onMouseEnter={() => setOpenDropdown(dropdown.id)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() => setOpenDropdown(openDropdown === dropdown.id ? null : dropdown.id)}
                  className="flex min-h-20 items-center gap-1.5 px-2 text-[12px] font-semibold text-databrains-slate transition duration-300 hover:text-databrains-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-databrains-coral focus-visible:ring-offset-2 lg:px-3 lg:text-[13px] xl:gap-2 xl:px-4 xl:text-[15px]"
                  aria-expanded={openDropdown === dropdown.id}
                  aria-haspopup="true"
                >
                  {dropdown.label}
                  <FontAwesomeIcon icon={faChevronDown} className={`text-xs transition duration-300 ${openDropdown === dropdown.id ? 'rotate-180' : ''}`} />
                </button>

                {openDropdown === dropdown.id && (
                  <div className="absolute left-0 top-full w-72 pt-3">
                    <div className="rounded-2xl border border-databrains-aqua/20 bg-white/95 p-3 shadow-xl backdrop-blur">
                      <NavLink to={dropdown.to} className="mb-2 block rounded-xl bg-databrains-paleCyan/70 px-4 py-3 font-heading text-sm font-bold text-databrains-slate">
                        Ver categoría
                      </NavLink>
                      {dropdown.items.map((item) => (
                        <NavLink
                          key={item.to}
                          to={item.to}
                          className={({ isActive }) =>
                            `block rounded-xl px-4 py-2 text-sm transition duration-300 ${
                              isActive ? 'bg-databrains-lightGray font-semibold text-databrains-teal' : 'text-databrains-slate/80 hover:bg-databrains-lightGray'
                            }`
                          }
                        >
                          {item.icon && <FontAwesomeIcon icon={item.icon} className="mr-3 w-4 text-databrains-teal" />}
                          {item.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <NavLink to="/contacto" className={navLinkClass}>Contacto</NavLink>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-databrains-aqua/30 text-databrains-slate transition duration-300 hover:bg-databrains-lightGray focus:outline-none focus-visible:ring-2 focus-visible:ring-databrains-coral focus-visible:ring-offset-2 min-[860px]:hidden"
            onClick={() => setOpenMobile((state) => !state)}
            aria-label={openMobile ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={openMobile}
          >
            <FontAwesomeIcon icon={openMobile ? faXmark : faBars} />
          </button>
        </div>
      </div>

      {openMobile && (
        <div className="border-t border-databrains-aqua/20 bg-white min-[860px]:hidden">
          <div className="mx-auto max-w-7xl px-4 py-5">
            <NavLink to="/" className={navLinkClass}>Inicio</NavLink>
            <div className="mt-4 space-y-3">
              {dropdowns.map((dropdown) => (
                <div key={dropdown.id} className="rounded-3xl border border-databrains-aqua/20 bg-white p-3 shadow-sm">
                  <button
                    type="button"
                    onClick={() => setOpenMobileSection(openMobileSection === dropdown.id ? null : dropdown.id)}
                    className="flex w-full items-center justify-between rounded-2xl px-2 py-2 text-left font-heading font-bold text-databrains-slate focus:outline-none focus-visible:ring-2 focus-visible:ring-databrains-coral"
                    aria-expanded={openMobileSection === dropdown.id}
                  >
                    {dropdown.label}
                    <FontAwesomeIcon icon={faChevronDown} className={`text-xs transition duration-300 ${openMobileSection === dropdown.id ? 'rotate-180' : ''}`} />
                  </button>
                  {openMobileSection === dropdown.id && (
                    <div className="mt-2 space-y-1">
                      <NavLink to={dropdown.to} className="block rounded-2xl bg-databrains-paleCyan/70 px-3 py-2 text-sm font-semibold text-databrains-teal">
                        Ver categoría
                      </NavLink>
                      {dropdown.items.map((item) => (
                        <NavLink key={item.to} to={item.to} className="flex items-center rounded-2xl px-3 py-2 text-sm text-databrains-slate/80 hover:bg-databrains-lightGray">
                          {item.icon && <FontAwesomeIcon icon={item.icon} className="mr-3 w-4 text-databrains-teal" />}
                          {item.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <NavLink to="/contacto" className="mt-4 flex w-full justify-center rounded-full bg-databrains-coral px-5 py-3 text-sm font-bold text-white shadow-md">
              Contacto
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
