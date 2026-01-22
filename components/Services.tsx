
import React from 'react';
import { 
  FilePlus, 
  Settings2, 
  RefreshCcw, 
  MapPin, 
  UserPlus, 
  UserMinus, 
  Truck, 
  TrendingUp, 
  LayoutGrid, 
  ClipboardCheck,
  AlertCircle
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'تقديم طلبات كهرباء جديدة',
      desc: 'نبدأ معك الخطوات الأولى للحصول على خدمة الكهرباء لمنزلك أو منشأتك.',
      icon: <FilePlus className="text-blue-600" />
    },
    {
      title: 'إضافة عدادات كهرباء',
      desc: 'خدمة إضافة عدادات إضافية للمباني السكنية والتجارية حسب الحاجة.',
      icon: <Settings2 className="text-yellow-600" />
    },
    {
      title: 'نقل ملكية العدادات',
      desc: 'إجراءات نقل ملكية حساب العداد للمالك الجديد بكل سهولة ويسر.',
      icon: <RefreshCcw className="text-blue-600" />
    },
    {
      title: 'نقل مواقع العدادات',
      desc: 'تعديل وتغيير مكان العداد بما يتوافق مع اشتراطات شركة الكهرباء.',
      icon: <MapPin className="text-yellow-600" />
    },
    {
      title: 'إضافة حسابات المستأجرين',
      desc: 'تسجيل العدادات بأسماء المستأجرين لضمان حقوق كافة الأطراف.',
      icon: <UserPlus className="text-blue-600" />
    },
    {
      title: 'فصل العدادات عن المستأجرين',
      desc: 'إلغاء ربط الحساب بالمستأجر بعد انتهاء العقد وإخلاء المسؤولية.',
      icon: <UserMinus className="text-yellow-600" />
    },
    {
      title: 'نقل وإزالة المعدات الكهربائية',
      desc: 'إزالة أو نقل الكيابل، المحولات، والترنسات، وكبائن التوزيع.',
      icon: <Truck className="text-blue-600" />
    },
    {
      title: 'تقوية العدادات',
      desc: 'رفع قدرة العداد (الأمبير) لمواكبة زيادة الأحمال الكهربائية.',
      icon: <TrendingUp className="text-yellow-600" />
    },
    {
      title: 'تجميع العدادات وفصلها',
      desc: 'إعادة تنظيم العدادات في لوحات توزيع مركزية أو فصلها لمشتركين مستقلين.',
      icon: <LayoutGrid className="text-blue-600" />
    },
    {
      title: 'متابعة الطلبات الشاملة',
      desc: 'نتابع طلبك لحظة بلحظة من التقديم وحتى تركيب العداد فعلياً.',
      icon: <ClipboardCheck className="text-yellow-600" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-right">
            <h2 className="text-blue-900 text-sm font-bold tracking-widest uppercase mb-3">خدماتنا التخصصية</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">حلول كهربائية متكاملة</h3>
          </div>
          <div className="bg-blue-100/50 text-blue-800 px-6 py-4 rounded-2xl flex items-center gap-4 border border-blue-200">
            <AlertCircle size={32} className="flex-shrink-0" />
            <p className="text-sm font-medium leading-relaxed">
              لكل خدمة شروط ومتطلبات معتمدة لدى الشركة السعودية للكهرباء يجب الالتزام بها لضمان قبول الطلب.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0">
                  {/* Fixed: Added generic 'any' to ReactElement to avoid 'size' property error during cloneElement */}
                  {React.cloneElement(service.icon as React.ReactElement<any>, { size: 24 })}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
