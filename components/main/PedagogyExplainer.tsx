import { Users, SlidersHorizontal, Activity, MessagesSquare } from 'lucide-react';
import type { WorldTheme } from './theme';

/**
 * The "See how →" payoff for the hero's third offering bubble.
 *
 * Explains what "interactive, collaborative, pedagogy-first" actually means in
 * the classroom — the differentiator competitors claim but don't execute. Text +
 * the existing card material only (no new illustration commitment this pass).
 *
 * Copy is LOCKED-FOR-BUILD, revisable after the team conversations.
 */

const BEATS = [
  {
    Icon: Users,
    title: 'Whole-class, synchronous',
    desc: 'The room moves together, led by the teacher — not thirty students drifting through separate self-paced tabs.',
  },
  {
    Icon: SlidersHorizontal,
    title: 'Teacher-paced, not self-paced',
    desc: 'You decide when a module goes live and when the class moves on. The lesson follows your teaching, not an algorithm.',
  },
  {
    Icon: Activity,
    title: 'Live engagement',
    desc: 'See who is with you in real time and step in before anyone falls behind — while the lesson is still happening.',
  },
  {
    Icon: MessagesSquare,
    title: 'Collaborative by design',
    desc: 'Shared activities and class discussion are built into the pedagogy, not bolted on as an afterthought.',
  },
];

export function PedagogyExplainer({ t }: { t: WorldTheme }) {
  // Opaque fill + gradient outline — matches the page-wide card system.
  const cardStyle: React.CSSProperties = {
    border: '1px solid transparent',
    backgroundImage: `linear-gradient(${t.softCard.fill}, ${t.softCard.fill}), linear-gradient(135deg, ${t.softCard.edgeFrom}, ${t.softCard.edgeTo})`,
    backgroundOrigin: 'border-box',
    backgroundClip: 'padding-box, border-box',
  };

  return (
    <>
      <div className="rounded-2xl p-8 mb-6" style={{ background: 'rgba(10,5,28,0.60)' }}>
        <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-4 reveal" style={{ color: t.eyebrow }}>
          Pedagogy-first
        </p>
        <h2 className="font-bold tracking-tight leading-[1.08] mb-5 reveal" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: t.text.heading }}>
          Built for the classroom, not the laptop.
        </h2>
        <p className="leading-relaxed reveal" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)', color: t.text.body }}>
          Plenty of tools claim to be interactive and collaborative. Shard is built that way from the
          ground up — whole-class teaching, paced by you, with collaboration designed into every lesson.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {BEATS.map(({ Icon, title, desc }) => (
          <div key={title} className="reveal world-card world-card-soft relative rounded-2xl p-6 overflow-hidden" style={cardStyle}>
            <Icon className="size-5 mb-4" style={{ color: t.light }} />
            <h3 className="font-bold mb-1.5" style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: t.softCardHeading }}>{title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: t.softCardText }}>{desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}
