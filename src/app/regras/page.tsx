"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Users, Scroll, Sword, Shield, AlertTriangle, Eye, EyeOff, MessageSquare } from "lucide-react";

export default function RulesPage() {
  return (
    <main className="min-h-screen relative flex flex-col font-sans bg-abyss text-stone-300 pb-20">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass-panel border-b border-white/5 top-0 left-0 px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-serif text-2xl text-gold font-bold tracking-tighter hover:text-white transition-colors">
          ACdC
        </Link>
        <div className="flex gap-4">
            <Link href="/">
                <Button size="sm" variant="ghost">Voltar ao Início</Button>
            </Link>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-serif text-5xl md:text-6xl text-gold mb-4">Livro de Regras</h1>
          <p className="font-display text-xl text-white tracking-widest">Edição 1.0 - O Manual do Caos</p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl space-y-12">
        
        {/* 1. Objetivo */}
        <section className="glass-panel p-8 md:p-12 rounded-xl border-l-4 border-gold">
          <div className="flex items-center gap-4 mb-6">
             <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                <Shield size={24} />
             </div>
             <h2 className="font-serif text-3xl text-white">1. O Objetivo</h2>
          </div>
          <p className="mb-4 text-lg">
            Vence a partida a equipe que ganhar <strong className="text-white">2 Rodadas</strong> (Melhor de 3).
          </p>
          <div className="bg-abyss/50 p-6 rounded-lg border border-white/5">
            <h3 className="font-bold text-white mb-2">Como ganhar uma rodada?</h3>
            <ul className="list-disc list-inside space-y-2">
                <li>Ao final da rodada, soma-se o <strong>Poder Total</strong> das cartas na mesa de cada equipe.</li>
                <li>A equipe com a maior pontuação vence.</li>
            </ul>
          </div>
        </section>

        {/* 2. Preparação */}
        <section className="glass-panel p-8 md:p-12 rounded-xl border-l-4 border-tech-cyan">
          <div className="flex items-center gap-4 mb-6">
             <div className="w-12 h-12 bg-tech-cyan/10 rounded-full flex items-center justify-center text-tech-cyan">
                <Scroll size={24} />
             </div>
             <h2 className="font-serif text-3xl text-white">2. Preparação e Deck</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
                <h3 className="font-display text-xl text-white mb-4">Montagem do Deck</h3>
                <p className="mb-4 text-sm">Cada jogador deve ter seu próprio deck (Min 25 cartas, Max 40).</p>
                <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-abyss/50 rounded border border-gold/30">
                        <div className="w-3 h-3 bg-gold rotate-45"></div>
                        <div>
                            <span className="text-gold font-bold block">Ouro (Lenda)</span>
                            <span className="text-xs">Apenas 1 cópia por deck.</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-abyss/50 rounded border border-slate-300/30">
                        <div className="w-3 h-3 bg-slate-300 rotate-45"></div>
                        <div>
                            <span className="text-slate-300 font-bold block">Prata (Épica)</span>
                            <span className="text-xs">Até 2 cópias da mesma carta.</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-abyss/50 rounded border border-orange-700/30">
                        <div className="w-3 h-3 bg-orange-700 rotate-45"></div>
                        <div>
                            <span className="text-orange-400 font-bold block">Bronze (Comum)</span>
                            <span className="text-xs">Até 3 cópias da mesma carta.</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div>
                <h3 className="font-display text-xl text-white mb-4">A Mesa</h3>
                <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><span className="text-tech-cyan">➢</span> Equipe A e Equipe B sentam-se em lados opostos.</li>
                    <li className="flex gap-2"><span className="text-tech-cyan">➢</span> Cada jogador tem sua <strong>Fileira Própria</strong>.</li>
                    <li className="flex gap-2"><span className="text-tech-cyan">➢</span> Cemitério ao lado do deck.</li>
                </ul>
            </div>
          </div>
        </section>

        {/* 3. Estrutura */}
        <section className="glass-panel p-8 md:p-12 rounded-xl border-l-4 border-neon-purple">
          <div className="flex items-center gap-4 mb-6">
             <div className="w-12 h-12 bg-neon-purple/10 rounded-full flex items-center justify-center text-neon-purple">
                <Sword size={24} />
             </div>
             <h2 className="font-serif text-3xl text-white">3. Estrutura da Partida</h2>
          </div>

          <div className="space-y-8">
            <div>
                <h3 className="text-xl text-white font-bold mb-2">Passo 1: Mão Inicial e Mulligan</h3>
                <p>Compre 10 cartas. Você pode trocar até <strong>3 cartas</strong> da sua mão antes de começar (Mulligan).</p>
            </div>

            <div>
                 <h3 className="text-xl text-white font-bold mb-2">Passo 2: O Turno (A Batalha)</h3>
                 <p className="italic text-sm text-stone-400 mb-4">Ordem: A1 ➔ B1 ➔ A2 ➔ B2 (Repete)</p>
                 <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-abyss to-stone-900 p-4 rounded border border-neon-purple/30 hover:border-neon-purple transition-colors">
                        <h4 className="font-display text-neon-purple text-lg mb-2">OPÇÃO A: Jogar uma Carta</h4>
                        <p className="text-sm">Coloque uma carta na sua fileira. O efeito (Deploy) ativa na hora. O poder soma ao total.</p>
                    </div>
                    <div className="bg-gradient-to-br from-abyss to-stone-900 p-4 rounded border border-white/10 hover:border-white/30 transition-colors">
                        <h4 className="font-display text-stone-300 text-lg mb-2">OPÇÃO B: Passar a Vez</h4>
                        <p className="text-sm">Se passar, <strong>não joga mais na rodada</strong>. Seu parceiro continua sozinho.</p>
                    </div>
                 </div>
            </div>

             <div>
                <h3 className="text-xl text-white font-bold mb-2">Passo 3: Fim da Rodada</h3>
                <p>Quando todos passarem, quem tiver mais pontos vence. Compre <strong>2 cartas</strong> para a próxima rodada.</p>
            </div>
          </div>
        </section>

        {/* 4. Regras de Dupla */}
        <section className="glass-panel p-8 md:p-12 rounded-xl border-l-4 border-neon-pink">
          <div className="flex items-center gap-4 mb-6">
             <div className="w-12 h-12 bg-neon-pink/10 rounded-full flex items-center justify-center text-neon-pink">
                <Users size={24} />
             </div>
             <h2 className="font-serif text-3xl text-white">4. Regras de Dupla (Os Crias)</h2>
          </div>

          <div className="grid gap-6">
             <div className="flex items-start gap-4">
                <EyeOff className="text-neon-pink mt-1 shrink-0" />
                <div>
                    <h4 className="font-bold text-white">O Silêncio das Cartas</h4>
                    <p>Você <strong>NÃO</strong> pode mostrar sua mão para seu parceiro.</p>
                </div>
             </div>
             <div className="flex items-start gap-4">
                <MessageSquare className="text-neon-pink mt-1 shrink-0" />
                <div>
                    <h4 className="font-bold text-white">A Comunicação Vaga</h4>
                    <p>Pode falar, mas sem dar "spoilers" exatos.</p>
                    <div className="mt-2 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="text-green-400">✅ "Tenho como matar aquele tanque."</div>
                        <div className="text-red-400">❌ "Tenho o Pedro na mão. Joga o arqueiro."</div>
                    </div>
                </div>
             </div>
          </div>
        </section>

         {/* 5. Glossário */}
         <section className="glass-panel p-8 md:p-12 rounded-xl border-l-4 border-white">
            <h2 className="font-serif text-3xl text-white mb-6">5. Glossário</h2>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                {[
                    { term: "Deslocamento (Deploy)", def: "Habilidade ativa assim que a carta toca a mesa." },
                    { term: "Ordem", def: "Habilidade manual. Você clica para ativar em um turno futuro." },
                    { term: "Último Suspiro", def: "Ativa quando a carta vai para o cemitério." },
                    { term: "Escudo", def: "Bloqueia a primeira instância de dano recebido." },
                    { term: "Armadura", def: "Vida extra. Protege o Poder da carta até quebrar." },
                    { term: "Condenado", def: "Se sair de jogo, é removida da partida (não vai pro cemitério)." },
                ].map((item, i) => (
                    <div key={i} className="pb-4 border-b border-white/5 last:border-0">
                        <span className="text-white font-bold block mb-1">{item.term}</span>
                        <span className="text-sm text-stone-400">{item.def}</span>
                    </div>
                ))}
            </div>
         </section>

         {/* Dicas */}
         <section className="bg-gold/10 p-8 rounded-xl border border-gold/30 text-center">
            <div className="flex justify-center mb-4 text-gold">
                <AlertTriangle size={32} />
            </div>
            <h3 className="font-serif text-2xl text-gold mb-2">Dica do Oráculo</h3>
            <p className="italic text-stone-300 max-w-2xl mx-auto">
                "Não gaste tudo. Se já garantiu a rodada, passe a vez. A vantagem de cartas (ter mais cartas na mão que o oponente) é a chave para vencer a última rodada."
            </p>
         </section>

      </div>
        
    </main>
  );
}
