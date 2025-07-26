// pages/users/index.tsx
import React from 'react';
import Header from '@/components/layout/Header';
// import Footer from '@/components/layout/Footer';


interface homePageProps {
  home: homePageProps[]; // Define props for the component
}

const homePage: React.FC<homePageProps> = ({  }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">home</h1>
     
      </main>
      {/* <Footer /> */}
    </div>
  );
};



export default homePage;

