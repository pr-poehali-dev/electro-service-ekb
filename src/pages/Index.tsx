import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });

  const services = [
    {
      icon: 'Zap',
      title: 'Электромонтаж квартир',
      description: 'Полный комплекс работ по электрике в новостройках и при ремонте',
      features: ['Разводка проводки', 'Установка розеток и выключателей', 'Монтаж освещения'],
    },
    {
      icon: 'Building2',
      title: 'Электромонтаж офисов',
      description: 'Проектирование и монтаж электросетей для коммерческих помещений',
      features: ['Силовые линии', 'Структурированные кабельные системы', 'Аварийное освещение'],
    },
    {
      icon: 'Home',
      title: 'Умный дом',
      description: 'Современные системы автоматизации и управления освещением',
      features: ['Датчики движения', 'Управление со смартфона', 'Сценарии освещения'],
    },
    {
      icon: 'ShieldCheck',
      title: 'Замена проводки',
      description: 'Безопасная замена старой электропроводки на новую',
      features: ['Демонтаж старой проводки', 'Современные материалы', 'Гарантия качества'],
    },
    {
      icon: 'Lightbulb',
      title: 'Освещение',
      description: 'Дизайн-проекты освещения и установка светильников',
      features: ['LED-системы', 'Декоративная подсветка', 'Многоуровневое освещение'],
    },
    {
      icon: 'Settings',
      title: 'Электрощитовые',
      description: 'Сборка и монтаж распределительных щитов любой сложности',
      features: ['Подбор автоматики', 'УЗО и дифавтоматы', 'Маркировка цепей'],
    },
  ];

  const gallery = [
    {
      url: 'https://cdn.poehali.dev/projects/44838789-b0a5-44b1-8825-ef7d4134bae5/files/d75f7816-71a0-4863-9024-eb669dcc5eeb.jpg',
      title: 'Монтаж освещения',
    },
    {
      url: 'https://cdn.poehali.dev/projects/44838789-b0a5-44b1-8825-ef7d4134bae5/files/193ba8a3-4c43-46ea-ab1e-e053b0c7fe20.jpg',
      title: 'Прокладка кабеля',
    },
    {
      url: 'https://cdn.poehali.dev/projects/44838789-b0a5-44b1-8825-ef7d4134bae5/files/05270764-064a-4ebd-92d5-91912adfb34b.jpg',
      title: 'Умный дом',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время',
    });
    setFormData({ name: '', phone: '', service: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Icon name="Zap" className="text-primary" size={28} />
              <span className="font-heading font-bold text-xl">ЭлектроМастер</span>
            </div>
            <div className="hidden md:flex gap-6">
              <button
                onClick={() => scrollToSection('services')}
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                Галерея
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                Контакты
              </button>
            </div>
            <Button onClick={() => scrollToSection('order')} size="sm">
              Заказать услугу
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Электромонтаж в Екатеринбурге
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-8">
              Профессиональные услуги электрика с гарантией качества
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button onClick={() => scrollToSection('order')} size="lg" className="text-lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать звонок
              </Button>
              <Button
                onClick={() => scrollToSection('services')}
                size="lg"
                variant="outline"
                className="text-lg"
              >
                Наши услуги
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" className="text-primary" size={24} />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Опыт 15+ лет</h3>
                <p className="text-sm text-muted-foreground">Сертифицированные специалисты</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" className="text-secondary" size={24} />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Быстрый выезд</h3>
                <p className="text-sm text-muted-foreground">В течение 2 часов по городу</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="ShieldCheck" className="text-primary" size={24} />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Гарантия 3 года</h3>
                <p className="text-sm text-muted-foreground">На все виды работ</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-4">
            Наши услуги
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Полный спектр электромонтажных работ для дома и бизнеса
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-primary/20"
              >
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-white" size={32} />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-4">
            Наши работы
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Примеры выполненных проектов
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {gallery.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white font-heading font-semibold text-lg p-6">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="order" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-2xl">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-4">
            Заказать услугу
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Оставьте заявку и мы свяжемся с вами в течение 15 минут
          </p>
          <Card className="border-2">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input
                    required
                    placeholder="Иван Петров"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input
                    required
                    type="tel"
                    placeholder="+7 (900) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Интересующая услуга</label>
                  <Input
                    placeholder="Например: замена проводки"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Комментарий</label>
                  <Textarea
                    placeholder="Опишите ваши пожелания..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">Адрес</h3>
                    <p className="text-muted-foreground">г. Екатеринбург, ул. Малышева, 51</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (343) 123-45-67</p>
                    <p className="text-muted-foreground">+7 (900) 987-65-43</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">Режим работы</h3>
                    <p className="text-muted-foreground">Пн-Вс: 8:00 - 22:00</p>
                    <p className="text-sm text-primary">Работаем без выходных</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=60.597465%2C56.838011&z=12&l=map&pt=60.597465,56.838011,pm2rdl"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="min-h-[400px]"
                  title="Карта Екатеринбурга"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Zap" className="text-primary" size={32} />
            <span className="font-heading font-bold text-2xl">ЭлектроМастер</span>
          </div>
          <p className="text-slate-400 mb-4">Профессиональный электромонтаж в Екатеринбурге</p>
          <p className="text-sm text-slate-500">© 2024 ЭлектроМастер. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
