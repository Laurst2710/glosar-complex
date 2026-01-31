// Version: Control 1.3 - Database Payload
const glossaryData = [
    // --- START BLOC 1: FUNDAMENTE ---
    { term: "BIOS", category: "Hardware", source: "B_C_T.pdf", definition: "Basic Input/Output System. Software-ul care inițializează hardware-ul la pornire." },
    { term: "Bus", category: "Hardware", source: "B_C_T.pdf", definition: "Cale de comunicație care transferă date între componentele unui computer." },
    // --- END BLOC 1 ---
    // --- START BLOC 2: NETWORKING & INTERNET ---
    { term: "Bandwidth", category: "Networking", source: "B_C_T.pdf", definition: "Capacitatea maximă de transfer a unei conexiuni de rețea într-un timp dat." },
    { term: "Bridge", category: "Networking", source: "B_C_T.pdf", definition: "Dispozitiv care conectează două segmente de rețea locală (LAN) pentru a funcționa ca o singură rețea." },
    { term: "Client-Server", category: "Networking", source: "B_C_T.pdf", definition: "Arhitectură de rețea în care un computer central (server) oferă resurse clienților." },
    { term: "DNS (Domain Name System)", category: "Networking", source: "B_C_T.pdf", definition: "Sistemul care traduce numele de domenii (ex: google.com) în adrese IP numerice." },
    { term: "Ethernet", category: "Networking", source: "B_C_T.pdf", definition: "Cea mai utilizată tehnologie pentru conectarea calculatoarelor într-o rețea locală prin cablu." },
    { term: "Firewall", category: "Security", source: "B_C_T.pdf", definition: "Sistem de securitate care monitorizează și filtrează traficul de date conform unor reguli prestabilite." },
    { term: "Gateway", category: "Networking", source: "B_C_T.pdf", definition: "Nod de rețea care servește ca punct de intrare către o altă rețea (ex: routerul tău către Internet)." },
    { term: "Hub", category: "Networking", source: "B_C_T.pdf", definition: "Dispozitiv simplu care transmite datele primite către toate porturile sale, fără a le filtra." },
    { term: "IP Address", category: "Networking", source: "B_C_T.pdf", definition: "Identificator numeric unic pentru fiecare dispozitiv dintr-o rețea care utilizează protocolul IP." },
    { term: "Modem", category: "Networking", source: "B_C_T.pdf", definition: "Echipament care convertește semnalele digitale în analogice și invers pentru transmisia prin linii telefonice sau cablu." },
    // --- END BLOC 2: NETWORKING & INTERNET ---
    // --- START BLOC 3: PROGRAMARE & OOP (A-C) ---
    { term: "Abstract Class", category: "Programming", source: "Glossary.pdf", definition: "O clasă care nu poate fi instanțiată direct și servește ca model pentru alte clase." },
    { term: "Argument", category: "Programming", source: "Glossary.pdf", definition: "Valoare furnizată unei funcții sau metode atunci când aceasta este apelată." },
    { term: "Array", category: "Programming", source: "Glossary.pdf", definition: "Colecție de elemente de același tip stocate în locații de memorie contigue." },
    { term: "Boolean", category: "Programming", source: "Glossary.pdf", definition: "Tip de date care poate avea doar două valori: True (Adevărat) sau False (Fals)." },
    { term: "Class", category: "Programming", source: "Glossary.pdf", definition: "Un șablon sau prototip definit de utilizator din care sunt create obiectele." },
    { term: "Code Block", category: "Programming", source: "Glossary.pdf", definition: "Secțiune de cod grupată între acolade {}, tratată ca o singură unitate." },
    { term: "Compiler", category: "Programming", source: "Glossary.pdf", definition: "Program care traduce codul sursă dintr-un limbaj de nivel înalt în limbaj mașină." },
    { term: "Constructor", category: "Programming", source: "Glossary.pdf", definition: "Metodă specială utilizată pentru a inițializa obiectele dintr-o clasă." },
    // --- END BLOC 3: PROGRAMARE & OOP (A-C) ---
    // --- START BLOC 4: SECURITATE & CRIPTARE ---
    { term: "Cybersecurity", category: "Security", source: "Glossary.pdf", definition: "Protejarea sistemelor și rețelelor împotriva atacurilor digitale și accesului neautorizat." },
    { term: "Data Encryption Standard (DES)", category: "Security", source: "B_C_T.pdf", definition: "Un algoritm simetric pentru criptarea datelor electronice, utilizat anterior ca standard." },
    { term: "Decryption", category: "Security", source: "B_C_T.pdf", definition: "Procesul de transformare a datelor criptate înapoi în formatul lor original, lizibil." },
    { term: "Digital Signature", category: "Security", source: "B_C_T.pdf", definition: "Tehnică matematică utilizată pentru a valida autenticitatea și integritatea unui mesaj digital." },
    { term: "Encryption Key", category: "Security", source: "B_C_T.pdf", definition: "Un șir de caractere utilizat de un algoritm criptografic pentru a transforma datele în cod." },
    { term: "Hacker", category: "Security", source: "B_C_T.pdf", definition: "Persoană care folosește abilități tehnice pentru a depăși barierele de securitate ale unui sistem." },
    { term: "Multi-factor Authentication (MFA)", category: "Security", source: "Coursera", definition: "Metodă de securitate care necesită mai multe forme de verificare pentru a permite accesul." },
    { term: "Ransomware", category: "Security", source: "B_C_T.pdf", definition: "Tip de malware care blochează accesul la date și solicită o plată pentru deblocare." },
    { term: "Secure Sockets Layer (SSL)", category: "Security", source: "B_C_T.pdf", definition: "Protocol de securitate standard pentru stabilirea unei legături criptate între un server și un browser." },
    { term: "Trojan Horse", category: "Security", source: "B_C_T.pdf", definition: "Program malițios deghizat într-o aplicație legitimă pentru a păcăli utilizatorul." },
    // --- END BLOC 4: SECURITATE & CRIPTARE ---
    // --- START BLOC 5: SOFTWARE & SISTEME DE OPERARE ---
    { term: "Application Software", category: "Software", source: "B_C_T.pdf", definition: "Programe concepute pentru a ajuta utilizatorul să îndeplinească sarcini specifice (ex: editoare de text)." },
    { term: "Device Driver", category: "Software", source: "B_C_T.pdf", definition: "Software specializat care permite sistemului de operare să comunice cu un hardware specific." },
    { term: "File System", category: "Software", source: "B_C_T.pdf", definition: "Metodă de organizare și stocare a fișierelor pe un suport de date (ex: NTFS, FAT32)." },
    { term: "Kernel", category: "Software", source: "B_C_T.pdf", definition: "Componenta centrală a unui sistem de operare care gestionează resursele hardware." },
    { term: "Multitasking", category: "Software", source: "B_C_T.pdf", definition: "Capacitatea unui sistem de operare de a executa mai multe procese sau aplicații simultan." },
    { term: "Open Source", category: "Software", source: "Glossary.pdf", definition: "Software al cărui cod sursă este disponibil public pentru a fi utilizat, modificat și distribuit." },
    { term: "Process", category: "Software", source: "B_C_T.pdf", definition: "O instanță a unui program aflat în execuție, care consumă memorie și timp de procesor." },
    { term: "Registry", category: "Software", source: "B_C_T.pdf", definition: "Bază de date ierarhică ce stochează setările de configurare și opțiunile pentru Windows." },
    { term: "System Software", category: "Software", source: "B_C_T.pdf", definition: "Software-ul de bază creat pentru a controla hardware-ul și a oferi o platformă pentru aplicații." },
    { term: "Virtual Machine (VM)", category: "Software", source: "B_C_T.pdf", definition: "Emularea unui sistem informatic care rulează ca un program în interiorul altui sistem de operare." },
    // --- END BLOC 5: SOFTWARE & SISTEME DE OPERARE ---
];
