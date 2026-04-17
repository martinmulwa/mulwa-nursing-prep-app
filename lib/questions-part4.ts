import { Question } from './types';

export const questionsPart4: Question[] = [
  {
    num: 91,
    topic: "Surgical",
    text: "A nurse is caring for an older adult client who has been prescribed fluid restriction before surgery. Which of the following should the nurse check to assess the risk of fluid restriction in elderly clients?",
    options: ["Cardiac status", "Anxiety level", "Vital signs", "Self-therapy"],
    correct: 0,
    explanation: "Elderly patients often have underlying cardiovascular disease. Fluid restriction can lead to dehydration, which increases blood viscosity and can trigger cardiac events (like MI or heart failure) or stroke.",
    wrongReasons: {
      1: "Anxiety is important but not a physiological risk of fluid restriction.",
      2: "Vital signs are monitored, but the 'risk' is primarily cardiac.",
      3: "Self-therapy is not relevant."
    },
    memory: "ELDERLY + DEHYDRATION = CARDIAC RISK."
  },
  {
    num: 92,
    topic: "Endocrine",
    text: "The following are features of Grave's disease",
    options: ["Heat intolerance, Nervousness, Weight loss", "Cold intolerance, Nervousness, Weight gain", "Cold intolerance, Loss of appetite, Weight loss", "Heat intolerance, increased appetite, Constipation"],
    correct: 0,
    explanation: "Grave's disease is hyperthyroidism. Everything speeds up: Metabolism (Weight loss), Heat production (Heat intolerance), and Nervous system (Nervousness/Tremors).",
    wrongReasons: {
      1: "Cold intolerance and weight gain are signs of Hypothyroidism.",
      2: "Cold intolerance is Hypothyroidism.",
      3: "Constipation is Hypothyroidism (Hyperthyroidism causes diarrhea)."
    },
    memory: "GRAVE'S = GO FAST (Hyperthyroidism)."
  },
  {
    num: 93,
    topic: "Pharmacology",
    text: "A client has been taking aspirin since his heart attack in 1997. The client is at risk for what?",
    options: ["Thrombophlebitis", "Blood clots", "Hemorrhage", "Infection"],
    correct: 2,
    explanation: "Aspirin is an antiplatelet drug that prevents clotting. Its primary side effect is an increased risk of bleeding (hemorrhage), especially in the GI tract.",
    wrongReasons: {
      0: "Aspirin prevents thrombophlebitis.",
      1: "Aspirin prevents blood clots.",
      3: "Aspirin doesn't increase infection risk."
    },
    memory: "ASPIRIN = ANTI-CLOT = BLEEDING risk."
  },
  {
    num: 94,
    topic: "Surgical",
    text: "What is the rationale for having the client void before surgery?",
    options: ["To assess for urinary tract infection", "To prevent electrolyte imbalance", "To assess for pregnancy in women", "To prevent bladder distention"],
    correct: 3,
    explanation: "Anesthesia relaxes the bladder muscles, and IV fluids are given during surgery. A full bladder can become distended and is at risk for injury during abdominal surgery.",
    wrongReasons: {
      0: "UTI is not the primary reason for pre-op voiding.",
      1: "Voiding doesn't prevent electrolyte imbalance.",
      2: "Pregnancy is assessed via blood/urine tests, not just voiding."
    },
    memory: "PRE-OP VOID = EMPTY BLADDER = NO INJURY."
  },
  {
    num: 95,
    topic: "Surgical",
    text: "A nurse is preparing to receive a client in post-anesthesia care unit (PACU). The client is diabetic and has undergone knee surgery. Which information would be most important for the receiving nurse to obtain to develop an appropriate plan of care for this client?",
    options: ["Environment of the operating room", "Information about allergic agents", "Amount of blood loss", "Chronic disease history"],
    correct: 3,
    explanation: "For a diabetic patient, knowing the chronic disease history (e.g., how they manage their diabetes, their last blood sugar, and insulin doses) is critical for post-op glycemic control and preventing complications like DKA or hypoglycemia.",
    wrongReasons: {
      0: "Not critical for care.",
      1: "Important, but chronic disease management is more complex for a diabetic in surgery.",
      2: "Blood loss is important for any patient, but the 'diabetic' specific care depends on the history."
    },
    memory: "DIABETIC in SURGERY = BLOOD SUGAR management history is key."
  },
  {
    num: 96,
    topic: "Surgical",
    text: "A female client who received general anesthesia returns from surgery. Postoperatively, which nursing diagnosis takes highest priority for this client?",
    options: ["Acute pain related to surgery", "Deficient fluid volume related to blood and fluid loss from surgery", "Impaired physical mobility related to surgery", "Risk for aspiration related to anesthesia"],
    correct: 3,
    explanation: "General anesthesia suppresses the gag reflex and level of consciousness. The highest priority is Airway protection (Aspiration risk) until the patient is fully awake.",
    wrongReasons: {
      0: "Pain is important but not life-threatening like aspiration.",
      1: "Fluid volume is important but Airway (Aspiration) comes first.",
      2: "Mobility is a later concern."
    },
    memory: "ABC: Airway (Aspiration) > Breathing > Circulation (Fluid) > Pain."
  },
  {
    num: 97,
    topic: "Cardiovascular",
    text: "Dyspnea, cough, expectoration, weakness, and edema are classic signs and symptoms of which of the following conditions:",
    options: ["Pericarditis", "Hypertension", "Obliterative cardiomyopathy", "Restrictive cardiomyopathy"],
    correct: 3,
    explanation: "Restrictive cardiomyopathy leads to stiff heart muscles that can't fill properly, causing heart failure symptoms: pulmonary congestion (dyspnea, cough) and systemic backup (edema).",
    wrongReasons: {
      0: "Pericarditis causes chest pain, not typically edema/expectoration.",
      1: "Hypertension is usually asymptomatic until complications occur.",
      2: "Obliterative is a rare form, but Restrictive is the more common exam answer for this symptom set."
    },
    memory: "STIFF HEART = RESTRICTIVE = HEART FAILURE symptoms."
  },
  {
    num: 98,
    topic: "Renal",
    text: "The destruction of renal organs commonly follows this order:",
    options: ["Urethra, renal pelvis, renal cortex", "Urethra, renal bladder, renal cortex", "Urethra, renal bladder, ureters", "Ureters, renal pelvis, renal cortex"],
    correct: 0,
    explanation: "In ascending urinary tract obstruction/infection, the damage moves from the lower tract (Urethra) to the upper tract (Renal Pelvis) and finally to the functional tissue (Renal Cortex).",
    wrongReasons: {
      1: "Bladder is usually involved, but the 'path' to the kidney tissue is through the pelvis.",
      2: "Ureters are involved, but the 'destruction' of the kidney itself starts at the pelvis.",
      3: "It starts from the bottom (Urethra) usually."
    },
    memory: "ASCENDING DAMAGE = BOTTOM to TOP (Urethra → Pelvis → Cortex)."
  },
  {
    num: 99,
    topic: "Cardiovascular",
    text: "The term used to describe an enlargement of the heart muscle is:",
    options: ["Cardiomegaly", "Cardiomyopathy", "Myocarditis", "Pericarditis"],
    correct: 0,
    explanation: "Cardiomegaly is the medical term for an enlarged heart, often seen on X-ray.",
    wrongReasons: {
      1: "Cardiomyopathy is a disease of the heart muscle (which can cause enlargement).",
      2: "Myocarditis is inflammation of the heart muscle.",
      3: "Pericarditis is inflammation of the sac around the heart."
    },
    memory: "CARDIO- (Heart) + MEGALY (Big)."
  },
  {
    num: 100,
    topic: "Surgical",
    text: "A client is undergoing surgery for an appendectomy. This would be considered what type of surgery?",
    options: ["Emergency surgery", "Palliative surgery", "Diagnostic surgery", "Elective surgery"],
    correct: 0,
    explanation: "Appendicitis is an acute inflammation that can lead to rupture and peritonitis. It requires immediate (Emergency) surgery.",
    wrongReasons: {
      1: "Palliative is for symptom relief.",
      2: "Diagnostic is to find a cause.",
      3: "Elective is planned/non-urgent."
    },
    memory: "APPENDIX = EMERGENCY."
  },
  {
    num: 101,
    topic: "Renal",
    text: "The following feedback from a patient will show that they have misunderstood the health message given by the nurse about the complications of urinary tract obstruction:",
    options: ["Hydronephrosis can develop", "Renal calculi can develop", "Urinary tract infection can develop", "Renal cancer can develop"],
    correct: 3,
    explanation: "Urinary tract obstruction causes backup (Hydronephrosis), stasis (Infection), and stone formation (Calculi). It does NOT directly cause renal cancer.",
    wrongReasons: {
      0: "Correct complication.",
      1: "Correct complication.",
      2: "Correct complication."
    },
    memory: "OBSTRUCTION = BACKUP, STONES, INFECTION. Not cancer."
  },
  {
    num: 102,
    topic: "Endocrine",
    text: "Extrogenous cause of cushing's syndrome includes:",
    options: ["Pituitary adenoma", "Adrenal adenoma", "Asthma medication", "Lung carcinoma"],
    correct: 2,
    explanation: "Exogenous means 'from outside the body'. Long-term use of corticosteroids (like those for asthma or autoimmune diseases) is the most common exogenous cause of Cushing's syndrome.",
    wrongReasons: {
      0: "Pituitary adenoma is an endogenous cause (Cushing's Disease).",
      1: "Adrenal adenoma is an endogenous cause.",
      3: "Lung carcinoma can cause ectopic ACTH (endogenous)."
    },
    memory: "EXOGENOUS = EXTERNAL (Steroid pills/inhalers)."
  },
  {
    num: 103,
    topic: "Hematology",
    text: "Which immune stimulants is usually used for treatment of blood-related cancer?",
    options: ["Interferons", "Interleukins", "Colony-stimulating factors", "Steroids"],
    correct: 0,
    explanation: "Interferons are used in the treatment of certain leukemias and lymphomas to slow cancer cell growth and boost the immune response.",
    wrongReasons: {
      1: "Interleukins are used in renal cell carcinoma and melanoma.",
      2: "CSFs (like G-CSF) are used to boost white cell counts after chemo, not as the primary cancer treatment.",
      3: "Steroids are used but aren't primarily 'immune stimulants' in this context (they are often lympholytic)."
    },
    memory: "INTERFERON = INTERFERE with cancer growth."
  },
  {
    num: 104,
    topic: "Pharmacology",
    text: "A pregnant woman needs a lipid lowering agent. What would be best class of lipid-lowering agent for pregnant women?",
    options: ["HMG-CoA reductase inhibitor", "Bile acid sequestrants", "Cholesterol absorption inhibitors", "Phosphodiesterase inhibitors"],
    correct: 1,
    explanation: "Statins (HMG-CoA reductase inhibitors) are contraindicated in pregnancy (Category X). Bile acid sequestrants (like Cholestyramine) are not absorbed into the bloodstream, making them the safest choice for pregnant women.",
    wrongReasons: {
      0: "Statins are teratogenic.",
      2: "Not as well-studied/safe as bile acid sequestrants in pregnancy.",
      3: "Not lipid-lowering agents."
    },
    memory: "PREGNANT + CHOLESTEROL = BILE ACID SEQUESTRANTS (Safe because they stay in the gut)."
  },
  {
    num: 105,
    topic: "Respiratory",
    text: "Which of the following is the primary reason to teach pursed-lip breathing to clients with emphysema?",
    options: ["To promote oxygen intake", "To strengthen the diaphragm", "To strengthen the intercostal muscles", "To promote carbon dioxide elimination"],
    correct: 3,
    explanation: "Pursed-lip breathing creates positive pressure in the airways, preventing them from collapsing during exhalation. This allows more air (and trapped CO2) to be expelled from the lungs.",
    wrongReasons: {
      0: "It helps, but the 'primary' mechanism is preventing airway collapse to let CO2 out.",
      1: "Diaphragmatic breathing does this.",
      2: "Not the goal."
    },
    memory: "PURSED LIPS = POSITIVE PRESSURE = CO2 OUT."
  },
  {
    num: 106,
    topic: "Nursing Process",
    text: "Priorities are considered important during planning as it helps anticipate and plan patients care. The nurse understands that priorities depend on:",
    options: ["The urgency of health problems identified", "The client's physician", "Non emergent health problems", "The future well-being of a client"],
    correct: 0,
    explanation: "Prioritization is based on the severity and urgency of the patient's problems (e.g., life-threatening vs. stable).",
    wrongReasons: {
      1: "Nurses prioritize based on assessment, not just physician orders.",
      2: "Priorities focus on the most emergent first.",
      3: "Future well-being is a goal, but immediate safety is the priority."
    },
    memory: "PRIORITY = URGENCY (ABC)."
  },
  {
    num: 107,
    topic: "Cardiovascular",
    text: "Which one of the following is a MAJOR complication of aneurysms:",
    options: ["Risk of clot formation", "Pressure on local structures", "Shock", "Haemorrhage"],
    correct: 3,
    explanation: "The most life-threatening complication of an aneurysm is rupture, leading to massive internal hemorrhage and death.",
    wrongReasons: {
      0: "This happens but isn't the 'major' life-threatening one.",
      1: "This happens but is usually secondary to the risk of rupture.",
      2: "Shock is a RESULT of hemorrhage."
    },
    memory: "ANEURYSM = BALLOON. Major risk = POP (Hemorrhage)."
  },
  {
    num: 108,
    topic: "Respiratory",
    text: "For a client with COPD, what is the main risk factor for pulmonary infections?",
    options: ["Fluid imbalance with pitting oedema", "Pooling of respiratory secretion", "Decreased fluid intake and loss of body weight", "Decreased anterior-posterior diameter of the chest"],
    correct: 1,
    explanation: "COPD causes thick, excessive mucus production and impaired ciliary action. This leads to 'pooling' of secretions, which provides a perfect breeding ground for bacteria.",
    wrongReasons: {
      0: "Edema is a sign of Cor Pulmonale, not a cause of infection.",
      2: "Weight loss is common but not the primary cause of infection.",
      3: "COPD causes INCREASED AP diameter (barrel chest)."
    },
    memory: "STAGNANT MUCUS = BACTERIA HOME."
  },
  {
    num: 109,
    topic: "Surgical",
    text: "Wound healing that occurs by granulation from the edges inwards and/or from bottom up is called?",
    options: ["Primary intention", "Secondary intention", "Tertiary intention", "Gapping"],
    correct: 1,
    explanation: "Secondary intention healing occurs in wounds with extensive tissue loss or infection. The wound is left open and heals by filling with granulation tissue from the bottom up.",
    wrongReasons: {
      0: "Primary intention is for clean, sutured incisions.",
      2: "Tertiary (delayed primary) is when a wound is left open then closed later.",
      3: "Gapping is dehiscence, not a healing type."
    },
    memory: "SECONDARY = SLOW (Bottom up). PRIMARY = PINNED (Sutured)."
  },
  {
    num: 110,
    topic: "Pharmacology",
    text: "Nurse Kate is taking care of client taking ibuprofen. Which of the following should be included in her assessment and monitoring?",
    options: ["Blood pressure and bowel sounds", "Weight and appetite", "Muscle strength and range of motion", "Respiratory rate, depth, and rhythm"],
    correct: 0,
    explanation: "Ibuprofen (NSAID) can cause fluid retention and hypertension. It also irritates the GI tract, so monitoring for GI distress (bowel sounds/pain) is important.",
    wrongReasons: {
      1: "Less critical than BP/GI.",
      2: "Not directly related to ibuprofen side effects.",
      3: "Not directly related."
    },
    memory: "NSAID = BP UP + GI UPSET."
  },
  {
    num: 111,
    topic: "Surgical",
    text: "The scrub nurse has donned her sterile gown and is ready for gloves. What should be done next?",
    options: ["Pull hand out of the gown and open the glove package", "Use non-dominant hand to open the sterile glove package", "Fold cuffs of glove over gown cuff", "Pick up first glove by cuff and stretch over non-dominant gown cuff"],
    correct: 3,
    explanation: "In closed gloving, the hands remain inside the gown sleeves. The nurse picks up the glove with the sleeve-covered hand and pulls it over the cuff.",
    wrongReasons: {
      0: "Hands should NEVER come out of the gown before gloving (that's open gloving).",
      1: "The package should already be open or opened by a circulator.",
      2: "This is part of the process, but 'picking up the glove' is the first step."
    },
    memory: "CLOSED GLOVING = HANDS STAY IN SLEEVES."
  },
  {
    num: 112,
    topic: "Endocrine",
    text: "Insulin-like Growth Factor-1 (IGF-1) production is triggered by:",
    options: ["Insulin hormone", "Glucagon hormone", "Growth hormone", "Thyroxine hormone"],
    correct: 2,
    explanation: "Growth Hormone (GH) from the pituitary stimulates the liver to produce IGF-1, which then mediates many of the growth-promoting effects of GH.",
    wrongReasons: {
      0: "Insulin is related in structure but doesn't trigger IGF-1.",
      1: "Glucagon raises blood sugar.",
      3: "Thyroxine regulates metabolism."
    },
    memory: "GROWTH HORMONE → LIVER → IGF-1 → GROWTH."
  },
  {
    num: 113,
    topic: "Pediatric",
    text: "You are nursing a baby who has tested positive for malaria. Which of the following symptoms will warrant you to administer Artesunate:",
    options: ["Fever", "General body malaise", "Inability to breastfeed", "Vomiting"],
    correct: 2,
    explanation: "Inability to drink or breastfeed is a 'danger sign' in IMCI/Malaria protocols, indicating severe malaria that requires parenteral treatment like IV/IM Artesunate.",
    wrongReasons: {
      0: "Fever is common in simple malaria (oral treatment).",
      1: "Malaise is common in simple malaria.",
      3: "Vomiting once or twice might be simple, but the 'inability to feed' is the definitive danger sign."
    },
    memory: "CAN'T FEED = SEVERE MALARIA = ARTESUNATE."
  },
  {
    num: 114,
    topic: "Pharmacology",
    text: "When administering methyl xanthine theophylline, the nurse can expect?",
    options: ["Decrease in pulmonary function", "Decrease in tidal volume", "Increase in pulmonary function", "Increase in residual volume"],
    correct: 2,
    explanation: "Theophylline is a bronchodilator. It relaxes airway smooth muscle, leading to increased airflow and improved pulmonary function.",
    wrongReasons: {
      0: "Opposite of the goal.",
      1: "Tidal volume should increase or stabilize.",
      3: "Residual volume (trapped air) should DECREASE."
    },
    memory: "BRONCHODILATOR = BETTER BREATHING (Improved function)."
  },
  {
    num: 115,
    topic: "Cardiovascular",
    text: "A female patient is diagnosed with deep-vein thrombosis. Which nursing diagnosis should receive the highest priority at this time?",
    options: ["Impaired gas exchange related to increased blood flow", "Fluid volume excess related to peripheral vascular disease", "Risk for injury related to edema", "Altered peripheral tissue perfusion related to venous congestion"],
    correct: 3,
    explanation: "DVT is a blockage of venous return. This leads to venous congestion and impaired tissue perfusion in the affected limb.",
    wrongReasons: {
      0: "Impaired gas exchange is a risk if it becomes a PE, but the 'current' DVT diagnosis is about perfusion.",
      1: "DVT is not systemic fluid excess.",
      2: "Injury is a risk, but perfusion is the core physiological problem."
    },
    memory: "DVT = CLOGGED VEIN = POOR PERFUSION (Congestion)."
  },
  {
    num: 116,
    topic: "Respiratory",
    text: "An elderly client has been ill with the flu, experiencing headache, fever, and chills. After 3 days, she developed a cough productive of yellow sputum. The nurse auscultates her lungs and hears diffuse crackles. How would the nurse best interpret these assessment findings?",
    options: ["It is likely that the client is developing a secondary bacterial pneumonia", "The assessment findings are consistent with influenza and are to be expected", "The client is getting dehydrated and needs to increase her fluid intake to decrease secretions", "The client has not been taking her decongestants and bronchodilators as prescribed"],
    correct: 0,
    explanation: "Influenza is a viral infection. The development of productive yellow sputum and crackles after a few days suggests a secondary bacterial infection (pneumonia), which is a common and serious complication in the elderly.",
    wrongReasons: {
      1: "Yellow sputum is NOT expected in simple flu (usually clear/white).",
      2: "Dehydration doesn't cause yellow sputum.",
      3: "Decongestants don't prevent pneumonia."
    },
    memory: "FLU + YELLOW SPUTUM = PNEUMONIA."
  },
  {
    num: 117,
    topic: "Respiratory",
    text: "Immediately following a thoracentesis, which clinical manifestations indicate that a complication has occurred and the physician should be notified?",
    options: ["Serosanguineous drainage from the puncture site", "Increased temperature and blood pressure", "Increased pulse and pallor", "Hypotension and hypothermia"],
    correct: 2,
    explanation: "Increased pulse (tachycardia) and pallor are signs of shock or internal bleeding (hemothorax) or pneumothorax, which are major complications of thoracentesis.",
    wrongReasons: {
      0: "A small amount of drainage is normal.",
      1: "Fever takes time to develop (infection); BP would likely drop, not rise.",
      3: "Hypotension occurs, but hypothermia is not an immediate complication."
    },
    memory: "POST-PROCEDURE SHOCK = FAST PULSE + PALE SKIN."
  },
  {
    num: 118,
    topic: "Nursing Process",
    text: "Prioritizing patient problems is usually based on:",
    options: ["Maslow's hierarchy of needs", "The nurse-to-nurse report", "Managerial influence", "Nonspecific data collection"],
    correct: 0,
    explanation: "Maslow's hierarchy provides a framework for prioritizing needs, starting with physiological/life-sustaining ones.",
    wrongReasons: {
      1: "Reports give info, but the 'basis' for priority is the hierarchy of needs.",
      2: "Management doesn't set clinical priorities.",
      3: "Data must be specific."
    },
    memory: "PRIORITY = MASLOW."
  },
  {
    num: 119,
    topic: "Cardiovascular",
    text: "A post-operative shoulder repair patient (post-op day 3) reports left calf pain. The nurse finds redness and swelling on assessment. What complication best explains these findings?",
    options: ["Positioning during surgery", "Wound infection", "Atelectasis", "Deep vein thrombosis"],
    correct: 3,
    explanation: "Calf pain, redness, and swelling in a post-op patient are classic signs of Deep Vein Thrombosis (DVT).",
    wrongReasons: {
      0: "Positioning might cause soreness, but not unilateral redness/swelling on day 3.",
      1: "Wound infection would be at the shoulder.",
      2: "Atelectasis is in the lungs."
    },
    memory: "CALF PAIN + SWELLING = DVT."
  },
  {
    num: 120,
    topic: "Endocrine",
    text: "Elevated calcitonin levels would be demonstrated by:",
    options: ["Serum calcium levels of 15.0 mg/dl", "Serum calcium levels of 13.0 mg/dl", "Serum calcium levels of 9.0 mg/dl", "Serum calcium levels of 6.0 mg/dl"],
    correct: 3,
    explanation: "Calcitonin is produced by the thyroid gland and works to LOWER serum calcium levels by inhibiting bone resorption. High calcitonin = Low Calcium. 6.0 mg/dL is hypocalcemia.",
    wrongReasons: {
      0: "High calcium (Hypercalcemia).",
      1: "High calcium.",
      2: "Normal calcium (~8.5-10.5)."
    },
    memory: "CALCITONIN = CALCI-TONE-DOWN (Lowers calcium)."
  }
];
