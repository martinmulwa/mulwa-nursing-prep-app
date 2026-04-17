import { Question } from './types';

export const questionsPart3: Question[] = [
  {
    num: 61,
    topic: "Respiratory",
    text: "Auscultation of a client's lungs reveals crackles in the left posterior base. The nursing intervention is to:",
    options: ["Repeat auscultation after asking the client to deep breath and cough", "Instruct the client to limit fluid intake to less than 2000 ml/day", "Inspect the client's ankles and sacrum for the presence of edema", "Place the client on bedrest in a semi-Fowler's position"],
    correct: 0,
    explanation: "Crackles (rales) can sometimes be caused by atelectasis (collapsed alveoli) that clears with deep breathing and coughing. The nurse should first see if the sounds persist after these maneuvers before assuming a more serious condition like pneumonia or heart failure.",
    wrongReasons: {
      1: "Fluid restriction is for heart failure, but crackles must be confirmed as persistent first.",
      2: "Checking for edema is relevant if heart failure is suspected, but 'clearing' the lungs is the more immediate diagnostic nursing action.",
      3: "Semi-Fowler's helps breathing but doesn't address the 'intervention' for the crackles themselves."
    },
    memory: "CRACKLES? → COUGH & RE-CHECK."
  },
  {
    num: 62,
    topic: "Surgical",
    text: "The kind of talipes characterized by abduction and inversion of the foot is:",
    options: ["Talipes equinus", "Talipes calcaneus", "Talipes valgus", "Talipes varus"],
    correct: 3,
    explanation: "Talipes varus involves inversion (turning inward) of the foot. It is often part of 'clubfoot' (Talipes equinovarus).",
    wrongReasons: {
      0: "Equinus = Plantar flexion (toes down like a horse).",
      1: "Calcaneus = Dorsiflexion (heel down).",
      2: "Valgus = Eversion (turning outward)."
    },
    memory: "VARUS = IN (Inversion). VALGUS = OUT (Eversion)."
  },
  {
    num: 63,
    topic: "Surgical",
    text: "A client has just returned to a nursing unit following bronchoscopy. A nurse would implement which of the following nursing interventions for this client?",
    options: ["Encouraging additional fluids for the next 24 hours", "Ensuring the return of the gag reflex before offering foods or fluids", "Administering atropine intravenously", "Administering small doses of midazolam (Versed)"],
    correct: 1,
    explanation: "During bronchoscopy, the throat is numbed with local anesthesia. The patient is at high risk for aspiration until the gag reflex returns. No oral intake is allowed until then.",
    wrongReasons: {
      0: "Fluids are only allowed AFTER the gag reflex returns.",
      2: "Atropine is given BEFORE the procedure to dry secretions, not after.",
      3: "Midazolam is for sedation DURING the procedure, not after."
    },
    memory: "NUMB THROAT = NO FOOD until GAG returns."
  },
  {
    num: 64,
    topic: "Respiratory",
    text: "A 34-year-old woman with a history of asthma is admitted to the emergency department. The nurse notes that the client is dyspneic, with a respiratory rate of 35 breaths/minute, nasal flaring, and use of accessory muscles. Auscultation of the lung fields reveals greatly diminished breath sounds. Based on these findings, what action should the nurse take to initiate care of the client?",
    options: ["Initiate oxygen therapy and reassess the client in 10 minutes", "Draw blood for an ABG analysis and send the client for a chest x-ray", "Encourage the client to relax and breathe slowly through the mouth", "Administer bronchodilators"],
    correct: 3,
    explanation: "In an acute asthma attack, the priority is to relieve the bronchospasm using rapid-acting bronchodilators (e.g., Salbutamol). 'Diminished breath sounds' indicate severe obstruction (silent chest), which is a medical emergency.",
    wrongReasons: {
      0: "Oxygen is needed, but reassessing in 10 minutes is too long for a 'silent chest' patient.",
      1: "Diagnostic tests shouldn't delay life-saving treatment.",
      2: "Relaxation won't fix severe bronchospasm."
    },
    memory: "ASTHMA ATTACK = BRONCHODILATOR NOW."
  },
  {
    num: 65,
    topic: "Surgical",
    text: "A nurse is preparing a client for endotracheal intubation. The anesthesiologist has ordered an anticholinergic medication for this client. Which of the following is an action of this medication?",
    options: ["It promotes induction of anesthesia", "It decreases respiratory secretions", "It promotes sleep or conscious sedation", "It decreases gastric acidity and volume"],
    correct: 1,
    explanation: "Anticholinergics (like Atropine or Glycopyrrolate) are given pre-operatively to dry up oral and respiratory secretions, reducing the risk of aspiration and making intubation easier.",
    wrongReasons: {
      0: "Induction agents like Propofol do this.",
      2: "Sedatives like Midazolam do this.",
      3: "H2 blockers or PPIs do this."
    },
    memory: "ANTICHOLINERGIC = ANTI-SPIT (Dry mouth)."
  },
  {
    num: 66,
    topic: "Endocrine",
    text: "While presenting in a nurses endocrine conference, the nurse correctly states that Addison's crisis manifests with:",
    options: ["Hypotension, Muscle weakness", "Hypertension, Muscle weakness", "Hypotension, Hypoglycemia", "Hypertension, Hyperglycemia"],
    correct: 2,
    explanation: "Addisonian crisis is an acute lack of cortisol and aldosterone. This leads to severe hypotension (due to fluid loss), hypoglycemia (lack of cortisol), and hyperkalemia.",
    wrongReasons: {
      0: "While hypotension and weakness occur, hypoglycemia is a more specific hallmark of the crisis.",
      1: "Hypertension is the opposite of what happens.",
      3: "Hypertension and Hyperglycemia are signs of Cushing's (the opposite)."
    },
    memory: "ADDISON = EVERYTHING IS LOW (BP, Sugar, Sodium). Except Potassium (High)."
  },
  {
    num: 67,
    topic: "Respiratory",
    text: "The inflammation of bronchi or bronchioles is called",
    options: ["Emphysema", "Bronchitis", "Asthma", "Lung cancer"],
    correct: 1,
    explanation: "Bronchitis is the inflammation of the bronchial tubes, often characterized by a productive cough.",
    wrongReasons: {
      0: "Emphysema is the destruction of alveoli.",
      2: "Asthma is reversible bronchospasm and inflammation.",
      3: "Lung cancer is a malignancy."
    },
    memory: "-ITIS = Inflammation. BRONCH- = Bronchi."
  },
  {
    num: 68,
    topic: "Surgical",
    text: "Baby Z has 60% burns. Which of the following nursing diagnosis will be your priority:",
    options: ["Risk for infection", "Hypothermia", "Impaired skin integrity", "Disturbed body image"],
    correct: 0,
    explanation: "In major burns, the loss of the skin barrier makes infection (sepsis) the leading cause of death after the initial fluid resuscitation phase. Preventing infection is a critical priority.",
    wrongReasons: {
      1: "Hypothermia is a risk but usually managed easily with blankets/warmers.",
      2: "Impaired skin integrity is the 'cause' of the other problems, not the priority 'risk' to manage.",
      3: "Body image is a long-term psychosocial concern, not an acute priority."
    },
    memory: "BURNS = NO BARRIER = INFECTION DANGER."
  },
  {
    num: 69,
    topic: "Respiratory",
    text: "A nurse is assessing a client with chronic airflow limitation and notes that the client has a \"barrel chest.\" The nurse interprets that this client has which of the following forms of chronic airflow limitation?",
    options: ["Chronic obstructive bronchitis", "Emphysema", "Bronchial asthma", "Bronchial asthma and bronchitis"],
    correct: 1,
    explanation: "Emphysema causes air trapping and hyperinflation of the lungs, which eventually pushes the rib cage outward, creating a 'barrel chest' (increased AP diameter).",
    wrongReasons: {
      0: "Chronic bronchitis is more associated with 'blue bloaters' (cyanosis and edema).",
      2: "Asthma is usually episodic, not chronic enough to cause barrel chest in most cases.",
      3: "Emphysema is the specific cause of the structural change."
    },
    memory: "EMPHYSEMA = AIR TRAPPING = BARREL CHEST."
  },
  {
    num: 70,
    topic: "Pharmacology",
    text: "Which of the following substances would alert the nurse for an increased risk of bleeding for a patient taking clopidogrel?",
    options: ["Chamomile tea", "Orange juice", "Candied mushrooms", "Peanuts"],
    correct: 0,
    explanation: "Chamomile has mild anticoagulant properties. When taken with antiplatelet drugs like Clopidogrel (Plavix), it can increase the risk of bleeding.",
    wrongReasons: {
      1: "Orange juice is safe.",
      2: "Mushrooms are safe.",
      3: "Peanuts are safe."
    },
    memory: "HERBAL TEAS (Ginkgo, Garlic, Ginseng, Chamomile) + BLOOD THINNERS = BLEEDING RISK."
  },
  {
    num: 71,
    topic: "Psychosocial",
    text: "Patient with reconstructive head and neck skin grafts following mouth cancer is crying when the nurse enters the room and states that she doesn't want to see any visitors. Which of the following best explains this behavior?",
    options: ["Cognition", "Self-concept", "Coping", "Relationships"],
    correct: 1,
    explanation: "The patient's behavior (crying, avoiding visitors) is likely due to a disturbed self-concept or body image following disfiguring surgery.",
    wrongReasons: {
      0: "Cognition is about thinking/memory.",
      2: "Coping is the 'process' of dealing with it, but the 'reason' for the behavior is the change in self-concept.",
      3: "Relationships are affected, but the root is the internal self-view."
    },
    memory: "DISFIGUREMENT = SELF-CONCEPT / BODY IMAGE issue."
  },
  {
    num: 72,
    topic: "Gastrointestinal",
    text: "The following statement regarding ulcerative colitis is true",
    options: ["The disease typically affects the proximal colon then spreads towards the rectum", "The inflammation is typically transmural", "The affected colon is characterized by a cobblestone appearance", "It is characterized by abscesses infiltrating the submucosal layers of the colon"],
    correct: 3,
    explanation: "Ulcerative colitis involves inflammation and ulceration of the mucosa and submucosa. Crypt abscesses are a classic microscopic finding.",
    wrongReasons: {
      0: "UC starts in the RECTUM and spreads proximally (upward).",
      1: "Crohn's is transmural; UC is only mucosa/submucosa.",
      2: "Cobblestone appearance is a hallmark of Crohn's Disease."
    },
    memory: "UC = ULCERS in the MUCOSA. Starts at the bottom (Rectum)."
  },
  {
    num: 73,
    topic: "Gastrointestinal",
    text: "A patient with chronic alcohol abuse is admitted with liver failure. You closely monitor the patient's blood pressure because of which change that is associated with the liver failure?",
    options: ["Hypoalbuminemia", "Increased capillary permeability", "Abnormal peripheral vasodilation", "Excess rennin release from the kidneys"],
    correct: 0,
    explanation: "The liver produces albumin. In liver failure, albumin levels drop (hypoalbuminemia). This decreases plasma oncotic pressure, causing fluid to leak out of the vessels (ascites/edema) and potentially lowering blood pressure.",
    wrongReasons: {
      1: "This happens in sepsis/inflammation, but hypoalbuminemia is the primary liver-failure mechanism.",
      2: "Vasodilation occurs in portal hypertension (splanchnic), but hypoalbuminemia is the systemic driver of fluid shift.",
      3: "Liver failure usually triggers the RAAS system (due to low effective volume), but it doesn't 'cause' the failure via renin."
    },
    memory: "LIVER FAIL = LOW ALBUMIN = LEAKY vessels = LOW BP."
  },
  {
    num: 74,
    topic: "Renal",
    text: "Some patients who are on dialysis complain of headache, nausea, vomiting, restlessness and decreased level of consciousness. You let them know that this is dialysis disequilibrium syndrome (DDS) which is:",
    options: ["Characterized by a range of renal symptoms", "Commonly seen when a patient is first started on dialysis", "Commonly seen in all sessions of dialysis", "Only seen in permanent dialysis"],
    correct: 1,
    explanation: "DDS occurs when urea is removed too quickly from the blood during the first few dialysis sessions. This creates an osmotic gradient that pulls water into the brain cells, causing cerebral edema.",
    wrongReasons: {
      0: "DDS symptoms are neurological (brain), not renal.",
      2: "It's rare after the first few sessions as the body adjusts.",
      3: "It can happen in acute or chronic dialysis starts."
    },
    memory: "DDS = DIALYSIS START = BRAIN SWELLING (Headache/Confusion)."
  },
  {
    num: 75,
    topic: "Gastrointestinal",
    text: "A patient was admitted with nausea, vomiting, and abdominal pain. The patient is scheduled for an Endoscopic Retrograde Cholangiopancreatography (ERCP) procedure. What type of surgery would this describe?",
    options: ["Explorative", "Diagnostic", "Curative", "Palliative"],
    correct: 1,
    explanation: "ERCP is primarily used to 'diagnose' problems in the bile and pancreatic ducts (though it can also be therapeutic/curative by removing stones).",
    wrongReasons: {
      0: "Explorative usually refers to open surgery (laparotomy).",
      2: "While it can remove stones, its primary classification in this context is diagnostic.",
      3: "Palliative is for symptom relief in incurable disease."
    },
    memory: "ERCP = SCOPE to SEE (Diagnose)."
  },
  {
    num: 76,
    topic: "Renal",
    text: "Long term complications of peritoneal dialysis include:",
    options: ["Peritonitis", "Leakage", "Bleeding", "Abdominal hernia"],
    correct: 3,
    explanation: "The constant pressure of the dialysate fluid in the abdominal cavity can weaken the abdominal wall over time, leading to hernias.",
    wrongReasons: {
      0: "Peritonitis is an acute/recurring complication, not necessarily 'long-term' in terms of physiological change.",
      1: "Leakage is an early/acute complication.",
      2: "Bleeding is an acute complication."
    },
    memory: "PD = PRESSURE in BELLY = HERNIA risk."
  },
  {
    num: 77,
    topic: "Surgical",
    text: "Select the most appropriate nursing action for suspected appendicitis in the emergency department",
    options: ["Administer a purgative", "Administer a strong opioid", "Begin an aggressive fluid therapy", "Administer a mild analgesic and a broad spectrum antibiotic"],
    correct: 2,
    explanation: "Aggressive fluid therapy is needed to prepare the patient for surgery and prevent dehydration/shock from potential peritonitis. Pain meds are often withheld or used sparingly until the surgeon assesses the patient.",
    wrongReasons: {
      0: "Purgatives/Enemas are strictly contraindicated as they can cause the appendix to RUPTURE.",
      1: "Strong opioids can mask the clinical signs needed for diagnosis.",
      3: "Antibiotics are given, but fluid resuscitation is the priority 'action' for the nurse."
    },
    memory: "APPENDICITIS = NPO + IV FLUIDS. No heat, no enemas."
  },
  {
    num: 78,
    topic: "Gastrointestinal",
    text: "Select a true statement regarding acute pancreatitis",
    options: ["The disease can be mild and self-limiting", "The clinical manifestations are limited to malfunctioning digestive system only", "Acute form of the disease is not characterized by autodigestion of the pancreas", "The most common cause of the disease is a bacterial infection"],
    correct: 0,
    explanation: "Many cases of acute pancreatitis are mild and resolve with supportive care (NPO, fluids, pain management).",
    wrongReasons: {
      1: "It can cause systemic complications like ARDS, renal failure, and shock.",
      2: "Autodigestion (by premature activation of enzymes) is the core mechanism.",
      3: "The most common causes are Gallstones and Alcohol, not bacteria."
    },
    memory: "PANCREATITIS = AUTODIGESTION. Can be mild or deadly."
  },
  {
    num: 79,
    topic: "Nursing Process",
    text: "Which of the following is of highest priority for a nurse in a general medical unit?",
    options: ["Patient with chest pain", "Patient with diarrhea", "Patient with productive cough", "Patient with a low-grade fever"],
    correct: 0,
    explanation: "Chest pain could indicate a myocardial infarction (MI), which is a life-threatening emergency (Circulation priority).",
    wrongReasons: {
      1: "Diarrhea is urgent but not immediately life-threatening.",
      2: "Productive cough is common and usually stable.",
      3: "Low-grade fever is non-urgent."
    },
    memory: "PRIORITY = ABC (Airway, Breathing, Circulation). Chest pain = C."
  },
  {
    num: 80,
    topic: "Gastrointestinal",
    text: "The major cause of malnutrition in Crohn's disease is",
    options: ["Intentional withholding of food because of poor appetite", "Malabsorption of food nutrients", "Intentional withholding of food to avoid postprandial cramping", "High metabolic demands in the patient"],
    correct: 1,
    explanation: "Crohn's disease involves transmural inflammation that can affect any part of the GI tract, leading to significant malabsorption of nutrients in the small intestine.",
    wrongReasons: {
      0: "Appetite may be low, but malabsorption is the 'major' physiological cause.",
      2: "This happens (fear of eating), but malabsorption is the primary driver of the malnutrition state.",
      3: "Metabolic demands are high during flares, but malabsorption is the constant factor."
    },
    memory: "CROHN'S = MALABSORPTION (Small bowel damage)."
  },
  {
    num: 81,
    topic: "Surgical",
    text: "The following diagnostic test is used to determine tracheal involvement in esophageal cancer",
    options: ["Barium swallow", "Oesophageoscopy", "Bronchoscopy", "Chest x-ray"],
    correct: 2,
    explanation: "Bronchoscopy allows direct visualization of the trachea and bronchi to see if the esophageal tumor has invaded the airway.",
    wrongReasons: {
      0: "Barium swallow shows the esophagus only.",
      1: "Esophagoscopy shows the esophagus only.",
      3: "X-ray might show a mass but can't confirm 'involvement' of the tracheal wall as clearly as a scope."
    },
    memory: "TRACHEA = BRONCHOSCOPY."
  },
  {
    num: 82,
    topic: "Surgical",
    text: "A female client is scheduled to have a chest radiograph. Which of the following questions is of most importance to the nurse assessing this client?",
    options: ["\"Is there any possibility that you could be pregnant?\"", "\"Are you wearing any metal chains or jewelry?\"", "\"Can you hold your breath easily?\"", "\"Are you able to hold your arms above your head?\""],
    correct: 0,
    explanation: "Radiation (X-rays) is teratogenic. The priority is protecting a potential fetus from radiation exposure.",
    wrongReasons: {
      1: "Important for image quality, but not a safety priority like pregnancy.",
      2: "Needed for the test, but not the 'most' important safety check.",
      3: "Needed for positioning, but safety comes first."
    },
    memory: "X-RAY = PREGNANCY CHECK FIRST."
  },
  {
    num: 83,
    topic: "General",
    text: "Lack of development of an organ or tissues is referred to as?",
    options: ["Hypertrophy", "Hypoplasia", "Metaplasia", "Aplasia"],
    correct: 3,
    explanation: "Aplasia is the complete failure of an organ or tissue to develop.",
    wrongReasons: {
      0: "Hypertrophy is enlargement.",
      1: "Hypoplasia is underdevelopment (it started but didn't finish).",
      2: "Metaplasia is change from one cell type to another."
    },
    memory: "A-PLASIA = NO-DEVELOPMENT."
  },
  {
    num: 84,
    topic: "Surgical",
    text: "An irreducible inguinal hernia can get complicated due to all of the following except:",
    options: ["Obstruction to the bowel lumen", "Loss of blood supply to the bowel loop which is stuck", "Gangrene of the bowel", "Dehydration secondary to diarrhea"],
    correct: 3,
    explanation: "Hernias cause constipation/obstruction, not diarrhea. Diarrhea is not a complication of an incarcerated hernia.",
    wrongReasons: {
      0: "Obstruction is a common complication.",
      1: "Strangulation (loss of blood supply) is a common complication.",
      2: "Gangrene follows strangulation."
    },
    memory: "HERNIA = BLOCKED (Constipation). Not runny (Diarrhea)."
  },
  {
    num: 85,
    topic: "Gastrointestinal",
    text: "A patient with duodenal ulcers is likely to experience the following",
    options: ["Acute epigastric pain immediately after taking food", "Relief of pain by drinking water", "Gnawing epigastric pain late in the night", "Stabbing pain in the right lower quadrant"],
    correct: 2,
    explanation: "Duodenal ulcer pain typically occurs 2-5 hours after meals (when the stomach is empty) and often wakes the patient at night. Food or antacids usually relieve the pain.",
    wrongReasons: {
      0: "Pain immediately after food is more common in Gastric ulcers.",
      1: "Water doesn't neutralize acid as effectively as food/antacids.",
      3: "RLQ pain is appendicitis."
    },
    memory: "DUODENAL = DELAYED pain (Empty stomach). GASTRIC = GREAT pain (Right after food)."
  },
  {
    num: 86,
    topic: "Renal",
    text: "The Grade of hydronephrosis characterized by mild dilatation of the renal pelvis and calyces only is:",
    options: ["Grade 0", "Grade 1", "Grade 2", "Grade 3"],
    correct: 1,
    explanation: "Grade 1 hydronephrosis involves mild dilatation of the renal pelvis without dilatation of the calyces or cortical thinning.",
    wrongReasons: {
      0: "Grade 0 is normal.",
      2: "Grade 2 involves moderate dilatation of pelvis and calyces.",
      3: "Grade 3 involves severe dilatation and cortical thinning."
    },
    memory: "GRADE 1 = MILD Pelvis stretch."
  },
  {
    num: 87,
    topic: "General",
    text: "Study of disease evolution is called?",
    options: ["Morphology", "Aetiology", "Clinical significance", "Pathogenesis"],
    correct: 3,
    explanation: "Pathogenesis is the step-by-step development and evolution of a disease from its start to its final manifestation.",
    wrongReasons: {
      0: "Morphology is the study of structure/shape.",
      1: "Aetiology is the study of the cause.",
      2: "Clinical significance is the importance of findings."
    },
    memory: "PATHOGENESIS = The STORY of the disease."
  },
  {
    num: 88,
    topic: "Endocrine",
    text: "A nurse tries to interpret the laboratory findings. The serum phosphate levels of 9.5 mg/dl is indicative of:",
    options: ["Hypersecretion of parathormone", "Hyposecretion of parathormone", "Normal secretion of parathormone", "Hypersecretion of calcitonin hormone"],
    correct: 1,
    explanation: "Parathyroid hormone (PTH) lowers phosphate levels by increasing renal excretion. Low PTH (hypoparathyroidism) leads to high serum phosphate (Hyperphosphatemia). Normal phosphate is ~2.5-4.5 mg/dL. 9.5 is very high.",
    wrongReasons: {
      0: "Hyper-PTH would cause LOW phosphate.",
      2: "9.5 is not normal.",
      3: "Calcitonin affects calcium more than phosphate."
    },
    memory: "PTH = PEE out Phosphate. Low PTH = High Phosphate."
  },
  {
    num: 89,
    topic: "Hematology",
    text: "When the red blood cell mass is abnormally high, the condition is called:",
    options: ["Aplastic anaemia", "Haemophilia", "Polycythaemia vera", "Leukaemia"],
    correct: 2,
    explanation: "Polycythemia vera is a blood cancer where the bone marrow makes too many red blood cells.",
    wrongReasons: {
      0: "Aplastic anemia is too FEW cells.",
      1: "Hemophilia is a clotting disorder.",
      3: "Leukemia is cancer of white blood cells."
    },
    memory: "POLY- = MANY. -CYTHEMIA = Cells."
  },
  {
    num: 90,
    topic: "Gastrointestinal",
    text: "The following diagnostic procedure is contraindicated in complete intestinal obstruction",
    options: ["Barium meal", "X-ray", "Duodenoscopy", "Rectosigmoidoscopy"],
    correct: 0,
    explanation: "Giving barium by mouth (Barium Meal) in a complete obstruction is dangerous because the barium can harden and worsen the obstruction or cause perforation.",
    wrongReasons: {
      1: "X-ray is the first test to diagnose obstruction.",
      2: "Endoscopy is usually avoided but not as strictly contraindicated as oral contrast.",
      3: "Rectosigmoidoscopy is from the bottom and might be used to decompress a volvulus."
    },
    memory: "OBSTRUCTION = NO BARIUM by mouth."
  }
];
