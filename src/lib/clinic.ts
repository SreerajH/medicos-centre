export const clinic = {
  name: "Medicos Centre",
  shortName: "Medicos",
  url: "https://medicoscentre.com",
  tagline:
    "North India's oldest diagnostics lab, rebuilt for the patient who's booking on their phone.",
  foundedYear: 1984,
  helpline: "+91 172 502 2111",
  helplineRaw: "911725022111",
  appointments: "+91 99889 99359",
  appointmentsRaw: "919988999359",
  homeVisits: "+91 99889 99365",
  homeVisitsRaw: "919988999365",
  email: "patientcare@medicoscentre.com",
  whatsappBook:
    "https://wa.me/919988999359?text=Hi%2C%20I%27d%20like%20to%20book%20a%20test%20at%20Medicos%20Centre.",
  whatsappHome:
    "https://wa.me/919988999365?text=Hi%2C%20I%27d%20like%20to%20request%20home%20sample%20collection%20from%20Medicos%20Centre.",
  reportsPortal: "https://reports.medicoscentre.com",
  bookingPortal: "http://223.178.222.247:8081",
  address: {
    line1: "SCO 801-802, Sector 22A",
    line2: "Opp. Parade Ground",
    city: "Chandigarh",
    state: "Chandigarh",
    zip: "160022",
    full: "SCO 801-802, Sector 22A, Opp. Parade Ground, Chandigarh 160022",
  },
  geo: { lat: 30.7372, lng: 76.7853 },
  facility: {
    area: "10,000 sq ft",
    staff: "100+",
    states: 3,
    yearsLabel: "40+",
  },
  hours: [
    { day: "Mon", value: "7:00 am – 9:00 pm" },
    { day: "Tue", value: "7:00 am – 9:00 pm" },
    { day: "Wed", value: "7:00 am – 9:00 pm" },
    { day: "Thu", value: "7:00 am – 9:00 pm" },
    { day: "Fri", value: "7:00 am – 9:00 pm" },
    { day: "Sat", value: "7:00 am – 9:00 pm" },
    { day: "Sun", value: "8:00 am – 2:00 pm" },
  ],
  homeCollection: "Call to arrange — home sample collection across tri-city",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d109738.58106713116!2d76.7052768!3d30.7372122!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feda4a4306505%3A0xedf57ac0d1f0ce61!2sMedicos+Centre!5e0!3m2!1sen!2sin!4v1504353815366",
  mapsLink: "https://maps.google.com/?q=Medicos+Centre+Sector+22+Chandigarh",
  social: {
    facebook: "https://facebook.com/medicoscentre",
    instagram: "https://instagram.com/medicoscentre",
  },
} as const;

export const services = [
  {
    key: "lab",
    name: "Clinical Lab Testing",
    line: "Haematology, biochemistry, immunology — the full routine and specialist panels.",
    panels: ["CBC", "Lipid profile", "Thyroid (T3/T4/TSH)", "HbA1c", "LFT", "KFT"],
  },
  {
    key: "pathology",
    name: "Pathology & Molecular",
    line: "Histopathology, cytology, FNAC and molecular diagnostics, read by senior pathologists.",
    panels: ["Histopathology", "FNAC", "Pap smear", "PCR panels"],
  },
  {
    key: "usg",
    name: "Ultrasonography",
    line: "Full ultrasound suite — abdomen, KUB, pregnancy and colour Doppler.",
    panels: ["Abdomen / KUB", "Obstetric / Anomaly", "Colour Doppler", "Small parts"],
  },
  {
    key: "ecg",
    name: "ECG",
    line: "Resting 12-lead electrocardiogram, recorded and reviewed within minutes.",
    panels: ["Resting ECG", "Same-visit report"],
  },
  {
    key: "pft",
    name: "Pulmonary Function Test",
    line: "Spirometry (PFT) — lung volumes and airway function, with a clear printable report.",
    panels: ["Spirometry", "Pre/post bronchodilator", "FEV1, FVC, PEFR"],
  },
  {
    key: "tmt",
    name: "Cardiac Stress Test",
    line: "Treadmill (TMT) stress testing under physician supervision, with full ECG monitoring.",
    panels: ["Bruce protocol TMT", "Physician supervised", "Continuous ECG"],
  },
] as const;

export const locations = [
  {
    state: "Chandigarh",
    tag: "Flagship",
    address: "SCO 801-802, Sector 22A, Opp. Parade Ground, Chandigarh 160022",
    detail: "10,000 sq ft · 100+ staff · Full diagnostic suite",
    cta: "Get directions",
    href: "https://maps.google.com/?q=Medicos+Centre+Sector+22+Chandigarh",
  },
  {
    state: "Punjab",
    tag: "Collection centres",
    address: "Multiple sample-collection centres across Punjab",
    detail: "Routine lab tests collected locally, processed in Chandigarh.",
    cta: "Find a centre",
    href: "#contact",
  },
  {
    state: "Haryana",
    tag: "Collection centres",
    address: "Sample collection across Panchkula, Ambala and beyond",
    detail: "Same network, same reports — accessible online.",
    cta: "Find a centre",
    href: "#contact",
  },
] as const;

export const whyUs = [
  {
    title: "Since 1984",
    stat: "40+ yrs",
    note: "One of the oldest continuously operating diagnostic labs in North India. Consistency built over four decades.",
  },
  {
    title: "Multi-modal diagnostics",
    stat: "6 modalities",
    note: "Lab, ultrasound, ECG, PFT, stress testing and home collection — all under one roof.",
  },
  {
    title: "Physicians, corporates, insurance",
    stat: "100+ accounts",
    note: "Trusted by private physicians, group practices, industrial accounts and insurance companies.",
  },
] as const;

export const packages = [
  {
    name: "Basic Wellness",
    tests: 28,
    summary: "CBC, lipid, sugar, LFT, KFT, thyroid and a routine urine panel.",
    price: "₹999",
    suited: "First-time annual check-up.",
  },
  {
    name: "Comprehensive Health",
    tests: 54,
    summary: "Wellness package plus HbA1c, vitamin D, B12, iron studies and ECG.",
    price: "₹1,999",
    suited: "Adults 30+ tracking long-term health.",
    featured: true,
  },
  {
    name: "Executive 360",
    tests: 84,
    summary: "Adds cardiac markers, ultrasound abdomen, PFT and physician consult.",
    price: "₹3,499",
    suited: "Working professionals, annual deep dive.",
  },
  {
    name: "Women's Wellness",
    tests: 46,
    summary: "Hormone profile, thyroid, iron, vitamin D, pelvic ultrasound and pap smear.",
    price: "₹2,499",
    suited: "Tailored to women, all age groups.",
  },
] as const;

export const faqs = [
  {
    q: "Do I need an appointment?",
    a: "Walk-ins are welcome for routine lab tests and ECG. Ultrasound, PFT and stress tests are by appointment — call +91 99889 99359 to book a slot.",
  },
  {
    q: "Is home sample collection available?",
    a: "Yes, across the Chandigarh tricity and select Punjab and Haryana areas. Call +91 99889 99365 to schedule a home visit.",
  },
  {
    q: "When will I get my report?",
    a: "Routine lab reports the same day or next morning. Specialist panels in 24–48 hours. All reports are uploaded to the patient portal for secure online access.",
  },
  {
    q: "How do I access my report online?",
    a: "Use the patient ID printed on your test slip at reports.medicoscentre.com. Reports are tied to your phone number and stored securely.",
  },
  {
    q: "Do you accept insurance and corporate accounts?",
    a: "Yes — we work with most major insurers and have long-standing corporate, physician and industrial accounts. Speak to our helpline for empanelment details.",
  },
  {
    q: "Where exactly are you located?",
    a: "SCO 801-802, Sector 22A, opposite the Parade Ground, Chandigarh 160022 — at the heart of the city, with parking and easy access.",
  },
] as const;

export const stats = [
  { value: "40+", label: "Years" },
  { value: "3", label: "States" },
  { value: "100+", label: "Specialists" },
  { value: "10,000", label: "Sq Ft Lab" },
] as const;
