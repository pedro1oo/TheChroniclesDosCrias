"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Card3D } from "@/components/game/Card";
import { Filter, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Dados das Cartas (Lendas + Bronzes)
const allCards = [
  // Lendas (Ouro)
  {
    id: "pedro",
    name: "Pedro, O Olho",
    power: 5,
    provision: 13,
    rarity: "gold" as const,
    type: "unit" as const,
    description: "Deploy: Remova todos os status do inimigo e aplique 'Marcado para Morrer'.",
    lore: "Pedro não erra. Se ele te viu, você já está morto; o tempo é que ainda não percebeu."
  },
  {
    id: "gamerhard",
    name: "GamerHard",
    power: 3,
    provision: 12,
    rarity: "gold" as const,
    type: "unit" as const,
    description: "Deploy: Revele 2 cartas da mão do oponente. Roube uma e troque por uma sua.",
    lore: "Ele vencia reis e dragões nas cartas, até ser banido por ganhar demais."
  },
  {
    id: "ph",
    name: "PH, O Monstro",
    power: 10,
    provision: 14,
    rarity: "gold" as const,
    type: "unit" as const,
    description: "Fim do Turno: Se houver alguém na mesma fileira, causa 2 de dano a todos e 1 a si mesmo.",
    lore: "A paranoia derreteu sua mente. Naquele campo maldito, tudo que respira é inimigo."
  },
  {
    id: "victor",
    name: "Victor, O Porteiro",
    power: 6,
    provision: 13,
    rarity: "gold" as const,
    type: "unit" as const,
    description: "Deploy: Conceda Escudo a TODAS as unidades na fileira do seu Aliado. Ordem: Se aliado perder escudo, ganhe +2 Poder.",
    lore: "Ele carregou a porta da prisão nas costas para manter o mal preso... ou o mundo fora."
  },
  {
    id: "izumi",
    name: "Izumi, Lâmina Silenciosa",
    power: 4,
    provision: 11,
    rarity: "gold" as const,
    type: "unit" as const,
    description: "Deploy: Cause 3 de dano. Se matar, move-se e reseta. Passiva: Imune a feitiços se sozinha.",
    lore: "Sua espada vibra numa frequência que corta o próprio ar."
  },

  // Soldados de Bronze
  {
    id: "sentinela",
    name: "Sentinela de Ferro",
    power: 4,
    provision: 5,
    rarity: "bronze" as const,
    type: "unit" as const,
    description: "Deploy: Armadura +2 a aliado. Vínculo: Conceda Escudo em vez de Armadura.",
    lore: "Eles viram o que Victor fez na prisão. Agora, usam pedaços daquela mesma porta como escudos."
  },
  {
    id: "rastreador",
    name: "Rastreador do Pico",
    power: 3,
    provision: 5,
    rarity: "bronze" as const,
    type: "unit" as const,
    description: "Deploy: 2 dano. Combo: Se aliado jogou carta, 3 dano e Sangramento.",
    lore: "Treinados para identificar os sinais de Pedro. Quando o Olho brilha, eles disparam."
  },
  {
    id: "cadaver",
    name: "Cadáver Recrutado",
    power: 5,
    provision: 4,
    rarity: "bronze" as const,
    type: "unit" as const,
    description: "Desejo de Morte (Deathwish): Fortaleça uma unidade aleatória na mão do Aliado em +2.",
    lore: "Os soldados favoritos de Izumi. Perfeitos para serem usados e descartados repetidamente."
  },
  {
    id: "ladrao",
    name: "Ladrão de Taverna",
    power: 2,
    provision: 6,
    rarity: "bronze" as const,
    type: "unit" as const,
    description: "Deploy: Compre 1, Coloque 1 no fundo. Passiva: +3 Poder se tiver mais cartas que o oponente.",
    lore: "Amigos de GamerHard. Uma piscada significa 'fujam', duas piscadas significa 'trapaceiem'."
  },
  {
    id: "aberracao",
    name: "Aberração Menor",
    power: 6,
    provision: 6,
    rarity: "bronze" as const,
    type: "unit" as const,
    description: "Berserk: Sempre que receber dano e sobreviver, fortaleça-se em +1.",
    lore: "As coisas que vivem na névoa com PH não são mais humanas. Ficar perto delas é suicídio."
  },

  // Feitiços e Táticas
  {
    id: "nevoa",
    name: "Névoa da Loucura",
    power: 0,
    provision: 7,
    rarity: "silver" as const,
    type: "spell" as const,
    description: "Névoa: Início do turno oponente, 2 dano na mais forte e 1 na mais fraca da fileira (3 turnos).",
    lore: "A mesma névoa que consumiu a mente de PH. Sussurra os nomes daqueles que você deixou para trás."
  },
  {
    id: "seppuku",
    name: "Seppuku Tático",
    power: 0,
    provision: 5,
    rarity: "bronze" as const,
    type: "spell" as const,
    description: "Destrua uma unidade Aliada. Cause 6 de dano a uma unidade Inimiga.",
    lore: "Izumi não tolera fraqueza. A morte honrosa fortalece o espírito da tropa."
  },
  {
    id: "lente",
    name: "Lente de Sobrecarga",
    power: 0,
    provision: 5,
    rarity: "bronze" as const,
    type: "spell" as const,
    description: "Remova Escudo e cause 4 dano. Golpe Mortal: Crie cópia base dela no cemitério inimigo.",
    lore: "Pedro sobrecarrega o cristal de seu olho, disparando um feixe que atravessa escudos mágicos como papel."
  },
  {
    id: "barricada",
    name: "Barricada Improvisada",
    power: 0,
    provision: 6,
    rarity: "silver" as const,
    type: "spell" as const,
    description: "Cura total em aliado, conceda 2 Armadura e Defensor.",
    lore: "Victor ensinou que qualquer coisa pode ser uma defesa. Mesas, pedras, corpos..."
  }
];

export default function GalleryPage() {
  const [filterRarity, setFilterRarity] = useState<"all" | "gold" | "silver" | "bronze">("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCards = allCards.filter(card => {
    const matchesRarity = filterRarity === "all" || card.rarity === filterRarity;
    const matchesSearch = card.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          card.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRarity && matchesSearch;
  });

  return (
    <main className="min-h-screen relative flex flex-col font-sans bg-abyss text-stone-300 pb-20">
      
      {/* Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none fixed"></div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 glass-panel border-b border-white/5 top-0 left-0 px-6 py-4 flex justify-between items-center bg-abyss/80 backdrop-blur-md">
        <Link href="/" className="font-serif text-2xl text-gold font-bold tracking-tighter hover:text-white transition-colors">
          ACdC
        </Link>
        <Link href="/">
             <Button size="sm" variant="ghost">Voltar ao Início</Button>
        </Link>
      </nav>

      {/* Header */}
      <div className="container mx-auto px-4 pt-32 pb-12 text-center">
        <h1 className="font-serif text-5xl text-white mb-4">Grimório de Cartas</h1>
        <p className="text-stone-400 max-w-2xl mx-auto">
            Conheça as ferramentas de guerra. Combine Lendas poderosas com soldados leais para dominar o campo de batalha.
        </p>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 mb-12 sticky top-20 z-40">
        <div className="glass-panel p-4 rounded-xl border border-white/10 flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Rarity Filter */}
            <div className="flex gap-2 p-1 bg-black/20 rounded-lg">
                <button 
                    onClick={() => setFilterRarity("all")}
                    className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${filterRarity === 'all' ? 'bg-white text-black' : 'text-stone-400 hover:text-white'}`}
                >
                    Todas
                </button>
                <button 
                    onClick={() => setFilterRarity("gold")}
                    className={`px-4 py-2 rounded-md text-sm font-bold transition-all flex items-center gap-2 ${filterRarity === 'gold' ? 'bg-gold text-black' : 'text-stone-400 hover:text-gold'}`}
                >
                    <div className="w-2 h-2 bg-gold rotate-45"></div> Ouro
                </button>
                <button 
                    onClick={() => setFilterRarity("silver")}
                    className={`px-4 py-2 rounded-md text-sm font-bold transition-all flex items-center gap-2 ${filterRarity === 'silver' ? 'bg-slate-300 text-black' : 'text-stone-400 hover:text-slate-300'}`}
                >
                    <div className="w-2 h-2 bg-slate-300 rotate-45"></div> Prata
                </button>
                <button 
                    onClick={() => setFilterRarity("bronze")}
                    className={`px-4 py-2 rounded-md text-sm font-bold transition-all flex items-center gap-2 ${filterRarity === 'bronze' ? 'bg-orange-700 text-white' : 'text-stone-400 hover:text-orange-700'}`}
                >
                    <div className="w-2 h-2 bg-orange-700 rotate-45"></div> Bronze
                </button>
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500" size={18} />
                <input 
                    type="text" 
                    placeholder="Buscar carta..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-black/30 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-gold/50 transition-colors"
                />
            </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
            <AnimatePresence>
                {filteredCards.map((card) => (
                    <motion.div 
                        key={card.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Card3D {...card} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>

        {filteredCards.length === 0 && (
            <div className="text-center py-20 text-stone-500">
                <Filter size={48} className="mx-auto mb-4 opacity-20" />
                <p>Nenhuma carta encontrada com esses filtros.</p>
            </div>
        )}
      </div>

    </main>
  );
}
