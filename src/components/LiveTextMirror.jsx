import React, { useState } from 'react';

const LiveTextMirror = () => {
    const [text, setText] = useState('');

    return (
   <div className="min-h-screen font-sans text-slate-800 relative selection:bg-violet-500 selection:text-white pb-20">
      
      <main className="relative z-10 pt-10 flex flex-col items-center px-4 w-full">
        
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
            Live <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-500">Text</span> Mirror
          </h1>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Prepared by: Mary Hannah Caryl D. Reyes
          </p>
        </div>

        
        <section className="w-full max-w-3xl mx-auto flex flex-col gap-10">
         <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 min-h-[100px] text-center">
             <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">[ YOU TEXT HERE ]</h3>
             <p className="text-medium font-medium text-indigo-600 break-words">
                {text || <span className="text-gray-300 font-light">Your text will appear here...</span>}
             </p>
          </div>

          <div className="relative w-full group">
            <span className="absolute -left-0.5 top-2 bottom-2 w-1.5 rounded bg-gradient-to-b from-indigo-500 to-violet-500 opacity-70 transition-all duration-300 group-focus-within:opacity-100" />
            
            <input 
              type="text" 
              id="input" 
              placeholder=" " 
              value={text}
              onChange={(e) => setText(e.target.value)} 
              className="peer w-full pl-6 pr-4 pt-6 pb-2 text-lg text-gray-800 bg-white border border-gray-200 rounded-lg shadow-md focus:border-transparent focus:ring-2 focus:ring-indigo-300 focus:outline-none transition-all duration-300 delay-200 placeholder-transparent" 
            />
            
            <label 
             htmlFor="input" 
            className="
          absolute left-6 
      transition-all duration-200 ease-in-out 
      cursor-text

      /* --- DEFAULT STATE (When text is present) --- */
      /* Keeps the label at the top even when you click away */
      top-1 
      text-sm 
      text-gray-500 

      /* --- EMPTY STATE (When placeholder is shown) --- */
      /* Push label down to center if field is empty */
      peer-placeholder-shown:top-3.5 
      peer-placeholder-shown:text-base 
      peer-placeholder-shown:text-gray-400 

      /* --- FOCUSED STATE (When user clicks) --- */
      /* Ensure label stays at top and changes color */
      peer-focus:top-1 
      peer-focus:text-sm 
      peer-focus:text-indigo-500 
      peer-focus:font-semibold"
            >
               Write Here
            </label>
          </div>

     
        </section>
      </main>
    </div>
  
    );
};
export default LiveTextMirror;