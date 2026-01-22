
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
        <div className="text-center mb-16">
          <h2 className="text-blue-900 text-sm font-bold tracking-widest uppercase mb-3">من نحن</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">مكتب إنجاز زين للخدمات الكهربائية</h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            نحن مكتب متخصص في تقديم الاستشارات والخدمات الكهربائية المهنية. مهمتنا هي تسهيل الإجراءات الكهربائية لعملائنا وضمان تنفيذها وفقاً للمعايير والأنظمة المعتمدة في المملكة العربية السعودية.
          </p>
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
