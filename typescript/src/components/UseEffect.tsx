import { useState } from 'react';

const UseEffect = () => {
    const [text, setText] = useState('');

    return (
   <div className="min-h-screen font-sans text-slate-800 relative selection:bg-violet-500 selection:text-white pb-20">
      
      <main className="relative z-10 pt-10 flex flex-col items-center px-4 w-full">
        
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-500">useEffect</span> 
          </h1>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Prepared by: Mary Hannah Caryl D. Reyes
          </p>
        </div>

        
        <section className="w-full max-w-3xl mx-auto flex flex-col gap-10">
        

     
        </section>
      </main>
    </div>
  
    );
};
export default UseEffect;