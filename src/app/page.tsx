"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card3D } from "@/components/game/Card";
import { Scroll, Users, Sword, Shield, Skull, BookOpen, Download } from "lucide-react";
import { motion } from "framer-motion";

import PedroImg from "../images/Pedro.png";
import GamerHardImg from "../images/GamerHard.png";
import PHImg from "../images/PH.png";
import VictorImg from "../images/Victor.png";
import IzumiImg from "../images/Izumi.png";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col font-sans">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass-panel border-b border-white/5 top-0 left-0 px-6 py-4 flex justify-between items-center">
        <div className="font-serif text-2xl text-gold font-bold tracking-tighter">
          ACdC
        </div>
        <div className="hidden md:flex gap-8 text-sm font-display tracking-widest text-stone-300">
          <a href="#hero" className="hover:text-neon-purple transition-colors">Início</a>
          <a href="#how-to-play" className="hover:text-neon-purple transition-colors">Como Jogar</a>
          <Link href="/cartas" className="hover:text-neon-purple transition-colors">Cartas</Link>
          <a href="#lore" className="hover:text-neon-purple transition-colors">Lendas</a>
          <Link href="/historia" className="hover:text-neon-purple transition-colors">História</Link>
        </div>
        <div className="hidden md:flex">
             <Button size="sm" variant="outline">
               Baixar PDF
             </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-cyan/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-8xl font-bold text-white mb-2 tracking-tight drop-shadow-2xl"
          >
            As Crônicas <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-600">dos Crias</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="font-display text-2xl md:text-4xl text-stone-400 mb-8 -rotate-2 transform"
          >
            &quot;Onde a amizade acaba e a <span className="text-neon-pink text-glow">trapaça</span> começa.&quot;
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col md:flex-row gap-6 mt-8"
          >
            <Button size="lg" glow>
              Baixar o Jogo
            </Button>
            <Link href="/historia" legacyBehavior>
              <Button size="lg" variant="outline" className="border-neon-purple text-neon-purple hover:bg-neon-purple/10">
                Ler a História
              </Button>
            </Link>
            <Link href="/regras" legacyBehavior>
                <Button size="lg" variant="secondary">Ler as Regras</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Selling Points */}
      <section className="py-20 bg-stone/30 border-y border-white/5 relative z-10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-purple to-purple-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users size={32} className="text-white" />
            </div>
            <h3 className="font-display text-2xl text-white mb-3">Duplas (2v2)</h3>
            <p className="text-stone-400">Cooperativo de verdade. Monte estratégias com seu parceiro ou afundem juntos no abismo.</p>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-pink to-pink-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Skull size={32} className="text-white" />
            </div>
            <h3 className="font-display text-2xl text-white mb-3">Trash Talk & Blefe</h3>
            <p className="text-stone-400">Não é só sobre cartas. É sobre entrar na mente do oponente e forçar o erro.</p>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-yellow-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Scroll size={32} className="text-white" />
            </div>
            <h3 className="font-display text-2xl text-white mb-3">Pontos Compartilhados</h3>
            <p className="text-stone-400">A vitória é da dupla. Se um cai, os dois caem. Gerencie seus recursos em conjunto.</p>
          </div>

        </div>
      </section>

      {/* How To Play */}
      <section id="how-to-play" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-16">
            <h2 className="font-serif text-4xl text-gold mb-4 border-b-2 border-gold/30 pb-2">Como Jogar</h2>
            <p className="text-stone-400 max-w-2xl text-center">
              Sem manuais de 100 páginas. Aqui o que importa é a prática.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: BookOpen, title: "Monte o Deck", desc: "Escolha as Lendas e preencha com bronzes." },
              { icon: Download, title: "Compre 10", desc: "Comece com 10 cartas. Escolha o que trocar." },
              { icon: Sword, title: "Jogue ou Passe", desc: "Use uma carta por turno ou passe a vez para sempre." },
              { icon: Shield, title: "Melhor de 3", desc: "Vença 2 rounds para humilhar os rivais." }
            ].map((step, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-lg border-l-4 border-tech-cyan">
                <step.icon size={24} className="text-tech-cyan mb-4 mx-auto" />
                <h4 className="font-bold text-white mb-2">{step.title}</h4>
                <p className="text-sm text-stone-400">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 glass-panel border border-white/10 rounded-xl flex flex-col items-center">
             <h3 className="font-display text-2xl mb-6 text-white">Campo de Batalha (Resumo)</h3>
             {/* Simple Board Diagram Visual */}
             <div className="w-full max-w-3xl aspect-[16/9] bg-abyss border-2 border-stone-700 rounded-lg relative opacity-80 grid grid-rows-2 gap-4 p-4">
                 <div className="bg-red-900/20 border border-red-900/50 rounded flex items-center justify-center text-red-500 font-display">Inimigos (Total: 45)</div>
                 <div className="bg-blue-900/20 border border-blue-900/50 rounded flex items-center justify-center text-blue-500 font-display">Aliados (Total: 32)</div>
             </div>
             <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/regras" legacyBehavior>
                    <Button variant="primary" size="sm" glow>Ler Regras Completas</Button>
                </Link>
                <Link href="/regras" legacyBehavior>
                    <Button variant="outline" size="sm">Glossário</Button>
                </Link>
                <Button variant="secondary" size="sm">Download PDF</Button>
             </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 bg-stone/20">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl text-white mb-12 text-center">O Grimório</h2>
          
          <div className="flex flex-wrap justify-center gap-8">
            <Card3D 
              name="Pedro, O Olho" 
              power={5} 
              provision={13} 
              rarity="gold" 
              type="unit"
              image={PedroImg.src}
              description="Deploy: Remova todos os status do inimigo e aplique 'Marcado para Morrer'."
              lore="Pedro não erra. Se ele te viu, você já está morto; o tempo é que ainda não percebeu."
            />
            <Card3D 
              name="GamerHard" 
              power={3} 
              provision={12} 
              rarity="gold" 
              type="unit"
              image={GamerHardImg.src}
              description="Deploy: Revele 2 cartas da mão do oponente. Roube uma e troque por uma sua."
              lore="Ele vencia reis e dragões nas cartas, até ser banido por ganhar demais."
            />
            <Card3D 
              name="PH, O Monstro" 
              power={10} 
              provision={14} 
              rarity="gold" 
              type="unit"
              image={PHImg.src}
              description="Fim do Turno: Se houver alguém na mesma fileira, causa 2 de dano a todos e 1 a si mesmo."
              lore="A paranoia derreteu sua mente. Naquele campo maldito, tudo que respira é inimigo."
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/cartas">
                <Button variant="primary">Ver Todas as Cartas</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Lore */}
      <section id="lore" className="py-24 relative">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold via-abyss to-abyss"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="font-serif text-5xl text-gold mb-6">As 5 Lendas</h2>
                <p className="text-xl text-stone-300 font-serif italic mb-8">
                  &quot;O mundo não acabou com uma explosão, mas com um crash de servidor.&quot;
                </p>
                <p className="text-stone-400 mb-6 leading-relaxed">
                  No vazio digital do Laboratório Vexx, cinco entidades disputam o controle da realidade. 
                  <span className="text-white font-bold"> Pedro</span>, o olho que tudo vê; 
                  <span className="text-white font-bold"> Izumi</span>, a lâmina silenciosa; 
                  <span className="text-white font-bold"> GamerHard</span>, o estrategista do azar; 
                  <span className="text-white font-bold"> PH</span>, o monstro da névoa; e 
                  <span className="text-white font-bold"> Victor</span>, a muralha intransponível.
                </p>
                <Link href="/lendas" legacyBehavior>
                    <Button variant="outline">Ler a História Completa</Button>
                </Link>
             </div>
             
             {/* Character List / Visual */}
             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
               {[
                 { name: "Pedro", img: PedroImg },
                 { name: "Izumi", img: IzumiImg },
                 { name: "GamerHard", img: GamerHardImg },
                 { name: "PH", img: PHImg },
                 { name: "Victor", img: VictorImg }
               ].map((char) => (
                 <Link href="/lendas" key={char.name} legacyBehavior>
                    <div className="glass-panel p-4 rounded-xl text-center hover:bg-white/5 transition-colors cursor-pointer group flex flex-col items-center">
                        <div className="w-16 h-16 mx-auto rounded-full mb-3 border-2 border-gold/20 group-hover:border-gold group-hover:scale-110 transition-all duration-300 overflow-hidden relative shadow-lg">
                            <Image src={char.img} alt={char.name} fill className="object-cover" />
                        </div>
                        <span className="font-display text-sm text-stone-300 tracking-widest group-hover:text-white transition-colors">{char.name}</span>
                    </div>
                 </Link>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/5 text-center">
         <h2 className="font-serif text-2xl text-stone-600 mb-4">As Crônicas dos Crias</h2>
         <p className="text-stone-700 text-sm">© 2026. Feito com ódio e café.</p>
         <div className="flex justify-center gap-6 mt-6">
             <a href="#" className="text-stone-600 hover:text-neon-pink">Discord</a>
             <a href="#" className="text-stone-600 hover:text-tech-cyan">Twitter</a>
             <a href="#" className="text-stone-600 hover:text-gold">Instagram</a>
         </div>
      </footer>
    </main>
  );
}
