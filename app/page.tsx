'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, Droplets, Baby, Scissors, Hospital, Activity, Zap, 
  CheckCircle2, XCircle, BookOpen, RotateCcw, Search, ChevronDown, 
  ChevronUp, BrainCircuit, AlertCircle, Upload, Edit2, Trash2, 
  Library, Sun, Moon, LogOut, User as UserIcon, Eye, EyeOff
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  Paper, getPapersAction, savePaperAction, renamePaperAction, 
  toggleVisibilityAction, deletePaperAction 
} from '@/app/actions';

type Role = 'admin' | 'guest' | null;

export default function App() {
  // Try to load role from session
  const [role, setRole] = useState<Role>(null);
  const [userName, setUserName] = useState<string>('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const savedRole = sessionStorage.getItem('mulwa-role') as Role;
    const savedName = sessionStorage.getItem('mulwa-name');
    if (savedRole) setRole(savedRole);
    if (savedName) setUserName(savedName);
  }, []);

  // Apply dark mode
  useEffect(() => {
    if (mounted) {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [isDarkMode, mounted]);

  const handleLogin = (newRole: Role, name: string = '') => {
    setRole(newRole);
    setUserName(name);
    if (newRole) {
      sessionStorage.setItem('mulwa-role', newRole);
      sessionStorage.setItem('mulwa-name', name);
    } else {
      sessionStorage.removeItem('mulwa-role');
      sessionStorage.removeItem('mulwa-name');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink font-sans transition-colors duration-200">
      <Header 
        role={role} 
        onLogout={() => handleLogin(null)}
        isDarkMode={isDarkMode}
        toggleDark={() => setIsDarkMode(!isDarkMode)}
        userName={userName}
      />
      {!role ? (
        <LoginScreen onLogin={handleLogin} />
      ) : (
        <StudyApp role={role} userName={userName} />
      )}
    </div>
  );
}

function Header({ role, onLogout, isDarkMode, toggleDark, userName }: any) {
  return (
    <header className="sticky top-0 z-50 bg-paper border-b-4 border-suture shadow-none transition-colors duration-200 h-[73px] flex items-center">
      <div className="max-w-6xl mx-auto px-6 w-full flex items-center justify-between">
        <div className="flex items-center gap-3 font-mono">
          <div className="bg-ink text-paper px-2 py-1 font-bold">
            MP
          </div>
          <h1 className="font-sans text-lg sm:text-xl font-bold tracking-tight text-ink uppercase truncate max-w-[120px] sm:max-w-none">
            Mulwa Prep
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleDark}
            className="p-2 border-2 border-suture rounded-none text-ink hover:bg-ink hover:text-paper transition-all"
            title="Toggle theme"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {role && (
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold font-sans text-ink-muted hidden sm:inline-block">
                Hi, <span className="font-mono text-ink uppercase">{userName || role}</span>
              </span>
              <button 
                onClick={onLogout}
                className="flex items-center gap-2 px-3 py-1.5 font-mono font-bold text-sm text-accent-red hover:bg-accent-red hover:text-paper transition-colors border-2 border-suture"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline uppercase">Log out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function LoginScreen({ onLogin }: { onLogin: (r: Role, name: string) => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isAdmin = username.trim().toLowerCase() === 'admin';

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) {
      setError('Please enter a username.');
      return;
    }
    
    if (isAdmin) {
      if (password === 'mulwa2026') {
        onLogin('admin', 'Admin');
      } else {
        setError('Invalid admin password.');
      }
    } else {
      onLogin('guest', username.trim());
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 bg-paper">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-paper border-2 border-suture"
      >
        <div className="p-6 sm:p-8">
          <div className="text-center mb-8">
            <div className="bg-ink text-paper w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-suture">
              <UserIcon className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold font-sans text-ink uppercase tracking-tight">Mulwa Prep</h2>
            <p className="text-ink-muted font-mono text-sm mt-2 uppercase tracking-widest">Sign in to continue</p>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            {error && <div className="text-white bg-accent-red px-3 py-2 text-sm font-bold border-2 border-suture flex items-center gap-2"><AlertCircle className="w-4 h-4"/>{error}</div>}
            
            <div>
              <label className="text-xs font-bold text-ink-muted uppercase tracking-wider font-mono">Username</label>
              <input 
                type="text" 
                className="w-full mt-1 bg-paper border-2 border-suture px-4 py-3 text-ink font-mono focus:outline-none focus:border-surgical-blue transition-all"
                value={username}
                onChange={e => {
                  setUsername(e.target.value);
                  setError('');
                }}
                placeholder="Enter your name"
              />
            </div>
            
            <AnimatePresence>
              {isAdmin && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <label className="text-xs font-bold text-ink-muted uppercase tracking-wider font-mono pt-4 block">Password (Admin)</label>
                  <input 
                    type="password" 
                    className="w-full mt-1 bg-paper border-2 border-suture px-4 py-3 text-ink font-mono focus:outline-none focus:border-surgical-blue transition-all"
                    value={password}
                    onChange={e => {
                      setPassword(e.target.value);
                      setError('');
                    }}
                    placeholder="Enter password"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <button 
              type="submit"
              className="w-full py-4 mt-6 bg-surgical-blue text-white font-mono font-bold hover:bg-ink hover:text-paper active:translate-y-[2px] transition-all border-2 border-suture uppercase tracking-wide"
            >
              Log in
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

function StudyApp({ role, userName }: { role: string, userName: string }) {
  const [papers, setPapers] = useState<Paper[]>([]);
  const [activePaperId, setActivePaperId] = useState<string>('');
  const [allProgress, setAllProgress] = useState<Record<string, Record<number, number>>>({});
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});
  
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [showPaperManager, setShowPaperManager] = useState(false);
  const [showResetDialog, setShowResetDialog] = useState(false);

  const [mounted, setMounted] = useState(false);

  // Load from server
  useEffect(() => {
    getPapersAction().then(data => {
      setPapers(data);
      if (data.length > 0) {
        setActivePaperId(data[0].id);
      }
    });

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const visiblePapers = useMemo(() => {
    if (role === 'admin') return papers;
    return papers.filter(p => !p.isHidden);
  }, [papers, role]);

  const activePaper = useMemo(() => {
    return visiblePapers.find(p => p.id === activePaperId) || visiblePapers[0];
  }, [visiblePapers, activePaperId]);

  const currentQuestions = useMemo(() => activePaper ? activePaper.questions : [], [activePaper]);
  const answered = useMemo(() => allProgress[activePaperId] || {}, [allProgress, activePaperId]);

  const filteredQuestions = useMemo(() => {
    return currentQuestions.filter(q => {
      const matchesSearch = q.text.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            q.topic?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
  }, [searchQuery, currentQuestions]);

  const stats = useMemo(() => {
    const total = currentQuestions.length;
    const answeredCount = Object.keys(answered).length;
    const correctCount = Object.entries(answered).filter(([num, idx]) => {
      const q = currentQuestions.find(q => q.num === parseInt(num));
      return q?.correct === idx;
    }).length;
    const score = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
    return { total, answeredCount, correctCount, score };
  }, [answered, currentQuestions]);

  const handleSelect = (qNum: number, idx: number) => {
    if (answered[qNum] !== undefined) return;
    setAllProgress(prev => ({
      ...prev,
      [activePaperId]: { ...(prev[activePaperId] || {}), [qNum]: idx }
    }));
  };

  const toggleExplanation = (qNum: number) => {
    setShowExplanation(prev => ({ ...prev, [qNum]: !prev[qNum] }));
  };

  const confirmReset = () => {
    setAllProgress(prev => {
      const next = { ...prev };
      delete next[activePaperId];
      return next;
    });
    setShowExplanation({});
    setShowResetDialog(false);
  };

  // Admin Paper Actions
  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const parsed = JSON.parse(e.target?.result as string);
        if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].text && parsed[0].options) {
          const newPaper = {
            id: Date.now().toString(),
            title: file.name.replace('.json', ''),
            questions: parsed,
            isHidden: false
          };
          await savePaperAction(newPaper);
          setPapers(await getPapersAction());
          setActivePaperId(newPaper.id);
          setAdminTab('study');
        } else {
          alert('Invalid format.');
        }
      } catch (err) {
        alert('Invalid JSON file.');
      }
    };
    reader.readAsText(file);
    event.target.value = '';
  };

  const renamePaper = async (id: string, oldTitle: string) => {
    const title = prompt('Rename paper:', oldTitle);
    if (title && title.trim()) {
      await renamePaperAction(id, title.trim());
      setPapers(await getPapersAction());
    }
  };

  const toggleVisibility = async (id: string, currentStatus: boolean) => {
    await toggleVisibilityAction(id, !currentStatus);
    setPapers(await getPapersAction());
  };

  const deletePaper = async (id: string) => {
    if (id === 'default-part-1') return alert('Cannot delete default paper.');
    if (confirm('Delete this paper permanently?')) {
      await deletePaperAction(id);
      setPapers(await getPapersAction());
      setAllProgress(prev => {
        const next = { ...prev };
        delete next[id];
        return next;
      });
      if (activePaperId === id) setActivePaperId('');
    }
  };

  // Admin Tabs
  const [adminTab, setAdminTab] = useState<'study' | 'admin'>('study');

  if (!activePaper && visiblePapers.length > 0) {
    setActivePaperId(visiblePapers[0].id);
  }

  if (visiblePapers.length === 0 && role !== 'admin') {
    return <div className="flex-1 p-8 text-center text-ink font-mono font-bold text-xl uppercase tracking-widest mt-10">No papers available yet.</div>;
  }

  return (
    <div className="flex-1 flex flex-col">
      {/* Admin Tabs */}
      {role === 'admin' && (
        <div className="bg-paper border-b-4 border-suture sticky top-[73px] z-40 px-4 sm:px-6 py-4 flex flex-wrap gap-2 sm:gap-4 overflow-x-auto">
           <button 
             onClick={() => setAdminTab('study')}
             className={cn("px-4 sm:px-6 py-2 border-2 border-suture font-mono font-bold uppercase text-xs sm:text-sm tracking-widest transition-all whitespace-nowrap", adminTab === 'study' ? "bg-ink text-paper" : "bg-transparent text-ink hover:bg-cream")}
           >
             <BookOpen className="w-4 h-4 inline mr-2" />
             Study / Test
           </button>
           <button 
             onClick={() => setAdminTab('admin')}
             className={cn("px-4 sm:px-6 py-2 border-2 border-suture font-mono font-bold uppercase text-xs sm:text-sm tracking-widest transition-all whitespace-nowrap", adminTab === 'admin' ? "bg-ink text-paper" : "bg-transparent text-ink hover:bg-cream")}
           >
             <Library className="w-4 h-4 inline mr-2" />
             Admin Panel
           </button>
        </div>
      )}

      {/* ADMIN PANEL VIEW */}
      {role === 'admin' && adminTab === 'admin' ? (
        <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-10 flex flex-col gap-8">
           <div>
             <h2 className="font-sans font-bold text-3xl mb-1 tracking-tight">Manage Papers</h2>
             <p className="font-mono text-ink-muted text-sm uppercase tracking-widest">Library & Settings</p>
           </div>
           
           <div className="grid gap-6">
             {papers.map(p => (
                <div key={p.id} className="bg-paper border-2 border-suture p-6 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-xl mb-3 sm:mb-2">{p.title}</h3>
                    <div className="flex flex-wrap gap-2 sm:gap-3 text-xs font-mono font-bold text-ink-muted uppercase">
                      <span className="bg-cream px-2 py-1 border border-suture">{p.questions.length} Questions</span>
                      {p.isHidden && <span className="bg-accent-red text-white px-2 py-1">Hidden from Guests</span>}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 shrink-0">
                    <button onClick={() => toggleVisibility(p.id, p.isHidden || false)} className="flex-1 sm:flex-none p-3 border-2 border-suture hover:bg-cream transition-colors flex items-center justify-center min-w-[48px]" title="Toggle visibility for guests">
                      {p.isHidden ? <EyeOff className="w-5 h-5 text-accent-red" /> : <Eye className="w-5 h-5 text-accent-green" />}
                    </button>
                    <button onClick={() => renamePaper(p.id, p.title)} className="flex-1 sm:flex-none p-3 border-2 border-suture hover:bg-cream transition-colors flex items-center justify-center min-w-[48px]" title="Rename">
                      <Edit2 className="w-5 h-5" />
                    </button>
                    {p.id !== 'default-part-1' && (
                      <button onClick={() => deletePaper(p.id)} className="flex-1 sm:flex-none p-3 border-2 border-suture hover:bg-accent-red hover:text-white transition-colors flex items-center justify-center min-w-[48px]" title="Delete">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                </div>
             ))}
           </div>
           
           <div className="mt-8 border-t-4 border-suture pt-8">
             <label className="flex flex-col sm:flex-row items-center justify-center w-full py-8 text-center sm:text-left border-4 border-dashed border-suture bg-cream cursor-pointer hover:bg-ink hover:text-paper transition-all group px-4">
               <Upload className="w-8 h-8 mb-4 sm:mb-0 sm:mr-4 group-hover:animate-bounce shrink-0" />
               <div className="flex flex-col">
                 <span className="font-bold text-xl uppercase tracking-widest leading-none">Upload JSON Paper</span>
                 <span className="font-mono text-sm mt-2 opacity-70">Requires specific schema</span>
               </div>
               <input type="file" accept=".json" className="hidden" onChange={handleFileUpload} />
             </label>
           </div>
        </main>
      ) : (
      /* STUDY VIEW */
      <>
        <div className="bg-paper border-b-4 border-suture sticky z-30" style={{ top: role === 'admin' ? 'var(--study-top)' : '73px' }}>
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="w-full sm:w-auto flex items-center gap-4">
              <select 
                value={activePaperId}
                onChange={(e) => setActivePaperId(e.target.value)}
                className="w-full sm:w-auto bg-cream border-2 border-suture font-mono font-bold text-sm rounded-none px-3 py-3 sm:py-2 focus:outline-none transition-shadow uppercase tracking-widest sm:max-w-[250px] truncate"
              >
                {visiblePapers.map(p => (
                  <option key={p.id} value={p.id}>{p.title}</option>
                ))}
              </select>
            </div>

          <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-4">
            <div className="flex flex-col items-start sm:items-end flex-1 sm:flex-none">
              <div className="text-xs font-bold text-ink-muted uppercase font-mono tracking-wider">Progress: {stats.answeredCount} / {stats.total}</div>
              <div className="w-full sm:w-32 h-2 bg-cream border-2 border-suture mt-1 overflow-hidden">
                <div className="h-full bg-surgical-blue" style={{ width: `${(stats.answeredCount / stats.total) * 100}%` }} />
              </div>
            </div>
            <div className="bg-paper px-3 py-2 sm:py-1.5 border-2 border-suture text-center shrink-0">
              <div className="text-lg font-bold text-surgical-blue leading-none">{stats.score}%</div>
            </div>
            <button 
              onClick={() => setShowSearch(!showSearch)}
              className={cn("p-2 sm:p-2 border-2 border-suture transition-colors shrink-0", showSearch ? "bg-surgical-blue text-paper" : "bg-paper text-ink hover:bg-cream")}
            >
              <Search className="w-5 h-5 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <AnimatePresence>
        {showSearch && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-cream border-b-4 border-suture overflow-hidden"
          >
            <div className="max-w-6xl mx-auto px-6 py-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-muted" />
                <input 
                  type="text"
                  placeholder="SEARCH QUESTIONS OR KEYWORDS..."
                  className="w-full bg-paper border-2 border-suture py-3 pl-12 pr-4 text-sm font-mono font-bold focus:outline-none transition-colors uppercase tracking-wider"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-10">
        
        <div className="mb-10 bg-cream p-6 sm:p-8 border-4 border-suture">
           <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-ink mb-3">Hi {userName},</h2>
           <p className="text-sm sm:text-base font-mono font-bold tracking-widest uppercase text-ink-muted leading-relaxed">
             Select a past paper from the top dropdown, then practice answering the questions below. Good luck!
           </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b-4 border-dashed border-suture gap-4">
          <h3 className="font-sans font-bold text-3xl text-ink uppercase tracking-tight">
            Questions <span className="text-ink-muted text-lg font-mono ml-2 inline-block">[{filteredQuestions.length}]</span>
          </h3>
          <button 
            onClick={() => setShowResetDialog(true)}
            className="flex items-center justify-center gap-2 text-sm font-bold font-mono tracking-widest uppercase text-accent-red hover:opacity-80 transition-opacity border-2 border-accent-red bg-white px-4 py-3 sm:py-2"
          >
            <RotateCcw className="w-5 h-5 sm:w-4 sm:h-4" />
            Reset Progress
          </button>
        </div>

        <div className="space-y-8">
          {filteredQuestions.map((q) => {
            const isAnswered = answered[q.num] !== undefined;
            const selectedIdx = answered[q.num];
            const isCorrect = selectedIdx === q.correct;
            const showingExpl = showExplanation[q.num];

            return (
              <div key={q.num} className="bg-paper border-4 border-suture overflow-hidden">
                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between mb-6">
                    <span className="bg-ink text-paper font-mono text-sm font-bold px-3 py-1 uppercase tracking-widest">
                      Q.{q.num}
                    </span>
                    {q.topic && (
                      <span className="text-xs font-bold uppercase tracking-widest text-ink px-3 py-1 bg-cream border-2 border-dashed border-suture">
                        {q.topic}
                      </span>
                    )}
                  </div>
                  <p className="text-xl sm:text-2xl font-bold font-sans text-ink mb-8 leading-snug tracking-tight">{q.text}</p>
                  
                  <div className="grid gap-4">
                    {q.options.map((opt: string, idx: number) => {
                      const isSelected = selectedIdx === idx;
                      const isRight = idx === q.correct;
                      
                      let btnClass = "border-suture bg-paper hover:bg-cream text-ink";
                      if (isAnswered) {
                        if (isRight) btnClass = "border-accent-green bg-accent-green text-paper";
                        else if (isSelected && !isRight) btnClass = "border-accent-red bg-accent-red text-paper";
                        else btnClass = "border-suture bg-cream text-ink-muted opacity-80 border-dashed";
                      }

                      return (
                        <button
                          key={idx}
                          disabled={isAnswered}
                          onClick={() => handleSelect(q.num, idx)}
                          className={cn(
                            "flex items-center gap-4 p-4 sm:p-5 border-4 text-left transition-all hover:-translate-y-0.5",
                            btnClass,
                            isAnswered ? "hover:-translate-y-0 cursor-default" : "cursor-pointer"
                          )}
                        >
                          <div className={cn(
                            "w-10 h-10 flex items-center justify-center font-mono font-bold text-lg border-2 shrink-0 transition-colors bg-paper text-ink",
                            isAnswered && isRight ? "border-paper" : "border-suture",
                            isAnswered && isSelected && !isRight ? "border-paper" : ""
                          )}>
                            {['A','B','C','D'][idx]}
                          </div>
                          <span className="flex-1 font-bold font-sans text-base sm:text-lg leading-snug">{opt}</span>
                          {isAnswered && isRight && <CheckCircle2 className="w-6 h-6 text-paper shrink-0 border border-paper rounded-full bg-accent-green" />}
                          {isAnswered && isSelected && !isRight && <XCircle className="w-6 h-6 text-paper shrink-0 border border-paper rounded-full bg-accent-red" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {isAnswered && (
                  <div className="bg-cream border-t-4 border-dashed border-suture px-6 sm:px-8 py-6">
                    {!showingExpl ? (
                      <button 
                        onClick={() => toggleExplanation(q.num)}
                        className="w-full py-4 border-2 border-suture bg-paper font-mono font-bold text-ink uppercase tracking-widest hover:bg-ink hover:text-paper transition-all"
                      >
                        Show Explanation
                      </button>
                    ) : (
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold uppercase tracking-widest font-mono text-ink flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-ink" /> Explanation
                          </h4>
                          <button onClick={() => toggleExplanation(q.num)} className="text-ink hover:opacity-70 transition-opacity border-2 border-suture p-1">
                            <ChevronUp className="w-5 h-5" />
                          </button>
                        </div>
                        
                        <div className="bg-paper border-4 border-accent-green p-6">
                          <div className="flex items-center gap-2 mb-4 bg-accent-green px-3 py-1.5 w-max">
                            <CheckCircle2 className="w-4 h-4 text-paper" />
                            <span className="font-bold font-mono tracking-widest uppercase text-paper text-xs">Correct Answer Insights</span>
                          </div>
                          <p className="text-ink font-bold font-sans text-lg leading-relaxed">{q.explanation}</p>
                        </div>

                        {q.wrongReasons && Object.keys(q.wrongReasons).length > 0 && (
                          <div className="grid sm:grid-cols-2 gap-4">
                            {Object.entries(q.wrongReasons).map(([idx, reason]) => (
                               <div key={idx} className="bg-paper border-2 border-suture p-5">
                                 <span className="font-bold flex items-center gap-2 font-mono text-xs text-ink-muted mb-3 uppercase tracking-widest line-through decoration-accent-red decoration-2">Option {['A','B','C','D'][parseInt(idx)]} incorrect</span>
                                 <p className="text-sm text-ink leading-relaxed font-bold">{reason as string}</p>
                               </div>
                            ))}
                          </div>
                        )}

                        {q.memory && (
                          <div className="bg-surgical-blue border-l-8 border-suture flex flex-col sm:flex-row items-start gap-4 p-6 sm:p-8 mt-6 text-white">
                            <div className="bg-white text-surgical-blue p-2 shrink-0 border-2 border-suture">
                              <BrainCircuit className="w-8 h-8 sm:w-8 sm:h-8" />
                            </div>
                            <div>
                              <span className="font-bold font-mono tracking-widest text-xs block mb-2 px-2 py-1 bg-ink text-paper w-max uppercase border-2 border-suture">Mnemonic / Tip</span>
                              <p className="text-xl font-bold font-sans tracking-tight">{q.memory}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>

      {/* Reset Dialog */}
      <AnimatePresence>
        {showResetDialog && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ink/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-paper max-w-sm w-full p-8 border-2 border-suture"
            >
               <h3 className="text-xl font-bold font-mono text-ink mb-2 uppercase tracking-widest">Reset Progress?</h3>
               <p className="text-sm text-ink-muted font-bold mb-6">This clears all answers for the current paper. It cannot be undone.</p>
               <div className="flex flex-col sm:flex-row gap-4">
                 <button onClick={() => setShowResetDialog(false)} className="flex-1 py-3 font-mono font-bold border-2 border-suture hover:bg-cream transition-colors uppercase text-sm">Cancel</button>
                 <button onClick={confirmReset} className="flex-1 py-3 border-2 border-accent-red font-mono font-bold bg-accent-red text-white hover:opacity-90 transition-opacity flex items-center justify-center uppercase text-sm">Yes, Reset</button>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      </>
      )}
    </div>
  );
}
