
import React from 'react';
import { ShieldCheck, Award, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      title: 'خبرة عريقة',
      desc: 'نعمل في هذا المجال منذ عام 2017 بخبرة تمتد لأكثر من 9 سنوات.',
      icon: <Award className="w-8 h-8 text-yellow-500" />
    },
    {
      title: 'امتثال كامل',
      desc: 'جميع طلباتنا تُنفذ بدقة وفق اشتراطات الشركة السعودية للكهرباء.',
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />
    },
    {
      title: 'سرعة الإنجاز',
      desc: 'نقدر وقتكم، لذا نسعى دائماً لإنهاء المعاملات في أسرع وقت ممكن.',
      icon: <Zap className="w-8 h-8 text-yellow-500" />
    },
    {
      title: 'خدمة عن بُعد',
      desc: 'نقدم خدماتنا لك أينما كنت دون الحاجة للحضور الشخصي للمكتب.',
      icon: <Users className="w-8 h-8 text-blue-600" />
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="text-right">
            <h2 className="text-blue-900 text-sm font-bold tracking-widest uppercase mb-3">من نحن</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">مكتب إنجاز زين للخدمات الكهربائية</h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              نحن مكتب متخصص في تقديم الاستشارات والخدمات الكهربائية المهنية عبر الأنظمة الرقمية. نسهل عليك رحلة التقديم على خدمات الطاقة والكهرباء من خلال خبرتنا العميقة في التعامل مع المنصات الحكومية والخدمية.
            </p>
            <div className="bg-slate-50 border-r-4 border-yellow-400 p-6 rounded-l-2xl">
              <p className="text-slate-700 font-medium">
                نهدف إلى توفير وقت وجهد العميل من خلال نظام إدارة معاملات ذكي يضمن الشفافية والسرعة في كل خطوة.
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-900 rounded-3xl transform rotate-3 group-hover:rotate-1 transition-transform duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" 
              alt="Modern Office Consulting" 
              className="relative z-10 rounded-3xl shadow-xl w-full h-[400px] object-cover group-hover:brightness-110 transition-all duration-500"
            />
            {/* Added a subtle overlay to make it feel more utility-focused */}
            <div className="absolute inset-0 z-20 bg-blue-900/10 rounded-3xl pointer-events-none"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-yellow-200 transition-all group hover:-translate-y-2">
              <div className="mb-6 inline-block bg-white p-4 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
