import { Question } from './types';

export const questionsPart1: Question[] = [
  {
    num: 1,
    topic: "Pediatric",
    text: "While managing a newborn with gastroschisis, you will:",
    options: ["Wrap the organs in saline so that the intestine does not dry out", "Wrap the organs in a silo to preserve body heat and moisture", "Encourage breastfeeding", "Restrict IV fluids"],
    correct: 0,
    explanation: "Immediate nursing care for gastroschisis involves protecting the exposed bowel from drying and infection. Wrapping the organs in sterile, saline-soaked gauze followed by a plastic wrap (to prevent evaporation) is the standard initial bedside management to maintain moisture and heat.",
    wrongReasons: {
      1: "A silo is a surgical/staged reduction tool used later, not the immediate bedside 'wrap' action.",
      2: "Breastfeeding is contraindicated initially as the baby needs to be NPO (nothing by mouth) for bowel rest.",
      3: "IV fluids are actually increased (not restricted) due to significant fluid loss from the exposed bowel."
    },
    memory: "GASTROSCHISIS = GAUZE (saline-soaked) + GENTLE wrap. Keep it wet, keep it warm, keep it sterile."
  },
  {
    num: 2,
    topic: "Respiratory",
    text: "Which of the following would be an expected outcome for a client recovering from an upper respiratory tract infection? The client will:",
    options: ["Maintain a fluid intake of 800 ml every 24 hours", "Experience chills only once a day", "Cough productively without chest discomfort", "Experience less nasal obstruction and discharge"],
    correct: 3,
    explanation: "Recovery from a URI (like the common cold) is marked by the resolution of symptoms such as congestion, rhinorrhea (runny nose), and sneezing. 'Less nasal obstruction and discharge' directly indicates improvement of the inflamed mucous membranes.",
    wrongReasons: {
      0: "800 ml is too low; patients with URIs need increased fluids (2-3L) to thin secretions.",
      1: "Chills should be absent in recovery, not occurring 'once a day'.",
      2: "A productive cough might persist, but the most direct sign of URI recovery is the clearing of nasal symptoms."
    },
    memory: "URI = Upper (Nose/Throat). Recovery = Clear nose, easier breathing."
  },
  {
    num: 3,
    topic: "Endocrine",
    text: "A nurse is giving a health talk to a group of patients attending the endocrine clinic. Which of the following reply from a patient implies that they understood the health talk:",
    options: ["Vasopressin is produced and stored in the adenohypophysis", "Vasopressin is produced and stored in the neurohypophysis", "Oxytocin is produced from the neurohypophysis", "Oxytocin is stored from the neurohypophysis"],
    correct: 3,
    explanation: "Oxytocin and Vasopressin (ADH) are synthesized in the hypothalamus but are transported to and stored in the posterior pituitary (neurohypophysis) until release. Therefore, they are 'stored' and released from the neurohypophysis.",
    wrongReasons: {
      0: "Adenohypophysis is the anterior pituitary; it does not store vasopressin.",
      1: "Vasopressin is produced in the hypothalamus, not the neurohypophysis.",
      2: "Oxytocin is produced in the hypothalamus, not the neurohypophysis."
    },
    memory: "HYPO (Hypothalamus) = Factory. NEURO (Posterior Pituitary) = Warehouse/Store."
  },
  {
    num: 4,
    topic: "Pediatric",
    text: "Spina bifida is one of the possible neural tube defects that can occur during early embryological development. Which of the following definitions most accurately describes meningocele:",
    options: ["Complete exposure of spinal cord and meninges", "Herniation of spinal cord and meninges into a sac", "Sac formation containing meninges and spinal fluid", "Spinal cord tumor containing nerve roots"],
    correct: 2,
    explanation: "Meningocele is a type of spina bifida cystica where the sac contains only meninges and cerebrospinal fluid (CSF). The spinal cord remains in the spinal canal and is not involved in the sac.",
    wrongReasons: {
      0: "This describes myeloschisis (the most severe form).",
      1: "This describes myelomeningocele (sac contains meninges, CSF, AND spinal cord).",
      3: "Spina bifida is a structural defect, not a tumor."
    },
    memory: "MENINGO-cele = MENINGES only. MYELO-meningocele = SPINAL CORD (myelo) + MENINGES."
  },
  {
    num: 5,
    topic: "Gastrointestinal",
    text: "The most common cause of liver abscess is",
    options: ["Escherichia Coli", "Entamoeba Histolytica", "Clostridium difficile", "Enterococcus"],
    correct: 1,
    explanation: "Amoebic liver abscess, caused by Entamoeba histolytica, is the most common type of liver abscess worldwide, especially in areas with poor sanitation. Pyogenic abscesses (bacterial) are also common, but E. histolytica is the classic 'most common' in many clinical exams.",
    wrongReasons: {
      0: "E. coli is a common cause of pyogenic (bacterial) liver abscess, but E. histolytica is more specifically associated with the term 'liver abscess' in tropical medicine.",
      2: "C. diff causes pseudomembranous colitis, not liver abscesses.",
      3: "Enterococcus is a less common cause of pyogenic abscess."
    },
    memory: "AMOEBIC = ABSCESS. Entamoeba histolytica is the primary culprit."
  },
  {
    num: 6,
    topic: "Endocrine",
    text: "Which among the following is a TRUE conclusion regarding the possible effect of hypopituitarism:",
    options: ["Cushing's syndrome", "Excess prolactin", "Gigantism and acromegaly", "Testicular atrophy"],
    correct: 3,
    explanation: "Hypopituitarism involves a deficiency in pituitary hormones. A lack of LH and FSH (gonadotropins) leads to hypogonadism, which in males results in testicular atrophy and decreased libido.",
    wrongReasons: {
      0: "Cushing's is caused by EXCESS ACTH (hyperpituitarism) or adrenal tumors.",
      1: "Excess prolactin is hyperpituitarism (prolactinoma).",
      2: "Gigantism/Acromegaly are caused by EXCESS Growth Hormone (hyperpituitarism)."
    },
    memory: "HYPO = LOW. Low hormones = shrinking organs (atrophy)."
  },
  {
    num: 7,
    topic: "Pharmacology",
    text: "Which of the following patient manifest acetaminophen toxicity?",
    options: ["John, 26, with new onset jaundice while on drug therapy", "Kevin, 54, with difficulty of breathing while on drug therapy", "Steve, 37, with joint stiffness while on drug therapy", "Robert, 29, with new-onset glaucoma while on drug therapy"],
    correct: 0,
    explanation: "Acetaminophen (Paracetamol) is hepatotoxic in overdose. Jaundice (yellowing of skin/eyes) is a late sign of liver failure and hepatic necrosis caused by acetaminophen toxicity.",
    wrongReasons: {
      1: "Difficulty breathing is more common in opioid overdose or anaphylaxis.",
      2: "Joint stiffness is not a sign of acetaminophen toxicity.",
      3: "Glaucoma is unrelated to acetaminophen."
    },
    memory: "ACETAMINOPHEN = LIVER (Hepatotoxicity). Liver fail = Jaundice."
  },
  {
    num: 8,
    topic: "Pharmacology",
    text: "A patient receiving nitroprusside begun manifesting headache, distant heart sound, imperceptible pulses, and shallow breathing. The nurse knows that these are signs of?",
    options: ["Reflex tachycardia", "Hypothyroidism", "Cyanide toxicity", "Severe alteration of blood pressure"],
    correct: 2,
    explanation: "Sodium nitroprusside contains cyanide groups. Prolonged infusion or high doses can lead to cyanide toxicity, which presents with metabolic acidosis, headache, confusion, and cardiovascular collapse.",
    wrongReasons: {
      0: "Reflex tachycardia is a side effect of vasodilators but doesn't explain shallow breathing and distant heart sounds.",
      1: "Hypothyroidism is unrelated to nitroprusside.",
      3: "While BP changes occur, the specific cluster of symptoms (headache, respiratory distress) points to the toxic metabolite: cyanide."
    },
    memory: "NITROPRUSSIDE = CYANIDE risk. Watch the clock and the dose."
  },
  {
    num: 9,
    topic: "Renal",
    text: "In peritoneal dialysis, the semi permeable membrane used is the:",
    options: ["Dialyzer membrane", "Dialysate fluid", "Peritoneal membrane", "Abdominal wall"],
    correct: 2,
    explanation: "In peritoneal dialysis, the patient's own peritoneal membrane (the lining of the abdominal cavity) acts as the semi-permeable membrane for exchange of fluids and electrolytes.",
    wrongReasons: {
      0: "A dialyzer membrane is used in hemodialysis (an external machine).",
      1: "Dialysate is the fluid used, not the membrane.",
      3: "The abdominal wall is the structure, but the 'peritoneum' is the specific functional membrane."
    },
    memory: "PERITONEAL dialysis uses the PERITONEUM."
  },
  {
    num: 10,
    topic: "Endocrine",
    text: "The middle layer of the adrenal cortex is:",
    options: ["Zona fasciculata", "Zona glomerulosa", "Zona medulla", "Zona reticularis"],
    correct: 0,
    explanation: "The adrenal cortex has three layers (from outer to inner): Zona Glomerulosa (Mineralocorticoids), Zona Fasciculata (Glucocorticoids), and Zona Reticularis (Androgens). Fasciculata is the middle layer.",
    wrongReasons: {
      1: "Zona glomerulosa is the outermost layer.",
      2: "The medulla is the inner core of the gland, not a layer of the cortex.",
      3: "Zona reticularis is the innermost layer of the cortex."
    },
    memory: "G-F-R (Salt, Sugar, Sex). Glomerulosa, Fasciculata, Reticularis."
  },
  {
    num: 11,
    topic: "Surgical",
    text: "2nd degree burns involves:",
    options: ["Epidermis, subcutaneous tissue", "Dermis, the bones", "Epidermis, dermis", "Dermis, subcutaneous tissue"],
    correct: 2,
    explanation: "Second-degree burns (partial-thickness) involve the entire epidermis and varying depths of the dermis. They are characterized by pain, redness, and blistering.",
    wrongReasons: {
      0: "Subcutaneous tissue involvement indicates a 3rd-degree burn.",
      1: "Bone involvement indicates a 4th-degree burn.",
      3: "If it skips the epidermis, it's not a standard burn classification; 2nd degree starts from the top down through the dermis."
    },
    memory: "1st = Skin deep (Epidermis). 2nd = Dermis deep. 3rd = Fat deep (Sub-Q)."
  },
  {
    num: 12,
    topic: "Cardiovascular",
    text: "Tetralogy of fallot consists of all the following except:",
    options: ["Atrial septal defect", "Dextroposition of the aorta", "Hypertrophy of right ventricle", "Pulmonary stenosis"],
    correct: 0,
    explanation: "Tetralogy of Fallot (TOF) consists of: (1) Pulmonary Stenosis, (2) Right Ventricular Hypertrophy, (3) Ventricular Septal Defect (VSD), and (4) Overriding Aorta (Dextroposition). Atrial Septal Defect (ASD) is NOT part of the tetralogy.",
    wrongReasons: {
      1: "Dextroposition (overriding) of the aorta is one of the four features.",
      2: "RV Hypertrophy is one of the four features.",
      3: "Pulmonary stenosis is one of the four features."
    },
    memory: "P-R-O-V: Pulmonary stenosis, RV hypertrophy, Overriding aorta, VSD."
  },
  {
    num: 13,
    topic: "Surgical",
    text: "A surgeon phones the nursing unit and asks the nurse to send the patient to surgery and sign the informed consent. Which of the following is most appropriate?",
    options: ["Review surgical complications and procedure with the patient and RN signs consent as a witness", "Explain procedure and risks/benefits and ask the patient to sign", "Ask the patient to sign consent if they are comfortable, the RN signs as a witness", "Include unsigned consent in the chart and send the patient to the pre-operative induction area"],
    correct: 3,
    explanation: "The nurse's role in informed consent is only to witness the patient's signature. The surgeon is legally responsible for explaining the procedure, risks, and benefits. If the consent is not signed, the patient should be sent to the pre-op area where the surgeon must complete the process before surgery.",
    wrongReasons: {
      0: "Nurses should not explain surgical complications; that is the surgeon's duty.",
      1: "Explaining risks/benefits is outside the nursing scope of practice for surgical consent.",
      2: "The nurse cannot 'ask the patient to sign' if the surgeon hasn't done the explanation first."
    },
    memory: "SURGEON explains. NURSE witnesses. No signature = No surgery until surgeon talks."
  },
  {
    num: 14,
    topic: "Cardiovascular",
    text: "The client experiences intermittent claudication. Which of the following should be included in the nursing care plan of the client to promote comfort and general condition:",
    options: ["Elevate the legs when sitting or lying supine", "Apply warm compresses to the legs", "Encourage progressive exercises", "Apply elastic bandage on the legs"],
    correct: 2,
    explanation: "Intermittent claudication is a symptom of Peripheral Artery Disease (PAD). Progressive exercise (walking until pain, resting, then walking again) promotes collateral circulation and improves walking distance.",
    wrongReasons: {
      0: "Elevation is for venous disease. In arterial disease (PAD), elevation makes pain worse because it's harder for blood to reach the feet.",
      1: "Warm compresses can cause burns because PAD patients often have decreased sensation (neuropathy).",
      3: "Elastic bandages (compression) are for venous disease, not arterial disease."
    },
    memory: "ARTERIAL = Dangle (Dependent). VENOUS = Elevate. PAD = Walk to build new paths (collaterals)."
  },
  {
    num: 15,
    topic: "Gastrointestinal",
    text: "The condition in which a segment of intestine invaginates into the adjoining intestinal lumen causing bowel obstruction is:",
    options: ["Intestinal obstruction", "Intussusception", "Hernia", "Hirschsprung disease"],
    correct: 1,
    explanation: "Intussusception is the 'telescoping' or invagination of one part of the intestine into another. It is a common cause of bowel obstruction in infants.",
    wrongReasons: {
      0: "Intestinal obstruction is a general term, not the specific definition of invagination.",
      2: "A hernia is a protrusion of an organ through a wall, not telescoping.",
      3: "Hirschsprung is a congenital lack of ganglion cells in the colon, causing megacolon."
    },
    memory: "INTUSSUSCEPTION = TELESCOPING. Think 'In-to-itself'."
  },
  {
    num: 16,
    topic: "Pediatric",
    text: "The primary prevention of gastroenteritis in pediatrics entails:",
    options: ["Treatment with zinc", "Rotavirus vaccination", "Isolation of the patient", "Rehydration"],
    correct: 1,
    explanation: "Primary prevention aims to prevent the disease before it occurs. Rotavirus is the leading cause of severe gastroenteritis in children; vaccination is the most effective primary prevention strategy.",
    wrongReasons: {
      0: "Zinc is a treatment (secondary/tertiary), not primary prevention.",
      2: "Isolation is a control measure after infection has occurred.",
      3: "Rehydration is a treatment for the consequences of gastroenteritis."
    },
    memory: "PRIMARY = PREVENT. VACCINE = PRIMARY."
  },
  {
    num: 17,
    topic: "Endocrine",
    text: "Priority nursing diagnosis for a patient admitted with syndrome of inappropriate ADH secretion would be:",
    options: ["Fluid volume deficit", "Fluid volume excess", "Altered nutrition", "Altered skin integrity"],
    correct: 1,
    explanation: "SIADH involves excess ADH, leading to water retention and dilutional hyponatremia. The priority is managing the fluid volume excess and preventing complications like cerebral edema.",
    wrongReasons: {
      0: "SIADH causes excess, not deficit.",
      2: "Nutrition is important but not the immediate priority over fluid/electrolyte balance.",
      3: "Skin integrity is a secondary concern."
    },
    memory: "SIADH = SOAKED Inside (Excess water). DI = DRY Inside (Deficit)."
  },
  {
    num: 18,
    topic: "Pharmacology",
    text: "Mrs. Smith, a 40-year-old known asthmatic client is admitted due to hypertensive episode. Which of the following drugs would be safest to give?",
    options: ["Nebivolol", "Timolol", "Propranolol", "Atenolol"],
    correct: 3,
    explanation: "Atenolol is a cardioselective beta-blocker (Beta-1 selective). It is safer for asthmatics than non-selective beta-blockers because it has less effect on Beta-2 receptors in the lungs, reducing the risk of bronchospasm.",
    wrongReasons: {
      0: "Nebivolol is cardioselective but Atenolol is the more classic exam answer for this scenario.",
      1: "Timolol is non-selective; it can trigger asthma attacks.",
      2: "Propranolol is non-selective; it is contraindicated in asthma."
    },
    memory: "A-B-E-A-M (Atenolol, Bisoprolol, Esmolol, Acebutolol, Metoprolol) = B1 Selective = Safer for Lungs."
  },
  {
    num: 19,
    topic: "Renal",
    text: "The MOST commonly used vascular access in acute hemodialysis is:",
    options: ["Arteriovenous (AV) fistula", "Arteriovenous (AV) graft", "Central venous catheter (CVC)", "Peripheral venous catheter (PVC)"],
    correct: 2,
    explanation: "For acute (emergency) hemodialysis, a Central Venous Catheter (CVC) is used because it can be inserted quickly and used immediately. Fistulas and grafts require weeks to months to 'mature' before use.",
    wrongReasons: {
      0: "AV Fistulas are for chronic/long-term dialysis and need months to mature.",
      1: "AV Grafts are for chronic dialysis and need weeks to mature.",
      3: "PVCs cannot handle the high flow rates required for hemodialysis."
    },
    memory: "ACUTE = FAST = CVC. CHRONIC = MATURE = FISTULA."
  },
  {
    num: 20,
    topic: "Cardiovascular",
    text: "Which of the following best shows effective coping of the client after myocardial infarction:",
    options: ["The patient plans to return to work in 2 to 3 days", "The patient asks her husband to bathe and dress her", "The patient states that she needs to commit to lifelong lifestyle changes", "All of the above"],
    correct: 2,
    explanation: "Effective coping involves acknowledging the severity of the condition and committing to necessary long-term changes (diet, exercise, smoking cessation) to prevent recurrence.",
    wrongReasons: {
      0: "Returning to work in 2-3 days is unrealistic and shows denial of the recovery needed.",
      1: "Total dependence on others (regression) is not a sign of effective coping; the goal is gradual return to independence.",
      3: "Since A and B are incorrect, 'All of the above' is wrong."
    },
    memory: "COPING = ACCEPTANCE + ACTION for the future."
  },
  {
    num: 21,
    topic: "Pharmacology",
    text: "What advice would you give to a client receiving theophylline?",
    options: ["Limit intake of strawberries and avocado", "Limit intake of Butter and cheese", "Increase intake of Hot tea and cocoa", "Limit intake of Hot tea and cocoa"],
    correct: 3,
    explanation: "Theophylline is a methylxanthine. Caffeine (found in tea, coffee, cocoa) is also a xanthine. Consuming them together increases the risk of theophylline toxicity (tachycardia, tremors, seizures).",
    wrongReasons: {
      0: "Strawberries/Avocados don't interact with theophylline.",
      1: "Fats don't directly interact with theophylline metabolism in this way.",
      2: "Increasing caffeine would be dangerous."
    },
    memory: "THEOPHYLLINE + CAFFEINE = Too much XANTHINE. Heart goes boom."
  },
  {
    num: 22,
    topic: "Cardiovascular",
    text: "A symptom that occurs in association with central cyanosis in cases of cardiovascular lesions is:",
    options: ["Finger clubbing", "Raised jugular venous pressure", "Murmurs", "Osler's nodes"],
    correct: 0,
    explanation: "Chronic hypoxia (low oxygen) associated with cyanotic heart disease leads to finger clubbing (thickening of the distal fingers and loss of the nail angle).",
    wrongReasons: {
      1: "Raised JVP indicates right heart failure or fluid overload, not necessarily cyanosis.",
      2: "Murmurs indicate turbulent flow but are not a result of cyanosis.",
      3: "Osler's nodes are signs of infective endocarditis."
    },
    memory: "CHRONIC BLUE = CLUBBING."
  },
  {
    num: 23,
    topic: "Respiratory",
    text: "A client with acute asthma is prescribed short-term corticosteroid therapy. What is the rationale for the use of steroids in clients with asthma?",
    options: ["Corticosteroids promote bronchodilation", "Corticosteroids act as an expectorant", "Corticosteroids have an anti-inflammatory effect", "Corticosteroids prevent development of respiratory infections"],
    correct: 2,
    explanation: "Asthma is primarily an inflammatory disease. Corticosteroids reduce airway inflammation and edema, making the airways less reactive and improving the effectiveness of bronchodilators.",
    wrongReasons: {
      0: "Beta-agonists (like Salbutamol) promote bronchodilation, not steroids.",
      1: "Expectorants help clear mucus; steroids don't do this directly.",
      3: "Steroids actually suppress the immune system and can increase infection risk if used long-term."
    },
    memory: "ASTHMA = INFLAMMATION. STEROIDS = ANTI-INFLAMMATORY."
  },
  {
    num: 24,
    topic: "Endocrine",
    text: "Which antidiabetic agent works best in patient with insulin resistance.",
    options: ["Biguanides", "Dipeptidy peptidase-4 inhibitors", "Thiazolidinediones", "Meglitinides"],
    correct: 2,
    explanation: "Thiazolidinediones (TZDs), such as Pioglitazone, are 'insulin sensitizers.' They work directly on cells to improve their response to insulin, effectively treating insulin resistance.",
    wrongReasons: {
      0: "Biguanides (Metformin) primarily reduce glucose production in the liver. While they help with resistance, TZDs are more specific 'sensitizers'.",
      1: "DPP-4 inhibitors increase incretin levels to boost insulin secretion.",
      3: "Meglitinides stimulate the pancreas to secrete more insulin."
    },
    memory: "TZDs = SENSITIZERS. They make cells 'thirsty' for insulin."
  },
  {
    num: 25,
    topic: "Respiratory",
    text: "A client with allergic rhinitis asks the nurse what he should do to decrease his symptoms. Which of the following instructions would be appropriate for the nurse to give the client?",
    options: ["\"Use your nasal decongestant spray regularly to help clear your nasal passages.\"", "\"Ask the doctor for antibiotics. Antibiotics will help decrease the secretion.\"", "\"It is important to increase your activity. A daily brisk walk will help promote drainage.\"", "\"Keep a diary when your symptoms occur. This can help you identify what precipitates your attacks.\""],
    correct: 3,
    explanation: "Allergic rhinitis is triggered by specific allergens. Identifying and avoiding these triggers is the most effective way to manage symptoms. A diary helps pinpoint patterns.",
    wrongReasons: {
      0: "Regular use of decongestant sprays (more than 3-5 days) causes 'rebound congestion' (rhinitis medicamentosa).",
      1: "Antibiotics treat bacteria; allergic rhinitis is an immune response, not an infection.",
      2: "Exercise doesn't treat the underlying allergy."
    },
    memory: "ALLERGY = AVOID the trigger. DIARY = FIND the trigger."
  },
  {
    num: 26,
    topic: "Pharmacology",
    text: "A client is prescribed with Guaifenesin (mucinex). The nurse determines that the client understands the proper administration of this medication if the client states that he or she will:",
    options: ["Take an additional dose once fever and cough persist", "Limit oral fluid intake", "Drink extra fluid while taking this medication", "Take the medication with meals only"],
    correct: 2,
    explanation: "Guaifenesin is an expectorant that thins mucus. It works best when the patient is well-hydrated, as water helps the drug liquefy secretions.",
    wrongReasons: {
      0: "Guaifenesin doesn't treat fever.",
      1: "Limiting fluids makes mucus thicker, defeating the purpose of the drug.",
      3: "Food is not required for administration."
    },
    memory: "EXPECTORANT = EXTRA FLUIDS. Water thins the wall."
  },
  {
    num: 27,
    topic: "Respiratory",
    text: "When developing a discharge plan to manage the care of a client with COPD, the nurse should anticipate that the client will do which of the following?",
    options: ["Develop infections easily", "Maintain current status", "Require less supplemental oxygen", "Show permanent improvement"],
    correct: 0,
    explanation: "COPD patients have damaged airways and impaired mucus clearance, making them highly susceptible to respiratory infections (pneumonia, bronchitis), which often cause exacerbations.",
    wrongReasons: {
      1: "COPD is progressive; it rarely stays 'current' without decline.",
      2: "Oxygen needs usually increase over time as lung function drops.",
      3: "COPD is irreversible; permanent improvement of lung tissue is not possible."
    },
    memory: "COPD = Clogged/Damaged lungs = Infection magnet."
  },
  {
    num: 28,
    topic: "Pediatric",
    text: "You are teaching a group of parents about otitis media. When discussing why children are predisposed to this disorder, you should mention the significance of which anatomical feature:",
    options: ["Nasopharynx", "Eustachian tubes", "External ear canal", "Tympanic membrane"],
    correct: 1,
    explanation: "Children have Eustachian tubes that are shorter, wider, and more horizontal than adults. This allows bacteria from the nasopharynx to easily travel to the middle ear.",
    wrongReasons: {
      0: "Nasopharynx is the source of bacteria, but the 'tube' is the reason they get to the ear.",
      2: "External ear canal is involved in otitis externa (swimmer's ear), not middle ear infection.",
      3: "The tympanic membrane is the eardrum; it doesn't cause the predisposition."
    },
    memory: "KIDS = SHORT/FLAT TUBES. Bacteria take the easy road to the ear."
  },
  {
    num: 29,
    topic: "Gastrointestinal",
    text: "Pain resulting from acute pancreatitis is typically felt in which region of the abdomen",
    options: ["The epigastric region", "The right upper quadrant", "The left upper quadrant", "Diffuse pain in all quadrants"],
    correct: 0,
    explanation: "Pancreatitis pain is typically severe, steady, and located in the epigastrium or left upper quadrant, often radiating to the back.",
    wrongReasons: {
      1: "RUQ pain is classic for gallbladder disease (cholecystitis).",
      2: "While it can be LUQ, 'Epigastric' is the most classic and common description.",
      3: "Diffuse pain is more common in peritonitis."
    },
    memory: "PANCREAS = EPIGASTRIC + BACK PAIN."
  },
  {
    num: 30,
    topic: "Pediatric",
    text: "An infant has been brought to the clinic, seeking treatment for vomiting and diarrhea that has lasted for 2 days. On assessment, the nurse detects dry mucous membranes and lethargy. What other findings suggest a fluid volume deficit?",
    options: ["A sunken fontanel", "Decreased pulse rate", "Increased blood pressure", "Low urine specific gravity"],
    correct: 0,
    explanation: "In infants, a sunken anterior fontanelle is a classic sign of moderate to severe dehydration (fluid volume deficit).",
    wrongReasons: {
      1: "Dehydration causes tachycardia (increased pulse), not decreased.",
      2: "Dehydration causes hypotension (low BP) in late stages.",
      3: "Dehydration causes HIGH urine specific gravity (concentrated urine)."
    },
    memory: "DEHYDRATED BABY = SUNKEN Fontanelle + SUNKEN Eyes + DRY Mouth."
  }
];
