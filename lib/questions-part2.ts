import { Question } from './types';

export const questionsPart2: Question[] = [
  {
    num: 31,
    topic: "Surgical",
    text: "A nurse is assisting a physician in an emergency surgery for a client with intestinal perforation. Which of the following descriptions is most suitable to the type of surgery performed?",
    options: ["Surgery required immediately for survival", "Surgery required within one or two days", "Surgery performed at the client's request", "Surgery planned as per client's convenience"],
    correct: 0,
    explanation: "Intestinal perforation causes peritonitis and sepsis, which are life-threatening. This requires 'Emergency' surgery — immediate intervention to save life.",
    wrongReasons: {
      1: "This describes 'Urgent' surgery (e.g., kidney stones).",
      2: "This describes 'Elective' or 'Cosmetic' surgery.",
      3: "This describes 'Elective' surgery."
    },
    memory: "PERFORATION = PERITONITIS = EMERGENCY."
  },
  {
    num: 32,
    topic: "Gastrointestinal",
    text: "The following procedure is an intervention for gastroesophageal reflux disease",
    options: ["Fundoplication", "Manometry", "Pneumatic dilation", "Esophageogastroduodenoscopy"],
    correct: 0,
    explanation: "Nissen Fundoplication is a surgical procedure where the top of the stomach is wrapped around the lower esophagus to strengthen the sphincter and prevent acid reflux.",
    wrongReasons: {
      1: "Manometry is a diagnostic test to measure esophageal pressure/motility.",
      2: "Pneumatic dilation is a treatment for Achalasia (difficulty swallowing).",
      3: "EGD is a diagnostic tool (endoscopy), not a therapeutic intervention for GERD itself."
    },
    memory: "GERD = FUNDOPLICATION (The Wrap)."
  },
  {
    num: 33,
    topic: "Hematology",
    text: "A group of cancer is characterised by Reed-Sternberg cells that begin as malignant in a single lymph node and then spread to contiguous lymph nodes characterizes:",
    options: ["Hodgkin's lymphoma", "Non-Hodgkin's lymphoma", "Burkitt's lymphoma", "Multiple myeloma"],
    correct: 0,
    explanation: "Hodgkin's Lymphoma is uniquely identified by the presence of Reed-Sternberg cells (large, multi-nucleated cells) and its predictable spread through adjacent lymph node chains.",
    wrongReasons: {
      1: "Non-Hodgkin's lacks Reed-Sternberg cells and spreads unpredictably.",
      2: "Burkitt's is a specific type of Non-Hodgkin's, often associated with EBV.",
      3: "Multiple myeloma is a cancer of plasma cells in the bone marrow."
    },
    memory: "REED-STERNBERG = HODGKIN'S."
  },
  {
    num: 34,
    topic: "Cardiovascular",
    text: "Which of the following is NOT a MAJOR manifestation in Jones's diagnostic criteria of Rheumatic Fever:",
    options: ["Polyarthritis", "Arthralgia", "Erythema marginatum", "Subcutaneous nodules"],
    correct: 1,
    explanation: "Jones Criteria for Rheumatic Fever: Major = Joints (Polyarthritis), Carditis, Nodules, Erythema marginatum, Sydenham chorea. Arthralgia (joint pain without inflammation) is a MINOR criterion.",
    wrongReasons: {
      0: "Polyarthritis is a MAJOR criterion.",
      2: "Erythema marginatum is a MAJOR criterion.",
      3: "Subcutaneous nodules is a MAJOR criterion."
    },
    memory: "J-O-N-E-S (Joints, Oh my heart, Nodules, Erythema, Sydenham) = MAJOR."
  },
  {
    num: 35,
    topic: "Surgical",
    text: "A nurse is caring for a patient following a whipple procedure (removal of the head of the pancreas, duodenum, part of the stomach, and common bile duct). The patient has nausea and vomiting and absent bowel tones. The nurse inserts a nasogastric tube per physician order to treat which surgical complication?",
    options: ["Pain", "Constipation", "Fluid volume deficit", "Paralytic ileus"],
    correct: 3,
    explanation: "Paralytic ileus is a common post-op complication where bowel motility stops. NG tubes provide decompression, removing gas and fluid to relieve nausea/vomiting and prevent aspiration.",
    wrongReasons: {
      0: "NG tubes don't treat pain directly.",
      1: "Constipation is a lack of stool; ileus is a lack of motility. NG is for decompression.",
      2: "NG tubes can actually contribute to fluid deficit by removing gastric juices; they don't treat it."
    },
    memory: "NO BOWEL SOUNDS + VOMITING = ILEUS. NG = DECOMPRESS."
  },
  {
    num: 36,
    topic: "Pediatric",
    text: "One of the following is not a complication of gastroenteritis:",
    options: ["Electrolyte disturbance", "Renal failure", "Vomiting", "Convulsion"],
    correct: 2,
    explanation: "Vomiting is a symptom/cause of gastroenteritis, not a complication of it. Complications are the secondary problems that arise from the disease (like dehydration leading to renal failure or electrolyte imbalances causing convulsions).",
    wrongReasons: {
      0: "Electrolyte disturbance is a common complication of fluid loss.",
      1: "Renal failure (Prerenal) occurs due to severe dehydration.",
      3: "Convulsions can occur due to hyponatremia or high fever (febrile seizures)."
    },
    memory: "VOMITING = The Disease. RENAL FAIL = The Complication."
  },
  {
    num: 37,
    topic: "Gastrointestinal",
    text: "A patient is experiencing acute gastritis after ingesting an acidic substance. The best management intervention is",
    options: ["Perform gastric lavage", "Provide supportive care and antacid therapy", "Induce vomiting using ipecac", "Administer motility agents to improve gastric emptying"],
    correct: 1,
    explanation: "In corrosive ingestion (acids/alkalis), inducing vomiting or performing lavage is dangerous as it re-exposes the esophagus to the chemical. Supportive care and neutralizing/antacid therapy is the safest approach.",
    wrongReasons: {
      0: "Lavage can cause perforation in a chemically damaged stomach.",
      2: "Ipecac/Vomiting is strictly contraindicated in corrosive ingestion.",
      3: "Motility agents don't address the chemical burn."
    },
    memory: "ACID/BASE INGESTION = DO NOT VOMIT. Support and neutralize."
  },
  {
    num: 38,
    topic: "Endocrine",
    text: "The surgical intervention of choice for the removal of pituitary tumor is:",
    options: ["Transpituitary surgery", "Transhypophysis surgery", "Transsphenoidal surgery", "Transcranial surgery"],
    correct: 2,
    explanation: "Transsphenoidal hypophysectomy is the standard surgical approach, where the surgeon reaches the pituitary through the sphenoid sinus (via the nose or upper lip).",
    wrongReasons: {
      0: "Not a standard medical term.",
      1: "Not a standard medical term.",
      3: "Transcranial (opening the skull) is reserved for very large or complex tumors, not the first choice."
    },
    memory: "PITUITARY = THROUGH THE NOSE (Transsphenoidal)."
  },
  {
    num: 39,
    topic: "Renal",
    text: "Temporary urinary diversion includes the following:",
    options: ["Urinary catheter, Nephrostomy", "Urostomy, Nephrostomy", "Urostomy, Urinary catheter", "Colostomy, Nephrostomy"],
    correct: 0,
    explanation: "Temporary diversions are used to bypass an obstruction or allow healing. Urinary catheters and nephrostomy tubes (inserted directly into the kidney) are common temporary methods.",
    wrongReasons: {
      1: "Urostomies are usually permanent (e.g., ileal conduit).",
      2: "Urostomies are usually permanent.",
      3: "Colostomy is for bowel, not urine."
    },
    memory: "NEPHROSTOMY = Direct to Kidney (Temporary). CATHETER = Temporary."
  },
  {
    num: 40,
    topic: "Cardiovascular",
    text: "The primary reason for administering morphine sulphate to a patient with myocardial infarction is:",
    options: ["To sedate the client", "To decrease the client's pain", "To decrease the client's anxiety", "To decrease oxygen demand on the client's heart"],
    correct: 3,
    explanation: "While morphine does reduce pain and anxiety, the 'primary' physiological reason in MI is to reduce preload and afterload (vasodilation), which decreases the heart's workload and oxygen demand.",
    wrongReasons: {
      0: "Sedation is a side effect, not the primary goal.",
      1: "Pain relief is a goal, but decreasing O2 demand is the critical physiological outcome.",
      2: "Anxiety relief is a goal, but decreasing O2 demand is the priority."
    },
    memory: "MORPHINE in MI = LESS WORK for the heart."
  },
  {
    num: 41,
    topic: "Cardiovascular",
    text: "An infant who is receiving a cardiac glycoside has an apical pulse of 80b/min. which is the best nursing intervention for this assessment finding?",
    options: ["Administer drug as ordered", "Withdraw the drug and notify doctor", "Assess apical pulse every hour for the next five hours", "Decrease drug dose and administer"],
    correct: 1,
    explanation: "Cardiac glycosides (Digoxin) should be held if the pulse is too low. In infants, the cutoff is typically 90-110 bpm. 80 bpm is bradycardia for an infant, indicating potential digoxin toxicity.",
    wrongReasons: {
      0: "Administering would worsen the bradycardia.",
      2: "Assessing is good, but the drug MUST be held first.",
      3: "Nurses cannot change doses without an order."
    },
    memory: "DIGOXIN: Hold if <60 (Adult), <90 (Infant)."
  },
  {
    num: 42,
    topic: "Renal",
    text: "Which of the following are indications of acute hemodialysis:",
    options: ["High serum potassium, Impending pulmonary edema", "End stage renal failure, Medication overdose", "End stage renal failure, High serum potassium", "Impending pulmonary edema, End stage renal failure"],
    correct: 0,
    explanation: "Acute (emergency) dialysis is indicated for life-threatening conditions: Hyperkalemia (High K+), Fluid Overload (Pulmonary Edema), Severe Acidosis, and certain Toxicities.",
    wrongReasons: {
      1: "ESRD is an indication for chronic dialysis, not necessarily acute unless there's a crisis.",
      2: "ESRD is chronic.",
      3: "ESRD is chronic."
    },
    memory: "A-E-I-O-U: Acidosis, Electrolytes (K+), Ingestion (Toxins), Overload (Fluid), Uremia."
  },
  {
    num: 43,
    topic: "General",
    text: "A disease that is present at birth is called?",
    options: ["Acquired disease", "Genetic disease", "Congenital disease", "Familial disease"],
    correct: 2,
    explanation: "Congenital diseases are those present from birth, regardless of whether they are caused by genetics, environment, or infection during pregnancy.",
    wrongReasons: {
      0: "Acquired diseases develop after birth.",
      1: "Genetic diseases are caused by DNA; not all congenital diseases are genetic (e.g., Fetal Alcohol Syndrome).",
      3: "Familial diseases run in families but might not be present at birth."
    },
    memory: "CONGENITAL = BORN WITH IT."
  },
  {
    num: 44,
    topic: "Hematology",
    text: "Prehepatic causes of jaundice include the following",
    options: ["Prematurity, blood transfusion reaction", "Tumor lysis syndrome, hemolytic anemia", "Cholelithiasis, liver cirrhosis", "Transfusion reaction, cholelithiasis"],
    correct: 1,
    explanation: "Prehepatic jaundice occurs when there is excessive breakdown of RBCs (hemolysis) before the blood reaches the liver. Hemolytic anemia and Tumor Lysis Syndrome (massive cell death) are prehepatic causes.",
    wrongReasons: {
      0: "Prematurity is often hepatic (immature liver).",
      2: "Cholelithiasis is posthepatic (obstruction); Cirrhosis is hepatic.",
      3: "Cholelithiasis is posthepatic."
    },
    memory: "PREHEPATIC = HEMOLYSIS (Bursting cells)."
  },
  {
    num: 45,
    topic: "Pharmacology",
    text: "Upon checking the medication chart, nurse Jane found out that his patient is taking both acetaminophen and furosemide. Which of the following intervention is an appropriate nursing action for these two drugs?",
    options: ["Administer as they are because they enhance drug actions", "Measure patient's intake and output closely", "Arrange for SGPT monitoring", "Assess for signs and symptoms of bleeding"],
    correct: 1,
    explanation: "Furosemide is a potent diuretic. Monitoring I&O is standard for any patient on diuretics to ensure effectiveness and prevent dehydration/electrolyte imbalance.",
    wrongReasons: {
      0: "They don't significantly 'enhance' each other in a beneficial way that requires no monitoring.",
      2: "SGPT (Liver) is for acetaminophen, but I&O is more critical for the furosemide therapy.",
      3: "Neither drug is a primary anticoagulant."
    },
    memory: "DIURETIC = I&O."
  },
  {
    num: 46,
    topic: "Gastrointestinal",
    text: "Select a true statement regarding portal hypertension",
    options: ["It is caused by increased blood supply to the liver secondary to hepatomegaly", "The most common complication of portal hypertension is liver dysfunction", "Ascites can result from portal hypertension", "Resistance to blood flow through the liver is diminished during portal hypertension"],
    correct: 2,
    explanation: "Portal hypertension (increased pressure in the portal vein) leads to fluid leaking into the abdominal cavity (ascites) and the formation of varices.",
    wrongReasons: {
      0: "It's caused by resistance to flow (e.g., cirrhosis), not just 'increased supply'.",
      1: "The most common/dangerous complications are variceal bleeding and ascites.",
      3: "Resistance is INCREASED, not diminished."
    },
    memory: "PORTAL HTN = BACKUP = ASCITES & VARICES."
  },
  {
    num: 47,
    topic: "Renal",
    text: "Indicate whether the following statement is TRUE or FALSE: The right kidney is slightly higher than the left kidney:",
    options: ["True", "False"],
    correct: 1,
    explanation: "The right kidney is actually slightly LOWER than the left kidney because it is displaced downward by the large size of the liver on the right side.",
    wrongReasons: {
      0: "Incorrect anatomy."
    },
    memory: "LIVER on the RIGHT pushes the kidney DOWN."
  },
  {
    num: 48,
    topic: "Pediatric",
    text: "Newton is a child diagnosed with coarctation of aorta. While assessing him, you would expect to find which of the following:",
    options: ["Squatting posture", "Absent or diminished femoral pulses", "Severe cyanosis at birth", "Bounding pulse"],
    correct: 1,
    explanation: "Coarctation is a narrowing of the aorta. This causes high BP in the arms/head and low BP/pulses in the legs. Diminished femoral pulses are a hallmark sign.",
    wrongReasons: {
      0: "Squatting is for Tetralogy of Fallot (cyanotic spells).",
      2: "Coarctation is usually acyanotic.",
      3: "Bounding pulses might be in the arms, but the 'hallmark' is the difference between upper and lower."
    },
    memory: "COARCTATION = CLAMPED Aorta. High BP up, Low BP down."
  },
  {
    num: 49,
    topic: "Cardiovascular",
    text: "Which of the following symptoms is MOST COMMONLY associated with left-sided heart failure:",
    options: ["Arrhythmias", "Crackles", "Hepatic engorgement", "Hypotension"],
    correct: 1,
    explanation: "Left-sided heart failure causes blood to back up into the lungs. This leads to pulmonary congestion and 'crackles' (rales) on auscultation.",
    wrongReasons: {
      0: "Arrhythmias can happen in any heart failure but aren't the 'hallmark'.",
      2: "Hepatic engorgement is a sign of RIGHT-sided failure (systemic backup).",
      3: "Hypotension is a late sign of pump failure, but crackles are the classic symptom."
    },
    memory: "LEFT = LUNGS (Crackles, Dyspnea). RIGHT = REST of body (Edema, JVD)."
  },
  {
    num: 50,
    topic: "Surgical",
    text: "The nurse recognizes the value of leg exercises in the prevention of postoperative thrombophlebitis. When should the nurse teach the correct technique for leg exercises to a client?",
    options: ["When early signs of venous stasis are evident", "In postanesthetic recovery", "Upon transfer from postanesthetic care unit to the postsurgical unit", "Prior to surgery"],
    correct: 3,
    explanation: "Pre-operative teaching is most effective because the patient is alert, not in pain, and not under the influence of anesthesia. They can practice and understand the importance before they are incapacitated.",
    wrongReasons: {
      0: "Too late; prevention should start before stasis occurs.",
      1: "Patient is too groggy from anesthesia.",
      2: "Patient may be in pain or tired; pre-op is always better."
    },
    memory: "PRE-OP = BEST TIME TO TEACH."
  },
  {
    num: 51,
    topic: "Pediatric",
    text: "Baby Moon, with suspected rheumatic fever, is admitted to the pediatric unit. Which of the following history would be essential for the nurse to obtain?",
    options: ["A fever that started 3 days ago", "Lack of interest in food", "A recent episode of pharyngitis", "Vomiting for 2 days"],
    correct: 2,
    explanation: "Rheumatic fever is an autoimmune response that occurs 2-4 weeks after a Group A Beta-Hemolytic Streptococcal (GABHS) throat infection (pharyngitis).",
    wrongReasons: {
      0: "Fever is a symptom, but the 'cause' history is more essential for diagnosis.",
      1: "Non-specific.",
      3: "Non-specific."
    },
    memory: "RHEUMATIC FEVER = STREP THROAT history."
  },
  {
    num: 52,
    topic: "Hematology",
    text: "A patient on blood transfusion gets a transfusion reaction, what should you do FIRST:",
    options: ["Stop the transfusion", "Notify the blood bank and a physician immediately", "Re-check identifying tags", "Monitor vital signs and urine output strictly"],
    correct: 0,
    explanation: "The immediate priority in a transfusion reaction is to stop the infusion of the offending blood to prevent further harm.",
    wrongReasons: {
      1: "Notification comes second.",
      2: "Re-checking is part of the investigation later.",
      3: "Monitoring is important but only after the blood is stopped."
    },
    memory: "REACTION = STOP THE BLOOD."
  },
  {
    num: 53,
    topic: "Cardiovascular",
    text: "Blood in pericardial sac prevents venous return to and contraction of the heart is associated with:",
    options: ["Pericarditis", "Coronary Artery Disease", "Cardiac Tamponade", "Myocardial infarction"],
    correct: 2,
    explanation: "Cardiac tamponade occurs when fluid (blood) builds up in the pericardial sac, compressing the heart and preventing it from filling properly (decreased venous return).",
    wrongReasons: {
      0: "Pericarditis is inflammation, which can lead to tamponade but isn't the compression itself.",
      1: "CAD is about blocked arteries.",
      3: "MI is death of heart muscle."
    },
    memory: "TAMPONADE = HEART SQUEEZE (Compression)."
  },
  {
    num: 54,
    topic: "Nursing Process",
    text: "The nurse prepares to assess a client who has just been admitted to the ward. During the assessment the nurse performs which activity?",
    options: ["Collects data", "Formulates nursing diagnosis", "Develops a care plan", "Writes client outcome"],
    correct: 0,
    explanation: "Assessment is the first step of the nursing process, which involves systematic collection of subjective and objective data.",
    wrongReasons: {
      1: "Diagnosis is the second step.",
      2: "Planning is the third step.",
      3: "Outcomes are part of the planning step."
    },
    memory: "A-D-P-I-E: Assessment (Data), Diagnosis, Planning, Implementation, Evaluation."
  },
  {
    num: 55,
    topic: "Endocrine",
    text: "Riedel's thyroiditis is also referred to as:",
    options: ["Simple goitre", "Multiple nodular goitre", "Solitary nodular goitre", "Fibroitic goitre"],
    correct: 3,
    explanation: "Riedel's thyroiditis is a rare chronic inflammatory disease characterized by dense fibrosis that replaces normal thyroid tissue, often called 'woody' or fibrotic thyroiditis.",
    wrongReasons: {
      0: "Simple goiter is just enlargement.",
      1: "Nodular goiter involves lumps.",
      2: "Solitary is a single lump."
    },
    memory: "RIEDEL'S = RIGID (Fibrotic)."
  },
  {
    num: 56,
    topic: "Renal",
    text: "Extramural cause of hydronephrosis occurs when:",
    options: ["Pressure on the ureter by gravid uterus", "Neoplasm of ureter", "Urethral Stricture", "Renal calculus"],
    correct: 0,
    explanation: "Extramural means 'outside the wall'. Pressure from an external source like a pregnant (gravid) uterus or an external tumor is an extramural cause.",
    wrongReasons: {
      1: "Neoplasm of the ureter is 'intramural' (in the wall).",
      2: "Stricture is 'intramural'.",
      3: "Calculus (stone) is 'intraluminal' (inside the tube)."
    },
    memory: "EXTRAMURAL = EXTERNAL pressure."
  },
  {
    num: 57,
    topic: "Nursing Process",
    text: "Using Maslow's hierarchy of needs, a nurse assigns the highest priority to which client need?",
    options: ["Elimination", "Security", "Safety", "Belonging"],
    correct: 0,
    explanation: "Physiological needs (Air, Water, Food, Elimination, Sleep) are at the base of Maslow's pyramid and must be met first.",
    wrongReasons: {
      1: "Security is the second level.",
      2: "Safety is the second level.",
      3: "Belonging is the third level."
    },
    memory: "MASLOW: Physiological (Body) comes first."
  },
  {
    num: 58,
    topic: "Cardiovascular",
    text: "Which of the following conditions MOST commonly results in coronary artery disease:",
    options: ["Atherosclerosis", "Diabetes mellitus", "Myocardial infarction", "Renal failure"],
    correct: 0,
    explanation: "Atherosclerosis (buildup of plaques in the arteries) is the primary underlying cause of coronary artery disease.",
    wrongReasons: {
      1: "Diabetes is a risk factor, not the disease process itself.",
      2: "MI is a RESULT of CAD, not the cause.",
      3: "Renal failure is a complication/comorbidity."
    },
    memory: "CAD = ATHEROSCLEROSIS."
  },
  {
    num: 59,
    topic: "Nursing Process",
    text: "Nursing orders:",
    options: ["Is an intervention aimed as optimizing health", "Is an evaluation on planned interventions", "Gives directives of how planned interventions are to be implemented", "Directed to student nurses to follow"],
    correct: 2,
    explanation: "Nursing orders are specific instructions that describe how to carry out nursing interventions to achieve patient goals.",
    wrongReasons: {
      0: "This is a general goal.",
      1: "This is evaluation.",
      3: "They are for all nursing staff, not just students."
    },
    memory: "ORDERS = DIRECTIVES."
  },
  {
    num: 60,
    topic: "Respiratory",
    text: "A nurse is teaching a client on the use of a respiratory inhaler. Which action by the client indicates a need for further teaching.",
    options: ["Remove the cap and shakes well before use", "Press the canister down with finger as he breaths in", "Inhale the mist and exhales within 5 seconds", "Waits 1 to 2 minutes between puffs if more than one puff has been prescribed"],
    correct: 2,
    explanation: "After inhaling the medication, the patient should hold their breath for at least 10 seconds to allow the drug to settle in the deep airways. Exhaling within 5 seconds is too soon.",
    wrongReasons: {
      0: "Correct action.",
      1: "Correct action (coordination).",
      3: "Correct action (allows airways to open before second puff)."
    },
    memory: "INHALER: Shake, Breathe out, Press & Inhale, HOLD 10 SECONDS."
  }
];
