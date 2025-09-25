import React from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import AppRoutes from './routes/AppRoutes';
import { Toaster } from 'react-hot-toast'; // 

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-4">
        <AppRoutes />
      </main>
      <Footer />
      <Toaster position="top-right" reverseOrder={false} /> 
    </div>
  );
}
