
import React from 'react';
import { Phone, MessageSquare, Clock, MapPin, Calendar, Moon } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-blue-900 text-sm font-bold tracking-widest uppercase mb-3">تواصل معنا</h2>
            <h3 className="text-3xl font-extrabold text-slate-900 mb-8">نحن هنا لخدمتكم وإنجاز معاملاتكم</h3>
            
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">اتصال مباشر</h4>
                  <a href="tel:0563637670" className="text-xl text-slate-600 hover:text-blue-600 transition-colors tracking-widest">0563637670</a>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 flex-shrink-0">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">واتساب (متاح دائماً)</h4>
                  <p className="text-slate-600 mb-1">استقبال الاستفسارات والطلبات حتى خارج أوقات الدوام</p>
                  <a href="https://wa.me/966563637670" className="text-lg font-bold text-green-600 hover:underline">ارسل رسالة الآن</a>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-600 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">الموقع الجغرافي</h4>
                  <p className="text-slate-600">نجران – دحضة – غرب المحطة الوسطى</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            
            <div className="relative z-10">
              <h4 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Clock className="text-yellow-400" />
                أوقات العمل الرسمية
              </h4>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Calendar className="text-slate-400 mt-1" size={20} />
                  <div>
                    <p className="font-bold">من الأحد إلى الخميس</p>
                    <p className="text-slate-400 text-sm">يوم الجمعة والسبت إجازة رسمية</p>
                  </div>
                </div>

                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                    <span className="flex items-center gap-2 font-medium">
                      <Clock size={18} className="text-yellow-400" />
                      الأيام العادية
                    </span>
                    <span className="text-yellow-400 font-bold">8:00 ص – 4:00 ع</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 font-medium">
                      <Moon size={18} className="text-purple-400" />
                      شهر رمضان المبارك
                    </span>
                    <span className="text-purple-400 font-bold">10:00 ص – 5:00 م</span>
                  </div>
                </div>

                <p className="text-sm text-slate-400 italic text-center pt-4">
                  * نذكركم بإمكانية تنفيذ الخدمات عن بُعد دون الحاجة للحضور للمكتب
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
