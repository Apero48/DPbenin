import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Pages
import HomePage from './pages/HomePage';
import PresentationPage from './pages/PresentationPage';
import ActivitiesPage from './pages/ActivitiesPage';
import PublicationsPage from './pages/PublicationsPage';
import MediaPage from './pages/MediaPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import AppelsOffres from './pages/AppelsOffres';
import Newsletter from './pages/Newsletter';
import OffresEmplois from './pages/PageAppelsOffres';
import Galeries from './pages/PageGaleries';
import Videos from './pages/PageVidéos';

// CSS
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/presentation" element={<PresentationPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        <Route path="/publications/appels-offres" component={AppelsOffres} />
        <Route path="/publications/newsletter" component={Newsletter} />
        <Route path="/publications/offres-emplois" component={OffresEmplois} />
        <Route path="/mediatheque/galeries" component={Galeries} />
        <Route path="/mediatheque/videos" component={Videos} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
