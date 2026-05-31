export const FE = ["React","Astro","Next.js","Vite","HTML","CSS","JavaScript","Tailwind","Redux","Framer Motion","Leaflet","Alpine.js","Axios","Zod"];
export const BE = ["Node","Express","PHP","Sharp","LUA","Python","BullMQ"];
export const DB = ["Supabase","MongoDB","MySQL","JSON","PostgreSQL"];
export const INF = ["Netlify","Vercel","G Cloud","Docker","Redis"];
export const PAY = ["Stripe","PayPal"];
export const SVC = ["Discord","Twitch","YouTube","Resend"];

export function getRole(p) {
  const d = p.description.toLowerCase();
  if (d.includes("saas")) return "SaaS";
  if (d.includes("aprendizaje") || d.includes("idiomas") || d.includes("language") || d.includes("learning")) return "E-Learning";
  if (d.includes("agenda") || d.includes("citas") || d.includes("turnos") || d.includes("negocios") || d.includes("appointment") || d.includes("scheduling")) return "Agenda";
  if (d.includes("biodiversidad") || d.includes("catalogación") || d.includes("naturaleza") || d.includes("biodiversity") || d.includes("cataloging")) return "Ciencia";
  if (d.includes("dashboard") || d.includes("empresarial") || d.includes("enterprise") || d.includes("multi-tenant") || d.includes("auditoría") || d.includes("inventory") || d.includes("invoicing") || d.includes("management")) return "Dashboard";
  if (d.includes("addon") || d.includes("lua") || d.includes("wow")) return "Addon";
  if (d.includes("comunidad") || d.includes("portal") || d.includes("community") || d.includes("guild")) return "Portal";
  if (d.includes("juego") || d.includes("invaders") || d.includes("canvas") || d.includes("classic") || d.includes("game")) return "Juego";
  if (d.includes("full-stack") || d.includes("api rest") || d.includes("restful") || d.includes("rest api")) return "Full-Stack";
  if (d.includes("sistema") || d.includes("inventarios") || d.includes("facturación") || d.includes("gestión") || d.includes("administración") || d.includes("crud")) return "Dashboard";
  return "Web";
}

export function roleClass(role) {
  const m = {
    SaaS:'bg-amber-600/20 text-amber-300 border-amber-500/30',
    'E-Learning':'bg-emerald-600/20 text-emerald-300 border-emerald-500/30',
    Agenda:'bg-indigo-600/20 text-indigo-300 border-indigo-500/30',
    Ciencia:'bg-teal-600/20 text-teal-300 border-teal-500/30',
    Dashboard:'bg-violet-600/20 text-violet-300 border-violet-500/30',
    'Full-Stack':'bg-violet-600/20 text-violet-300 border-violet-500/30',
    Addon:'bg-orange-600/20 text-orange-300 border-orange-500/30',
    Portal:'bg-sky-600/20 text-sky-300 border-sky-500/30',
    Juego:'bg-rose-600/20 text-rose-300 border-rose-500/30'
  };
  return m[role] || 'bg-slate-600/20 text-slate-300 border-slate-500/30';
}

export function techColor(t) {
  if (FE.includes(t)) return 'text-sky-300 bg-sky-500/15 border-sky-500/25';
  if (BE.includes(t)) return 'text-emerald-300 bg-emerald-500/15 border-emerald-500/25';
  if (DB.includes(t)) return 'text-violet-300 bg-violet-500/15 border-violet-500/25';
  if (INF.includes(t)) return 'text-amber-300 bg-amber-500/15 border-amber-500/25';
  if (PAY.includes(t)) return 'text-cyan-300 bg-cyan-500/15 border-cyan-500/25';
  if (SVC.includes(t)) return 'text-rose-300 bg-rose-500/15 border-rose-500/25';
  return 'text-slate-400 bg-slate-700/50 border-slate-600/50';
}

export function formatDuration(startDate, endDate, t) {
  const s = new Date(startDate);
  const e = endDate ? new Date(endDate) : new Date();
  const md = (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth());
  const y = Math.floor(md / 12);
  const m = md % 12;
  let str = "";
  if (y > 0) str += y === 1 ? `1 ${t['duration.year'] || 'año'}` : `${y} ${t['duration.years'] || 'años'}`;
  if (m > 0) {
    str += str ? ` ${t['duration.and'] || 'y'} ` : "";
    str += m === 1 ? `1 ${t['duration.month'] || 'mes'}` : `${m} ${t['duration.months'] || 'meses'}`;
  }
  return str;
}

export const SOCIAL_ICONS_MAP = {
  GitHub: true, LinkedIn: true, Twitch: true, Youtube: true, TikTok: true, Facebook: true
};
