"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { Sword, Shield, Eye, Ghost, Lock, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import PedroImg from "../../images/Pedro.png";
import GamerHardImg from "../../images/GamerHard.png";
import PHImg from "../../images/PH.png";
import VictorImg from "../../images/Victor.png";
import IzumiImg from "../../images/Izumi.png";

const legends = [
  {
    id: "pedro",
    name: "Pedro, O Olho da Onisciência",
    role: "Ouro (Lendária) - Caçador",
    power: 5,
    provision: 13,
    color: "from-gold to-yellow-900",
    icon: Eye,
    image: PedroImg,
    tags: ["Humano", "Caçador", "Aprimorado"],
    ability: {
      name: "Protocolo de Abate",
      type: "Deploy (Deslocamento)",
      desc: "Escolha uma unidade inimiga. Remova TODOS os status defensivos dela (Escudo, Armadura, Véu) e aplique o status 'Marcado para Morrer'."
    },
    passive: {
      name: "Sinergia de Dupla",
      desc: "Se o seu Aliado causar qualquer dano à unidade marcada neste turno, ela é DESTRUÍDA instantaneamente."
    },
    quote: "“Parceiro, apenas arranhe a armadura dele. Eu cuido do resto.”",
    lore: "Quando a catarata ameaçou sua mira, Pedro buscou o Doutor Vexx. Trocou seu olho natural por uma orbe voltaica. O cristal sussurra, calculando trajetórias antes da flecha voar. Pedro não erra; é uma impossibilidade física."
  },
  {
    id: "gamerhard",
    name: "GamerHard, O Estrategista Exilado",
    role: "Ouro (Lendária) - Bandido",
    power: 3,
    provision: 12,
    color: "from-neon-purple to-purple-900",
    icon: Ghost,
    image: GamerHardImg,
    tags: ["Humano", "Bandido", "Soldado (Ex)"],
    ability: {
        name: "Mão Trocada (Sleight of Hand)",
        type: "Deploy (Deslocamento)",
        desc: "Revele 2 cartas aleatórias da mão do oponente. Escolha uma para ROUBAR e troque por uma carta da sua mão."
      },
    passive: {
      name: "Tática de Guerrilha",
      desc: "A carta entregue ao oponente é revelada para todos. O valor tático supera o poder bruto."
    },
    quote: "“Se o vir na mesa de jogo, corra... ou prepare-se para perder tudo.”",
    lore: "Expulso de sua terra natal por vencer demais. Ele não luta com espadas, mas com a mente. Dizem que ele carrega um baralho de pele de demônio e já venceu um dragão apenas para roubar seu ouro."
  },
  {
    id: "ph",
    name: "PH, O Monstro do Campo",
    role: "Ouro (Lendária) - Monstro",
    power: 10,
    provision: 14,
    color: "from-red-900 to-black",
    icon: Sword,
    image: PHImg,
    tags: ["Monstro", "Amaldiçoado"],
    ability: {
        name: "Paranoia Nebulosa",
        type: "Passiva de Turno",
        desc: "Ao final de CADA turno, se houver qualquer outra unidade na mesma fileira: Cause 2 de dano a todas elas e PH recebe 1 de dano."
      },
    passive: {
      name: "Zona de Negação",
      desc: "Ele exige isolamento total. Se jogar ao lado dele, prepare-se para o massacre."
    },
    quote: "“Encontraram apenas a névoa e... 'aquilo'. Naquele campo maldito, tudo que se move é inimigo.”",
    lore: "Enviado para uma missão na névoa e esquecido lá. A paranoia distorceu seu corpo em uma massa de músculos e fúria cega. Ele não distingue amigo de inimigo."
  },
  {
    id: "victor",
    name: "Victor, O Portador da Porta",
    role: "Ouro (Lendária) - Tanque",
    power: 6,
    provision: 13,
    color: "from-stone-500 to-stone-800",
    icon: Shield,
    image: VictorImg,
    tags: ["Humano", "Guardião", "Tanque"],
    ability: {
        name: "A Última Barreira",
        type: "Deploy (Deslocamento)",
        desc: "Conceda Escudo a TODAS as unidades na fileira do seu Aliado."
      },
    passive: {
      name: "Ordem (Manual)",
      desc: "Se uma unidade aliada perder o escudo, Victor ganha +2 de Poder."
    },
    quote: "“Fiquem atrás de mim. Enquanto eu estiver de pé, o inferno não passará.”",
    lore: "Carcereiro de uma prisão antiga. Quando uma entidade tentou escapar, ele arrancou a porta sagrada das dobradiças para esmagá-la. Agora, vaga carregando a porta nas costas como um escudo intransponível."
  },
  {
    id: "izumi",
    name: "Izumi, A Lâmina Silenciosa",
    role: "Ouro (Lendária) - Assassina",
    power: 4,
    provision: 11,
    color: "from-tech-cyan to-blue-900",
    icon: Zap,
    image: IzumiImg,
    tags: ["Humano", "Ninja", "Cibernético"],
    ability: {
        name: "Flash Step",
        type: "Deploy (Deslocamento)",
        desc: "Causa 3 de dano a uma unidade inimiga. Se matar, move-se para a outra fileira e reseta sua habilidade."
      },
    passive: {
      name: "Protocolo Fantasma",
      desc: "Não pode ser alvo de feitiços inimigos enquanto estiver sozinha na fileira."
    },
    quote: "“Você nem viu, viu?”",
    lore: "Uma assassina cibernética aprimorada nos becos de Neo-Tokyo. Sua espada vibra em uma frequência que corta o próprio ar."
  },
];

export default function LegendsPage() {
  const [selectedLegend, setSelectedLegend] = useState(legends[0]);

  return (
    <main className="min-h-screen font-sans bg-abyss text-stone-300 pb-20 relative overflow-hidden">
        
      {/* Background Ambience */}
      <div className={`absolute inset-0 transition-colors duration-1000 opacity-20 bg-gradient-to-br ${selectedLegend.color}`}></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30 pointer-events-none"></div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 glass-panel border-b border-white/5 top-0 left-0 px-6 py-4 flex justify-between items-center bg-abyss/80">
        <Link href="/" className="font-serif text-2xl text-gold font-bold tracking-tighter hover:text-white transition-colors z-50">
          ACdC
        </Link>
        <div className="flex gap-4 z-50">
            <Link href="/">
                <Button size="sm" variant="ghost">Voltar</Button>
            </Link>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-4 pt-32 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 h-full">
        
        {/* Left: Selector List */}
        <div className="lg:col-span-4 space-y-4">
            <h1 className="font-serif text-4xl text-white mb-8 border-l-4 border-gold pl-4">As 5 Lendas</h1>
            <div className="flex flex-col gap-3">
                {legends.map((legend) => (
                    <button
                        key={legend.id}
                        onClick={() => setSelectedLegend(legend)}
                        className={`text-left p-4 rounded-xl border transition-all duration-300 flex items-center gap-4 group ${
                            selectedLegend.id === legend.id 
                            ? "bg-white/10 border-gold shadow-[0_0_15px_rgba(202,138,4,0.3)] transform scale-105" 
                            : "bg-stone/20 border-white/5 hover:bg-stone/40 hover:pl-6"
                        }`}
                    >
                        <div className={`w-12 h-12 rounded-full border-2 border-white/10 overflow-hidden relative shrink-0 shadow-lg`}>
                            <Image src={legend.image} alt={legend.name} fill className="object-cover" />
                        </div>
                        <div>
                            <span className={`block font-display tracking-wide ${selectedLegend.id === legend.id ? "text-white" : "text-stone-400 group-hover:text-white"}`}>
                                {legend.name.split(",")[0]}
                            </span>
                            <span className="text-xs text-stone-500 uppercase">{legend.role.split("-")[1]}</span>
                        </div>
                    </button>
                ))}
            </div>
        </div>

        {/* Right: Legend Detail View */}
        <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedLegend.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="glass-panel p-8 rounded-2xl border border-white/10 relative overflow-hidden"
                >
                    {/* Character Card Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start gap-6 border-b border-white/10 pb-6 mb-6">
                        <div className="flex gap-6 items-center flex-1">
                            <div className="relative w-28 h-28 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl shrink-0 hidden md:block">
                                <Image src={selectedLegend.image} alt={selectedLegend.name} fill className="object-cover" priority />
                            </div>
                            <div>
                                <h2 className="font-serif text-3xl md:text-5xl text-white mb-2 leading-tight">{selectedLegend.name}</h2>
                                <div className="flex flex-wrap gap-2 text-sm">
                                    {selectedLegend.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-stone-400 border border-white/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <span className="text-xs text-stone-500 uppercase mb-1">Poder</span>
                                <div className="w-14 h-14 rounded-full border-2 border-white/20 flex items-center justify-center text-2xl font-bold text-white bg-abyss">
                                    {selectedLegend.power}
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-xs text-stone-500 uppercase mb-1">Provisão</span>
                                <div className="w-14 h-14 rounded-full border-2 border-gold flex items-center justify-center text-2xl font-bold text-gold bg-abyss shadow-[0_0_10px_rgba(202,138,4,0.2)]">
                                    {selectedLegend.provision}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Abilities */}
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="bg-abyss/40 p-6 rounded-lg border border-white/5 hover:border-white/20 transition-colors">
                            <div className="flex items-center gap-2 mb-3 text-neon-purple">
                                <Zap size={18} />
                                <span className="font-bold uppercase tracking-widest text-xs">{selectedLegend.ability.type}</span>
                            </div>
                            <h3 className="font-display text-xl text-white mb-2">{selectedLegend.ability.name}</h3>
                            <p className="text-stone-400 text-sm leading-relaxed">{selectedLegend.ability.desc}</p>
                        </div>

                        <div className="bg-abyss/40 p-6 rounded-lg border border-white/5 hover:border-white/20 transition-colors">
                             <div className="flex items-center gap-2 mb-3 text-tech-cyan">
                                <Shield size={18} />
                                <span className="font-bold uppercase tracking-widest text-xs">Passiva / Sinergia</span>
                            </div>
                            <h3 className="font-display text-xl text-white mb-2">{selectedLegend.passive.name}</h3>
                            <p className="text-stone-400 text-sm leading-relaxed">{selectedLegend.passive.desc}</p>
                        </div>
                    </div>

                    {/* Lore Section */}
                    <div className="bg-black/30 p-6 rounded-lg italic border-l-2 border-gold/50">
                        <p className="text-lg text-white mb-4">
                            {selectedLegend.quote}
                        </p>
                        <p className="text-sm text-stone-500 leading-relaxed">
                            {selectedLegend.lore}
                        </p>
                    </div>

                </motion.div>
            </AnimatePresence>

            {/* Strategy Tip */}
            <div className="mt-8 text-center text-stone-500 text-sm">
                * Para ver a arte completa em 3D, visite a <Link href="/" className="text-gold hover:underline">Galeria Principal</Link>.
            </div>
        </div>

      </div>
    </main>
  );
}
