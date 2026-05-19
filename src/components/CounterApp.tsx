import { useState, useEffect } from 'react';

const CounterApp = () => {
    const [count, setCount] = useState(0);  
    const [textColor, setTextColor] = useState<string>('text-red-600');

    useEffect(() => {
      if (count % 2 === 0) {
        setTextColor('text-red-600');
      }
      else {
        setTextColor('text-green-600');
      }
    }, [count]);

    function addCount() {
      setCount(c => c + 1);
    }

    function subtractCount(){
      setCount(c => c - 1);
    }

    return (
   <div className="min-h-screen font-sans text-slate-800 relative selection:bg-violet-500 selection:text-white pb-20">  
      <main className="relative z-10 pt-10 flex flex-col items-center px-4 w-full">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-500">Counter</span> Application
          </h1>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Prepared by: Mary Hannah Caryl D. Reyes
          </p>
        </div>
        <section className="w-full max-w-3xl mx-auto flex flex-col gap-10 items-center">
        
         <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 min-h-[100px] text-center">
             <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">[ ODD OR EVEN ]</h3>
                  <div className={`text-medium font-medium ${textColor} break-words transition-colors duration-300 select-none`}>
              The number {count} is an {count % 2 === 0 ? 'even' : 'odd'} number.
            </div>
          </div>

          <div className="flex items-center bg-slate-50 gap-4 p-6 rounded-lg shadow-md border border-purple-100 w-fit">
            <button
              onClick={() => subtractCount()}
              className="h-10 w-10 flex items-center justify-center bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition active:scale-95 font-bold text-lg"
            >
              -
            </button>
            <span className={`text-2xl font-medium ${textColor} w-12 text-center select-none`}>
              {count}
            </span>
           <button
              onClick={() => addCount()}
              className="h-10 w-10 flex items-center justify-center bg-purple-600 text-white rounded-md hover:bg-purple-700 transition active:scale-95 font-bold text-lg"
            >
              +
            </button>

          </div>
        </section>

      </main>
    </div>
    );
};
export default CounterApp;