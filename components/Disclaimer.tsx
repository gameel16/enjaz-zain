
import React from 'react';
import { ShieldAlert } from 'lucide-react';

const Disclaimer: React.FC = () => {
  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-2 border-red-100 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm">
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-red-500 flex-shrink-0">
            <ShieldAlert size={32} />
          </div>
          <div className="text-center md:text-right">
            <h4 className="text-xl font-bold text-slate-900 mb-2">إخلاء مسؤولية</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              يتم تنفيذ جميع الطلبات وفق اشتراطات وضوابط الشركة السعودية للكهرباء، ولا يتحمل المكتب أي مسؤولية عن أي خلافات أو مخالفات خارجة عن هذه الاشتراطات والأنظمة المعمول بها.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
