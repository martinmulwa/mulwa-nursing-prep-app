'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  Droplets, 
  Baby, 
  Scissors, 
  Hospital, 
  Activity, 
  Zap, 
  CheckCircle2, 
  XCircle, 
  BookOpen, 
  RotateCcw,
  Search,
  ChevronDown,
  ChevronUp,
  BrainCircuit,
  AlertCircle,
  Upload,
  Edit2,
  Trash2,
  Library
} from 'lucide-react';
import { questions, Question } from '@/lib/questions';
import { cn } from '@/lib/utils';

const TOPICS = [
  { id: 'all', name: 'All Topics', icon: BookOpen, color: 'bg-ink text-paper' },
  { id: 'Cardiovascular', name: 'Cardio', icon: Heart, color: 'bg-red-100 text-red-800' },
  { id: 'Hematology', name: 'Haem', icon: Droplets, color: 'bg-rose-100 text-rose-800' },
  { id: 'Pediatric', name: 'Paeds', icon: Baby, color: 'bg-blue-100 text-blue-800' },
  { id: 'Surgical', name: 'Surgical', icon: Scissors, color: 'bg-amber-100 text-amber-800' },
  { id: 'Medical-Surgical', name: 'Med-Surg', icon: Hospital, color: 'bg-emerald-100 text-emerald-800' },
  { id: 'Renal', name: 'Renal', icon: Activity, color: 'bg-indigo-100 text-indigo-800' },
  { id: 'Endocrine', name: 'Endocrine', icon: Zap, color: 'bg-yellow-100 text-yellow-800' },
  { id: 'Pharmacology', name: 'Pharma', icon: AlertCircle, color: 'bg-purple-100 text-purple-800' },
];

interface Paper {
  id: string;
  title: string;
  questions: Question[];
}

const DEFAULT_PAPER: Paper = {
  id: 'default-part-1',
  title: 'Part 1 Promotional Exam',
  questions: questions
};

export default function StudyGuide() {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const [papers, setPapers] = useState<Paper[]>([]);
  const [activePaperId, setActivePaperId] = useState<string>('default-part-1');
  const [allProgress, setAllProgress] = useState<Record<string, Record<number, number>>>({});
  const [allExpanded, setAllExpanded] = useState<Record<string, Record<number, boolean>>>({});
  
  const [mounted, setMounted] = useState(false);
  const [showResetDialog, setShowResetDialog] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showPaperManager, setShowPaperManager] = useState(false);
  
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'validating' | 'success' | 'error'>('idle');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadMessage, setUploadMessage] = useState('');

  // Load progress and papers from localStorage after mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
      
      // Load papers
      const savedPapers = localStorage.getItem('nursing-prep-papers');
      if (savedPapers) {
        try {
          setPapers(JSON.parse(savedPapers));
        } catch (e) {
          console.error('Failed to load papers', e);
          setPapers([DEFAULT_PAPER]);
        }
      } else {
        setPapers([DEFAULT_PAPER]);
      }

      // Load active paper id
      const savedActiveId = localStorage.getItem('nursing-prep-active-paper');
      if (savedActiveId) {
        setActivePaperId(savedActiveId);
      }

      // Load progress
      const savedProgress = localStorage.getItem('nursing-prep-all-progress');
      if (savedProgress) {
        try {
          setAllProgress(JSON.parse(savedProgress));
        } catch (e) {
          console.error('Failed to load progress', e);
        }
      } else {
        // Migrate old progress if exists
        const oldProgress = localStorage.getItem('nursing-prep-progress');
        if (oldProgress) {
          try {
            setAllProgress({ 'default-part-1': JSON.parse(oldProgress) });
          } catch (e) {}
        }
      }
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // Save progress and papers
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('nursing-prep-papers', JSON.stringify(papers));
      localStorage.setItem('nursing-prep-active-paper', activePaperId);
      localStorage.setItem('nursing-prep-all-progress', JSON.stringify(allProgress));
    }
  }, [papers, activePaperId, allProgress, mounted]);

  const activePaper = useMemo(() => papers.find(p => p.id === activePaperId) || papers[0] || DEFAULT_PAPER, [papers, activePaperId]);
  const currentQuestions = activePaper.questions;
  const answered = useMemo(() => allProgress[activePaperId] || {}, [allProgress, activePaperId]);
  const expanded = useMemo(() => allExpanded[activePaperId] || {}, [allExpanded, activePaperId]);

  const filteredQuestions = useMemo(() => {
    return currentQuestions.filter(q => {
      const matchesFilter = filter === 'all' || q.topic === filter;
      const matchesSearch = q.text.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            q.topic.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, searchQuery, currentQuestions]);

  const stats = useMemo(() => {
    const total = currentQuestions.length;
    if (!mounted) return { total, answeredCount: 0, correctCount: 0, score: 0 };
    
    const answeredCount = Object.keys(answered).length;
    const correctCount = Object.entries(answered).filter(([num, idx]) => {
      const q = currentQuestions.find(q => q.num === parseInt(num));
      return q?.correct === idx;
    }).length;
    const score = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
    return { total, answeredCount, correctCount, score };
  }, [answered, mounted, currentQuestions]);

  const handleSelect = (qNum: number, idx: number) => {
    if (answered[qNum] !== undefined) return;
    setAllProgress(prev => ({
      ...prev,
      [activePaperId]: {
        ...(prev[activePaperId] || {}),
        [qNum]: idx
      }
    }));
    setAllExpanded(prev => ({
      ...prev,
      [activePaperId]: {
        ...(prev[activePaperId] || {}),
        [qNum]: true
      }
    }));
  };

  const toggleExpand = (qNum: number) => {
    setAllExpanded(prev => ({
      ...prev,
      [activePaperId]: {
        ...(prev[activePaperId] || {}),
        [qNum]: !expanded[qNum]
      }
    }));
  };

  const confirmReset = () => {
    setAllProgress(prev => {
      const next = { ...prev };
      delete next[activePaperId];
      return next;
    });
    setAllExpanded(prev => {
      const next = { ...prev };
      delete next[activePaperId];
      return next;
    });
    setShowResetDialog(false);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploadStatus('validating');
    setUploadProgress(10);
    setUploadMessage('Reading file...');

    const reader = new FileReader();
    reader.onload = (e) => {
      setTimeout(() => {
        try {
          setUploadProgress(40);
          setUploadMessage('Parsing JSON...');
          const content = e.target?.result as string;
          const parsed = JSON.parse(content);
          
          setTimeout(() => {
            setUploadProgress(70);
            setUploadMessage('Validating questions...');
            
            // Comprehensive validation
            if (Array.isArray(parsed) && parsed.length > 0) {
              const isValid = parsed.every(q => 
                q.text && typeof q.text === 'string' &&
                Array.isArray(q.options) && q.options.length > 0 &&
                typeof q.correct === 'number' && q.correct >= 0 && q.correct < q.options.length
              );

              if (isValid) {
                setUploadProgress(100);
                setUploadMessage('Upload successful!');
                setUploadStatus('success');
                
                setTimeout(() => {
                  const newPaper = {
                    id: Date.now().toString(),
                    title: file.name.replace('.json', ''),
                    questions: parsed
                  };
                  setPapers(prev => [...prev, newPaper]);
                  setActivePaperId(newPaper.id);
                  setUploadStatus('idle');
                  setUploadProgress(0);
                }, 1000);
              } else {
                setUploadStatus('error');
                setUploadMessage('Invalid format: Questions must have text, options array, and a valid correct answer index.');
                setTimeout(() => setUploadStatus('idle'), 4000);
              }
            } else {
              setUploadStatus('error');
              setUploadMessage('Invalid format: File must contain a non-empty array of questions.');
              setTimeout(() => setUploadStatus('idle'), 4000);
            }
          }, 400);
        } catch (error) {
          setUploadStatus('error');
          setUploadMessage('Error parsing JSON file. Ensure it is valid JSON.');
          setTimeout(() => setUploadStatus('idle'), 4000);
        }
      }, 400);
    };
    reader.readAsText(file);
    event.target.value = '';
  };

  const renamePaper = (id: string) => {
    const paperToRename = papers.find(p => p.id === id);
    if (!paperToRename) return;
    const newTitle = prompt('Enter new name for this paper:', paperToRename.title);
    if (newTitle && newTitle.trim()) {
      setPapers(prev => prev.map(p => p.id === id ? { ...p, title: newTitle.trim() } : p));
    }
  };

  const deletePaper = (id: string) => {
    if (id === 'default-part-1') {
      alert('Cannot delete the default paper.');
      return;
    }
    if (confirm('Are you sure you want to delete this paper?')) {
      setPapers(prev => prev.filter(p => p.id !== id));
      if (activePaperId === id) {
        setActivePaperId('default-part-1');
      }
      
      // cleanup progress
      setAllProgress(prev => {
        const next = { ...prev };
        delete next[id];
        return next;
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-ink text-paper border-b-4 border-accent shadow-lg">
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="bg-accent p-2 rounded-lg shrink-0">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h1 className="font-display text-xl md:text-2xl font-bold tracking-tight truncate">
                  Mulwa <span className="text-accent">Nursing</span> Prep
                </h1>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <button 
                  onClick={() => setShowPaperManager(true)}
                  className="flex items-center gap-1.5 bg-transparent text-xs font-mono uppercase tracking-widest text-muted hover:text-accent transition-colors focus:outline-none cursor-pointer max-w-[200px] sm:max-w-[300px]"
                  title="Open Library"
                >
                  <Library className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{activePaper.title}</span>
                  <ChevronDown className="w-3 h-3 shrink-0" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 w-full md:w-auto">
            <div className="flex-1 md:flex-none">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono uppercase text-muted">Overall Progress</span>
                <span className="text-[10px] font-mono text-accent">{stats.answeredCount} / {stats.total}</span>
              </div>
              <div className="h-2 w-full md:w-48 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${(stats.answeredCount / stats.total) * 100}%` }}
                  className="h-full bg-accent"
                />
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-display font-black text-accent leading-none">{stats.score}%</div>
              <div className="text-[10px] font-mono uppercase text-muted mt-1">Accuracy</div>
            </div>

            <button 
              onClick={() => setShowSearch(!showSearch)}
              className={cn(
                "p-2 rounded-full transition-colors",
                showSearch ? "bg-accent text-white" : "bg-white/10 text-white hover:bg-white/20"
              )}
              title="Toggle Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Collapsible Search */}
      <AnimatePresence>
        {showSearch && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-cream border-b border-border sticky top-[84px] md:top-[88px] z-40 shadow-sm overflow-hidden"
          >
            <div className="max-w-5xl mx-auto px-4 py-3">
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted group-focus-within:text-accent transition-colors" />
                <input 
                  type="text"
                  placeholder="Search questions, topics, or keywords..."
                  className="w-full bg-paper border border-border rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-2xl font-bold text-ink">
            {filter === 'all' ? 'All Questions' : `${filter} Questions`}
            <span className="ml-3 text-sm font-mono text-muted font-normal">({filteredQuestions.length})</span>
          </h2>
          <button 
            onClick={() => setShowResetDialog(true)}
            className="flex items-center gap-2 text-xs font-mono text-muted hover:text-accent transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            Reset Progress
          </button>
        </div>

        <div className="space-y-6">
          {filteredQuestions.map((q) => {
            const isAnswered = answered[q.num] !== undefined;
            const selectedIdx = answered[q.num];
            const isCorrect = selectedIdx === q.correct;
            const isOpen = expanded[q.num];
            const topicInfo = TOPICS.find(t => t.id === q.topic) || TOPICS[0];
            const TopicIcon = topicInfo.icon;

            return (
              <motion.div 
                layout
                key={q.num}
                className={cn(
                  "bg-white rounded-2xl border-2 transition-all overflow-hidden",
                  isAnswered 
                    ? isCorrect ? "border-emerald-500/50 shadow-sm" : "border-accent/50 shadow-sm"
                    : "border-border hover:border-accent/30"
                )}
              >
                {/* Question Header */}
                <div className="bg-cream/50 px-6 py-4 flex items-center justify-between border-b border-border">
                  <div className="flex items-center gap-3">
                    <span className="bg-border text-muted text-[10px] font-mono font-bold px-2 py-1 rounded">Q{q.num}</span>
                    <span className={cn("px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5", topicInfo.color)}>
                      <TopicIcon className="w-3 h-3" />
                      {q.topic}
                    </span>
                  </div>
                  {isAnswered && (
                    <div className={cn("flex items-center gap-1.5 text-xs font-bold", isCorrect ? "text-emerald-600" : "text-accent")}>
                      {isCorrect ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                      {isCorrect ? "Correct" : "Incorrect"}
                    </div>
                  )}
                </div>

                {/* Question Body */}
                <div className="p-6">
                  <p className="text-lg font-medium leading-relaxed text-ink mb-6">{q.text}</p>
                  
                  <div className="grid gap-3">
                    {q.options.map((opt, idx) => {
                      const isSelected = selectedIdx === idx;
                      const isRight = idx === q.correct;
                      const letters = ['A', 'B', 'C', 'D'];

                      return (
                        <button
                          key={idx}
                          disabled={isAnswered}
                          onClick={() => handleSelect(q.num, idx)}
                          className={cn(
                            "group flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all",
                            !isAnswered && "bg-paper border-border hover:border-ink hover:bg-cream",
                            isAnswered && isRight && "bg-emerald-50 border-emerald-500 text-emerald-900",
                            isAnswered && isSelected && !isRight && "bg-red-50 border-accent text-red-900",
                            isAnswered && !isSelected && !isRight && "bg-paper border-border opacity-50"
                          )}
                        >
                          <span className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center font-mono text-sm font-bold transition-colors",
                            !isAnswered && "bg-border text-muted group-hover:bg-ink group-hover:text-paper",
                            isAnswered && isRight && "bg-emerald-500 text-white",
                            isAnswered && isSelected && !isRight && "bg-accent text-white",
                            isAnswered && !isSelected && !isRight && "bg-border text-muted"
                          )}>
                            {letters[idx]}
                          </span>
                          <span className="flex-1 font-medium">{opt}</span>
                          {isAnswered && isRight && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
                          {isAnswered && isSelected && !isRight && <XCircle className="w-5 h-5 text-accent" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Explanation Toggle */}
                {isAnswered && (
                  <button 
                    onClick={() => toggleExpand(q.num)}
                    className="w-full px-6 py-3 bg-paper border-t border-border flex items-center justify-between text-xs font-mono text-muted hover:text-ink transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      {isOpen ? "Hide Explanation" : "Show Explanation"}
                    </span>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                )}

                {/* Explanation Content */}
                <AnimatePresence>
                  {isAnswered && isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-cream/30"
                    >
                      <div className="p-6 border-t border-border space-y-6">
                        {/* Correct Rationale */}
                        <div>
                          <h4 className="text-[10px] font-mono uppercase text-muted mb-2 tracking-widest flex items-center gap-2">
                            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                            Correct Rationale
                          </h4>
                          <p className="text-sm leading-relaxed text-ink/80">{q.explanation}</p>
                        </div>

                        {/* Why Others are Wrong */}
                        <div className="grid md:grid-cols-2 gap-4">
                          {Object.entries(q.wrongReasons).map(([idx, reason]) => (
                            <div key={idx} className="bg-white/50 p-3 rounded-lg border border-border/50">
                              <h5 className="text-[10px] font-mono font-bold text-accent mb-1">
                                Option {['A', 'B', 'C', 'D'][parseInt(idx)]}
                              </h5>
                              <p className="text-xs text-muted leading-relaxed">{reason}</p>
                            </div>
                          ))}
                        </div>

                        {/* Memory Tip */}
                        <div className="bg-gold/10 border-2 border-gold/20 rounded-xl p-4 flex gap-4">
                          <div className="bg-gold p-2 rounded-lg h-fit">
                            <BrainCircuit className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-gold uppercase tracking-wider mb-1">Memory Tip</h4>
                            <p className="text-sm text-gold/90 font-medium italic leading-snug">
                              {q.memory}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}

          {filteredQuestions.length === 0 && (
            <div className="text-center py-20 bg-paper rounded-3xl border-2 border-dashed border-border">
              <Search className="w-12 h-12 text-muted mx-auto mb-4 opacity-20" />
              <h3 className="text-lg font-display font-bold text-muted">No questions found</h3>
              <p className="text-sm text-muted/60">Try adjusting your filters or search query.</p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-paper border-t border-border py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm text-muted mb-4">
            <strong>Karen Hospital Medical Training College</strong><br />
            NCK KRN Diploma · Year 1 · {activePaper.title}
          </p>
          <div className="flex items-center justify-center gap-4 text-xs font-mono text-muted/60">
            <span>{currentQuestions.length} Questions</span>
            <span>•</span>
            <span>Interactive Study Mode</span>
            <span>•</span>
            <span>By Mulwa</span>
          </div>
        </div>
      </footer>

      {/* Reset Dialog */}
      <AnimatePresence>
        {showResetDialog && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ink/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-paper rounded-2xl shadow-xl max-w-sm w-full overflow-hidden border border-border"
            >
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-display font-bold text-ink mb-2">Reset Progress?</h3>
                <p className="text-sm text-muted">
                  This will clear all your answered questions and reset your score to 0%. This action cannot be undone.
                </p>
              </div>
              <div className="bg-cream px-6 py-4 flex items-center justify-end gap-3 border-t border-border">
                <button
                  onClick={() => setShowResetDialog(false)}
                  className="px-4 py-2 text-sm font-semibold text-muted hover:text-ink transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmReset}
                  className="px-4 py-2 text-sm font-semibold bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-sm"
                >
                  Yes, Reset
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* Paper Manager Dialog */}
      <AnimatePresence>
        {showPaperManager && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ink/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-paper rounded-2xl shadow-xl max-w-md w-full overflow-hidden border border-border flex flex-col max-h-[85vh]"
            >
              <div className="p-4 border-b border-border flex justify-between items-center bg-cream">
                <h3 className="font-display font-bold text-ink flex items-center gap-2">
                  <Library className="w-5 h-5 text-accent" />
                  Paper Library
                </h3>
                <button onClick={() => setShowPaperManager(false)} className="text-muted hover:text-ink transition-colors">
                  <XCircle className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-4 overflow-y-auto flex-1 space-y-3 bg-paper">
                {papers.map(p => {
                  const isActive = activePaperId === p.id;
                  return (
                    <div 
                      key={p.id} 
                      className={cn(
                        "p-3 rounded-xl border flex justify-between items-center transition-colors",
                        isActive ? "border-accent bg-accent/5" : "border-border hover:border-accent/50"
                      )}
                    >
                      <div 
                        className="cursor-pointer flex-1 min-w-0 pr-4" 
                        onClick={() => { setActivePaperId(p.id); setShowPaperManager(false); }}
                      >
                        <div className="font-medium text-ink truncate">{p.title}</div>
                        <div className="text-xs text-muted font-mono mt-0.5">{p.questions.length} Questions</div>
                      </div>
                      <div className="flex gap-2 shrink-0">
                        <button 
                          onClick={() => renamePaper(p.id)} 
                          className="p-1.5 text-muted hover:text-accent hover:bg-accent/10 rounded-md transition-colors"
                          title="Rename"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        {p.id !== 'default-part-1' && (
                          <button 
                            onClick={() => deletePaper(p.id)} 
                            className="p-1.5 text-muted hover:text-red-500 hover:bg-red-50 rounded-md transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="p-4 border-t border-border bg-cream">
                {uploadStatus === 'idle' ? (
                  <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-dashed border-accent/40 rounded-xl cursor-pointer hover:bg-accent/5 hover:border-accent transition-colors group">
                    <div className="bg-accent/10 p-2 rounded-full mb-2 group-hover:scale-110 transition-transform">
                      <Upload className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-sm font-medium text-ink">Upload JSON Paper</span>
                    <span className="text-xs text-muted mt-1">Click to browse files</span>
                    <input type="file" accept=".json" className="hidden" onChange={handleFileUpload} />
                  </label>
                ) : (
                  <div className="w-full h-28 border-2 border-border rounded-xl flex flex-col items-center justify-center p-4 bg-paper">
                    {uploadStatus === 'validating' && (
                      <>
                        <div className="w-full bg-border rounded-full h-2 mb-3 overflow-hidden">
                          <motion.div 
                            className="bg-accent h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${uploadProgress}%` }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                        <span className="text-sm font-medium text-ink animate-pulse">{uploadMessage}</span>
                      </>
                    )}
                    {uploadStatus === 'success' && (
                      <>
                        <div className="bg-green-100 p-2 rounded-full mb-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="text-sm font-medium text-green-700">{uploadMessage}</span>
                      </>
                    )}
                    {uploadStatus === 'error' && (
                      <>
                        <div className="bg-red-100 p-2 rounded-full mb-2">
                          <XCircle className="w-5 h-5 text-red-600" />
                        </div>
                        <span className="text-xs font-medium text-red-600 text-center">{uploadMessage}</span>
                      </>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
