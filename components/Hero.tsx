
import React from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-blue-900 scroll-mt-20">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-yellow-400 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-blue-400 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-right">
            <div className="inline-flex items-center gap-2 bg-blue-800/50 border border-blue-700 text-yellow-400 px-4 py-2 rounded-full text-sm font-bold mb-6 animate-bounce">
              <CheckCircle2 size={16} />
              دقة متناهية في تقديم الطلبات ومتابعتها
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              ننجز معاملاتكم <br /> 
              <span className="text-yellow-400">بضغطة زر واحترافية</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-xl leading-relaxed">
              مكتب إنجاز زين متخصص في إدارة ومتابعة الطلبات عبر بوابة الشركة السعودية للكهرباء. نضمن لك سير المعاملة بشكل صحيح ومنظم دون عناء.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/966563637670" 
                target="_blank" 
                className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-yellow-500 transition-all shadow-lg hover:shadow-yellow-400/20 transform hover:-translate-y-1"
              >
                اطلب خدمتك الآن
                <ArrowLeft size={20} />
              </a>
              <a 
                href="#services" 
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer"
              >
                استعراض الخدمات
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8 border-t border-blue-800 pt-8">
              <div>
                <div className="text-3xl font-bold text-white">9+</div>
                <div className="text-blue-300 text-sm">سنوات خبرة</div>
              </div>
              <div className="h-10 w-px bg-blue-800"></div>
              <div>
                <div className="text-3xl font-bold text-white">إلكتروني</div>
                <div className="text-blue-300 text-sm">خدمة عن بُعد</div>
              </div>
              <div className="h-10 w-px bg-blue-800"></div>
              <div>
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-blue-300 text-sm">إنجاز مضمون</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
             <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 transform rotate-2">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
                  alt="Digital Service Management" 
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent"></div>
                <div className="absolute bottom-6 right-6 left-6 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
                  <p className="text-white text-sm font-medium leading-relaxed italic">
                    "نلتزم بأقصى درجات الدقة في مراجعة وتقديم طلباتكم إلكترونياً، مع متابعة لحظية لضمان القبول الفوري وتفادي أي ملاحظات فنية."
                  </p>
                </div>
             </div>
             {/* Decorative Elements */}
             <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-400 rounded-full z-0 opacity-40 blur-3xl"></div>
             <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-500 rounded-full z-0 opacity-30 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
