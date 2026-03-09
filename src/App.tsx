/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  CheckCircle2, 
  Flame, 
  Zap, 
  Leaf, 
  TrendingUp, 
  ArrowRight, 
  Star, 
  ShoppingCart, 
  ShieldCheck, 
  Download 
} from "lucide-react";

const CHECKOUT_URL = "https://pay.kambafy.com/checkout/0e9f5823-2e30-4904-aaef-c08514997a30";

export default function App() {
  const trackCtaClick = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout');
    }
  };

  const handleCtaClick = () => {
    trackCtaClick();
    window.location.href = CHECKOUT_URL;
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-orange-50 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center lg:flex-row lg:text-left lg:justify-between">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-emerald-700 uppercase bg-emerald-100 rounded-full">
                Lançamento 2026
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl leading-tight mb-6">
                PROJETO CORPO SECO 2026 – <span className="text-emerald-600">Seca Gordura</span> com Receitas Naturais
              </h1>
              <p className="max-w-2xl mx-auto lg:mx-0 text-lg text-slate-600 mb-10 leading-relaxed">
                Descubra o método alimentar que está ajudando centenas de pessoas a perder peso de forma rápida, saudável e sustentável.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={handleCtaClick}
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-emerald-600 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-200"
                >
                  QUERO COMEÇAR AGORA
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="mt-8 flex items-center justify-center lg:justify-start gap-2 text-sm text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Pagamento 100% Seguro</span>
                <span className="mx-2">•</span>
                <Download className="w-4 h-4 text-emerald-500" />
                <span>Acesso Imediato</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-16 lg:mt-0 lg:w-5/12 relative"
            >
              <div className="relative z-10 bg-white p-4 rounded-3xl shadow-2xl border border-slate-100">
                <img 
                  src="https://picsum.photos/seed/healthy-food/800/1000" 
                  alt="Ebook Mockup Projeto Corpo Seco" 
                  className="rounded-2xl w-full object-cover aspect-[3/4]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-2xl shadow-xl hidden sm:block">
                  <p className="text-3xl font-bold">100%</p>
                  <p className="text-xs uppercase tracking-wider font-semibold">Natural</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-200 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-200 rounded-full blur-3xl opacity-50"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-slate-900">Você já se sentiu assim?</h2>
            <div className="grid gap-6">
              {[
                "Tentou várias dietas e nunca conseguiu manter o peso?",
                "Sente falta de energia e cansaço constante no dia a dia?",
                "Se sente frustrada ao olhar no espelho e não ver resultados?",
                "Acha que emagrecer exige passar fome ou gastar fortunas?"
              ].map((text, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">!</div>
                  <p className="text-slate-700 text-left">{text}</p>
                </motion.div>
              ))}
            </div>
            <p className="mt-10 text-xl text-slate-600 italic">
              "A verdade é que o problema não é você, mas sim o método que você estava usando."
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <img 
                src="https://picsum.photos/seed/nutrition/800/600" 
                alt="Alimentação Saudável" 
                className="rounded-3xl shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Conheça a Solução Definitiva</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                O <strong>Projeto Corpo Seco 2026</strong> reúne receitas simples, econômicas e eficazes para acelerar o metabolismo, reduzir gordura abdominal e melhorar a sua energia diária.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Descubra o método alimentar que está ajudando centenas de pessoas a perder peso de forma rápida, saudável e sustentável. Sem dietas malucas. Sem promessas irreais. Apenas um plano prático que funciona.
              </p>
              <button 
                onClick={handleCtaClick}
                className="inline-flex items-center text-emerald-600 font-bold hover:text-emerald-700 transition-colors"
              >
                QUERO CONHECER O MÉTODO <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">O que você vai encontrar no Projeto</h2>
            <p className="text-emerald-200">Tudo o que você precisa para transformar seu corpo</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Receitas Práticas", desc: "Pratos deliciosos que ficam prontos em minutos." },
              { title: "Plano Alimentar de 7 Dias", desc: "Um guia passo a passo do que comer em cada refeição." },
              { title: "Sucos Detox", desc: "Bebidas que limpam seu organismo e desincham." },
              { title: "Bebidas Termogênicas", desc: "Acelere a queima de gordura de forma natural." },
              { title: "Lista de Compras", desc: "Economize tempo e dinheiro no supermercado." },
              { title: "Estratégias de Resultados", desc: "Dicas extras para potencializar seu emagrecimento." }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-emerald-800/50 p-8 rounded-2xl border border-emerald-700/50"
              >
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-emerald-100/80">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Flame, label: "Queima de gordura", color: "text-orange-500", bg: "bg-orange-50" },
              { icon: Zap, label: "Mais energia", color: "text-yellow-500", bg: "bg-yellow-50" },
              { icon: Leaf, label: "Alimentação natural", color: "text-emerald-500", bg: "bg-emerald-50" },
              { icon: TrendingUp, label: "Resultados progressivos", color: "text-blue-500", bg: "bg-blue-50" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mb-4`}>
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <span className="font-bold text-slate-800">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Histórias de Sucesso</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Mariana Silva", text: "Perdi 4kg na primeira semana! As receitas são deliciosas e eu não sinto fome. Finalmente algo que funciona.", role: "Perdeu 12kg" },
              { name: "Ricardo Santos", text: "Minha disposição mudou completamente. O plano de 7 dias é muito fácil de seguir, mesmo com a rotina corrida.", role: "Perdeu 8kg" },
              { name: "Ana Paula", text: "O suco detox é maravilhoso. Desinchei muito rápido e minhas roupas voltaram a servir. Recomendo para todos!", role: "Perdeu 15kg" }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />)}
                </div>
                <p className="text-slate-600 mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${t.name}`} alt={t.name} referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-sm text-emerald-600 font-semibold">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Como Funciona o Acesso</h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Clique no botão", desc: "Escolha a melhor oferta e clique no botão de compra." },
              { step: "02", title: "Pagamento Seguro", desc: "Realize o pagamento em nossa plataforma 100% protegida." },
              { step: "03", title: "Acesso Imediato", desc: "Receba o material direto no seu e-mail logo após a confirmação." }
            ].map((s, i) => (
              <div key={i} className="relative text-center">
                <div className="text-6xl font-black text-slate-100 absolute -top-10 left-1/2 -translate-x-1/2 -z-10">{s.step}</div>
                <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                <p className="text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Comece Hoje Sua Transformação</h2>
            <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
              Não deixe para amanhã o corpo que você pode começar a construir hoje. O risco é todo nosso com nossa garantia de satisfação.
            </p>
            <button 
              onClick={handleCtaClick}
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-emerald-900 bg-white rounded-2xl hover:bg-orange-50 transition-all shadow-2xl hover:scale-105 active:scale-95"
            >
              <ShoppingCart className="mr-3 w-6 h-6" />
              QUERO ACESSAR O PROJETO CORPO SECO
            </button>
            <p className="mt-6 text-emerald-200 text-sm flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Compra segura e garantida
            </p>
          </motion.div>
        </div>
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-slate-400 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-6 text-sm max-w-2xl mx-auto leading-relaxed">
            “Este produto não substitui orientação médica. Resultados podem variar de pessoa para pessoa. Sempre consulte um profissional de saúde antes de iniciar qualquer programa de exercícios ou dieta.”
          </p>
          <div className="flex justify-center gap-8 mb-8 text-xs uppercase tracking-widest font-semibold">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Contato</a>
          </div>
          <p className="text-xs">
            &copy; 2026 Projeto Corpo Seco. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
