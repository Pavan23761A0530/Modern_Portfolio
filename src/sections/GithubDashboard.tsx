import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  ExternalLink, 
  Code2, 
  GitBranch, 
  Star, 
  Terminal, 
  BarChart3, 
  Activity,
  Cpu,
  Globe,
  Database
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';

// Mock Data for Developer Analytics
const activityData = [
  { name: 'MON', commits: 12 },
  { name: 'TUE', commits: 18 },
  { name: 'WED', commits: 15 },
  { name: 'THU', commits: 25 },
  { name: 'FRI', commits: 20 },
  { name: 'SAT', commits: 8 },
  { name: 'SUN', commits: 10 },
];

const languageData = [
  { name: 'TypeScript', value: 45, color: '#00ffff' },
  { name: 'Python', value: 25, color: '#bd00ff' },
  { name: 'Node.js', value: 20, color: '#22c55e' },
  { name: 'Other', value: 10, color: '#64748b' },
];

const topRepos = [
  { name: "homebell-v2", stars: 12, forks: 4, lang: "TypeScript" },
  { name: "neural-snake-vision", stars: 25, forks: 8, lang: "Python" },
  { name: "vaidya-health-core", stars: 18, forks: 3, lang: "Node.js" },
];

const GithubDashboard: React.FC = () => {
  return (
    <section id="dev-stats" className="section-padding bg-black/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h3 className="text-primary font-display tracking-[0.5em] text-[10px] mb-4 uppercase">Metrics.log</h3>
          <h2 className="text-4xl md:text-7xl font-display font-black uppercase tracking-tighter">DEVELOPER <span className="gradient-text">DASHBOARD</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-light mt-6 italic">
             Real-time telemetry from active development protocols and neural repository sync.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Main Chart Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-8 dashboard-card"
          >
            <div className="flex justify-between items-start mb-10">
               <div>
                  <h4 className="text-xl font-display font-bold uppercase tracking-tight">Coding Activity</h4>
                  <p className="text-[10px] tracking-widest text-muted-foreground uppercase">7-Day Commit Protocol Sync</p>
               </div>
               <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                     <span className="text-[8px] font-black uppercase tracking-widest text-primary">Live Data</span>
                  </div>
               </div>
            </div>

            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={activityData}>
                  <defs>
                    <linearGradient id="colorCommits" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00ffff" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#00ffff" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="name" 
                    stroke="#ffffff33" 
                    fontSize={10} 
                    tickLine={false} 
                    axisLine={false}
                  />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0a0a0a', border: '1px solid #ffffff14', fontSize: '10px' }}
                    labelStyle={{ color: '#00ffff' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="commits" 
                    stroke="#00ffff" 
                    fillOpacity={1} 
                    fill="url(#colorCommits)" 
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/5">
                {[
                  { label: "Total Commits", val: "1,248", icon: GitBranch },
                  { label: "Pull Requests", val: "84", icon: ExternalLink },
                  { label: "Code Reviews", val: "156", icon: Code2 },
                  { label: "Uptime", val: "99.9%", icon: Activity },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col">
                     <span className="text-[7px] tracking-widest text-muted-foreground uppercase mb-1">{stat.label}</span>
                     <div className="flex items-center gap-2">
                        <stat.icon size={12} className="text-primary" />
                        <span className="text-lg font-display font-black">{stat.val}</span>
                     </div>
                  </div>
                ))}
            </div>
          </motion.div>

          {/* Side Panels */}
          <div className="lg:col-span-4 space-y-8">
             {/* Tech Stack Distribution */}
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="dashboard-card"
             >
                <h4 className="text-xs tracking-[0.4em] font-bold text-white uppercase mb-8">Language Analytics</h4>
                <div className="h-[180px] w-full relative">
                   <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                         <Pie
                            data={languageData}
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                         >
                            {languageData.map((entry, index) => (
                               <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                         </Pie>
                      </PieChart>
                   </ResponsiveContainer>
                   <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                      <span className="text-2xl font-display font-black text-white">45%</span>
                      <span className="text-[8px] tracking-widest text-primary font-bold uppercase">TS_CORE</span>
                   </div>
                </div>
                <div className="space-y-3 mt-6">
                   {languageData.map((lang) => (
                      <div key={lang.name} className="flex justify-between items-center">
                         <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: lang.color }}></div>
                            <span className="text-[10px] font-bold text-muted-foreground uppercase">{lang.name}</span>
                         </div>
                         <span className="text-[10px] font-mono text-white">{lang.value}%</span>
                      </div>
                   ))}
                </div>
             </motion.div>

             {/* Pinned Repos */}
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="dashboard-card p-6"
             >
                <div className="flex justify-between items-center mb-6">
                   <h4 className="text-[10px] tracking-[0.4em] font-bold text-white uppercase">Pinned Systems</h4>
                   <Github size={16} className="text-primary" />
                </div>
                <div className="space-y-4">
                   {topRepos.map((repo) => (
                      <div key={repo.name} className="group cursor-pointer">
                         <div className="flex justify-between items-start mb-1">
                            <span className="text-xs font-display font-bold group-hover:text-primary transition-colors uppercase">{repo.name}</span>
                            <div className="flex gap-3">
                               <div className="flex items-center gap-1">
                                  <Star size={10} className="text-yellow-500" />
                                  <span className="text-[9px] font-mono">{repo.stars}</span>
                               </div>
                               <div className="flex items-center gap-1">
                                  <GitBranch size={10} className="text-muted-foreground" />
                                  <span className="text-[9px] font-mono">{repo.forks}</span>
                               </div>
                            </div>
                         </div>
                         <div className="flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full ${repo.lang === 'TypeScript' ? 'bg-blue-400' : 'bg-purple-500'}`}></div>
                            <span className="text-[9px] text-muted-foreground uppercase font-bold">{repo.lang}</span>
                         </div>
                      </div>
                   ))}
                </div>
             </motion.div>
          </div>

        </div>

        {/* Floating Developer Achievements Bar */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "LEETCODE PROTOCOL", val: "Solved 300+", sub: "Top 15% Performance", icon: Terminal },
              { title: "CONTRIBUTION STREAK", val: "185 Days", sub: "Consecutive Syncs", icon: Activity },
              { title: "SYSTEM ARCHITECTURE", val: "92/100", sub: "Optimization Rating", icon: Cpu },
            ].map((achievement, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="dashboard-card p-6 flex items-center gap-6"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                   <achievement.icon size={24} />
                </div>
                <div>
                   <p className="text-[8px] tracking-widest text-muted-foreground uppercase mb-1">{achievement.title}</p>
                   <p className="text-xl font-display font-black text-white">{achievement.val}</p>
                   <p className="text-[8px] tracking-[0.3em] text-primary uppercase font-bold">{achievement.sub}</p>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default GithubDashboard;
