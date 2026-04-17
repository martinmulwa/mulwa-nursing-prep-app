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
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const savedRole = sessionStorage.getItem('mulwa-role') as Role;
    if (savedRole) setRole(savedRole);
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

  const handleLogin = (newRole: Role) => {
    setRole(newRole);
    if (newRole) {
      sessionStorage.setItem('mulwa-role', newRole);
    } else {
      sessionStorage.removeItem('mulwa-role');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream text-ink font-sans transition-colors duration-200">
      <Header 
        role={role} 
        onLogout={() => handleLogin(null)}
        isDarkMode={isDarkMode}
        toggleDark={() => setIsDarkMode(!isDarkMode)}
      />
      {!role ? (
        <LoginScreen onLogin={handleLogin} />
      ) : (
        <StudyApp role={role} />
      )}
    </div>
  );
}

function Header({ role, onLogout, isDarkMode, toggleDark }: any) {
  return (
    <header className="sticky top-0 z-50 bg-paper border-b border-border shadow-sm transition-colors duration-200 h-16 flex items-center">
      <div className="max-w-6xl mx-auto px-4 w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-accent p-1.5 rounded-lg">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <h1 className="font-display text-xl font-bold tracking-tight text-ink">
            Mulwa Prep
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleDark}
            className="p-2 rounded-full text-muted hover:bg-cream hover:text-ink transition-colors"
            title="Toggle theme"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {role && (
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-muted hidden sm:inline-block">
                {role === 'admin' ? 'Admin' : 'Guest'}
              </span>
              <button 
                onClick={onLogout}
                className="flex items-center gap-2 px-3 py-1.5 font-medium text-sm text-muted hover:text-ink hover:bg-cream rounded-md transition-colors border border-transparent hover:border-border"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Log out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function LoginScreen({ onLogin }: { onLogin: (r: Role) => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'mulwa2026') {
      onLogin('admin');
    } else {
      setError('Invalid admin credentials.');
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-paper border border-border shadow-lg rounded-2xl overflow-hidden"
      >
        <div className="p-8">
          <div className="text-center mb-8">
            <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserIcon className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-2xl font-bold font-display text-ink">Welcome to Mulwa Prep</h2>
            <p className="text-muted mt-2">Log in to track your progress and access papers.</p>
          </div>

          <form onSubmit={handleAdminLogin} className="space-y-4 mb-4">
            {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
            <div>
              <label className="text-xs font-bold text-muted uppercase tracking-wider">Username</label>
              <input 
                type="text" 
                className="w-full mt-1 bg-cream border border-border rounded-lg px-4 py-2.5 text-ink focus:outline-none focus:border-accent transition-colors"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Enter admin username"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-muted uppercase tracking-wider">Password</label>
              <input 
                type="password" 
                className="w-full mt-1 bg-cream border border-border rounded-lg px-4 py-2.5 text-ink focus:outline-none focus:border-accent transition-colors"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </div>
            <button 
              type="submit"
              className="w-full py-3 bg-accent text-white font-bold rounded-lg hover:bg-accent/90 transition-colors shadow-sm"
            >
              Log in as Admin
            </button>
          </form>

          <div className="relative flex items-center py-4">
            <div className="flex-grow border-t border-border"></div>
            <span className="flex-shrink-0 mx-4 text-muted text-sm font-medium">OR</span>
            <div className="flex-grow border-t border-border"></div>
          </div>

          <button 
            onClick={() => onLogin('guest')}
            className="w-full py-3 bg-transparent border-2 border-border text-ink font-bold rounded-lg hover:border-ink transition-colors shadow-sm"
          >
            Log in as Guest
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function StudyApp({ role }: { role: string }) {
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

  if (!activePaper) return <div className="flex-1 p-8 text-center">No papers available.</div>;

  return (
    <div className="flex-1 flex flex-col">
      {/* Sub Header for Paper / Stats */}
      <div className="bg-paper border-b border-border shadow-sm sticky top-16 z-40">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex items-center gap-3">
            <h2 className="font-bold text-lg text-ink line-clamp-1">{activePaper.title}</h2>
            {role === 'admin' ? (
              <button 
                onClick={() => setShowPaperManager(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-cream hover:bg-border text-ink rounded-lg transition-colors border border-border"
              >
                <Library className="w-4 h-4" />
                Library
              </button>
            ) : (
              <select 
                value={activePaperId}
                onChange={(e) => setActivePaperId(e.target.value)}
                className="bg-cream border border-border text-ink text-sm rounded-lg px-2 py-1 focus:outline-none"
              >
                {visiblePapers.map(p => (
                  <option key={p.id} value={p.id}>{p.title}</option>
                ))}
              </select>
            )}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end">
              <div className="text-xs font-bold text-muted uppercase">Progress: {stats.answeredCount} / {stats.total}</div>
              <div className="w-32 h-2 bg-cream rounded-full mt-1 overflow-hidden border border-border">
                <div className="h-full bg-accent" style={{ width: `${(stats.answeredCount / stats.total) * 100}%` }} />
              </div>
            </div>
            <div className="bg-cream px-3 py-1.5 border border-border rounded-lg text-center">
              <div className="text-lg font-bold text-accent leading-none">{stats.score}%</div>
            </div>
            <button 
              onClick={() => setShowSearch(!showSearch)}
              className={cn("p-2 rounded-lg border transition-colors", showSearch ? "bg-accent border-accent text-white" : "bg-cream border-border text-muted hover:text-ink")}
            >
              <Search className="w-4 h-4" />
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
            className="bg-cream border-b border-border overflow-hidden"
          >
            <div className="max-w-6xl mx-auto px-4 py-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                <input 
                  type="text"
                  placeholder="Search questions or keywords..."
                  className="w-full bg-paper border border-border rounded-xl py-3 pl-11 pr-4 text-sm font-medium focus:outline-none focus:border-accent transition-colors shadow-sm"
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
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-xl text-ink">
            Questions <span className="text-muted text-sm ml-2">({filteredQuestions.length})</span>
          </h3>
          <button 
            onClick={() => setShowResetDialog(true)}
            className="flex items-center gap-2 text-sm font-semibold text-muted hover:text-accent transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Reset Progress
          </button>
        </div>

        <div className="space-y-6">
          {filteredQuestions.map((q) => {
            const isAnswered = answered[q.num] !== undefined;
            const selectedIdx = answered[q.num];
            const isCorrect = selectedIdx === q.correct;
            const showingExpl = showExplanation[q.num];

            return (
              <div key={q.num} className="bg-paper border border-border rounded-2xl shadow-sm overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="bg-cream text-muted border border-border font-mono text-xs font-bold px-2 py-1 rounded">
                      {q.num}
                    </span>
                    {q.topic && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted px-2 py-1 bg-cream rounded-md border border-border">
                        {q.topic}
                      </span>
                    )}
                  </div>
                  <p className="text-lg sm:text-xl font-medium text-ink mb-6 leading-loose">{q.text}</p>
                  
                  <div className="grid gap-3">
                    {q.options.map((opt: string, idx: number) => {
                      const isSelected = selectedIdx === idx;
                      const isRight = idx === q.correct;
                      
                      let btnClass = "border-border bg-paper hover:border-ink text-ink";
                      if (isAnswered) {
                        if (isRight) btnClass = "border-green-500 bg-green-50/50 text-green-900";
                        else if (isSelected && !isRight) btnClass = "border-red-500 bg-red-50/50 text-red-900";
                        else btnClass = "border-border bg-cream text-muted opacity-60";
                      }

                      return (
                        <button
                          key={idx}
                          disabled={isAnswered}
                          onClick={() => handleSelect(q.num, idx)}
                          className={cn(
                            "flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all",
                            btnClass
                          )}
                        >
                          <div className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 shrink-0 transition-colors",
                            isAnswered && isRight ? "bg-green-500 border-green-500 text-white" : "",
                            isAnswered && isSelected && !isRight ? "bg-red-500 border-red-500 text-white" : "",
                            !isAnswered ? "border-border text-muted bg-paper" : "",
                            isAnswered && !isSelected && !isRight ? "border-border text-muted bg-cream" : ""
                          )}>
                            {['A','B','C','D'][idx]}
                          </div>
                          <span className="flex-1 font-medium text-sm sm:text-base leading-snug">{opt}</span>
                          {isAnswered && isRight && <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />}
                          {isAnswered && isSelected && !isRight && <XCircle className="w-5 h-5 text-red-500 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {isAnswered && (
                  <div className="bg-cream border-t border-border px-6 py-4">
                    {!showingExpl ? (
                      <button 
                        onClick={() => toggleExplanation(q.num)}
                        className="w-full py-3 border-2 border-border border-dashed rounded-xl text-sm font-bold text-muted hover:border-accent hover:text-accent transition-colors"
                      >
                        Show Explanation
                      </button>
                    ) : (
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-ink flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-accent" /> Explanation
                          </h4>
                          <button onClick={() => toggleExplanation(q.num)} className="text-muted hover:text-ink">
                            <ChevronUp className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <div className="bg-green-50/50 border border-green-200 rounded-xl p-5">
                          <div className="flex items-center gap-2 mb-3">
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                            <span className="font-bold text-green-800 text-sm">Correct Answer</span>
                          </div>
                          <p className="text-green-900 text-base leading-loose">{q.explanation}</p>
                        </div>

                        {q.wrongReasons && Object.keys(q.wrongReasons).length > 0 && (
                          <div className="grid sm:grid-cols-2 gap-4">
                            {Object.entries(q.wrongReasons).map(([idx, reason]) => (
                               <div key={idx} className="bg-paper border border-border rounded-xl p-4">
                                 <span className="font-bold text-xs text-muted mb-2 block">Option {['A','B','C','D'][parseInt(idx)]} incorrect because:</span>
                                 <p className="text-sm text-ink leading-relaxed font-medium">{reason as string}</p>
                               </div>
                            ))}
                          </div>
                        )}

                        {q.memory && (
                          <div className="bg-accent/5 border border-accent/20 flex items-start gap-3 p-5 rounded-xl">
                            <div className="bg-accent/10 p-2 rounded-lg shrink-0 mt-0.5">
                              <BrainCircuit className="w-4 h-4 text-accent" />
                            </div>
                            <div>
                              <span className="font-bold text-accent text-xs block mb-1">MEMORY TIP</span>
                              <p className="text-sm text-ink font-medium">{q.memory}</p>
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

      {/* Admin Paper Manager */}
      <AnimatePresence>
        {role === 'admin' && showPaperManager && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ink/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-cream rounded-2xl shadow-xl max-w-lg w-full flex flex-col max-h-[85vh] border border-border overflow-hidden"
            >
              <div className="bg-paper p-6 border-b-2 border-border flex items-center justify-between z-10">
                <div>
                  <h3 className="font-display font-extrabold text-2xl text-ink tracking-tight">
                    Library
                  </h3>
                  <p className="text-sm font-semibold text-muted mt-1">Manage your study sets</p>
                </div>
                <button onClick={() => setShowPaperManager(false)} className="p-2 -mr-2 text-muted hover:text-ink hover:bg-cream rounded-full transition-colors">
                  <XCircle className="w-6 h-6" />
                </button>
              </div>

              <div className="p-5 flex-1 overflow-y-auto space-y-4 bg-cream">
                {papers.map(p => {
                  const isActive = activePaperId === p.id;
                  return (
                    <div key={p.id} className={cn("bg-paper rounded-2xl p-5 border-2 transition-all relative overflow-hidden", isActive ? "border-accent shadow-sm" : "border-border hover:border-accent/40")}>
                      {isActive && <div className="absolute top-0 left-0 w-1.5 h-full bg-accent"></div>}
                      <div className="flex items-start justify-between mb-3">
                        <div 
                          className="cursor-pointer min-w-0 pr-4 flex-1 select-none"
                          onClick={() => { setActivePaperId(p.id); setShowPaperManager(false); }}
                        >
                          <h4 className="font-bold text-ink truncate text-lg tracking-tight hover:text-accent transition-colors">{p.title}</h4>
                          <span className="text-sm text-muted font-bold tracking-tight inline-flex items-center mt-1"><BookOpen className="w-3.5 h-3.5 mr-1.5"/>{p.questions.length} terms</span>
                        </div>
                        <div className="flex gap-1.5 shrink-0 bg-cream p-1 rounded-xl border border-border">
                          <button onClick={() => toggleVisibility(p.id, p.isHidden || false)} className="p-2 rounded-lg hover:bg-paper text-muted transition-colors" title="Toggle visibility for guests">
                            {p.isHidden ? <EyeOff className="w-4 h-4 text-red-500" /> : <Eye className="w-4 h-4 text-green-500" />}
                          </button>
                          <button onClick={() => renamePaper(p.id, p.title)} className="p-2 rounded-lg hover:bg-paper text-muted transition-colors" title="Rename">
                            <Edit2 className="w-4 h-4" />
                          </button>
                          {p.id !== 'default-part-1' && (
                            <button onClick={() => deletePaper(p.id)} className="p-2 rounded-lg hover:bg-red-50 text-red-500 transition-colors" title="Delete">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>
                      {p.isHidden && (
                        <div className="bg-red-50 text-red-700 text-xs font-bold px-2 py-1 rounded inline-block border border-red-200 uppercase tracking-widest mt-2">
                          Hidden from Guests
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              
              <div className="bg-paper border-t-2 border-border p-6 flex flex-col items-center">
                <label className="flex items-center justify-center w-full py-4 bg-accent text-white rounded-xl cursor-pointer hover:bg-indigo-600 active:scale-[0.98] transition-all shadow-sm font-bold text-base">
                  <Upload className="w-5 h-5 mr-2" />
                  Create a new study set
                  <input type="file" accept=".json" className="hidden" onChange={handleFileUpload} />
                </label>
                <p className="text-[11px] font-bold text-muted tracking-widest uppercase mt-4">Upload from JSON format</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Reset Dialog */}
      <AnimatePresence>
        {showResetDialog && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ink/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-paper rounded-2xl shadow-lg max-w-sm w-full p-6 border border-border"
            >
               <h3 className="text-xl font-bold text-ink mb-2">Reset Progress?</h3>
               <p className="text-sm text-muted mb-6">This clears all answers for the current paper. It cannot be undone.</p>
               <div className="flex gap-3 justify-end">
                 <button onClick={() => setShowResetDialog(false)} className="px-4 py-2 font-bold text-muted hover:bg-cream rounded-lg transition-colors">Cancel</button>
                 <button onClick={confirmReset} className="px-4 py-2 font-bold bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors shadow-sm">Yes, Reset</button>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
