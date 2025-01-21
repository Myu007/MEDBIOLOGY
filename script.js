const questions = [
  {
    question: 'Which type of microscope is especially useful for viewing thick structures? ',
    answers: [
      {text: 'a confocal scanning laser microscope', correct: false},
      {text: 'a scanning electron microscopes', correct: false},
      {text: 'an atomic force microscope', correct: false},
      {text: ' a transmission electron microscope', correct: true},
      {text: 'a phase-contrast microscope', correct: false},
    ],
  },
  {
    question: 'What is the correct name for the microscope lens located in the eyepiece ?',
    answers: [
      {text: 'ocular', correct: true},
      {text: ' base', correct: false},
      {text: 'condenser', correct: false},
      {text: 'objective', correct: false},
      {text: ' binocular', correct: false},
    ],
  },
  {
    question: 'Which of the following is best suited to get surface view of an object? ',
    answers: [
      {text: 'SEM and TEM.', correct: false},
      {text: 'Phase contrast microscope', correct: false},
      {text: 'Scanning electron microscope (SEM);', correct: true},
      {text: 'Compound microscope', correct: false},
      {text: 'Transmission electron microscope (TEM);', correct: false},
    ],
  },
  {
    question: 'How is called the method that consists of collection of data through observation and experimentation, formulation and testing of hypothesis: ',
    answers: [
      {text: 'Facts', correct: false},
      {text: 'Scientific evidences ', correct: false},
      {text: '    Scientific 	', correct: true},
      {text: 'Scientific evidences & Empirical ', correct: false},
      {text: ' Empirical ', correct: false},
    ],
  },
  {
    question: 'Which microscope has the highest magnification power?',
    answers: [
      {text: 'light microscope', correct: false},
      {text: 'high power microscope', correct: false},
      {text: 'electron microscope', correct: true},
      {text: 'optical microscope', correct: false},
      {text: 'compound microscope', correct: false},
    ],
  },
  {
    question: 'Process of what component distinguish prokaryotes from eukaryotes?',
    answers: [
      {text: ' small vacuoles ', correct: false},
      {text: 'cell membrane', correct: false},
      {text: ' smaller ribosomes', correct: false},
      {text: 'incipient nucleus ', correct: true},
      {text: ' cell wall', correct: false},
    ],
  },
  {
    question: 'What will show red blood cells which are placed in 0.5% sodium chloride?',
    answers: [
      {text: 'Shrinking', correct: false},
      {text: 'Plasmolysis', correct: false},
      {text: 'Bursting', correct: true},
      {text: 'Crenation', correct: false},
      {text: 'Turgidity', correct: false},
    ],
  },
  {
    question: 'In a prokaryotic cell, the DNA is …',
    answers: [
      {text: ' have a complex nucleus', correct: false},
      {text: 'naked and free-floating', correct: true},
      {text: 'wrapped around histone proteins', correct: false},
      {text: ' lack membrane-bound compartments', correct: false},
      {text: 'contained in the nucleus', correct: false},
    ],
  },
  {
    question: 'Which of the following checkpoint is considered a restriction point?',
    answers: [
      {text: 'None of the above', correct: false},
      {text: 'G2 checkpoint', correct: false},
      {text: 'M checkpoint', correct: false},
      {text: 'S checkpoint', correct: false},
      {text: ' G1 checkpoint', correct: true},
    ],
  },
  {
    question: 'During which of the following stages of mitosis the individual chromosomes become distinct through the light microscope?',
    answers: [
      {text: 'Interphase', correct: false},
      {text: 'Anaphase', correct: false},
      {text: 'Prophase', correct: true},
      {text: ' Metaphase ', correct: false},
      {text: 'Telophase', correct: false},
    ],
  },
  {
    question: ' Which of the following statements is wrong? ',
    answers: [
      {text: 'chromatin uncoils to form chromosomes', correct: true},
      {text: 'chromatin is found within the nucleus', correct: false},
      {text: 'each species generally has a characteristic number of chromosomes', correct: false},
      {text: 'chromatin is made up of the DNA double helix and associated proteins', correct: false},
      {text: 'chromosomes can be seen just as cell division is about to occur', correct: false},
    ],
  },
  {
    question: 'Which of the following statements is true about Mendel?',
    answers: [
      {text: 'He believed that genetic traits of parents will usually blend in their children.', correct: false},
      {text: ' His experiments have a small sampling size.', correct: false},
      {text: ' Mendel initially selected pea plants with same character', correct: false},
      {text: 'His ideas about genetics apply equally to plants and animals.', correct: true},
      {text: ' His discoveries concerning genetic inheritance were generally accepted by the scientific community when he published them during the mid-19th century', correct: false},
    ],
  },
  {
    question: 'Test cross determines',
    answers: [
      {text: ' whether the two species will breed successfully or not', correct: false},
      {text: ' whether two traits are linked or not', correct: false},
      {text: ' number of alleles in a gene', correct: false},
      {text: ' the genotype of F2 plant', correct: true},
      {text: ' the phenotype of F2 plant', correct: false},
    ],
  },
  {
    question: 'The type of inheritance shown when a red-flowering plant is crossed with a white-flowering plant and only pink-flowering plants are produced is _____.',
    answers: [
      {text: 'interbreeding', correct: false},
      {text: 'polygenic inheritance', correct: false},
      {text: 'incomplete dominance', correct: true},
      {text: ' dominance', correct: false},
      {text: 'codominance', correct: false},
    ],
  },
  {
    question: 'What is a gene called?',
    answers: [
      {text: ' An Exon ', correct: false},
      {text: 'A Regulatory Sequence', correct: false},
      {text: 'A Section of DNA that codes for a protein or RNA molecule.', correct: true},
      {text: ' A piece of clothing that is placed upon the bipedal legs of human.', correct: false},
      {text: ' A Chromosome Carrier', correct: false},
    ],
  },
  {
    question: 'Two men who are identical twins marry two women who are also identical twins. Each couple has a daughter. The daughters are more genetically similar than is usual for first cousins.Which statement describes the degree of genetic similarity between the daughters?',
    answers: [
      {text: ' They are not genetical, because got different spontaneous  mutations during gametogenesis  ', correct: false},
      {text: '  They are genetically different from each other due to independent assortment in meiosis.', correct: true},
      {text: 'They are genetically identical because random mutation is rare.', correct: false},
      {text: 'They are genetically different from each other due to random mutation.', correct: false},
      {text: 'They are genetically identical because they share the same parental gene pool', correct: false},
    ],
  },
  {
    question: 'A classical example of codominance is :',
    answers: [
      {text: 'Blood Type A ', correct: false},
      {text: ' Blood type O and A', correct: false},
      {text: 'Blood Type B ', correct: false},
      {text: ' Blood Type AB ', correct: true},
      {text: ' Blood Type O ', correct: false},
    ],
  },
  {
    question: 'A recessive allele t is responsible for a condition called phenylketonouria. A man who has this disease marries a woman who doesn’t have this disease. One of their four children has the disorder. What are possible genotypes of the man and woman?',
    answers: [
      {text: 'the father is Tt, mother is TT                                                  ', correct: false},
      {text: 'both parents are tt', correct: false},
      {text: 'the father is tt, the mother is TT                                      ', correct: false},
      {text: 'both parents are TT ', correct: false},
      {text: 'the father is tt, mother is Tt', correct: true},
    ],
  },
  {
    question: 'What is the phenotypic ratio in case of dominant epistasis?',
    answers: [
      {text: '09:07', correct: false},
      {text: '9:4:3:1', correct: false},
      {text: '09:03:04', correct: false},
      {text: '12:03:04', correct: false},
      {text: '(9:3:3:1) ', correct: true},
    ],
  },
  {
    question: 'What mode of inheritance involves more than two forms of gene giving rise to a repertoire of phenotypes?',
    answers: [
      {text: 'Incomplete dominance', correct: false},
      {text: 'Multiple allelism', correct: false},
      {text: 'Complete dominance', correct: false},
      {text: 'Codominance', correct: false},
      {text: 'Incomplete &complete dominance', correct: true},
    ],
  },
  {
    question: 'How is pleiotropy different from polygenic inheritance?',
    answers: [
      {text: 'A single gene exhibits only a single expression', correct: false},
      {text: 'Multiple genes control a single character', correct: false},
      {text: 'A single gene can exhibit multiple expressions', correct: true},
      {text: 'Two genes exhibit a single character', correct: false},
      {text: 'The genes can not control characters ', correct: false},
    ],
  },
  {
    question: 'Which of the following is a chromosomal abnormality that involves an extra copy of chromosome 21? ',
    answers: [
      {text: 'Down syndrome ', correct: true},
      {text: 'Patau syndrome ', correct: false},
      {text: 'Edwards syndrome', correct: false},
      {text: 'Klinefelter syndrome', correct: false},
      {text: 'Turner syndrome ', correct: false},
    ],
  },
  {
    question: 'How many autosomal chromosomes do you normally inherit from a single parent?',
    answers: [
      {text: '1', correct: false},
      {text: '46', correct: false},
      {text: '23', correct: false},
      {text: '45', correct: false},
      {text: '22', correct: true},
    ],
  },
  {
    question: 'A human genetic defect that is caused by nondisjunction of the sex chromosome is :',
    answers: [
      {text: 'Down syndrome ', correct: false},
      {text: 'Sickle cell anemia ', correct: false},
      {text: 'Color blindness', correct: false},
      {text: '  Turner syndrome', correct: true},
      {text: 'Edward’s syndrome', correct: false},
    ],
  },
  {
    question: 'Which of the following describes the genetic pattern of Duchenne muscular dystrophy?',
    answers: [
      {text: 'X-linked dominant', correct: false},
      {text: 'Mitochondrial DNA mutation', correct: false},
      {text: 'X-linked recessive', correct: true},
      {text: 'Chromosomal defect', correct: false},
      {text: 'Autosomal dominant ', correct: false},
    ],
  },
  {
    question: 'Which one of the following is not an example of aneuploidy?',
    answers: [
      {text: 'Turner’s syndrome', correct: false},
      {text: 'Down’s syndrome', correct: false},
      {text: 'Phenylketonuria', correct: true},
      {text: 'Edwards’  syndrome ', correct: false},
      {text: 'Klinefelter’s syndrome', correct: false},
    ],
  },
  {
    question: 'By which of the following methods, a pattern of inheritance can be traced in a family?',
    answers: [
      {text: 'nuclear analysis', correct: false},
      {text: 'pedigree analysis', correct: true},
      {text: 'nuclear analysis & cytoplasm analysis', correct: false},
      {text: 'chromosomal analysis', correct: false},
      {text: 'cytoplasm analysis', correct: false},
    ],
  },
  {
    question: 'RNA contains which bases?',
    answers: [
      {text: ' adenine, guanine, cytosine, uracil', correct: false},
      {text: 'thymine,  histone, nucleotide, adenine.  ', correct: false},
      {text: 'adenine, thymine, guanine, cytosine', correct: false},
      {text: ' adenine, thymine, guanine, cytosine, uracil', correct: false},
      {text: 'thymine, guanine, cytosine, uracil', correct: true},
    ],
  },
  {
    question: 'Which one is mostly transcribed ?',
    answers: [
      {text: 'only RNA  sequence', correct: false},
      {text: 'single copy of DNA  sequence', correct: true},
      {text: 'middle repetitive DNA & RNA sequences', correct: false},
      {text: 'highly repetitive DNA sequence', correct: false},
      {text: 'middle repetitive DNA sequence', correct: false},
    ],
  },
  {
    question: 'How many percentage of Cytosine in the DNA, if a double stranded DNA has 20% Adenine? ',
    answers: [
      {text: '10%', correct: false},
      {text: '15%', correct: false},
      {text: '90%', correct: false},
      {text: '30%', correct: true},
      {text: '40%', correct: false},
    ],
  },
  {
    question: 'What did Hershey and Chase use for labeling  T2 phage in their experiment?',
    answers: [
      {text: 'nonmetal', correct: false},
      {text: 'radioisotopes', correct: true},
      {text: 'metal', correct: false},
      {text: 'sugar', correct: false},
      {text: 'polyscaharids', correct: false},
    ],
  },
  {
    question: 'A child is diagnosed with a rare genetic disease. Neither parent has the disease. How might the child have inherited the disorder?',
    answers: [
      {text: 'The disorder is recessive and carried by both parents  as carriers ', correct: false},
      {text: 'The disorder is sex linked and inherited only from the mother', correct: false},
      {text: 'The disorder is dominant and was carried by a parent.', correct: false},
      {text: 'The disorder could occur only as a mutation in the child  because neither parent had the disease. ', correct: false},
      {text: 'The disorder is sex linked and inherited only from the father.', correct: true},
    ],
  },
  {
    question: 'Messenger RNA (mRNA) can be best described as:',
    answers: [
      {text: ' A Short-lived RNA molecule that carries encoded information, transcribed from DNA.', correct: true},
      {text: ' A Chromosome that is only present in prokaryotes and is involved in DNA synthesis', correct: false},
      {text: ' A really cool way of rewriting RNA', correct: false},
      {text: 'The Atom that carries information to an RNA template', correct: false},
      {text: 'A Molecule that has no life and is basically the news reporter of the cellular environment.', correct: false},
    ],
  },
  {
    question: 'Albinism is a genetic disease that results in incomplete metabolism of ?',
    answers: [
      {text: 'Cystine', correct: false},
      {text: 'Hexoaminidase A ', correct: false},
      {text: 'Histidine', correct: false},
      {text: 'Alanine', correct: false},
      {text: 'Tyrosine', correct: true},
    ],
  },
  {
    question: 'Which of the following is a modern method of studying human genetics and diagnosing hereditary diseases? ',
    answers: [
      {text: 'Magnetic resonance imaging (MRI) ', correct: false},
      {text: ' Computerized tomography (CT) scan  ', correct: false},
      {text: 'Cytogenetic Testing. ', correct: true},
      {text: ' Blood test ', correct: false},
      {text: 'X-ray ', correct: false},
    ],
  },
  {
    question: 'Which one of the following is the reason of Tay-Sachs disease ?',
    answers: [
      {text: 'due to deficiency of tyrosinase ', correct: false},
      {text: 'deficiency of Hexoaminidase A  & B', correct: false},
      {text: 'deficiency of alpha galactosidase ', correct: false},
      {text: 'deficiency of Hexoaminidase A  ', correct: true},
      {text: 'due to deficiency of glucoserebrosidase ', correct: false},
    ],
  },
  {
    question: 'Phenylketonuria (PKU)  is a genetic disorder caused by a deficiency of an enzyme that converts phenylalanine to tyrosine.  Identify the correct statements regarding \'phenylketonuria\':',
    answers: [
      {text: 'PKU occurs due to mutation of HTT gene', correct: false},
      {text: 'Phenylketonuria is autosomal dominant disease ', correct: false},
      {text: 'Missense mutation of the PAH gene  are frequently observed in PKU patients', correct: true},
      {text: 'Treated PKU can lead to intellectual disability, seizures, behavioral problems, and mental disorders.', correct: false},
      {text: 'All PKU patients do not respond to biopterin  treatment', correct: false},
    ],
  },
  {
    question: 'During the amniocentesis  test How many days are required ?',
    answers: [
      {text: ' 5-6 days', correct: false},
      {text: '7-8 weeks ', correct: false},
      {text: '1-2 days ', correct: false},
      {text: '  1-2 weeks', correct: false},
      {text: '  3-4 weeks ', correct: true},
    ],
  },
  {
    question: 'What is the primary focus of medical parasitology?',
    answers: [
      {text: 'Study of marine life', correct: false},
      {text: 'Study of parasites that infect humans', correct: true},
      {text: 'Study of plant parasites', correct: false},
      {text: 'Study of bacteria and viruses', correct: false},
      {text: 'Study of animal behavior', correct: false},
    ],
  },
  {
    question: 'What structure lacks commonly in Protista?',
    answers: [
      {text: 'Cell membrane', correct: false},
      {text: 'organelles for locomotion', correct: false},
      {text: 'Cell wall', correct: true},
      {text: 'Cytoplasm', correct: false},
      {text: 'Cell organelle', correct: false},
    ],
  },
  {
    question: 'Which of the following is not a characteristic feature of protozoan?',
    answers: [
      {text: 'prokaryotic microorganisms', correct: true},
      {text: 'Have no cell wall', correct: false},
      {text: 'Contractile vacuole', correct: false},
      {text: 'Pseudopodia', correct: false},
      {text: 'multiply asexually and sexually', correct: false},
    ],
  },
  {
    question: 'Which of the following strategies is NOT commonly used for the control and prevention of parasitic infections?',
    answers: [
      {text: 'Vaccination', correct: false},
      {text: 'Public health education', correct: false},
      {text: 'Vector control', correct: false},
      {text: 'Antibiotic treatment', correct: true},
      {text: 'Improving sanitation', correct: false},
    ],
  },
  {
    question: 'Which of the following is a biological feature of Trichomonas vaginalis?',
    answers: [
      {text: 'It is a flagellated protozoan', correct: true},
      {text: 'It has a cyst stage', correct: false},
      {text: 'It is a spore-forming protozoan', correct: false},
      {text: 'It causes disease primarily in the gastrointestinal tract', correct: false},
      {text: 'It is an intracellular parasite', correct: false},
    ],
  },
  {
    question: 'Which organ of trophozoite of Giardia lamblia serves as an attachment organ?   ',
    answers: [
      {text: ' nuclei; ', correct: false},
      {text: 'parabasal body', correct: true},
      {text: 'sucking disc; ', correct: false},
      {text: 'axostyle; ', correct: false},
      {text: 'flagella; ', correct: false},
    ],
  },
  {
    question: 'What are the common symptoms of trichomoniasis in women?                                                                                                    ',
    answers: [
      {text: 'Rash and swollen lymph nodes; ', correct: false},
      {text: 'Abdominal pain and nausea;', correct: false},
      {text: ' coughing and shortness', correct: false},
      {text: 'Sore throat and fever; ', correct: false},
      {text: ' Itching and burning sensation in the genitals;', correct: true},
    ],
  },
  {
    question: 'Which of the following is a method for preventing Giardia lamblia infection? ',
    answers: [
      {text: ' Vaccination ', correct: false},
      {text: 'Avoiding contaminated food and water ', correct: true},
      {text: 'Antibiotic treatment ', correct: false},
      {text: ' Using insect repellent ', correct: false},
      {text: 'Avoiding contaminated soil', correct: false},
    ],
  },
  {
    question: 'Which of the following belongs to the phylum Sarcomastigophora? ',
    answers: [
      {text: 'Taenia solium', correct: false},
      {text: 'Plasmodium falciparum ', correct: false},
      {text: 'Entamoeba histolytica ', correct: false},
      {text: 'Trypanosoma cruzi ', correct: true},
      {text: 'Balantidium coli ', correct: false},
    ],
  },
  {
    question: ' What is the vector transmitting Trypanosoma brucei to humans? ',
    answers: [
      {text: 'Mosquito', correct: false},
      {text: ' Tsetse fly ', correct: true},
      {text: ' Flea ', correct: false},
      {text: ' Lice', correct: false},
      {text: 'Sand fly ', correct: false},
    ],
  },
  {
    question: 'Which type of leishmaniasis affects the skin and is characterized by ulcers such as Oriental ulcer and Pentadrian ulcer?',
    answers: [
      {text: 'Visceral Leishmaniasis', correct: false},
      {text: 'Diffuse Cutaneous Leishmaniasis', correct: false},
      {text: 'Mucocutaneous Leishmaniasis', correct: false},
      {text: 'Cutaneous Leishmaniasis', correct: true},
      {text: 'Mucosal Leishmaniasis', correct: false},
    ],
  },
  {
    question: 'Which type of leishmaniasis is also known as Black Fever and primarily affects the internal organs like the spleen, liver, and bone marrow?',
    answers: [
      {text: 'Oriental Ulcer', correct: false},
      {text: 'Dum-Dum Fever', correct: false},
      {text: 'Cutaneous Leishmaniasis', correct: false},
      {text: 'Mucocutaneous Leishmaniasis', correct: false},
      {text: 'Visceral Leishmaniasis', correct: true},
    ],
  },
  {
    question: 'Which medication is commonly used for the treatment of Chagas Disease caused by Trypanosoma cruzi?',
    answers: [
      {text: 'Metronidazole', correct: false},
      {text: 'Artemisinin-based combination therapy (ACT)', correct: false},
      {text: 'Chloroquine', correct: false},
      {text: 'Penicillin', correct: false},
      {text: 'Nifurtimox', correct: true},
    ],
  },
  {
    question: 'Which amoeba exhibits a trophozoite stage in its life cycle?',
    answers: [
      {text: '  Balamuthia mandrillaris', correct: false},
      {text: '  Plasmodium vivax', correct: false},
      {text: '  Entamoeba histolytica', correct: true},
      {text: '  Acanthamoeba spp.', correct: false},
      {text: '  Naegleria fowleri', correct: false},
    ],
  },
  {
    question: 'What is the primary mode of transmission of Acanthamoeba spp. leading to human infection?',
    answers: [
      {text: '  Blood transfusion', correct: false},
      {text: '  Ingestion of contaminated food', correct: false},
      {text: '  Contact lens contamination', correct: true},
      {text: '  Skin contact with contaminated soil', correct: false},
      {text: '  Inhalation of cysts', correct: false},
    ],
  },
  {
    question: 'What is the primary habitat of Naegleria fowleri in which it proliferates and is commonly found?',
    answers: [
      {text: '  Domestic animals\' fur', correct: false},
      {text: '  Human gastrointestinal tract', correct: false},
      {text: '  Ocean water', correct: false},
      {text: '  Freshwater lakes and rivers', correct: true},
      {text: '  Soil and decaying vegetation', correct: false},
    ],
  },
  {
    question: ' Which of the following clinical features is associated with infection by Naegleria fowleri?',
    answers: [
      {text: '    Meningitis ', correct: true},
      {text: '   Dermatitis', correct: false},
      {text: '  Gastroenteritis', correct: false},
      {text: '     Hepatitis', correct: false},
      {text: '    Pneumonia ', correct: false},
    ],
  },
  {
    question: 'What is the primary drug of choice for the treatment of Naegleria fowleri infections?',
    answers: [
      {text: '  Intravenous immunoglobulin (IVIG)', correct: false},
      {text: '  Corticosteroids', correct: false},
      {text: '  Amphotericin B', correct: true},
      {text: '  Antifungal agents', correct: false},
      {text: '  Antimicrobial agents', correct: false},
    ],
  },
  {
    question: 'Which of the following is a single-celled parasite that can cause malaria?',
    answers: [
      {text: 'Plasmodium', correct: true},
      {text: ' Giardia lamblia', correct: false},
      {text: 'Schistosoma', correct: false},
      {text: 'Ascaris lumbricoides', correct: false},
      {text: 'Taenia solium', correct: false},
    ],
  },
  {
    question: 'Which organ is primarily affected by the malaria parasite during the asexual stage of its life cycle?',
    answers: [
      {text: 'Stomach', correct: false},
      {text: 'Kidneys', correct: false},
      {text: 'Heart', correct: false},
      {text: 'Lungs', correct: false},
      {text: ' Liver', correct: true},
    ],
  },
  {
    question: 'Organisms with complex life cycles which include a mammalian host and an insect host and involves schizogony as part of the cycle belong to which phylum of Protozoa?',
    answers: [
      {text: '  Labyinthomorpha', correct: false},
      {text: '  Apicomplexa', correct: true},
      {text: '  Microsporodia ', correct: false},
      {text: '  Sarcomastigophora', correct: false},
      {text: '  Ciliophora  ', correct: false},
    ],
  },
  {
    question: 'What is the structure of Plasmodium vivax?',
    answers: [
      {text: '  Helminth parasite', correct: false},
      {text: '  Flagellated protozoan ', correct: false},
      {text: '   Sporozoan protozoan ', correct: true},
      {text: '  Amoeboid protozoan ', correct: false},
      {text: '  Ciliated protozoan', correct: false},
    ],
  },
  {
    question: 'Which medication is commonly used to prevent relapses in Plasmodium vivax infections?',
    answers: [
      {text: '  Chloroquine', correct: false},
      {text: '  Penicillin', correct: false},
      {text: '  Artemisinin-based combination therapies (ACTs)', correct: false},
      {text: '  Primaquine', correct: true},
      {text: '  Quinine', correct: false},
    ],
  },
  {
    question: 'Which biological feature is characteristic of members of Class Aconoidasida?',
    answers: [
      {text: 'They are extracellular parasites', correct: false},
      {text: 'They form cysts in muscle tissue', correct: false},
      {text: 'They do not require an intermediate host', correct: false},
      {text: 'They primarily infect the respiratory system', correct: false},
      {text: 'They have complex life cycles with both sexual and asexual stages', correct: true},
    ],
  },
  {
    question: 'Which clinical condition is most commonly associated with Toxoplasma gondii infection in immunocompromised individuals?',
    answers: [
      {text: 'Hepatitis', correct: false},
      {text: 'Gastroenteritis', correct: false},
      {text: 'Encephalitis', correct: true},
      {text: 'Pneumonia', correct: false},
      {text: 'Dermatitis', correct: false},
    ],
  },
  {
    question: 'Which population is at the highest risk for severe complications from Cryptosporidium parvum infection?',
    answers: [
      {text: 'Immunocompromised individuals', correct: true},
      {text: 'Children under 5 years', correct: false},
      {text: 'Elderly individuals', correct: false},
      {text: 'Healthy adults', correct: false},
      {text: 'Pregnant women', correct: false},
    ],
  },
  {
    question: 'Which stage of Toxoplasma gondii is infectious to humans?',
    answers: [
      {text: 'Oocyst', correct: true},
      {text: 'Trophozoite', correct: false},
      {text: 'Tachyzoite', correct: false},
      {text: 'Bradyzoite', correct: false},
      {text: 'Sporozoite', correct: false},
    ],
  },
  {
    question: 'What is the primary method of prevention for Toxoplasma gondii infection in pregnant women?',
    answers: [
      {text: 'Drinking bottled water', correct: false},
      {text: 'Avoiding contact with cat litter', correct: true},
      {text: 'Using insect repellent', correct: false},
      {text: 'Wearing masks', correct: false},
      {text: 'Avoiding dairy products', correct: false},
    ],
  },
  {
    question: 'What is the primary mode of transmission of Balantidium coli to humans?',
    answers: [
      {text: 'Inhalation of spores', correct: false},
      {text: 'Mosquito bites', correct: false},
      {text: 'Direct skin contact with contaminated soil', correct: false},
      {text: 'Ingestion of contaminated food or water', correct: true},
      {text: 'Sexual contact', correct: false},
    ],
  },
  {
    question: 'Which clinical symptom is commonly associated with Balantidium coli infection?',
    answers: [
      {text: 'Respiratory distress', correct: false},
      {text: 'Rash', correct: false},
      {text: 'Joint pain', correct: false},
      {text: 'Diarrhea', correct: true},
      {text: 'Visual disturbances', correct: false},
    ],
  },
  {
    question: 'What is an effective measure for preventing Balantidium coli infection?',
    answers: [
      {text: 'Drinking only boiled or filtered water', correct: true},
      {text: 'Avoiding contact with infected animals', correct: false},
      {text: 'Getting vaccinated', correct: false},
      {text: 'Wearing protective clothing', correct: false},
      {text: 'Using insect repellent', correct: false},
    ],
  },
  {
    question: 'Which parasitic disease is known for causing liver damage and is transmitted through contaminated water?',
    answers: [
      {text: 'Schistosomiasis', correct: true},
      {text: 'Malaria', correct: false},
      {text: 'Leishmaniasis', correct: false},
      {text: 'Giardiasis', correct: false},
      {text: 'Toxoplasmosis', correct: false},
    ],
  },
  {
    question: 'What is the primary mode of transmission for Schistosoma species?',
    answers: [
      {text: 'Inhalation of airborne spores', correct: false},
      {text: ' Ingestion of contaminated food', correct: false},
      {text: 'Tick bites', correct: false},
      {text: ' Mosquito bites', correct: false},
      {text: 'Direct skin contact with contaminated water', correct: true},
    ],
  },
  {
    question: 'What is the most common diagnostic method for identifying intestinal helminth infections?',
    answers: [
      {text: 'Stool examination', correct: true},
      {text: 'Urine analysis', correct: false},
      {text: 'Saliva test', correct: false},
      {text: 'Blood smear', correct: false},
      {text: 'Skin biopsy', correct: false},
    ],
  },
  {
    question: 'Which of the following best describes the class Cestoda (tapeworms)?',
    answers: [
      {text: 'They have a coiled body and possess a radula', correct: false},
      {text: 'They are segmented and lack a digestive system', correct: true},
      {text: 'They are free-living and found in soil', correct: false},
      {text: 'They have an unsegmented body and complete digestive system', correct: false},
      {text: 'They have a round body and live in freshwater', correct: false},
    ],
  },
  {
    question: 'Echinococcus granulosus, a parasitic representative of tapeworms, causes which disease in humans?',
    answers: [
      {text: 'Ascariasis', correct: false},
      {text: 'Filariasis', correct: false},
      {text: 'Schistosomiasis', correct: false},
      {text: 'Hydatid disease', correct: true},
      {text: 'Malaria', correct: false},
    ],
  },
  {
    question: 'Which of the following is a common clinical symptom of hydatid disease caused by Echinococcus granulosus?',
    answers: [
      {text: 'Formation of cysts in the liver and lungs', correct: true},
      {text: 'Acute diarrhea', correct: false},
      {text: 'Severe headaches', correct: false},
      {text: 'Skin rash', correct: false},
      {text: 'Chronic cough', correct: false},
    ],
  },
  {
    question: 'Which stage of Echinococcus granulosus is infective to intermediate hosts such as sheep and humans?',
    answers: [
      {text: 'Adult', correct: false},
      {text: 'Cysticercus', correct: false},
      {text: 'Egg', correct: true},
      {text: 'Miracidium', correct: false},
      {text: 'Cercaria', correct: false},
    ],
  },
  {
    question: 'What is a primary preventive measure for hydatid disease caused by Echinococcus granulosus?',
    answers: [
      {text: 'Wearing protective clothing', correct: false},
      {text: 'Avoiding contact with freshwater bodies', correct: false},
      {text: 'Avoiding consumption of undercooked meat', correct: false},
      {text: 'Regular deworming of dogs', correct: true},
      {text: 'Using insect repellent', correct: false},
    ],
  },
  {
    question: 'Which parasitic roundworm is commonly known as the heartworm and affects dogs?',
    answers: [
      {text: 'Dirofilaria immitis', correct: true},
      {text: 'Wuchereria bancrofti', correct: false},
      {text: 'Trichinella spiralis', correct: false},
      {text: 'Enterobius vermicularis', correct: false},
      {text: 'Brugia malayi', correct: false},
    ],
  },
  {
    question: 'Which of the following statements about the life cycle of Schistosoma spp. is true?',
    answers: [
      {text: 'Eggs are ingested through contaminated food', correct: false},
      {text: 'Larvae penetrate the skin of humans in contaminated water', correct: true},
      {text: 'Intermediate host is the housefly', correct: false},
      {text: 'Adults reside in the intestines and release eggs into feces', correct: false},
      {text: 'Transmission occurs through mosquito bites', correct: false},
    ],
  },
  {
    question: 'Which parasite has a life cycle involving freshwater snails as an intermediate host and infects humans through direct skin penetration?',
    answers: [
      {text: 'Schistosoma spp.', correct: true},
      {text: 'Fasciola hepatica', correct: false},
      {text: 'Paragonimus westermani', correct: false},
      {text: 'Taenia solium', correct: false},
      {text: 'Fasciolopsis buski', correct: false},
    ],
  },
  {
    question: 'Which of the following Trematoda parasites is known to cause lung infections?',
    answers: [
      {text: 'Fasciolopsis buski', correct: false},
      {text: 'Fasciola hepatica', correct: false},
      {text: 'Paragonimus westermani', correct: true},
      {text: 'Schistosoma japonicum', correct: false},
      {text: 'Schistosoma mansoni', correct: false},
    ],
  },
  {
    question: 'What preventive measure can be taken to avoid infection by Paragonimus westermani?',
    answers: [
      {text: 'Wear protective clothing', correct: false},
      {text: 'Drink only boiled or bottled water', correct: false},
      {text: 'Use insect repellent', correct: false},
      {text: 'Avoid swimming in freshwater bodies', correct: false},
      {text: 'Avoid eating raw or undercooked freshwater crabs and crayfish', correct: true},
    ],
  },
  {
    question: 'What helminthic infection  is cause of an elephantiasis?',
    answers: [
      {text: ' Trichinella spiralis', correct: false},
      {text: 'Taenia solium', correct: false},
      {text: ' Fasciola hepatica', correct: false},
      {text: 'nan', correct: false},
      {text: ' Wuchereria bancrofti', correct: true},
    ],
  },
  {
    question: 'By what infection is presented lymphangitis, lymphadenitis and chyluria clinical manifestations? ',
    answers: [
      {text: 'Dirofilaria immitis ', correct: false},
      {text: 'Mansonella ozzardi ', correct: false},
      {text: 'Brugia malayi', correct: false},
      {text: ' Echinococcus granulosus', correct: true},
      {text: 'Loa loa', correct: false},
    ],
  },
  {
    question: 'Where are  primarily found the pinworms in the body?',
    answers: [
      {text: 'Under the skin', correct: false},
      {text: ' Colon/rectum', correct: false},
      {text: ' Lungs', correct: false},
      {text: 'Wuchereria bancrofti', correct: true},
      {text: ' Intestine', correct: false},
    ],
  },
  {
    question: 'During observing the patients with ascariasis what can cause the larval stage of Ascaris lumbricoides?',
    answers: [
      {text: 'Coughing', correct: false},
      {text: 'Intestinal obstruction', correct: true},
      {text: 'Intussusception', correct: false},
      {text: 'Pneumonitis', correct: false},
      {text: 'Malnutrition', correct: false},
    ],
  },
  {
    question: 'Which of the following diseases is NOT typically associated with tick transmission?',
    answers: [
      {text: 'Tick-borne encephalitis', correct: false},
      {text: 'Lyme disease', correct: false},
      {text: 'Japanese encephalitis', correct: true},
      {text: 'Russian spring-summer encephalitis', correct: false},
      {text: 'West Nile encephalitis', correct: false},
    ],
  },
  {
    question: 'Which of the following statements is true regarding the epidemiologic significance of arthropods?',
    answers: [
      {text: 'Arthropods are exclusively herbivorous.', correct: false},
      {text: 'Arthropods have a complex life cycle without metamorphosis.', correct: false},
      {text: 'Arthropods do not harbor parasites.', correct: false},
      {text: 'Many arthropods act as vectors for disease transmission.', correct: true},
      {text: 'Arthropods do not cause allergic reactions.', correct: false},
    ],
  },
  {
    question: 'Which of the following diseases is primarily transmitted by ticks and can lead to encephalitis?',
    answers: [
      {text: 'Japanese encephalitis', correct: false},
      {text: 'Rocky Mountain spotted fever', correct: false},
      {text: 'Lyme disease', correct: false},
      {text: 'West Nile encephalitis', correct: true},
      {text: 'Malaria', correct: false},
    ],
  },
  {
    question: 'Which disease, transmitted by ticks, is known for causing encephalitis predominantly in Russia during the spring and summer seasons?',
    answers: [
      {text: 'Zika virus infection', correct: false},
      {text: 'Russian spring-summer encephalitis', correct: true},
      {text: 'West Nile encephalitis', correct: false},
      {text: 'Lyme disease', correct: false},
      {text: 'Japanese encephalitis', correct: false},
    ],
  },
  {
    question: 'Mosquitoes must have following necessity to complete their life cycle?',
    answers: [
      {text: 'Water', correct: true},
      {text: 'Intermediate host', correct: false},
      {text: 'nan', correct: false},
      {text: 'Vector', correct: false},
      {text: 'pupa', correct: false},
    ],
  },
  {
    question: 'What is the primary vector responsible for transmitting Dengue virus?',
    answers: [
      {text: 'Aedes mosquito', correct: true},
      {text: 'Anopheles mosquito', correct: false},
      {text: 'Culex mosquito', correct: false},
      {text: 'Phlebotomine fly', correct: false},
      {text: 'Tsetse fly', correct: false},
    ],
  },
  {
    question: 'Which symptom is characteristic of severe Dengue fever (Dengue hemorrhagic fever)?',
    answers: [
      {text: 'Bleeding tendencies', correct: true},
      {text: 'Profuse sweating', correct: false},
      {text: 'Severe headache', correct: false},
      {text: 'Rash', correct: false},
      {text: 'Joint pain', correct: false},
    ],
  },
  {
    question: 'What is incorrect about Dengue fever? ',
    answers: [
      {text: 'is spread by the vector Aedes aegypti', correct: false},
      {text: 'has an incubation period of 2-3 weeks', correct: true},
      {text: 'is caused by a flavivirus', correct: false},
      {text: 'is more likely to cause bleeding  in patients previously infected by a Dengue virus', correct: false},
      {text: 'characteristically causes severe myalgia', correct: false},
    ],
  },
  {
    question: 'Which measure is most effective for preventing Dengue fever?',
    answers: [
      {text: 'Wearing long-sleeved clothing', correct: false},
      {text: 'Indoor residual spraying with insecticides', correct: false},
      {text: 'Quarantine of infected individuals', correct: false},
      {text: 'Using mosquito repellent', correct: true},
      {text: 'Vaccination', correct: false},
    ],
  },
  {
    question: 'Which of the following is NOT a common vector for encephalitis?',
    answers: [
      {text: 'Flies', correct: true},
      {text: 'Mosquitoes', correct: false},
      {text: 'Fleas', correct: false},
      {text: 'Mites', correct: false},
      {text: 'Ticks', correct: false},
    ],
  },
  {
    question: 'In which location are bed bugs commonly found in infested environments?',
    answers: [
      {text: 'Inside fruit', correct: false},
      {text: 'In cracks and crevices of furniture and walls', correct: true},
      {text: 'Buried in soil', correct: false},
      {text: 'In tree canopies', correct: false},
      {text: 'Underneath rocks', correct: false},
    ],
  },
  {
    question: 'Which is a common symptom of bed bug bites in humans?',
    answers: [
      {text: 'Severe headache', correct: false},
      {text: 'Joint swelling', correct: false},
      {text: 'Itchy welts or papules', correct: true},
      {text: 'Muscle pain', correct: false},
      {text: 'Rash with blisters', correct: false},
    ],
  },
  {
    question: 'Which characteristic defines insects of the order Siphonaptera, such as fleas?',
    answers: [
      {text: 'They have piercing-sucking mouthparts', correct: true},
      {text: 'They are known for swarming behavior', correct: false},
      {text: 'They undergo complete metamorphosis', correct: false},
      {text: 'They have chewing mouthparts', correct: false},
      {text: 'They are primarily herbivorous', correct: false},
    ],
  },
  {
    question: 'Which measure is most effective for preventing flea infestations in pets?',
    answers: [
      {text: 'Indoor residual spraying with insecticides', correct: false},
      {text: 'Regular grooming and inspection of pets', correct: true},
      {text: 'Use of mosquito nets', correct: false},
      {text: 'Vaccination of pets', correct: false},
      {text: 'Avoiding contact with wild rodents', correct: false},
    ],
  },
  {
    question: 'Which of the following reasoning uses general principle to predict specific results? ',
    answers: [
      {text: 'Inductive', correct: false},
      {text: ' Hypothetico-deductive', correct: false},
      {text: 'Inductive & Hypothetico-deductive', correct: false},
      {text: 'Inductive and deductive ', correct: false},
      {text: '   Deductive', correct: true},
    ],
  },
  {
    question: 'A procedure design to test the hypothesis is known as ?',
    answers: [
      {text: 'Experiment', correct: true},
      {text: '   Idea', correct: false},
      {text: ' Dogma', correct: false},
      {text: 'Theory ', correct: false},
      {text: 'Law', correct: false},
    ],
  },
  {
    question: 'What is the name of the region where double-stranded single circular DNA is found in the prokaryotic cell?',
    answers: [
      {text: 'Nucleus', correct: false},
      {text: 'Protonucleus', correct: false},
      {text: 'Cytoplasm', correct: false},
      {text: 'Nucleoid', correct: true},
      {text: 'Nucleoplasm', correct: false},
    ],
  },
  {
    question: 'When looking at a specimen on your slide, you should always start with the ____?',
    answers: [
      {text: 'medium objective lens', correct: false},
      {text: 'high objective lens', correct: false},
      {text: 'super extra high power lens', correct: false},
      {text: 'extra high power lens', correct: false},
      {text: 'low objective lens', correct: true},
    ],
  },
  {
    question: 'Which of these is a characteristic of prokaryotic cells?',
    answers: [
      {text: ' All of these', correct: true},
      {text: 'Absence of nucleus', correct: false},
      {text: 'Lack a true membrane-bound nucleus', correct: false},
      {text: 'Presence of 70S ribosomes', correct: false},
      {text: 'Absence of cell organelles', correct: false},
    ],
  },
  {
    question: 'How is called the solution which has equal amount of solute and solvent in and out of a cell? ',
    answers: [
      {text: ' hypotonic', correct: false},
      {text: 'hypertonic & hypotonic', correct: false},
      {text: ' hypertonic', correct: false},
      {text: 'isotonic & hypertonic', correct: false},
      {text: ' isotonic', correct: true},
    ],
  },
  {
    question: 'Which of the following describes an observable occurrence in nature that appears to always be true ?',
    answers: [
      {text: 'Experiment', correct: false},
      {text: '  Idea', correct: false},
      {text: 'Hypothesis', correct: false},
      {text: 'Theory', correct: false},
      {text: 'Law', correct: true},
    ],
  },
  {
    question: 'In meiosis, crossing-over occurs:',
    answers: [
      {text: 'during prophase I and II and involves exchange of chromosome fragments between sister chromatids.', correct: false},
      {text: 'only during prophase I and involves exchange between chromatids of homologous  chromosomes.', correct: true},
      {text: ' only during prophase I and involves exchange of chromosome fragments between sister chromatids.', correct: false},
      {text: ' during prophase II and involves exchange of chromosome fragments between sister chromatids.', correct: false},
      {text: 'during prophase I and II and involves exchange of chromosome fragments between all four chromatids.', correct: false},
    ],
  },
  {
    question: 'Condensation of chromosomes occurs in',
    answers: [
      {text: 'Interphase', correct: false},
      {text: 'Prophase II', correct: false},
      {text: 'Prophase I', correct: true},
      {text: ' Metaphase ', correct: false},
      {text: 'Anaphase', correct: false},
    ],
  },
  {
    question: 'Which spindle fiber will lengthen, thereby pushing the chromosomes to the middle of metaphase? ',
    answers: [
      {text: 'centriolar fibers', correct: false},
      {text: 'centrosomes (MTOC) (MTOC- Microtubule-organizing centers)', correct: false},
      {text: 'centromeric spindle fibers', correct: false},
      {text: 'aster fibers', correct: false},
      {text: 'polar spindle fibers', correct: true},
    ],
  },
  {
    question: 'Which of the following is the correct sequence of mitotic phases?',
    answers: [
      {text: 'anaphase, prophase, metaphase, telophase', correct: false},
      {text: 'prophase, metaphase, telophase, anaphase', correct: true},
      {text: 'metaphase, anaphase, telophase, prophase', correct: false},
      {text: 'prophase, anaphase, metaphase, telophase', correct: false},
      {text: 'prophase, metaphase, anaphase, telophase', correct: false},
    ],
  },
  {
    question: ' If both genotype and phenotype shows the same ratios of 1:2:1 in the F2 generation, it shows',
    answers: [
      {text: ' dihybrid cross', correct: false},
      {text: ' monohybrid cross', correct: false},
      {text: ' complete dominance in monohybrid cross', correct: false},
      {text: ' incomplete dominance in monohybrid cross', correct: true},
      {text: ' co-dominance', correct: false},
    ],
  },
  {
    question: 'A represents the dominant allele and a represents the recessive allele of a pair. If, in 1000 offspring, 500 are aa and 500 are of some other genotype, which of the following are most probably the genotypes of the parents? ',
    answers: [
      {text: ' AA and aa', correct: false},
      {text: ' Aa and aa ', correct: false},
      {text: 'Aa and Aa ', correct: true},
      {text: 'aa and aa', correct: false},
      {text: ' AA and Aa ', correct: false},
    ],
  },
  {
    question: 'What is the maximum number of alleles that monohybrid cross can consider?',
    answers: [
      {text: '6', correct: false},
      {text: '10', correct: false},
      {text: '4', correct: false},
      {text: '2', correct: true},
      {text: '8', correct: false},
    ],
  },
  {
    question: 'The monohybrid phenotypic and genotypic ratio is same in the case of __________',
    answers: [
      {text: 'Multiple allele', correct: false},
      {text: ' Dominant allele', correct: false},
      {text: 'Codominance', correct: false},
      {text: 'Normal dominance recessive relation', correct: false},
      {text: 'Incomplete dominance', correct: true},
    ],
  },
  {
    question: 'Considering a dihybrid cross, what is the probability of the progeny being heterozygous at both the alleles?',
    answers: [
      {text: ' 1/16', correct: false},
      {text: ' 9/16', correct: false},
      {text: ' 3/16', correct: false},
      {text: ' 7/16', correct: false},
      {text: ' 4/16', correct: true},
    ],
  },
  {
    question: 'In case of codominance product is  ________',
    answers: [
      {text: ' None are functional', correct: false},
      {text: 'Incompletely produced from both alleles', correct: false},
      {text: ' Produced from one allele', correct: false},
      {text: 'Recessive alelle', correct: false},
      {text: 'Produced from both the alleles', correct: true},
    ],
  },
  {
    question: ' Which of the following ratio shows complementary gene interaction?',
    answers: [
      {text: '03:01', correct: false},
      {text: ' 9:7', correct: true},
      {text: ' 1:2:1', correct: false},
      {text: ' 9:3:3:1', correct: false},
      {text: ' 15:1', correct: false},
    ],
  },
  {
    question: 'In crossing a homozygous recessive with a heterozygote, what is the chance of getting an offspring with the homozygous recessive phenotype?',
    answers: [
      {text: '75%', correct: false},
      {text: '50%', correct: true},
      {text: '100%', correct: false},
      {text: '25%', correct: false},
      {text: '0%', correct: false},
    ],
  },
  {
    question: 'Which of the following is a human chromosomal syndrome caused by genomic abnormalities?',
    answers: [
      {text: ' Hemophilia', correct: false},
      {text: ' Duchenne muscular dystrophy ', correct: false},
      {text: ' Turner syndrome', correct: true},
      {text: ' Sickle cell anemia', correct: false},
      {text: ' Cystic fibrosis', correct: false},
    ],
  },
  {
    question: 'A red flowered plant (RR) is bred with a white flowered plant (rr) and the F1 generation has pink flowers (Rr). This is a example of',
    answers: [
      {text: 'Incomplete dominance', correct: true},
      {text: ' co-dominance', correct: false},
      {text: ' polyspermy', correct: false},
      {text: ' segregation', correct: false},
      {text: ' genetic mutation', correct: false},
    ],
  },
  {
    question: 'Which of the following human diseases is least likely  to be caused by aneuploidy?',
    answers: [
      {text: 'Patau syndrome', correct: false},
      {text: ' Klinefelter syndrome', correct: false},
      {text: ' Achondroplasia', correct: true},
      {text: 'Turner syndrome', correct: false},
      {text: '  Down syndrome', correct: false},
    ],
  },
  {
    question: 'Down\'s syndrome can be caused by ___',
    answers: [
      {text: ' an extra chromosome 18 ', correct: false},
      {text: ' a missing chromosome 18 ', correct: false},
      {text: 'an extra chromosome 19 ', correct: false},
      {text: ' an extra chromosome 21 ', correct: true},
      {text: ' a missing chromosome 21 ', correct: false},
    ],
  },
  {
    question: '  Which of the following trisomy karyotypes has the mildest effect on human development?',
    answers: [
      {text: ' 47,XY,+18', correct: false},
      {text: '47,XX,+13', correct: false},
      {text: '47,XY,+21', correct: false},
      {text: '47,XXY', correct: false},
      {text: ' 47,XXX', correct: true},
    ],
  },
  {
    question: '  What is the main symptom of Duchenne muscular dystrophy?',
    answers: [
      {text: 'Hearing loss ', correct: false},
      {text: ' Cognitive impairment ', correct: false},
      {text: 'Skin rash ', correct: false},
      {text: ' Vision loss ', correct: false},
      {text: 'Muscle weakness', correct: true},
    ],
  },
  {
    question: ' An X linked recessive gene would appear to __________________',
    answers: [
      {text: 'Skip generations', correct: false},
      {text: ' Be expressed in both males and females equally', correct: false},
      {text: 'Expressed mostly in men', correct: true},
      {text: ' Gradually degrade', correct: false},
      {text: 'Be lethal', correct: false},
    ],
  },
  {
    question: 'Hemophilic  man marries woman having no history of the disease in her pedigree. What is the chance that a hemophilic son is born to them?',
    answers: [
      {text: '50%', correct: false},
      {text: '5%', correct: false},
      {text: '75%', correct: false},
      {text: '0%', correct: true},
      {text: '25%', correct: false},
    ],
  },
  {
    question: 'What type of bond forms between Complementary base pairs?',
    answers: [
      {text: ' Interkinetic', correct: false},
      {text: ' Covalent', correct: false},
      {text: 'Hydrogen', correct: true},
      {text: 'Philial', correct: false},
      {text: ' Ionic', correct: false},
    ],
  },
  {
    question: 'To understand the structure of RNA polymerase, researchers employed what technique to view this enzyme?',
    answers: [
      {text: 'PCR amplification', correct: false},
      {text: 'X-ray crystallography', correct: true},
      {text: ' Gas Chromatography', correct: false},
      {text: 'Gel Electrophoresis', correct: false},
      {text: 'Hardy-Weinberg equilibrium', correct: false},
    ],
  },
  {
    question: 'In analyzing the number of different bases in a DNA sample, which result would be consistent with the base-pairing rules?',
    answers: [
      {text: 'CAGT=TGAC', correct: false},
      {text: ' A = G', correct: false},
      {text: ' G = T', correct: false},
      {text: 'ATTC=TAAG', correct: true},
      {text: 'AG=GA', correct: false},
    ],
  },
  {
    question: 'Antiparallel strands of a DNA molecule means that:',
    answers: [
      {text: 'the phosphate groups at the start  of two DNA strands are in opposite position (pole)', correct: true},
      {text: 'one strand turns clockwise', correct: false},
      {text: 'both strands turn in one direction', correct: false},
      {text: 'the phosphate groups of two DNA strands, at their ends, share the same position', correct: false},
      {text: ' one strand turns anti-clockwise', correct: false},
    ],
  },
  {
    question: 'Damage of structural gene – area of DNA molecule took place. But replacement of amino acid did not happen because afterwards damage was liquidated. What process liquidated mutation',
    answers: [
      {text: 'translation', correct: false},
      {text: 'replication', correct: false},
      {text: 'transcription', correct: false},
      {text: 'reparation', correct: true},
      {text: 'opposite transcription', correct: false},
    ],
  },
  {
    question: 'In DNA molecular there is 30% deoxyadenosinmonophosphate. How many deoxyguaninmonophosphate are there in this fragment?',
    answers: [
      {text: '50%', correct: false},
      {text: '60%', correct: false},
      {text: '20%', correct: true},
      {text: '40%', correct: false},
      {text: '30%', correct: false},
    ],
  },
  {
    question: 'Male to male transmission is a key feature of which pattern of inheritance?',
    answers: [
      {text: 'Autosomal dominant', correct: false},
      {text: 'Y-linked recessive', correct: true},
      {text: 'Autosomal recessive', correct: false},
      {text: 'X-linked dominant', correct: false},
      {text: 'X-linked recessive', correct: false},
    ],
  },
  {
    question: 'Which of the following is a recessive autosomal hereditary disease? ',
    answers: [
      {text: ' Albinism ', correct: true},
      {text: 'Huntington\'s disease ', correct: false},
      {text: 'Color blindness', correct: false},
      {text: ' Achondroplasia ', correct: false},
      {text: ' Polydactyly', correct: false},
    ],
  },
  {
    question: 'Cystic fibrosis (CF) is an inherited disease. How is CF passed down through families?',
    answers: [
      {text: 'One grandparent &one parent are carriers of CF gene ', correct: false},
      {text: 'Parents are not carriers of CF gene ', correct: false},
      {text: 'One parent is a carrier of the CF gene', correct: false},
      {text: 'One grandparent is a carrier of the CF gene', correct: false},
      {text: 'Both parents are carriers of the CF gene', correct: true},
    ],
  },
  {
    question: 'Which disease in treated in part by a low-phenylalanine diet? ',
    answers: [
      {text: 'Phenylketonouria       ', correct: true},
      {text: 'Cystic Fibrosis ', correct: false},
      {text: 'Tay-Sach’s desease           ', correct: false},
      {text: 'Albinism                ', correct: false},
      {text: ' Color blindness', correct: false},
    ],
  },
  {
    question: 'Which of the following is a dominant autosomal hereditary disease? ',
    answers: [
      {text: ' Polydactyly ', correct: true},
      {text: 'Albinism ', correct: false},
      {text: ' Color blindness', correct: false},
      {text: 'Tay-Sachs disease ', correct: false},
      {text: ' Cystic fibrosis ', correct: false},
    ],
  },
  {
    question: 'Which of the following best describes the concept of a host in parasitology?',
    answers: [
      {text: '  An organism that is capable of transmitting a parasite to other organisms.', correct: false},
      {text: 'An organism that is infected with a parasite and suffers from that relationship.', correct: false},
      {text: ' An organism that is infected with a parasite and suffers from that relationship.', correct: true},
      {text: ' An organism that is immune to the effects of a parasite and therefore does not suffer from infection.', correct: false},
      {text: '  An organism that is found in the environment and serves as a reservoir for parasites.', correct: false},
    ],
  },
  {
    question: 'What factor prevents the stomach from being colonized by most protozoan parasites?',
    answers: [
      {text: 'Absorption', correct: false},
      {text: 'Bile', correct: false},
      {text: 'Deletion', correct: false},
      {text: 'Digestive enzymes', correct: true},
      {text: 'Peristalsis ', correct: false},
    ],
  },
  {
    question: 'Which of the following is not a characteristic feature of prоtozoans',
    answers: [
      {text: 'Flagella', correct: false},
      {text: ' binary fission', correct: false},
      {text: ' contractile vacuole', correct: false},
      {text: ' cell membrane as an outer body covering', correct: true},
      {text: ' pseudopodia', correct: false},
    ],
  },
  {
    question: 'Protozoan have several types of vacuoles.Which of the following is true about a contractile vacuole?',
    answers: [
      {text: 'None of stated', correct: false},
      {text: 'it contains specific enzymes that perform various functions', correct: false},
      {text: 'it maintains osmotic balance by continuous water expulsion', correct: true},
      {text: 'it is responsible for 	water circulation', correct: false},
      {text: 'it creates sites of food digestion', correct: false},
    ],
  },
  {
    question: 'Which of the following statements true about the life cycle of Giardia lamblia?',
    answers: [
      {text: ' Giardia lamblia has an indirect life cycle and requires a vector, such as a mosquito, for transmission. ', correct: false},
      {text: ' Giardia lamblia has a free-living stage that is not dependent on a host for survival.', correct: false},
      {text: 'Giardia lamblia has a complex life cycle that involves multiple intermediate and definitive hosts.', correct: false},
      {text: ' Giardia lamblia has a simple, direct life cycle that involves only one host species. ', correct: true},
      {text: 'Giardia lamblia has a direct life cycle and can only be transmitted through direct contact with an infected host.', correct: false},
    ],
  },
  {
    question: 'Which of the following statements accurately describes the life cycle of Trichomonas vaginalis?',
    answers: [
      {text: 'Trophozoite stage, cyst stage, and sexual reproduction. ', correct: true},
      {text: ' Trophozoite stage, gametocyte stage, and asexual reproduction.', correct: false},
      {text: ' Cyst stage, sporozoite stage, and sexual reproduction. ', correct: false},
      {text: ' Gametocyte stage, zygote stage, and sporozoite stage. ', correct: false},
      {text: ' Trophozoite stage, sporozoite stage, and asexual reproduction. ', correct: false},
    ],
  },
  {
    question: 'What is the clinical manifestation of giardiasis caused by Giardia lamblia? ',
    answers: [
      {text: '  Lung abscess', correct: false},
      {text: 'Liver abscess', correct: false},
      {text: ' Heart failure', correct: false},
      {text: ' Malaria ', correct: false},
      {text: 'Diarrhea ', correct: true},
    ],
  },
  {
    question: 'Which drug is commonly used to treat infections caused by Trichomonas vaginalis?',
    answers: [
      {text: 'Ivermectin', correct: false},
      {text: 'Ciprofloxacin', correct: false},
      {text: 'Metronidazole', correct: true},
      {text: 'Amoxicillin', correct: false},
      {text: 'Chloroquine', correct: false},
    ],
  },
  {
    question: 'What is the phylum that Trypanosoma cruzi and Trypanosoma brucei belong to? ',
    answers: [
      {text: ' Myxozoa ', correct: false},
      {text: ' Microsporidia', correct: false},
      {text: ' Ciliophora ', correct: false},
      {text: ' Apicomplexa ', correct: false},
      {text: 'Sarcomastigophora ', correct: true},
    ],
  },
  {
    question: 'What is the vector  transmitting Trypanosoma cruzi to humans?  ',
    answers: [
      {text: '  Lice', correct: false},
      {text: ' Triatomine bug', correct: true},
      {text: '  Tsetse fly ', correct: false},
      {text: '    Flea ', correct: false},
      {text: ' Mosquito ', correct: false},
    ],
  },
  {
    question: '   What is the vector  transmission of Leishmania parasites?',
    answers: [
      {text: '   Lice', correct: false},
      {text: '  Sand flies ', correct: true},
      {text: ' Ticks ', correct: false},
      {text: '   Fleas ', correct: false},
      {text: ' Mosquito ', correct: false},
    ],
  },
  {
    question: 'What is a primary distinguishing feature of Trypanosoma brucei compared to Trypanosoma cruzi?',
    answers: [
      {text: 'Trypanosoma brucei has a kinetoplast absent in Trypanosoma cruzi', correct: false},
      {text: 'Trypanosoma brucei infects humans through the fecal matter of a kissing bug', correct: false},
      {text: 'Trypanosoma brucei completes its entire life cycle in humans', correct: false},
      {text: 'Trypanosoma brucei is transmitted by the tsetse fly, while Trypanosoma cruzi is transmitted by triatomine bugs', correct: true},
      {text: 'Both have identical pathogenesis in humans', correct: false},
    ],
  },
  {
    question: 'Which of the following drugs is primarily used to treat acute Chagas disease caused by Trypanosoma cruzi?',
    answers: [
      {text: 'Benznidazole', correct: true},
      {text: 'Ivermectin', correct: false},
      {text: 'Quinine', correct: false},
      {text: 'Azithromycin', correct: false},
      {text: 'Amphotericin B', correct: false},
    ],
  },
  {
    question: '#REF!',
    answers: [
      {text: '  The trophozoite is ingested by the host, invades the liver, and forms cysts that are shed in the feces. ', correct: false},
      {text: '  The trophozoite is ingested by the host, encysts in the intestine, and releases cysts that invade the colon and form trophozoites. ', correct: false},
      {text: '  The cyst is ingested by the host, excysts in the intestine, and releases trophozoites that invade the colon and form cysts. ', correct: true},
      {text: '   The trophozoite is ingested by the host, encysts in the stomach, and releases cysts that are shed in the feces.', correct: false},
      {text: '   The cyst is ingested by the host, excysts in the stomach, and releases trophozoites that invade the liver and form cysts. ', correct: false},
    ],
  },
  {
    question: '   Which of the following is not a biological feature of free-living amoebae? ',
    answers: [
      {text: '  They can form cysts in adverse conditions ', correct: false},
      {text: '    They are found in soil and water ', correct: false},
      {text: ' They can phagocytose other organisms', correct: false},
      {text: '  They are unicellular organisms ', correct: false},
      {text: 'They are obligate intracellular parasites ', correct: true},
    ],
  },
  {
    question: ' Which of the following parasite can cause granulomatous amoebic encephalitis (GAE)? ',
    answers: [
      {text: ' Trichomonas vaginalis', correct: false},
      {text: '   Entamoeba histolytic ', correct: false},
      {text: '  Acanthamoeba spp.', correct: true},
      {text: '  Trypanosoma cruzi ', correct: false},
      {text: '   Giardia lamblia', correct: false},
    ],
  },
  {
    question: '   Which of the following amoebae can cause severe brain infection?',
    answers: [
      {text: '   Trichomonas vaginalis', correct: false},
      {text: ' Giardia lamblia', correct: false},
      {text: '   Entamoeba histolytica', correct: false},
      {text: ' Naegleria fowleri ', correct: true},
      {text: '  Trypanosoma cruzi', correct: false},
    ],
  },
  {
    question: 'Which of the following is a crucial step in preventing the transmission of amoebas such as Naegleria fowleri and Acanthamoeba spp.?',
    answers: [
      {text: ' Regular deworming of pets', correct: false},
      {text: ' Chlorinating swimming pools and hot tubs', correct: true},
      {text: ' Proper use of antibiotics', correct: false},
      {text: ' Avoiding contact with infected animals', correct: false},
      {text: ' Oral rehydration therapy', correct: false},
    ],
  },
  {
    question: 'Which characteristic(s) are associated with parasites of the Class Aconoidasida?',
    answers: [
      {text: ' Lack of association with diseases like malaria', correct: false},
      {text: ' Involvement in causing amoebic infections', correct: false},
      {text: ' Formation of spores for transmission', correct: true},
      {text: ' Presence of flagella for locomotion', correct: false},
      {text: ' Preference for infecting humans directly without vectors', correct: false},
    ],
  },
  {
    question: 'Which symptoms are typically associated with Malaria?',
    answers: [
      {text: ' Vision disturbances and dizziness', correct: false},
      {text: ' Skin rashes and irritations', correct: false},
      {text: ' Fever and chills', correct: true},
      {text: ' Joint pain and headaches', correct: false},
      {text: ' Cough and chest pain', correct: false},
    ],
  },
  {
    question: '  Which of the following is a common clinical feature of Plasmodium falciparum infection?',
    answers: [
      {text: '  Cough ', correct: false},
      {text: ' Headache ', correct: true},
      {text: ' Joint pain', correct: false},
      {text: '   Jaundice ', correct: false},
      {text: ' Rash ', correct: false},
    ],
  },
  {
    question: ' Which of the following is a potential complication of severe Plasmodium falciparum infection?',
    answers: [
      {text: '  Liver failure ', correct: true},
      {text: '  Kidney stones ', correct: false},
      {text: '  Vision loss ', correct: false},
      {text: ' Hearing loss', correct: false},
      {text: ' Pulmonary embolism ', correct: false},
    ],
  },
  {
    question: 'Which diagnostic method is commonly used to detect Malaria in endemic areas with limited resources?',
    answers: [
      {text: ' Serological testing for antibodies', correct: false},
      {text: ' Microscopic examination of urine samples', correct: false},
      {text: ' PCR (Polymerase Chain Reaction) testing', correct: false},
      {text: ' ELISA (Enzyme-Linked Immunosorbent Assay)', correct: false},
      {text: ' Rapid diagnostic tests (RDTs) for parasite antigens', correct: true},
    ],
  },
  {
    question: '  Who  is the   definitive  host of Toxoplasma gondii? ',
    answers: [
      {text: '   Dogs ', correct: false},
      {text: '   Birds', correct: false},
      {text: '  human', correct: false},
      {text: '  Cats ', correct: true},
      {text: '   Reptiles', correct: false},
    ],
  },
  {
    question: 'Which stage of the life cycle of Toxoplasma gondii is infectious for humans?',
    answers: [
      {text: ' Schizont', correct: false},
      {text: 'Oocyst ', correct: true},
      {text: ' Sporozoite ', correct: false},
      {text: ' Tachyzoite ', correct: false},
      {text: ' Bradyzoite', correct: false},
    ],
  },
  {
    question: ' What are some of the clinical symptoms of toxoplasmosis? ',
    answers: [
      {text: ' Respiratory problems and cough ', correct: false},
      {text: ' Seizures and epilepsy ', correct: false},
      {text: '  Jaundice and liver failure', correct: false},
      {text: '   Fever, headache, and muscle aches', correct: true},
      {text: ' Muscle pain and weakness ', correct: false},
    ],
  },
  {
    question: '  What is the primary mode of transmission of Cryptosporidium parvum and Isospora belli? ',
    answers: [
      {text: ' Through airborne droplets', correct: false},
      {text: '  Through mosquito bites', correct: false},
      {text: ' Through contaminated water and food ', correct: true},
      {text: ' Through contact with infected animals', correct: false},
      {text: ' Through sexual contact ', correct: false},
    ],
  },
  {
    question: 'What is a common treatment approach for toxoplasmosis caused by Toxoplasma gondii?',
    answers: [
      {text: ' Antibiotic therapy with penicillin', correct: false},
      {text: ' Immunotherapy with monoclonal antibodies', correct: false},
      {text: ' Corticosteroids for inflammation reduction', correct: false},
      {text: ' Combination therapy using pyrimethamine and sulfadiazine', correct: true},
      {text: ' Antiviral drugs targeting the parasite\'s replication', correct: false},
    ],
  },
  {
    question: 'Which organ system is frequently impacted by microsporidiosis?',
    answers: [
      {text: ' Circulatory system', correct: false},
      {text: ' Nervous system', correct: false},
      {text: 'Musculoskeletal system', correct: false},
      {text: ' Digestive system', correct: true},
      {text: ' Respiratory system', correct: false},
    ],
  },
  {
    question: 'How do microsporidia commonly enter the host\'s body? ',
    answers: [
      {text: ' Consuming undercooked or contaminated food ', correct: false},
      {text: ' Through skin contact with contaminated soil or water ', correct: true},
      {text: ' Through insect bites, particularly from mosquitoes', correct: false},
      {text: ' Via airborne transmission from infected individuals ', correct: false},
      {text: ' By direct contact with an infected person\'s respiratory secretions', correct: false},
    ],
  },
  {
    question: 'What is a commonly used treatment approach for microsporidiosis caused by microsporidia?',
    answers: [
      {text: ' Antifungal medications to eliminate the parasite', correct: false},
      {text: ' Antibiotic therapy with penicillin', correct: false},
      {text: ' Corticosteroids for inflammation reduction', correct: false},
      {text: ' Antiviral drugs targeting the parasite\'s replication', correct: false},
      {text: ' Albendazole or nitazoxanide as effective anti-microsporidial agents', correct: true},
    ],
  },
  {
    question: 'Which characteristic is associated with Nematodes (Roundworms)?',
    answers: [
      {text: ' Leaf-shaped or flattened worms', correct: false},
      {text: ' Elongated, cylindrical shape', correct: true},
      {text: ' Examples include Taeniasis and Fascioliasis', correct: false},
      {text: ' Tough, non-segmented body', correct: false},
      {text: ' Segmented body structure with hooks or suckers', correct: false},
    ],
  },
  {
    question: 'Select the accurate feature related to Platyhelminthes:',
    answers: [
      {text: ' Platyhelminthes include only Nematodes and Trematodes', correct: false},
      {text: ' Trematodes possess oral and ventral suckers for attachment', correct: true},
      {text: ' Trematodes (Flukes) have an elongated, non-segmented body', correct: false},
      {text: ' Cestodes (Tapeworms) possess segmented body structure with hooks or suckers', correct: false},
      {text: ' Nematodes (Roundworms) fall under Platyhelminthes due to their leaf-shaped structure', correct: false},
    ],
  },
  {
    question: 'How does a healthcare provider diagnose a pinworm infection?',
    answers: [
      {text: 'With a blood test', correct: false},
      {text: 'By collecting eggs around the anus', correct: true},
      {text: ' By looking at the rash the infection makes', correct: false},
      {text: 'Urine test', correct: false},
      {text: 'Skin biopsy', correct: false},
    ],
  },
  {
    question: 'Which of the following is true about the body structure of Taenia solium? ',
    answers: [
      {text: 'It has a cylindrical body shape', correct: false},
      {text: 'It has a triangular body shape', correct: false},
      {text: 'It has an irregular body shap', correct: false},
      {text: 'It has a flattened body shape', correct: true},
      {text: 'It has a spherical body shape', correct: false},
    ],
  },
  {
    question: 'Which of the following statements do define the segments of a tapeworm consisting primarily of eggs, which hang in bags as a long chain behind the head?',
    answers: [
      {text: 'sporocysts', correct: false},
      {text: 'proglottids', correct: true},
      {text: 'cercariae', correct: false},
      {text: 'scolexes', correct: false},
      {text: 'glycoalyxes', correct: false},
    ],
  },
  {
    question: 'What is the feature of protonephridial system functions in cestodes?  ',
    answers: [
      {text: 'nervous co-ordination', correct: false},
      {text: 'digestion', correct: false},
      {text: 'reproduction', correct: false},
      {text: 'osmoregulation', correct: true},
      {text: 'respiration', correct: false},
    ],
  },
  {
    question: 'Which of the following is a causative agent of hydatid disease?',
    answers: [
      {text: 'Schistosoma mansoni', correct: false},
      {text: 'Echinococcus granulosus', correct: true},
      {text: 'Trypanosoma cruzi', correct: false},
      {text: 'Wuchereria bancrofti', correct: false},
      {text: 'Taenia solium', correct: false},
    ],
  },
  {
    question: 'How could you possibly become infected with adult tapeworms?',
    answers: [
      {text: 'direct penetration  through  cuticle', correct: false},
      {text: 'ingesting eggs in contaminated water', correct: true},
      {text: 'eating insufficiently cooked pork ', correct: false},
      {text: 'all of the above are correct', correct: false},
      {text: 'being bitten by a mosquito', correct: false},
    ],
  },
  {
    question: 'Which of the following is the infective stage of Fasciolopsis buski? ',
    answers: [
      {text: ' Miracidia ', correct: false},
      {text: ' Sporocysts ', correct: false},
      {text: 'Hydatid cyst', correct: false},
      {text: 'Metacercariae', correct: true},
      {text: 'Cercariae ', correct: false},
    ],
  },
  {
    question: 'What is the most common mode of transmission of Fasciola hepatica to humans?',
    answers: [
      {text: 'Skin contact with contaminated water ', correct: false},
      {text: 'Consumption of contaminated vegetables', correct: false},
      {text: ' Inhalation of eggs ', correct: false},
      {text: ' Consumption of contaminated watercress', correct: true},
      {text: ' Consumption of undercooked meat ', correct: false},
    ],
  },
  {
    question: 'Through what way  Schistosomia spp. is  transmitted to humans? ',
    answers: [
      {text: 'through contaminated food or water', correct: true},
      {text: 'through skin contact with infected animals', correct: false},
      {text: 'through insect bites ', correct: false},
      {text: 'through sexual route ', correct: false},
      {text: 'through respiratory droplets ', correct: false},
    ],
  },
  {
    question: 'Which one of the following statements about certain given animals is correct?',
    answers: [
      {text: 'Flat worms (Platyhelminthes) are coelomates', correct: true},
      {text: 'Flat worms (Platyhelminthes) are coelomates', correct: false},
      {text: 'Round worms  are pseudocoelomates', correct: false},
      {text: 'Molluscs are acolomates', correct: false},
      {text: 'Insects are pseudocoelomates', correct: false},
    ],
  },
  {
    question: 'A person working in a rice paddy in Asia becomes infected with the liver fluke by? ',
    answers: [
      {text: 'direct penetration through cuticle.', correct: false},
      {text: 'eating infected snails', correct: false},
      {text: 'eating infected undercooked or uncooked fish,', correct: false},
      {text: 'swimming or wading in infected water, where the cercariae enter the skin', correct: true},
      {text: 'drinking water contaminated with eggs', correct: false},
    ],
  },
  {
    question: 'Which vector does transmit Brugia malayi to humans? ',
    answers: [
      {text: 'Flea', correct: false},
      {text: 'Tick', correct: false},
      {text: 'Mosquitoe', correct: true},
      {text: 'Lice ', correct: false},
      {text: 'Sandfly', correct: false},
    ],
  },
  {
    question: 'History of mild intestinal distress, sleeplessness,itching, and anxiety is seen in preschool child attending play school. Which possible nematode is agent causing these manifestations?',
    answers: [
      {text: 'Trichomonas vaginalis', correct: false},
      {text: 'Necator americanus', correct: false},
      {text: 'Enterobius vermicularis', correct: true},
      {text: 'Ascaris lumbricoides', correct: false},
      {text: 'Wuchereria bancrofti', correct: false},
    ],
  },
  {
    question: 'By what filarial worm is caused the  discrete   lesions  in   the  lung   parenchyma   resulting  in   well-circumscribed  circularnodules (coin lesions)?',
    answers: [
      {text: 'Dirofilaria immitis', correct: true},
      {text: 'Dirofilaria tenuis', correct: false},
      {text: 'Dirofilaria ursi', correct: false},
      {text: ' Dirofilaria striata', correct: false},
      {text: 'Dirofilaria repens', correct: false},
    ],
  },
  {
    question: 'Identify what is most common human source of Trichinella spiralis infection in human?',
    answers: [
      {text: '     Dog', correct: false},
      {text: ' Pork', correct: true},
      {text: 'Fish', correct: false},
      {text: 'Beef', correct: false},
      {text: '   Goat', correct: false},
    ],
  },
  {
    question: 'Which of the following arthropods is the primary vector for Russian spring-summer encephalitis? ',
    answers: [
      {text: 'Lice ', correct: false},
      {text: 'Flea', correct: false},
      {text: 'Mite', correct: false},
      {text: 'Tick', correct: true},
      {text: 'Mosquito', correct: false},
    ],
  },
  {
    question: 'The following pathogen is transmitted to humans through the bite of infected ticks during Lyme disease.What is the name the most likely pathogen?',
    answers: [
      {text: 'Bordetella pertusis ', correct: false},
      {text: 'Borrelia buccalis ', correct: false},
      {text: 'Borrelia burgdorferi', correct: true},
      {text: 'Enterococcus faecalis', correct: false},
      {text: 'Leptospira interrogans', correct: false},
    ],
  },
  {
    question: 'Which of the following diseases is NOT transmitted by ticks or mites? ',
    answers: [
      {text: 'Rocky Mountain spotted fever ', correct: false},
      {text: 'Q fever', correct: false},
      {text: 'Scrub typhus ', correct: false},
      {text: 'Tularemia', correct: false},
      {text: 'Chikungunya ', correct: true},
    ],
  },
  {
    question: 'Which of the statements below is correct about Scabies?',
    answers: [
      {text: 'adult stage is infective stage ', correct: false},
      {text: 'Nosocomial infection is a likelihood', correct: false},
      {text: 'Secondary bacterial infection is uncommon', correct: false},
      {text: 'Arthropods are vectors', correct: false},
      {text: 'The infective stage is the egg', correct: true},
    ],
  },
  {
    question: 'How is associated most dangerous medical condition with ticks? ',
    answers: [
      {text: 'Lyme disaese ', correct: false},
      {text: 'Allergic reaction ', correct: true},
      {text: 'Tick paralysis ', correct: false},
      {text: 'Plague ', correct: false},
      {text: 'Tick born typhus ', correct: false},
    ],
  },
  {
    question: 'For what transmission is responsible Aedes aegypti mosquito?',
    answers: [
      {text: 'German measles', correct: false},
      {text: 'Herpes simplex', correct: false},
      {text: 'Tick-borne relapsing fever', correct: false},
      {text: 'AIDS', correct: false},
      {text: 'Yellow fever', correct: true},
    ],
  },
  {
    question: 'Which species of mosquitoes is predominant vector of West Nile Virus (WNV)?',
    answers: [
      {text: '  Anopheles', correct: false},
      {text: 'Ixodes', correct: false},
      {text: 'Stomoxys', correct: false},
      {text: 'Culex', correct: true},
      {text: '  Aedes  ', correct: false},
    ],
  },
  {
    question: 'Which of the following is not transmitted by a mosquito?',
    answers: [
      {text: 'Wuchereria bancrofti', correct: false},
      {text: 'Leishmania donovani', correct: true},
      {text: 'Plasmodium falciparum', correct: false},
      {text: 'Plasmodium ovale ', correct: false},
      {text: 'Plasmodium vivax', correct: false},
    ],
  },
  {
    question: 'Which of the following is a measure for preventing flea-borne diseases? ',
    answers: [
      {text: 'Keeping pets treated with flea preventive medication', correct: true},
      {text: 'Vaccination ', correct: false},
      {text: ' Using insect repellent ', correct: false},
      {text: 'Washing hands with soap and water', correct: false},
      {text: 'Properly cooking meat ', correct: false},
    ],
  },
  {
    question: 'What is the life cycle of fleas (order Siphonaptera)? ',
    answers: [
      {text: 'Egg, larva, nymph, adult', correct: false},
      {text: 'Egg, nymph, adult', correct: false},
      {text: 'Egg, pupa, adult ', correct: false},
      {text: 'Egg, larva, pupa, adult ', correct: true},
      {text: 'Egg, larva, pupa, nymph, adult', correct: false},
    ],
  },
  {
    question: 'West Nile virus belongs to a group of viruses known as flaviviruses. How are these viruses spread?',
    answers: [
      {text: 'Through contaminated water', correct: false},
      {text: 'Through raw or undercooked meat', correct: false},
      {text: 'By mosquitoes', correct: true},
      {text: 'By sneezing or coughing', correct: false},
      {text: 'by flies ', correct: false},
    ],
  },
  {
    question: 'During Plague disease which bacteria is transmitted by fleas ?',
    answers: [
      {text: 'Yersinia Pestis', correct: true},
      {text: 'Borrelia burgdorferi ', correct: false},
      {text: 'Mycobacteria', correct: false},
      {text: 'Clostridium', correct: false},
      {text: 'None of the above', correct: false},
    ],
  },
  {
    question: 'How do lice get from person to person?',
    answers: [
      {text: 'Crawling', correct: true},
      {text: 'Walking ', correct: false},
      {text: 'Jumping', correct: false},
      {text: 'Skipping', correct: false},
      {text: 'Flying', correct: false},
    ],
  },
  {
    question: 'A 5-years old boy presnts with multiple brown organisms attached to the base of his eyelashes. There is a suspicion of sexual abuse. Which of the following is the MOST likely organism? ',
    answers: [
      {text: 'Demodex folliculorum ', correct: false},
      {text: 'Borrelia burgdorferi ', correct: false},
      {text: 'Pthirus pubis ', correct: true},
      {text: 'pediculosis humanus corporis', correct: false},
      {text: 'Pediculosis capitis ', correct: false},
    ],
  },
];


const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const backButton = document.getElementById('back-btn');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  backButton.innerHTML = 'Back';
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');
    answerButtons.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  backButton.style.display = 'none';

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });
  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = 'Solve Again';
  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener('click', ()=> {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function handleBackButton() {
  currentQuestionIndex--;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

backButton.addEventListener('click', ()=> {
  if (currentQuestionIndex < questions.length) {
    handleBackButton();
  } else {
    startQuiz();
  }
});

// Add search functionality for custom question navigation
searchButton.addEventListener('click', () => {
  const questionNumber = parseInt(searchInput.value, 10); // Convert input to number
  if (questionNumber > 0 && questionNumber <= questions.length) {
    currentQuestionIndex = questionNumber - 1; // Navigate to the correct question index
    showQuestion(); // Display the selected question
  } else {
    alert('Please enter a valid question number between 1 and ' + questions.length);
  }
});

startQuiz();
