
import React from 'react';
import { Zap, Code } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-yellow-400 p-2 rounded-lg">
                <Zap className="w-6 h-6 text-blue-900" />
              </div>
              <div>
                <h4 className="text-xl font-bold">مكتب إنجاز زين</h4>
                <p className="text-slate-400 text-xs tracking-widest">للخدمات الكهربائية</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              شريككم الموثوق لإنجاز كافة المعاملات والطلبات الكهربائية في منطقة نجران وباقي مناطق المملكة عن بُعد.
            </p>
          </div>
          
          <div>
            <h5 className="text-lg font-bold mb-6">روابط سريعة</h5>
            <ul className="space-y-4">
              <li><a href="#home" className="text-slate-400 hover:text-yellow-400 transition-colors">الرئيسية</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-yellow-400 transition-colors">عن المكتب</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-yellow-400 transition-colors">خدماتنا</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-yellow-400 transition-colors">تواصل معنا</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-6">نطاق الخدمة</h5>
            <p className="text-slate-400 mb-4 leading-relaxed">
              نخدمكم في مدينة نجران (دحضة) وكافة مناطق المملكة عبر الخدمات الإلكترونية المعتمدة.
            </p>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-sm">
              <p className="text-yellow-400 font-bold mb-1 italic">ملاحظة:</p>
              <p className="text-slate-300">جميع الخدمات تُقدم وفق اشتراطات الشركة السعودية للكهرباء (SEC).</p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col items-center gap-4">
          <div className="text-center text-slate-500 text-sm">
            <p>© {currentYear} مكتب إنجاز زين للخدمات الكهربائية. جميع الحقوق محفوظة.</p>
          </div>
          
          {/* Developer Signature */}
          <div className="flex flex-col items-center gap-2 bg-white/5 px-6 py-3 rounded-2xl border border-white/5 hover:border-yellow-400/30 transition-all group">
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
              <Code size={14} className="text-yellow-400" />
              <span>تصميم وتطوير</span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1">
              <span className="font-bold text-slate-200 group-hover:text-yellow-400 transition-colors">جميل داوود</span>
              <div className="w-1 h-1 bg-slate-700 rounded-full hidden sm:block"></div>
              <a 
                href="tel:0563637670" 
                className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                dir="ltr"
              >
                0563637670
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
