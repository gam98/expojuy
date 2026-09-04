import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { HomePage } from '../pages/HomePage';
import { AboutPage, AgendaPage, ContactPage, ExhibitorsPage, FaqPage, NewsDetailPage, NewsPage, NotFoundPage, SponsorsPage, VenueMapPage } from '../pages/ContentPages';
import { TicketsPage } from '../pages/TicketsPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { CheckoutResultPage } from '../pages/CheckoutResultPage';
export function AppRouter(){return <Routes><Route element={<Layout/>}><Route index element={<HomePage/>}/><Route path="sobre-expojuy" element={<AboutPage/>}/><Route path="expositores" element={<ExhibitorsPage/>}/><Route path="agenda" element={<AgendaPage/>}/><Route path="novedades" element={<NewsPage/>}/><Route path="novedades/:id" element={<NewsDetailPage/>}/><Route path="mapa" element={<VenueMapPage/>}/><Route path="sponsors" element={<SponsorsPage/>}/><Route path="contacto" element={<ContactPage/>}/><Route path="preguntas-frecuentes" element={<FaqPage/>}/><Route path="entradas" element={<TicketsPage/>}/><Route path="*" element={<NotFoundPage/>}/></Route><Route path="checkout" element={<CheckoutPage/>}/><Route path="checkout/resultado" element={<CheckoutResultPage/>}/></Routes>}
