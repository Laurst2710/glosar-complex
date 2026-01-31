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
    // --- START BLOC 6: UNITĂȚI DE MĂSURĂ & STANDARDE ---
    { term: "Bit (b)", category: "Units", source: "B_C_T.pdf", definition: "Cea mai mică unitate de date dintr-un computer, având valoarea 0 sau 1." },
    { term: "Byte (B)", category: "Units", source: "B_C_T.pdf", definition: "Unitate de măsură egală cu 8 biți; unitatea de bază pentru stocarea datelor." },
    { term: "Gigahertz (GHz)", category: "Units", source: "B_C_T.pdf", definition: "Unitate de măsură pentru frecvența ceasului unui procesor, reprezentând un miliard de cicluri pe secundă." },
    { term: "Hertz (Hz)", category: "Units", source: "B_C_T.pdf", definition: "Unitate de măsură a frecvenței, egală cu un ciclu pe secundă." },
    { term: "IEEE 802.11", category: "Networking", source: "B_C_T.pdf", definition: "Set de standarde pentru comunicații în rețele locale fără fir (Wi-Fi)." },
    { term: "Latency", category: "Units", source: "B_C_T.pdf", definition: "Timpul de întârziere dintre o comandă și execuția acesteia sau primirea datelor." },
    { term: "Megabit per second (Mbps)", category: "Units", source: "B_C_T.pdf", definition: "Unitate de măsură pentru viteza de transfer a datelor în rețele." },
    { term: "Pixel", category: "Units", source: "B_C_T.pdf", definition: "Cea mai mică unitate controlabilă a unei imagini afișate pe un ecran." },
    { term: "Resolution", category: "Hardware", source: "B_C_T.pdf", definition: "Numărul total de pixeli afișați pe un ecran, exprimat de obicei prin lățime x înălțime." },
    { term: "Terabyte (TB)", category: "Units", source: "B_C_T.pdf", definition: "Unitate de măsură pentru capacitatea de stocare, egală cu aproximativ 1.000 de Gigabyți." },
    // --- END BLOC 6: UNITĂȚI DE MĂSURĂ & STANDARDE ---
    // --- START BLOC 7: CLOUD & TEHNOLOGII NOI ---
    { term: "Cloud Computing", category: "Networking", source: "Glossary.pdf", definition: "Livrarea de resurse IT la cerere prin internet, cu plată în funcție de utilizare." },
    { term: "Edge Computing", category: "Networking", source: "Coursera", definition: "Procesarea datelor cât mai aproape de locul în care sunt generate, pentru a reduce latența." },
    { term: "Infrastructure as a Service (IaaS)", category: "Cloud", source: "Glossary.pdf", definition: "Model de servicii cloud care oferă resurse de calcul virtualizate prin internet." },
    { term: "Internet of Things (IoT)", category: "Networking", source: "B_C_T.pdf", definition: "Rețea de obiecte fizice echipate cu senzori și software pentru a colecta și schimba date." },
    { term: "Platform as a Service (PaaS)", category: "Cloud", source: "Glossary.pdf", definition: "Platformă care permite clienților să dezvolte, ruleze și gestioneze aplicații fără a construi infrastructura." },
    { term: "Quantum Bit (Qubit)", category: "Hardware", source: "IBM", definition: "Unitatea de bază a informației cuantice, care poate exista în mai multe stări simultan (suprapunere)." },
    { term: "SaaS (Software as a Service)", category: "Cloud", source: "Glossary.pdf", definition: "Model de distribuție software în care aplicațiile sunt găzduite de un furnizor și accesate prin web." },
    { term: "Serverless Computing", category: "Cloud", source: "Coursera", definition: "Model de execuție în care furnizorul de cloud gestionează automat alocarea resurselor mașinii." },
    { term: "Virtual Private Cloud (VPC)", category: "Cloud", source: "Glossary.pdf", definition: "O rețea privată virtuală izolată în cadrul unui cloud public." },
    { term: "Wearable Technology", category: "Hardware", source: "B_C_T.pdf", definition: "Dispozitive electronice inteligente care pot fi purtate pe corp ca accesorii sau îmbrăcăminte." },
    // --- END BLOC 7: CLOUD & TEHNOLOGII NOI ---
    // --- START BLOC 8: RESTUL ALFABETULUI & TERMENI FINALI ---
    { term: "Database Management System (DBMS)", category: "Software", source: "Glossary.pdf", definition: "Software utilizat pentru a crea, gestiona și interacționa cu baze de date (ex: MySQL, Oracle)." },
    { term: "Debugging", category: "Programming", source: "Glossary.pdf", definition: "Procesul de identificare și corectare a erorilor dintr-un program de calculator." },
    { term: "Input/Output (I/O)", category: "Hardware", source: "B_C_T.pdf", definition: "Procesul prin care un computer primește date din exterior sau trimite rezultate către utilizator." },
    { term: "Object-Oriented Programming (OOP)", category: "Programming", source: "Glossary.pdf", definition: "Paradigmă de programare bazată pe obiecte care conțin date sub formă de câmpuri și cod." },
    { term: "Peripherals", category: "Hardware", source: "B_C_T.pdf", definition: "Dispozitive externe conectate la computer (ex: tastatură, mouse, imprimantă)." },
    { term: "Redundancy", category: "Hardware", source: "B_C_T.pdf", definition: "Duplicarea componentelor critice ale unui sistem pentru a asigura funcționarea în caz de defecțiune." },
    { term: "Router", category: "Networking", source: "B_C_T.pdf", definition: "Dispozitiv de rețea care direcționează pachetele de date între rețele de calculatoare." },
    { term: "Syntax Error", category: "Programming", source: "Glossary.pdf", definition: "Greșeală în regulile gramaticale ale unui limbaj de programare care previne execuția codului." },
    { term: "UPS (Uninterruptible Power Supply)", category: "Hardware", source: "B_C_T.pdf", definition: "Dispozitiv care oferă energie de rezervă în cazul unei căderi de curent electric." },
    { term: "Wireless Access Point (WAP)", category: "Networking", source: "B_C_T.pdf", definition: "Dispozitiv care permite echipamentelor Wi-Fi să se conecteze la o rețea cablată." }
    // --- END BLOC 8: RESTUL ALFABETULUI & TERMENI FINALI ---
];
