# Korisničko uputstvo: KI-infrastruktura

**Verzija:** 1.0
**Datum:** 15. februar 2026.
**Autor:** Automatski generisano

---

## Sadržaj

### [1. Uvod](#1-uvod) ................................................. Str. 2
- [1.1 Pregled infrastrukture](#11-pregled-infrastrukture) ............. Str. 2
- [1.2 Pristupne tačke i autentifikacija](#12-pristupne-tacke-i-autentifikacija) ... Str. 2
- [1.3 Brzi početak](#13-brzi-pocetak) ................................. Str. 3

### [2. OpenClaw - KI-Agent-platforma](#2-openclaw---ki-agent-platforma) ... Str. 3
- [2.1 Osnovne komande](#21-osnovne-komande) ........................... Str. 3
  - [2.1.1 Provjera statusa](#211-provjera-statusa) .................... Str. 3
  - [2.1.2 Pokretanje/zaustavljanje daemona](#212-pokretanjezaustavljanje-daemona) ... Str. 4
  - [2.1.3 Otvaranje Dashboard-a](#213-otvaranje-dashboard-a) ......... Str. 4
  - [2.1.4 Health check](#214-health-check) ............................ Str. 4
  - [2.1.5 Sistemska dijagnostika](#215-sistemska-dijagnostika) ....... Str. 4
- [2.2 Upravljanje agentima](#22-upravljanje-agentima) ................. Str. 5
  - [2.2.1 Prikaz agenata](#221-prikaz-agenata) ........................ Str. 5
  - [2.2.2 Kreiranje agenta](#222-kreiranje-agenta) .................... Str. 5
  - [2.2.3 Pokretanje agenta](#223-pokretanje-agenta) .................. Str. 6
  - [2.2.4 Zaustavljanje agenta](#224-zaustavljanje-agenta) ............ Str. 6
  - [2.2.5 Prikaz detalja agenta](#225-prikaz-detalja-agenta) ......... Str. 6
- [2.3 Upravljanje modelima](#23-upravljanje-modelima) ................. Str. 6
  - [2.3.1 Prikaz dostupnih modela](#231-prikaz-dostupnih-modela) ..... Str. 6
  - [2.3.2 Preuzimanje detalja modela](#232-preuzimanje-detalja-modela) ... Str. 7
  - [2.3.3 Promjena modela](#233-promjena-modela) ...................... Str. 7
- [2.4 Komunikacijski kanali](#24-komunikacijski-kanali) ............... Str. 7
  - [2.4.1 WhatsApp-integracija](#241-whatsapp-integracija) ............ Str. 7
  - [2.4.2 Prikaz kanala](#242-prikaz-kanala) .......................... Str. 8
  - [2.4.3 Konfiguracija kanala](#243-konfiguracija-kanala) ............ Str. 8
  - [2.4.4 Slanje poruke](#244-slanje-poruke) .......................... Str. 8
- [2.5 Memory-sistem](#25-memory-sistem) ............................... Str. 9
  - [2.5.1 Pretraga memorije](#251-pretraga-memorije) .................. Str. 9
  - [2.5.2 Spremanje memorije](#252-spremanje-memorije) ................ Str. 9
  - [2.5.3 Brisanje memorije](#253-brisanje-memorije) .................. Str. 10
- [2.6 Gateway i mreža](#26-gateway-i-mreza) ........................... Str. 10
  - [2.6.1 Gateway-status](#261-gateway-status) ........................ Str. 10
  - [2.6.2 Gateway-povezivanje](#262-gateway-povezivanje) .............. Str. 10
  - [2.6.3 Uređaji u mreži](#263-uredaji-u-mrezi) ...................... Str. 11
- [2.7 Automatizacija](#27-automatizacija) ............................. Str. 11
  - [2.7.1 Kreiranje cron job-ova](#271-kreiranje-cron-job-ova) ....... Str. 11
  - [2.7.2 Konfiguracija Hook-ova](#272-konfiguracija-hook-ova) ....... Str. 12
  - [2.7.3 Postavljanje Webhook-ova](#273-postavljanje-webhook-ova) ... Str. 12
- [2.8 Sessions i Logs](#28-sessions-i-logs) ........................... Str. 13
  - [2.8.1 Prikaz sesija](#281-prikaz-sesija) .......................... Str. 13
  - [2.8.2 Pregled logova](#282-pregled-logova) ........................ Str. 13
  - [2.8.3 Filtriranje system-logova](#283-filtriranje-system-logova) . Str. 13

### [3. Brain Memory MCP](#3-brain-memory-mcp) .......................... Str. 14
- [3.1 Lead Builder](#31-lead-builder) ................................. Str. 14
  - [3.1.1 Prikaz kampanja](#311-prikaz-kampanja) ...................... Str. 14
  - [3.1.2 Kreiranje kampanje](#312-kreiranje-kampanje) ................ Str. 14
  - [3.1.3 Statistika kampanja](#313-statistika-kampanja) .............. Str. 15
  - [3.1.4 Upravljanje leadovima](#314-upravljanje-leadovima) .......... Str. 15
  - [3.1.5 Kreiranje leada](#315-kreiranje-leada) ...................... Str. 16
  - [3.1.6 Historija komunikacije](#316-historija-komunikacije) ........ Str. 16
  - [3.1.7 Preuzimanje šablona](#317-preuzimanje-sablona) .............. Str. 17
  - [3.1.8 Prikaz izvora](#318-prikaz-izvora) .......................... Str. 17
  - [3.1.9 Backend Health check](#319-backend-health-check) ............ Str. 17
  - [3.1.10 Database-upiti](#3110-database-upiti) ...................... Str. 17
- [3.2 Cloud Agents-integracija](#32-cloud-agents-integracija) ......... Str. 18
  - [3.2.1 Provjera Agent-statusa](#321-provjera-agent-statusa) ....... Str. 18
  - [3.2.2 Prikaz zadataka](#322-prikaz-zadataka) ...................... Str. 18
  - [3.2.3 Slanje chat-poruke](#323-slanje-chat-poruke) ................ Str. 18
  - [3.2.4 Brain-pretraga](#324-brain-pretraga) ........................ Str. 19
  - [3.2.5 Unos znanja](#325-unos-znanja) .............................. Str. 19
  - [3.2.6 Brain-statistika](#326-brain-statistika) .................... Str. 19
- [3.3 Web Scraping](#33-web-scraping) ................................. Str. 20
  - [3.3.1 Prikaz portala](#331-prikaz-portala) ........................ Str. 20
  - [3.3.2 Scraping nekretnina](#332-scraping-nekretnina) .............. Str. 20
  - [3.3.3 Scraping poslova](#333-scraping-poslova) .................... Str. 21
  - [3.3.4 Portal-prijava](#334-portal-prijava) ........................ Str. 21
  - [3.3.5 Custom Scraping](#335-custom-scraping) ...................... Str. 21
  - [3.3.6 Zatvaranje browsera](#336-zatvaranje-browsera) .............. Str. 22
- [3.4 Telefonija i SMS](#34-telefonija-i-sms) ......................... Str. 22
  - [3.4.1 Vonage SMS-slanje](#341-vonage-sms-slanje) .................. Str. 22
  - [3.4.2 Vonage-poziv](#342-vonage-poziv) ............................ Str. 23
  - [3.4.3 Vonage-kredit](#343-vonage-kredit) .......................... Str. 23
  - [3.4.4 Sipgate-poziv](#344-sipgate-poziv) .......................... Str. 23
  - [3.4.5 Sipgate SMS](#345-sipgate-sms) .............................. Str. 23
  - [3.4.6 Sipgate Account-Info](#346-sipgate-account-info) ............ Str. 24
  - [3.4.7 Make.com Trigger](#347-makecom-trigger) ..................... Str. 24
- [3.5 KI-telefonija (Housecall)](#35-ki-telefonija-housecall) ......... Str. 24
  - [3.5.1 TTS-poziv](#351-tts-poziv) .................................. Str. 24
  - [3.5.2 IVR-poziv](#352-ivr-poziv) .................................. Str. 25
  - [3.5.3 Script-poziv](#353-script-poziv) ............................ Str. 25
  - [3.5.4 Preuzimanje poziv-info](#354-preuzimanje-poziv-info) ........ Str. 26
  - [3.5.5 Završetak poziva](#355-zavrsetak-poziva) .................... Str. 26
  - [3.5.6 Utišavanje poziva](#356-utisavanje-poziva) .................. Str. 26
  - [3.5.7 Preusmjeravanje poziva](#357-preusmjeravanje-poziva) ........ Str. 26
  - [3.5.8 Slanje DTMF-tonova](#358-slanje-dtmf-tonova) ................ Str. 27
  - [3.5.9 Govor teksta tokom poziva](#359-govor-teksta-tokom-poziva) .. Str. 27
  - [3.5.10 Zaustavljanje govora](#3510-zaustavljanje-govora) .......... Str. 27
  - [3.5.11 Dostupni glasovi](#3511-dostupni-glasovi) .................. Str. 27
- [3.6 KI-Engine](#36-ki-engine) ....................................... Str. 28
  - [3.6.1 Prikaz konfiguracije](#361-prikaz-konfiguracije) ............ Str. 28
  - [3.6.2 TTS-generisanje](#362-tts-generisanje) ...................... Str. 28
  - [3.6.3 Chat-zahtjev](#363-chat-zahtjev) ............................ Str. 28
  - [3.6.4 Vođenje konversacije](#364-vodenje-konversacije) ............ Str. 29
  - [3.6.5 Brisanje konversacije](#365-brisanje-konversacije) .......... Str. 29
  - [3.6.6 KI-odgovor sa TTS](#366-ki-odgovor-sa-tts) .................. Str. 29
  - [3.6.7 Biblioteka glasova](#367-biblioteka-glasova) ................ Str. 30
  - [3.6.8 Prikaz prompta](#368-prikaz-prompta) ........................ Str. 30
  - [3.6.9 Testiranje providera](#369-testiranje-providera) ............ Str. 30
- [3.7 Automation i Workflows](#37-automation-i-workflows) ............. Str. 31
  - [3.7.1 Kreiranje triggera](#371-kreiranje-triggera) ................ Str. 31
  - [3.7.2 Prikaz triggera](#372-prikaz-triggera) ...................... Str. 31
  - [3.7.3 Aktiviranje/deaktiviranje triggera](#373-aktiviranjedeaktiviranje-triggera) ... Str. 31
  - [3.7.4 Dodavanje queue-unosa](#374-dodavanje-queue-unosa) .......... Str. 32
  - [3.7.5 Prikaz queue-a](#375-prikaz-queue-a) ........................ Str. 32
  - [3.7.6 Obrada sljedećeg poziva](#376-obrada-sljedeceg-poziva) ...... Str. 32
  - [3.7.7 Historija poziva](#377-historija-poziva) .................... Str. 33
  - [3.7.8 Ažuriranje historije](#378-azuriranje-historije) ............ Str. 33
  - [3.7.9 Preuzimanje statistike](#379-preuzimanje-statistike) ........ Str. 33
  - [3.7.10 Kreiranje Retry-pravila](#3710-kreiranje-retry-pravila) ... Str. 34
  - [3.7.11 Prikaz Retry-pravila](#3711-prikaz-retry-pravila) .......... Str. 34
  - [3.7.12 Obrada rezultata poziva](#3712-obrada-rezultata-poziva) ... Str. 34
- [3.8 Autentifikacija](#38-autentifikacija) ........................... Str. 35
  - [3.8.1 Login](#381-login) .......................................... Str. 35
  - [3.8.2 Logout](#382-logout) ........................................ Str. 35
  - [3.8.3 Provjera statusa](#383-provjera-statusa) .................... Str. 35
  - [3.8.4 Kreiranje korisnika](#384-kreiranje-korisnika) .............. Str. 35
  - [3.8.5 Brisanje korisnika](#385-brisanje-korisnika) ................ Str. 36
  - [3.8.6 Prikaz korisnika](#386-prikaz-korisnika) .................... Str. 36
- [3.9 Operations](#39-operations) ..................................... Str. 36
  - [3.9.1 PM2-status](#391-pm2-status) ................................ Str. 36
  - [3.9.2 PM2-logovi](#392-pm2-logovi) ................................ Str. 36
  - [3.9.3 Server-statistika](#393-server-statistika) .................. Str. 37

### [4. Cloud Agents Tools MCP](#4-cloud-agents-tools-mcp) .............. Str. 37
- [4.1 Discovery-workflow](#41-discovery-workflow) ..................... Str. 37
  - [4.1.1 Pokretanje Discovery-ja](#411-pokretanje-discovery-ja) ...... Str. 37
  - [4.1.2 Prikaz Discoveries](#412-prikaz-discoveries) ................ Str. 38
  - [4.1.3 Preuzimanje Discovery-ja](#413-preuzimanje-discovery-ja) .... Str. 38
  - [4.1.4 Zamrzavanje Discovery-ja](#414-zamrzavanje-discovery-ja) .... Str. 38
- [4.2 Proposals](#42-proposals) ....................................... Str. 38
  - [4.2.1 Generisanje Proposal-a](#421-generisanje-proposal-a) ........ Str. 38
  - [4.2.2 Prikaz Proposals](#422-prikaz-proposals) .................... Str. 39
  - [4.2.3 Preuzimanje Proposal-a](#423-preuzimanje-proposal-a) ........ Str. 39
  - [4.2.4 Odobravanje Proposal-a](#424-odobravanje-proposal-a) ........ Str. 39
  - [4.2.5 Odbijanje Proposal-a](#425-odbijanje-proposal-a) ............ Str. 39
- [4.3 Questionnaires](#43-questionnaires) ............................. Str. 39
  - [4.3.1 Slanje upitnika](#431-slanje-upitnika) ...................... Str. 39
  - [4.3.2 Preuzimanje upitnika](#432-preuzimanje-upitnika) ............ Str. 40
  - [4.3.3 Podnošenje upitnika](#433-podnosenje-upitnika) .............. Str. 40
  - [4.3.4 Zamrzavanje upitnika](#434-zamrzavanje-upitnika) ............ Str. 40
- [4.4 Rollout](#44-rollout) ........................................... Str. 40
  - [4.4.1 Pokretanje Rollout-a](#441-pokretanje-rollout-a) ............ Str. 40
  - [4.4.2 Prikaz Rollout-a](#442-prikaz-rollout-a) .................... Str. 41
  - [4.4.3 Preuzimanje Rollout-a](#443-preuzimanje-rollout-a) .......... Str. 41

### [5. Dodatak](#5-dodatak) ............................................ Str. 41
- [5.1 Pregled servera](#51-pregled-servera) ........................... Str. 41
- [5.2 Tailscale VPN](#52-tailscale-vpn) ............................... Str. 42
- [5.3 Venice AI modeli](#53-venice-ai-modeli) ......................... Str. 42
- [5.4 Obrada grešaka](#54-obrada-gresaka) ............................. Str. 43
- [5.5 Best Practices](#55-best-practices) ............................. Str. 44

---

<!-- Stranica 1 -->

## 1. Uvod

### 1.1 Pregled infrastrukture

Ova infrastruktura se sastoji od više visoko-integriranih komponenti:

- **OpenClaw**: KI-Agent-platforma sa 30+ modela (Grok, Claude, GPT, Gemini, itd.)
- **Brain Memory MCP**: Sveobuhvatna poslovna automatizacija (Leadovi, Scraping, Telefonija, KI)
- **Cloud Agents Tools**: Discovery, Proposals, Questionnaires, Rollouts
- **Voice Stack**: Drachtio SIP, Multi-Provider TTS, IVR-sistem
- **Infrastructure**: Hetzner Server, Tailscale VPN, Venice AI

### 1.2 Pristupne tačke i autentifikacija

| Komponenta | Pristup | Autentifikacija |
|------------|---------|-----------------|
| OpenClaw lokalno | `openclaw` CLI | openclaw.json Token |
| OpenClaw Dashboard | http://127.0.0.1:18789 | Browser |
| OpenClaw Server | 46.225.139.14 (SSH: OpenClaw) | SSH-Key |
| OpenClaw Gateway | wss://mujo-server.tail47b17c.ts.net | Token |
| Brain Memory | MCP u Claude Code | Automatski |
| Cloud Agents | MCP u Claude Code | Token |
| PBX-2 Server | 49.13.144.44 | SSH-Key |
| Cloud Agents Server | 178.156.178.70 | SSH-Key |
| Tailscale | Mreža mac-ds, mujo-server, dsphone | Tailscale Auth |

---

**Stranica 2**

---

### 1.3 Brzi početak

```bash
# Provjera OpenClaw statusa
openclaw status

# Otvaranje Dashboard-a
openclaw dashboard

# Prikaz agenata
openclaw agents

# Prikaz modela
openclaw models
```

---

## 2. OpenClaw - KI-Agent-platforma

### 2.1 Osnovne komande

#### 2.1.1 Provjera statusa

**Šta radi:** Prikazuje trenutni status OpenClaw-sistema (Daemon, Gateway, Agenti).

**Upotreba:**
```bash
openclaw status
```

**Primjer izlaza:**
```
✓ Daemon running (PID: 12345)
✓ Gateway connected (wss://mujo-server.tail47b17c.ts.net)
✓ 3 agents active
✓ WhatsApp channel ready (+491778022488)
```

---

**Stranica 3**

---

#### 2.1.2 Pokretanje/zaustavljanje daemona

**Šta radi:** Pokreće ili zaustavlja OpenClaw pozadinski proces.

**Upotreba:**
```bash
# Pokretanje daemona
openclaw daemon start

# Zaustavljanje daemona
openclaw daemon stop

# Ponovno pokretanje daemona
openclaw daemon restart
```

#### 2.1.3 Otvaranje Dashboard-a

**Šta radi:** Otvara web-dashboard za vizuelno upravljanje.

**Upotreba:**
```bash
openclaw dashboard
```

**Pristup:** Browser automatski otvara http://127.0.0.1:18789

**Preko Tailscale-a:** http://mujo-server.tail47b17c.ts.net:18789

#### 2.1.4 Health check

**Šta radi:** Provjerava sve sistemske komponente na funkcionalnost.

**Upotreba:**
```bash
openclaw health
```

**Provjerava:**
- Daemon-status
- Gateway-vezu
- Dostupnost agenata
- Pristup modelima
- Channel-status

---

**Stranica 4**

---

#### 2.1.5 Sistemska dijagnostika

**Šta radi:** Izvodi sveobuhvatnu dijagnostiku i predlaže rješenja.

**Upotreba:**
```bash
openclaw doctor

# Sa automatskom popravkom
openclaw doctor --fix
```

**Pronalazi:**
- Probleme sa konfiguracijom
- Nedostajuće zavisnosti
- Mrežne probleme
- Greške sa dozvolama

### 2.2 Upravljanje agentima

#### 2.2.1 Prikaz agenata

**Šta radi:** Prikazuje sve dostupne i aktivne agente.

**Upotreba:**
```bash
openclaw agents

# Sa detaljima
openclaw agents --verbose
```

**Primjer izlaza:**
```
ID          NAME            MODEL           STATUS    UPTIME
agent-001   CustomerSupport grok-4.1        running   2h 15m
agent-002   DataAnalyst     claude-opus-4.6 running   45m
agent-003   Researcher      gemini-3-pro    stopped   -
```

---

**Stranica 5**

---

#### 2.2.2 Kreiranje agenta

**Šta radi:** Kreira novog KI-agenta sa specifičnom konfiguracijom.

**Upotreba:**
```bash
openclaw agent create --name "MojAgent" --model "grok-4.1" --type "assistant"

# Sa naprednim opcijama
openclaw agent create \
  --name "SalesBot" \
  --model "claude-opus-4.6" \
  --type "sales" \
  --instructions "Ti si prijateljski prodajni asistent" \
  --temperature 0.7 \
  --max-tokens 2000
```

**Parametri:**
- `--name`: Ime agenta
- `--model`: KI-model (vidi 2.3.1)
- `--type`: Tip agenta (assistant, sales, support, analyst, itd.)
- `--instructions`: System-prompt
- `--temperature`: Kreativnost (0.0-1.0)
- `--max-tokens`: Maks. dužina odgovora

#### 2.2.3 Pokretanje agenta

**Šta radi:** Pokreće zaustavljenog agenta.

**Upotreba:**
```bash
openclaw agent start agent-003

# Više istovremeno
openclaw agent start agent-003 agent-004 agent-005
```

---

**Stranica 6**

---

#### 2.2.4 Zaustavljanje agenta

**Šta radi:** Zaustavlja aktivnog agenta.

**Upotreba:**
```bash
openclaw agent stop agent-001

# Zaustavljanje svih
openclaw agent stop --all
```

#### 2.2.5 Prikaz detalja agenta

**Šta radi:** Prikazuje detaljne informacije o agentu.

**Upotreba:**
```bash
openclaw agent info agent-001
```

**Prikazuje:**
- Konfiguraciju
- Runtime-statistiku
- Korišteni model
- Aktivne sesije
- Memory-iskorištenost

### 2.3 Upravljanje modelima

#### 2.3.1 Prikaz dostupnih modela

**Šta radi:** Prikazuje sve dostupne KI-modele preko Venice AI.

**Upotreba:**
```bash
openclaw models

# Filtriranje po provideru
openclaw models --provider anthropic
openclaw models --provider openai
```

---

**Stranica 7**

---

**Dostupni modeli:**
- **Anthropic:** claude-opus-4.6, claude-sonnet-4.5, claude-haiku-4
- **OpenAI:** gpt-5.2, gpt-4.5, gpt-4-turbo
- **Google:** gemini-3-pro, gemini-3-flash
- **xAI:** grok-4.1, grok-3
- **Alibaba:** qwen3-72b, qwen3-turbo
- **DeepSeek:** deepseek-v3, deepseek-r1
- **Meta:** llama-3.3-70b, llama-3.1-405b

#### 2.3.2 Preuzimanje detalja modela

**Šta radi:** Prikazuje tehničke detalje o modelu.

**Upotreba:**
```bash
openclaw models info grok-4.1
```

**Prikazuje:**
- Context-prozor
- Token-limite
- Cijenu po tokenu
- Dostupnost
- Preporučene Use Case-ove

#### 2.3.3 Promjena modela

**Šta radi:** Mijenja model agenta.

**Upotreba:**
```bash
openclaw agent update agent-001 --model "claude-opus-4.6"
```

### 2.4 Komunikacijski kanali

#### 2.4.1 WhatsApp-integracija

**Šta radi:** Koristi WhatsApp-kanal za komunikaciju sa agentom.

**Telefonski broj:** +491778022488

---

**Stranica 8**

---

**Konfiguracija:**
- **selfChatMode:** Aktiviran (Agent može sam chatati)
- **Allowlist:** Konfigurisani brojevi imaju pristup

**Upotreba:**
```bash
# Provjera WhatsApp-statusa
openclaw channels status whatsapp

# Slanje poruke preko WhatsApp-a (vidi 2.4.4)
```

#### 2.4.2 Prikaz kanala

**Šta radi:** Prikazuje sve konfigurisane komunikacijske kanale.

**Upotreba:**
```bash
openclaw channels

# Sa status-detaljima
openclaw channels --status
```

**Dostupni kanali:**
- WhatsApp
- Telegram (opciono)
- Slack (opciono)
- Discord (opciono)
- Webhook

#### 2.4.3 Konfiguracija kanala

**Šta radi:** Postavlja novi kanal ili ažurira konfiguraciju.

**Upotreba:**
```bash
# Ažuriranje WhatsApp-Allowlist-e
openclaw channels config whatsapp --allowlist "+4917612345678,+4915112345678"

# Postavljanje Webhook-a
openclaw channels config webhook --url "https://example.com/webhook" --secret "your-secret"
```

---

**Stranica 9**

---

#### 2.4.4 Slanje poruke

**Šta radi:** Šalje poruku preko kanala.

**Upotreba:**
```bash
# Preko WhatsApp-a
openclaw message send \
  --channel whatsapp \
  --to "+4917612345678" \
  --text "Zdravo od OpenClaw-a!" \
  --agent agent-001

# Preko Webhook-a
openclaw message send \
  --channel webhook \
  --payload '{"text":"Test poruka"}' \
  --agent agent-002
```

### 2.5 Memory-sistem

#### 2.5.1 Pretraga memorije

**Šta radi:** Pretražuje Agent-memoriju za kontekst i informacije.

**Upotreba:**
```bash
openclaw memory search "Razgovor sa klijentom" --agent agent-001

# Sa vremenskim filterom
openclaw memory search "Narudžba" --agent agent-001 --since "2026-02-01"

# Semantička pretraga
openclaw memory search "slično kao prošli zahtjev" --agent agent-001 --semantic
```

#### 2.5.2 Spremanje memorije

**Šta radi:** Eksplicitno sprema informacije u Agent-Memory.

**Upotreba:**
```bash
openclaw memory store \
  --agent agent-001 \
  --key "customer-preference" \
  --value "Preferira E-Mail komunikaciju" \
  --namespace "customer-data"

# Sa TTL (Time-To-Live)
openclaw memory store \
  --agent agent-001 \
  --key "session-token" \
  --value "abc123xyz" \
  --ttl 3600
```

---

**Stranica 10**

---

#### 2.5.3 Brisanje memorije

**Šta radi:** Uklanja informacije iz Agent-memorije.

**Upotreba:**
```bash
# Brisanje pojedinačnog unosa
openclaw memory delete --agent agent-001 --key "session-token"

# Brisanje namespace-a
openclaw memory delete --agent agent-001 --namespace "temp-data"

# Potpuno resetovanje memorije
openclaw memory clear --agent agent-001
```

### 2.6 Gateway i mreža

#### 2.6.1 Gateway-status

**Šta radi:** Prikazuje status Gateway-veze.

**Upotreba:**
```bash
openclaw gateway status
```

**Prikazuje:**
- URL-veze: wss://mujo-server.tail47b17c.ts.net
- Status veze
- Latenciju
- Propusnost
- Stopu grešaka

#### 2.6.2 Gateway-povezivanje

**Šta radi:** Uspostavlja vezu sa centralnim Gateway-em.

**Upotreba:**
```bash
openclaw gateway connect

# Sa specifičnim URL-om
openclaw gateway connect --url "wss://mujo-server.tail47b17c.ts.net"

# Prekid veze
openclaw gateway disconnect
```

---

**Stranica 11**

---

#### 2.6.3 Uređaji u mreži

**Šta radi:** Prikazuje sve povezane uređaje u OpenClaw-mreži.

**Upotreba:**
```bash
openclaw devices

# Sa detaljima
openclaw devices --verbose
```

**Prikazuje:**
- Ime uređaja
- IP-adresu (Tailscale)
- Status
- Posljednju aktivnost
- Aktivne agente

### 2.7 Automatizacija

#### 2.7.1 Kreiranje cron job-ova

**Šta radi:** Postavlja vremenski bazirane automatske zadatke.

**Upotreba:**
```bash
# Dnevni izvještaj u 9 sati
openclaw cron create \
  --name "daily-report" \
  --schedule "0 9 * * *" \
  --agent agent-001 \
  --action "generate-report"

# Satno ažuriranje podataka
openclaw cron create \
  --name "data-sync" \
  --schedule "0 * * * *" \
  --agent agent-002 \
  --action "sync-data"

# Prikaz cron job-ova
openclaw cron list

# Brisanje cron job-a
openclaw cron delete daily-report
```

**Cron-sintaksa:** `Minuta Sat Dan Mjesec Dan_u_sedmici`

---

**Stranica 12**

---

#### 2.7.2 Konfiguracija Hook-ova

**Šta radi:** Kreira Event-bazirane triggere za akcije.

**Upotreba:**
```bash
# Hook kod nove poruke
openclaw hooks create \
  --name "on-message" \
  --event "message.received" \
  --agent agent-001 \
  --action "process-message"

# Hook kod pokretanja agenta
openclaw hooks create \
  --name "on-start" \
  --event "agent.started" \
  --agent agent-001 \
  --action "initialize-context"

# Prikaz hook-ova
openclaw hooks list

# Deaktiviranje hook-a
openclaw hooks disable on-message
```

**Dostupni eventi:**
- `message.received`
- `agent.started`
- `agent.stopped`
- `memory.updated`
- `error.occurred`

#### 2.7.3 Postavljanje Webhook-ova

**Šta radi:** Konfiguriše eksterne HTTP-endpointe za notifikacije.

**Upotreba:**
```bash
# Kreiranje webhook-a
openclaw webhooks create \
  --name "slack-notifications" \
  --url "https://hooks.slack.com/services/YOUR/WEBHOOK/URL" \
  --events "agent.error,message.failed" \
  --secret "your-webhook-secret"

# Prikaz webhook-ova
openclaw webhooks list

# Testiranje webhook-a
openclaw webhooks test slack-notifications

# Brisanje webhook-a
openclaw webhooks delete slack-notifications
```

---

**Stranica 13**

---

### 2.8 Sessions i Logs

#### 2.8.1 Prikaz sesija

**Šta radi:** Prikazuje aktivne i prošle konverzacijske sesije.

**Upotreba:**
```bash
# Aktivne sesije
openclaw sessions

# Sve sesije (uključujući završene)
openclaw sessions --all

# Sesije agenta
openclaw sessions --agent agent-001

# Detalji sesije
openclaw sessions info session-12345
```

#### 2.8.2 Pregled logova

**Šta radi:** Prikazuje System- i Agent-logove.

**Upotreba:**
```bash
# Live-logovi (praćenje)
openclaw logs --follow

# Logovi agenta
openclaw logs --agent agent-001

# Posljednjih 100 linija
openclaw logs --tail 100

# Error-logovi
openclaw logs --level error
```

#### 2.8.3 Filtriranje system-logova

**Šta radi:** Filtrira logove prema različitim kriterijima.

**Upotreba:**
```bash
# Po vremenskom periodu
openclaw logs --since "2026-02-15 08:00" --until "2026-02-15 12:00"

# Po komponenti
openclaw logs --component gateway
openclaw logs --component daemon

# Po ključnoj riječi
openclaw logs --grep "error"

# Kombinirano
openclaw logs --agent agent-001 --level warning --since "1 hour ago"
```

---

**Stranica 14**

---

## 3. Brain Memory MCP

Sve sljedeće funkcije dostupne su preko MCP-alata u Claude Code.

### 3.1 Lead Builder

#### 3.1.1 Prikaz kampanja

**Šta radi:** Prikazuje sve Lead-kampanje sa opcionalnim filterima.

**MCP-alat:** `mcp__brain-memory__lb_campaigns`

**Parametri:**
```json
{
  "status": "active",  // opciono: active, paused, completed, archived
  "priority": "high",  // opciono: urgent, high, normal, low
  "baseUrl": "..."     // opciono: override backend URL
}
```

**Primjer u Claude Code:**
```
Prikaži mi sve aktivne kampanje sa visokim prioritetom
```

#### 3.1.2 Kreiranje kampanje

**Šta radi:** Kreira novu Lead-kampanju.

**MCP-alat:** `mcp__brain-memory__lb_campaign_create`

**Parametri:**
```json
{
  "name": "Nova kampanja",          // obavezno
  "target_type": "lead_campaign",   // obavezno: lead_campaign, job_posting, call_list
  "description": "Opis",            // opciono
  "priority": "normal",             // opciono: urgent, high, normal, low
  "target_count": 100,              // opciono, default: 100
  "baseUrl": "..."                  // opciono
}
```

**Primjer:**
```
Kreiraj novu Lead-kampanju "SHK München" sa ciljem 200 Leada i visokim prioritetom
```

---

**Stranica 15**

---

#### 3.1.3 Statistika kampanja

**Šta radi:** Prikazuje detaljnu statistiku kampanje.

**MCP-alat:** `mcp__brain-memory__lb_campaign_stats`

**Parametri:**
```json
{
  "id": "campaign-id",  // obavezno
  "baseUrl": "..."      // opciono
}
```

**Prikazuje:**
- Ukupno leadova
- Stopu konverzije
- Kontaktirane leadove
- Uspješne kontakte
- Pending/Failed

#### 3.1.4 Upravljanje leadovima

**Šta radi:** Prikazuje leadove sa naprednim filterima.

**MCP-alat:** `mcp__brain-memory__lb_leads`

**Parametri:**
```json
{
  "campaign_id": "...",  // opciono: Filter po kampanji
  "status": "new",       // opciono: new, contacted, responded, qualified, converted, rejected
  "quality": "hot",      // opciono: hot, warm, cold, unknown
  "limit": 100,          // opciono, default: 100
  "offset": 0,           // opciono, default: 0
  "baseUrl": "..."       // opciono
}
```

**Primjer:**
```
Prikaži prvih 50 vrućih leadova iz kampanje XYZ sa statusom "new"
```

---

**Stranica 16**

---

#### 3.1.5 Kreiranje leada

**Šta radi:** Kreira novi lead ručno.

**MCP-alat:** `mcp__brain-memory__lb_lead_create`

**Parametri:**
```json
{
  "name": "Marko Marković",      // opciono
  "company": "Firma d.o.o.",     // opciono
  "email": "marko@firma.ba",     // opciono
  "phone": "+38762123456",       // opciono
  "position": "Direktor",        // opciono
  "location": "Sarajevo",        // opciono
  "campaign_id": "...",          // opciono
  "source": "manual",            // opciono: manual, scraper, import, api
  "baseUrl": "..."               // opciono
}
```

**Primjer:**
```
Kreiraj lead: Marko Marković, SHK-firma Sarajevo, Telefon +38762123456
```

#### 3.1.6 Historija komunikacije

**Šta radi:** Prikazuje komunikacijske tokove sa leadovima.

**MCP-alat:** `mcp__brain-memory__lb_communications`

**Parametri:**
```json
{
  "lead_id": "...",     // opciono: Filter po leadu
  "campaign_id": "...", // opciono: Filter po kampanji
  "channel": "email",   // opciono: email, whatsapp, phone, linkedin
  "limit": 50,          // opciono, default: 50
  "baseUrl": "..."      // opciono
}
```

**Primjer:**
```
Prikaži sve WhatsApp-komunikacije posljednje kampanje
```

---

**Stranica 17**

---

#### 3.1.7 Preuzimanje šablona

**Šta radi:** Prikazuje dostupne šablone za poruke.

**MCP-alat:** `mcp__brain-memory__lb_templates`

**Parametri:**
```json
{
  "type": "email",  // opciono: Filter po tipu
  "baseUrl": "..."  // opciono
}
```

**Primjer:**
```
Prikaži mi sve E-Mail šablone
```

#### 3.1.8 Prikaz izvora

**Šta radi:** Prikazuje Lead-izvore i njihove performanse.

**MCP-alat:** `mcp__brain-memory__lb_sources`

**Parametri:**
```json
{
  "baseUrl": "..."  // opciono
}
```

**Prikazuje:**
- Ime izvora
- Broj leadova
- Kvalitet
- Stopu konverzije

#### 3.1.9 Backend Health check

**Šta radi:** Provjerava dostupnost Lead Builder Backend-a.

**MCP-alat:** `mcp__brain-memory__lb_health`

**Parametri:**
```json
{
  "baseUrl": "..."  // opciono
}
```

**Primjer:**
```
Provjeri Lead Builder Backend-status
```

#### 3.1.10 Database-upiti

**Šta radi:** Izvršava SQL-upite (samo SELECT).

**MCP-alat:** `mcp__brain-memory__lb_db_query`

**Parametri:**
```json
{
  "query": "SELECT * FROM leads WHERE quality = 'hot' LIMIT 10"  // obavezno (samo SELECT)
}
```

**Primjer:**
```
Izvrši SQL-upit: SELECT COUNT(*) FROM campaigns WHERE status = 'active'
```

---

**Stranica 18**

---

### 3.2 Cloud Agents-integracija

#### 3.2.1 Provjera Agent-statusa

**Šta radi:** Prikazuje status svih Cloud Agenata.

**MCP-alat:** `mcp__brain-memory__ca_agents_status`

**Parametri:**
```json
{
  "token": "your-token",  // obavezno
  "baseUrl": "..."        // opciono
}
```

#### 3.2.2 Prikaz zadataka

**Šta radi:** Prikazuje Agent-zadatke sa status-filterom.

**MCP-alat:** `mcp__brain-memory__ca_tasks_list`

**Parametri:**
```json
{
  "token": "your-token",  // obavezno
  "state": "pending",     // opciono: pending, running, completed, failed
  "baseUrl": "..."        // opciono
}
```

#### 3.2.3 Slanje chat-poruke

**Šta radi:** Šalje poruku Cloud Agentu.

**MCP-alat:** `mcp__brain-memory__ca_chat_send`

**Parametri:**
```json
{
  "token": "your-token",   // obavezno
  "agentName": "analyst",  // obavezno
  "message": "Analiziraj prodajne podatke",  // obavezno
  "baseUrl": "..."         // opciono
}
```

**Primjer:**
```
Pošalji Cloud Agentu "analyst": Kreiraj mjesečni izvještaj
```

---

**Stranica 19**

---

#### 3.2.4 Brain-pretraga

**Šta radi:** Pretražuje Cloud Agents Brain (bazu znanja).

**MCP-alat:** `mcp__brain-memory__ca_brain_search`

**Parametri:**
```json
{
  "token": "your-token",        // obavezno
  "query": "API-dokumentacija", // obavezno
  "mode": "semantic",           // opciono: semantic, keyword, hybrid
  "limit": 10,                  // opciono
  "baseUrl": "..."              // opciono
}
```

**Primjer:**
```
Pretraži Brain za "Authentication Patterns" sa semantičkom pretragom
```

#### 3.2.5 Unos znanja

**Šta radi:** Dodaje nove informacije u Brain.

**MCP-alat:** `mcp__brain-memory__ca_brain_ingest`

**Parametri:**
```json
{
  "token": "your-token",                    // obavezno
  "title": "API-dokumentacija v2",          // obavezno
  "content": "Kompletan tekst...",          // obavezno
  "tags": ["api", "docs", "v2"],           // opciono
  "baseUrl": "..."                          // opciono
}
```

**Primjer:**
```
Spremi u Brain: Naslov "Onboarding-proces", Content "...", Tags ["hr", "proces"]
```

#### 3.2.6 Brain-statistika

**Šta radi:** Prikazuje statistiku baze znanja.

**MCP-alat:** `mcp__brain-memory__ca_brain_stats`

**Parametri:**
```json
{
  "token": "your-token",  // obavezno
  "baseUrl": "..."        // opciono
}
```

**Prikazuje:**
- Broj dokumenata
- Veličinu memorije
- Posljednje ažuriranje
- Top-tagove

---

**Stranica 20**

---

### 3.3 Web Scraping

#### 3.3.1 Prikaz portala

**Šta radi:** Prikazuje podržane Scraping-portale.

**MCP-alat:** `mcp__brain-memory__scraper_portals`

**Parametri:**
```json
{
  "type": "housing"  // opciono: housing, job, all
}
```

**Podržani Housing-portali:**
- immobilienscout24
- wg-gesucht
- ebay-kleinanzeigen
- monteurzimmer

**Podržani Job-portali:**
- indeed
- stepstone
- linkedin-jobs

#### 3.3.2 Scraping nekretnina

**Šta radi:** Scrapa oglase za nekretnine sa konfiguriranih portala.

**MCP-alat:** `mcp__brain-memory__scraper_housing`

**Parametri:**
```json
{
  "portal": "immobilienscout24",  // obavezno: immobilienscout24, wg-gesucht, ebay-kleinanzeigen, monteurzimmer
  "city": "München",              // opciono
  "max_price": 1500,              // opciono: Maks. cijena u eurima
  "min_size": 50,                 // opciono: Min. površina u m²
  "rooms": 2,                     // opciono: Broj soba
  "max_pages": 3                  // opciono, default: 3
}
```

**Primjer:**
```
Scrape ImmobilienScout24 za München, maks. 1500€, min. 50m², 2 sobe
```

---

**Stranica 21**

---

#### 3.3.3 Scraping poslova

**Šta radi:** Scrapa oglase za posao sa Job-portala.

**MCP-alat:** `mcp__brain-memory__scraper_jobs`

**Parametri:**
```json
{
  "portal": "indeed",        // obavezno: indeed, stepstone, linkedin-jobs
  "keyword": "SHK",          // obavezno: Ključna riječ
  "city": "München",         // opciono
  "max_pages": 3             // opciono, default: 3
}
```

**Primjer:**
```
Scrape Indeed za "Elektriker" poslove u Berlinu, 5 stranica
```

#### 3.3.4 Portal-prijava

**Šta radi:** Autentifikuje se na portalu (za Premium-funkcije).

**MCP-alat:** `mcp__brain-memory__scraper_login`

**Parametri:**
```json
{
  "portal": "ebay-kleinanzeigen",  // obavezno
  "username": "user@example.com",  // obavezno
  "password": "password"           // obavezno
}
```

**Primjer:**
```
Prijava na eBay Kleinanzeigen sa korisničkim imenom i lozinkom
```

#### 3.3.5 Custom Scraping

**Šta radi:** Scrapa proizvoljne web-stranice sa CSS-selektorima.

**MCP-alat:** `mcp__brain-memory__scraper_custom`

**Parametri:**
```json
{
  "url": "https://example.com/listings",     // obavezno
  "item_selector": ".listing-item",          // obavezno
  "title_selector": "h2.title",              // obavezno (relativno prema item-u)
  "link_selector": "a.details",              // obavezno (relativno prema item-u)
  "price_selector": "span.price",            // opciono
  "location_selector": "span.location",      // opciono
  "max_items": 50                            // opciono, default: 50
}
```

**Primjer:**
```
Custom-Scraping: URL "https://...", Items ".card", Naslov "h3", Link "a.more"
```

---

**Stranica 22**

---

#### 3.3.6 Zatvaranje browsera

**Šta radi:** Zatvara Scraping-Browser-sesiju.

**MCP-alat:** `mcp__brain-memory__scraper_close`

**Bez obaveznih parametara.**

**Primjer:**
```
Zatvori Scraping-Browser
```

### 3.4 Telefonija i SMS

#### 3.4.1 Vonage SMS-slanje

**Šta radi:** Šalje SMS preko Vonage-a.

**MCP-alat:** `mcp__brain-memory__call_vonage_sms`

**Parametri:**
```json
{
  "to": "4917612345678",     // obavezno: E.164 format (bez +)
  "message": "Test-poruka"   // obavezno
}
```

**Primjer:**
```
Pošalji Vonage SMS na +4917612345678: "Vaš termin je potvrđen"
```

#### 3.4.2 Vonage-poziv

**Šta radi:** Inicira poziv preko Vonage-a.

**MCP-alat:** `mcp__brain-memory__call_vonage_dial`

**Parametri:**
```json
{
  "to": "4917612345678",              // obavezno: E.164 format
  "answer_url": "https://..."         // opciono: NCCO Answer URL
}
```

**Primjer:**
```
Pozovi preko Vonage-a: +4917612345678
```

---

**Stranica 23**

---

#### 3.4.3 Vonage-kredit

**Šta radi:** Prikazuje trenutni Vonage-kredit.

**MCP-alat:** `mcp__brain-memory__call_vonage_balance`

**Bez obaveznih parametara.**

**Primjer:**
```
Prikaži Vonage kredit
```

#### 3.4.4 Sipgate-poziv

**Šta radi:** Inicira poziv preko Sipgate-a.

**MCP-alat:** `mcp__brain-memory__call_sipgate_dial`

**Parametri:**
```json
{
  "to": "+4917612345678",  // obavezno
  "caller": "w0"           // opciono: Caller ID (SIP User ID)
}
```

**Primjer:**
```
Sipgate-poziv na +4917612345678 sa Caller w0
```

#### 3.4.5 Sipgate SMS

**Šta radi:** Šalje SMS preko Sipgate-a.

**MCP-alat:** `mcp__brain-memory__call_sipgate_sms`

**Parametri:**
```json
{
  "to": "+4917612345678",     // obavezno
  "message": "Test-SMS",      // obavezno
  "smsId": "s0"               // obavezno: SMS Extension ID
}
```

**Primjer:**
```
Sipgate SMS na +4917612345678: "Potvrda termina" (smsId: s0)
```

---

**Stranica 24**

---

#### 3.4.6 Sipgate Account-Info

**Šta radi:** Prikazuje Sipgate Account-informacije.

**MCP-alat:** `mcp__brain-memory__call_sipgate_info`

**Bez obaveznih parametara.**

**Prikazuje:**
- Account-status
- Dostupne brojeve
- SIP-extensions
- Kredit

#### 3.4.7 Make.com Trigger

**Šta radi:** Okida Make.com scenarij.

**MCP-alat:** `mcp__brain-memory__call_make_trigger`

**Parametri:**
```json
{
  "event": "call_completed",            // obavezno: Ime eventa
  "data": "{\"lead_id\": \"123\"}"      // opciono: JSON-string
}
```

**Primjer:**
```
Okini Make.com Event "lead_created" sa Data {"name": "Marko", "phone": "+387..."}
```

### 3.5 KI-telefonija (Housecall)

#### 3.5.1 TTS-poziv

**Šta radi:** Pokreće poziv sa Text-to-Speech.

**MCP-alat:** `mcp__brain-memory__housecall_tts_call`

**Parametri:**
```json
{
  "to": "4917612345678",              // obavezno: E.164 format
  "text": "Dobar dan, ovdje govori...",  // obavezno
  "language": "de-DE",                // opciono: de-DE, en-US, itd.
  "voice": "Marlene",                 // opciono: Glas
  "record": true                      // opciono: Snimanje poziva
}
```

**Primjer:**
```
TTS-poziv na +4917612345678: "Vaš termin je sutra u 10 sati", Glas Hans, snimi
```

---

**Stranica 25**

---

#### 3.5.2 IVR-poziv

**Šta radi:** Pokreće poziv sa interaktivnim glasovnim menijem (DTMF).

**MCP-alat:** `mcp__brain-memory__housecall_ivr_call`

**Parametri:**
```json
{
  "to": "4917612345678",                     // obavezno
  "greeting": "Dobrodošli u...",             // obavezno
  "menu_prompt": "Pritisnite 1 za...",       // obavezno
  "max_digits": 1,                           // opciono: Maks. DTMF-cifara
  "voice": "Marlene"                         // opciono
}
```

**Primjer:**
```
IVR-poziv: Pozdrav "Dobrodošli", Meni "1 = Servis, 2 = Prodaja"
```

#### 3.5.3 Script-poziv

**Šta radi:** Pokreće poziv sa predefiniranim razgovornim skriptom.

**MCP-alat:** `mcp__brain-memory__housecall_script_call`

**Parametri:**
```json
{
  "to": "4917612345678",               // obavezno
  "contact_name": "Gospodin Müller",   // obavezno
  "script_type": "intro",              // obavezno: intro, followup, reminder, confirmation
  "company_name": "SHK Firma d.o.o.",  // opciono
  "appointment_date": "2026-02-20 10:00",  // opciono
  "voice": "Hans",                     // opciono
  "record": true                       // opciono
}
```

**Primjer:**
```
Script-poziv "intro" za Gospodina Müllera, Firma "Elektro d.o.o.", Termin 20.02. 10h
```

---

**Stranica 26**

---

#### 3.5.4 Preuzimanje poziv-info

**Šta radi:** Prikazuje detalje o tekućem/završenom pozivu.

**MCP-alat:** `mcp__brain-memory__housecall_call_info`

**Parametri:**
```json
{
  "call_uuid": "abc-123-def"  // obavezno: Vonage Call UUID
}
```

#### 3.5.5 Završetak poziva

**Šta radi:** Završava tekući poziv.

**MCP-alat:** `mcp__brain-memory__housecall_hangup`

**Parametri:**
```json
{
  "call_uuid": "abc-123-def"  // obavezno
}
```

#### 3.5.6 Utišavanje poziva

**Šta radi:** Utišava/aktivira poziv.

**MCP-alat:** `mcp__brain-memory__housecall_mute`

**Parametri:**
```json
{
  "call_uuid": "abc-123-def",  // obavezno
  "mute": true                 // obavezno: true = utišaj, false = aktiviraj
}
```

#### 3.5.7 Preusmjeravanje poziva

**Šta radi:** Preusmjerava poziv na drugi broj.

**MCP-alat:** `mcp__brain-memory__housecall_transfer`

**Parametri:**
```json
{
  "call_uuid": "abc-123-def",           // obavezno
  "transfer_to": "+4989123456",         // obavezno
  "announce_text": "Povezujem Vas..."   // opciono: Najava prije transfera
}
```

---

**Stranica 27**

---

#### 3.5.8 Slanje DTMF-tonova

**Šta radi:** Šalje DTMF-tonove (tonove tastature) tokom poziva.

**MCP-alat:** `mcp__brain-memory__housecall_send_dtmf`

**Parametri:**
```json
{
  "call_uuid": "abc-123-def",  // obavezno
  "digits": "1234#"            // obavezno: 0-9, *, #
}
```

#### 3.5.9 Govor teksta tokom poziva

**Šta radi:** Tokom tekućeg poziva govori tekst (TTS).

**MCP-alat:** `mcp__brain-memory__housecall_speak`

**Parametri:**
```json
{
  "call_uuid": "abc-123-def",       // obavezno
  "text": "Molimo sačekajte...",    // obavezno
  "voice": "Marlene",               // opciono
  "loop": 1                         // opciono: Broj ponavljanja
}
```

#### 3.5.10 Zaustavljanje govora

**Šta radi:** Zaustavlja trenutno aktivno TTS-izvođenje.

**MCP-alat:** `mcp__brain-memory__housecall_stop_speak`

**Parametri:**
```json
{
  "call_uuid": "abc-123-def"  // obavezno
}
```

#### 3.5.11 Dostupni glasovi

**Šta radi:** Prikazuje dostupne TTS-glasove.

**MCP-alat:** `mcp__brain-memory__housecall_voices`

**Parametri:**
```json
{
  "language": "de-DE"  // opciono: Filter po jeziku
}
```

**Dostupni glasovi (primjer):**
- **Njemački:** Marlene, Hans, Vicki
- **Engleski:** Amy, Brian, Emma, Russell
- **Francuski:** Céline, Mathieu

---

**Stranica 28**

---

### 3.6 KI-Engine

#### 3.6.1 Prikaz konfiguracije

**Šta radi:** Prikazuje trenutnu KI-Provider-konfiguraciju.

**MCP-alat:** `mcp__brain-memory__ai_config`

**Bez obaveznih parametara.**

**Prikazuje:**
- Dostupne LLM-providere (OpenAI, Claude, Azure)
- Dostupne TTS-providere (5)
- Standardne modele
- API-status

#### 3.6.2 TTS-generisanje

**Šta radi:** Generira audio-fajl iz teksta.

**MCP-alat:** `mcp__brain-memory__ai_tts_generate`

**Parametri:**
```json
{
  "text": "Zdravo, ovo je test",         // obavezno
  "provider": "openai",                  // opciono: vonage, openai, azure, google, elevenlabs
  "voice": "alloy",                      // opciono: Specifično za providera
  "language": "de-DE"                    // opciono
}
```

**Primjer:**
```
TTS generisanje: "Dobro jutro", Provider ElevenLabs, Glas "Rachel"
```

#### 3.6.3 Chat-zahtjev

**Šta radi:** Šalje pojedinačni Chat-zahtjev LLM-u.

**MCP-alat:** `mcp__brain-memory__ai_chat`

**Parametri:**
```json
{
  "message": "Objasni mi...",          // obavezno
  "provider": "openai",                // opciono: openai, claude, azure
  "model": "gpt-4",                    // opciono
  "context": "housecall_default",      // opciono: Context-preset
  "temperature": 0.7                   // opciono: 0-1
}
```

**Primjer:**
```
Chat-zahtjev Claude-u: "Kreiraj potvrdu termina" sa kontekstom "housecall_appointment"
```

---

**Stranica 29**

---

#### 3.6.4 Vođenje konversacije

**Šta radi:** Vodi višedijelnu konversaciju sa kontekstom.

**MCP-alat:** `mcp__brain-memory__ai_conversation`

**Parametri:**
```json
{
  "conversation_id": "conv-123",       // obavezno: Jedinstveni ID
  "message": "Šta je bilo...",         // obavezno
  "provider": "claude",                // opciono
  "context": "housecall_support"       // opciono
}
```

**Primjer:**
```
Konversacija conv-123 nastavi: "A šta je sa drugom tačkom?"
```

#### 3.6.5 Brisanje konversacije

**Šta radi:** Briše historiju konversacije.

**MCP-alat:** `mcp__brain-memory__ai_conversation_clear`

**Parametri:**
```json
{
  "conversation_id": "conv-123"  // obavezno
}
```

#### 3.6.6 KI-odgovor sa TTS

**Šta radi:** Kombinira LLM-odgovor sa TTS-generisanjem.

**MCP-alat:** `mcp__brain-memory__ai_respond`

**Parametri:**
```json
{
  "conversation_id": "conv-123",            // obavezno
  "user_input": "Kakvo je vrijeme?",        // obavezno
  "llm_provider": "openai",                 // opciono
  "tts_provider": "elevenlabs",             // opciono
  "tts_voice": "Rachel",                    // opciono
  "context": "housecall_default"            // opciono
}
```

**Primjer:**
```
KI-odgovor sa TTS: Input "Potvrdi moj termin", LLM Claude, TTS OpenAI
```

---

**Stranica 30**

---

#### 3.6.7 Biblioteka glasova

**Šta radi:** Prikazuje dostupne glasove TTS-providera.

**MCP-alat:** `mcp__brain-memory__ai_voices`

**Parametri:**
```json
{
  "provider": "elevenlabs"  // opciono: vonage, openai, azure, google, elevenlabs
}
```

#### 3.6.8 Prikaz prompta

**Šta radi:** Prikazuje predefinirane System-prompte.

**MCP-alat:** `mcp__brain-memory__ai_prompts`

**Bez obaveznih parametara.**

**Dostupni konteksti:**
- `housecall_default`: Standardni asistent
- `housecall_appointment`: Zakazivanje termina
- `housecall_followup`: Follow-up razgovori
- `housecall_support`: Support-zahtjevi

#### 3.6.9 Testiranje providera

**Šta radi:** Testira dostupnost LLM/TTS-providera.

**MCP-alat:** `mcp__brain-memory__ai_test`

**Parametri:**
```json
{
  "llm_provider": "openai",    // opciono: openai, claude, azure
  "tts_provider": "elevenlabs" // opciono: openai, azure, google, elevenlabs
}
```

---

**Stranica 31**

---

### 3.7 Automation i Workflows

#### 3.7.1 Kreiranje triggera

**Šta radi:** Kreira vremenski bazirani ili uslovni trigger.

**MCP-alat:** `mcp__brain-memory__trigger_create`

**Parametri:**
```json
{
  "agent_id": "agent-001",                  // obavezno
  "name": "Dnevni Lead-pozivi",            // obavezno
  "time_start": "09:00",                   // opciono: HH:MM
  "time_end": "17:00",                     // opciono: HH:MM
  "days": "Mo,Di,Mi,Do,Fr",                // opciono: Dani u sedmici
  "priority": 5,                           // opciono: 1-10
  "conditions": "{\"quality\": \"hot\"}"   // opciono: JSON-uslovi
}
```

**Primjer:**
```
Trigger: "Ponedjeljak-Leadovi" od 09:00-12:00, Mo, Prioritet 8, Uslov hot leads
```

#### 3.7.2 Prikaz triggera

**Šta radi:** Prikazuje sve triggere, opciono filtrirane.

**MCP-alat:** `mcp__brain-memory__trigger_list`

**Parametri:**
```json
{
  "agent_id": "agent-001"  // opciono: Filter po agentu
}
```

#### 3.7.3 Aktiviranje/deaktiviranje triggera

**Šta radi:** Uključuje/isključuje trigger.

**MCP-alat:** `mcp__brain-memory__trigger_toggle`

**Parametri:**
```json
{
  "trigger_id": 42,       // obavezno
  "enabled": false        // obavezno: true/false
}
```

---

**Stranica 32**

---

#### 3.7.4 Dodavanje queue-unosa

**Šta radi:** Dodaje poziv u red čekanja.

**MCP-alat:** `mcp__brain-memory__queue_add`

**Parametri:**
```json
{
  "agent_id": "agent-001",                       // obavezno
  "phone": "+4917612345678",                     // obavezno
  "contact_name": "Gospodin Schmidt",            // opciono
  "contact_data": "{\"company\": \"XYZ\"}",     // opciono: JSON
  "scheduled_at": "2026-02-20T10:00:00Z",       // opciono: ISO 8601
  "priority": 7,                                 // opciono: 1-10
  "trigger_id": 42                               // opciono
}
```

**Primjer:**
```
Queue dodaj: Agent agent-001, Phone +49..., Ime "Gospodin Müller", planirano sutra 10h
```

#### 3.7.5 Prikaz queue-a

**Šta radi:** Prikazuje unose reda čekanja poziva.

**MCP-alat:** `mcp__brain-memory__queue_list`

**Parametri:**
```json
{
  "agent_id": "agent-001",  // opciono
  "status": "pending",      // opciono: pending, processing, completed, failed
  "limit": 50               // opciono
}
```

#### 3.7.6 Obrada sljedećeg poziva

**Šta radi:** Obrađuje sljedeći Queue-unos.

**MCP-alat:** `mcp__brain-memory__queue_process_next`

**Parametri:**
```json
{
  "agent_id": "agent-001"  // obavezno
}
```

**Pokreće:** Automatski poziv prema Queue-unosu.

---

**Stranica 33**

---

#### 3.7.7 Historija poziva

**Šta radi:** Prikazuje prošle pozive sa filterima.

**MCP-alat:** `mcp__brain-memory__history_list`

**Parametri:**
```json
{
  "agent_id": "agent-001",     // opciono
  "phone": "+4917612345678",   // opciono
  "status": "completed",       // opciono: completed, failed, no_answer, busy
  "limit": 100                 // opciono
}
```

#### 3.7.8 Ažuriranje historije

**Šta radi:** Ažurira detalje unosa poziva.

**MCP-alat:** `mcp__brain-memory__history_update`

**Parametri:**
```json
{
  "history_id": 123,                    // obavezno
  "status": "completed",                // opciono
  "result": "appointment_confirmed",    // opciono
  "notes": "Termin 20.02. 10h",        // opciono
  "duration_seconds": 180,              // opciono
  "recording_url": "https://..."        // opciono
}
```

#### 3.7.9 Preuzimanje statistike

**Šta radi:** Prikazuje statistiku poziva.

**MCP-alat:** `mcp__brain-memory__history_stats`

**Parametri:**
```json
{
  "agent_id": "agent-001",  // opciono
  "days": 7                 // opciono: Dani unazad, default: 7
}
```

**Prikazuje:**
- Ukupno poziva
- Stopu uspjeha
- Prosječno trajanje
- Raspodjelu statusa

---

**Stranica 34**

---

#### 3.7.10 Kreiranje Retry-pravila

**Šta radi:** Definiše automatsku logiku ponavljanja.

**MCP-alat:** `mcp__brain-memory__retry_rule_create`

**Parametri:**
```json
{
  "agent_id": "agent-001",          // obavezno
  "call_result": "no_answer",       // obavezno: no_answer, busy, failed
  "max_retries": 3,                 // opciono: Maks. pokušaja
  "retry_after_minutes": 60         // opciono: Vrijeme čekanja u minutama
}
```

**Primjer:**
```
Retry-pravilo: Kod no_answer maks. 3 pokušaja, svaki sat
```

#### 3.7.11 Prikaz Retry-pravila

**Šta radi:** Prikazuje konfigurisana Retry-pravila.

**MCP-alat:** `mcp__brain-memory__retry_rule_list`

**Parametri:**
```json
{
  "agent_id": "agent-001"  // opciono
}
```

#### 3.7.12 Obrada rezultata poziva

**Šta radi:** Obrađuje rezultat poziva i pokreće eventualno Retry.

**MCP-alat:** `mcp__brain-memory__queue_handle_result`

**Parametri:**
```json
{
  "queue_id": 456,                       // obavezno
  "result": "no_answer",                 // obavezno: completed, no_answer, busy, failed, rejected
  "notes": "Mailbox dostignut"           // opciono
}
```

---

**Stranica 35**

---

### 3.8 Autentifikacija

#### 3.8.1 Login

**Šta radi:** Autentifikuje korisnika u Brain Memory sistemu.

**MCP-alat:** `mcp__brain-memory__auth_login`

**Parametri:**
```json
{
  "username": "admin",     // obavezno
  "password": "password"   // obavezno
}
```

#### 3.8.2 Logout

**Šta radi:** Završava trenutnu sesiju.

**MCP-alat:** `mcp__brain-memory__auth_logout`

**Bez obaveznih parametara.**

#### 3.8.3 Provjera statusa

**Šta radi:** Prikazuje trenutni status autentifikacije.

**MCP-alat:** `mcp__brain-memory__auth_status`

**Bez obaveznih parametara.**

#### 3.8.4 Kreiranje korisnika

**Šta radi:** Kreira novog sistemskog korisnika.

**MCP-alat:** `mcp__brain-memory__auth_create_user`

**Parametri:**
```json
{
  "username": "newuser",   // obavezno
  "password": "password",  // obavezno
  "role": "user"           // opciono: admin, user (default: user)
}
```

---

**Stranica 36**

---

#### 3.8.5 Brisanje korisnika

**Šta radi:** Briše postojećeg korisnika.

**MCP-alat:** `mcp__brain-memory__auth_delete_user`

**Parametri:**
```json
{
  "username": "olduser"  // obavezno
}
```

#### 3.8.6 Prikaz korisnika

**Šta radi:** Prikazuje sve sistemske korisnike.

**MCP-alat:** `mcp__brain-memory__auth_list_users`

**Bez obaveznih parametara.**

### 3.9 Operations

#### 3.9.1 PM2-status

**Šta radi:** Prikazuje status svih PM2-procesa.

**MCP-alat:** `mcp__brain-memory__ops_pm2_status`

**Parametri:**
```json
{
  "format": "table"  // opciono: table, json
}
```

**Prikazuje:**
- Ime procesa
- Status (online/stopped)
- CPU/RAM-iskorištenost
- Uptime
- Restarte

#### 3.9.2 PM2-logovi

**Šta radi:** Prikazuje PM2-Process-logove.

**MCP-alat:** `mcp__brain-memory__ops_pm2_logs`

**Parametri:**
```json
{
  "process": "lead-builder-backend",  // opciono: Ime procesa ili "all"
  "lines": 50,                        // opciono: Broj linija
  "err": false                        // opciono: Samo Error-logovi
}
```

**Primjer:**
```
PM2 Logs: lead-builder-backend, posljednjih 100 linija, samo Errors
```

---

**Stranica 37**

---

#### 3.9.3 Server-statistika

**Šta radi:** Prikazuje iskorištenost server-resursa.

**MCP-alat:** `mcp__brain-memory__ops_server_stats`

**Bez obaveznih parametara.**

**Prikazuje:**
- CPU-opterećenje
- RAM-iskorištenost
- Disk-prostor
- Mrežni promet
- Uptime

---

## 4. Cloud Agents Tools MCP

### 4.1 Discovery-workflow

#### 4.1.1 Pokretanje Discovery-ja

**Šta radi:** Pokreće Discovery-proces za kompaniju.

**MCP-alat:** `mcp__cloud-agents-tools__discovery_start`

**Parametri:**
```json
{
  "companyName": "Firma d.o.o.",                 // obavezno
  "locale": "de",                                // opciono: de, en, bs (default: de)
  "sources": ["Slack", "GitHub", "Docs"],       // opciono: Slack, Linear, GitHub, Docs, Manual
  "scope": ["product", "engineering"]            // opciono: Scope-filter
}
```

**Primjer:**
```
Discovery pokreni: "Tech Startup d.o.o.", Izvori: Slack + GitHub, Scope: engineering
```

---

**Stranica 38**

---

#### 4.1.2 Prikaz Discoveries

**Šta radi:** Prikazuje sve tekuće/završene Discoveries.

**MCP-alat:** `mcp__cloud-agents-tools__discovery_list`

**Bez obaveznih parametara.**

#### 4.1.3 Preuzimanje Discovery-ja

**Šta radi:** Prikazuje detalje Discovery-ja.

**MCP-alat:** `mcp__cloud-agents-tools__discovery_get`

**Parametri:**
```json
{
  "id": "discovery-123"  // obavezno
}
```

#### 4.1.4 Zamrzavanje Discovery-ja

**Šta radi:** Zamrzava Discovery (bez daljnjih izmjena).

**MCP-alat:** `mcp__cloud-agents-tools__discovery_freeze`

**Parametri:**
```json
{
  "id": "discovery-123"  // obavezno
}
```

### 4.2 Proposals

#### 4.2.1 Generisanje Proposal-a

**Šta radi:** Generiše prijedlog baziran na Discovery-ju.

**MCP-alat:** `mcp__cloud-agents-tools__proposals_generate`

**Parametri:**
```json
{
  "discoveryId": "discovery-123",  // obavezno
  "locale": "de"                   // opciono: de, en, bs (default: de)
}
```

---

**Stranica 39**

---

#### 4.2.2 Prikaz Proposals

**Šta radi:** Prikazuje sve Proposals.

**MCP-alat:** `mcp__cloud-agents-tools__proposals_list`

**Bez obaveznih parametara.**

#### 4.2.3 Preuzimanje Proposal-a

**Šta radi:** Prikazuje detalje Proposal-a.

**MCP-alat:** `mcp__cloud-agents-tools__proposals_get`

**Parametri:**
```json
{
  "id": "proposal-456"  // obavezno
}
```

#### 4.2.4 Odobravanje Proposal-a

**Šta radi:** Odobrava Proposal.

**MCP-alat:** `mcp__cloud-agents-tools__proposals_approve`

**Parametri:**
```json
{
  "id": "proposal-456"  // obavezno
}
```

#### 4.2.5 Odbijanje Proposal-a

**Šta radi:** Odbija Proposal.

**MCP-alat:** `mcp__cloud-agents-tools__proposals_reject`

**Parametri:**
```json
{
  "id": "proposal-456"  // obavezno
}
```

### 4.3 Questionnaires

#### 4.3.1 Slanje upitnika

**Šta radi:** Šalje upitnik za Proposal.

**MCP-alat:** `mcp__cloud-agents-tools__questionnaire_send`

**Parametri:**
```json
{
  "proposalId": "proposal-456",       // obavezno
  "destination": "Slack",             // opciono: Slack, Linear, UI (default: UI)
  "channelOrProject": "#engineering", // opciono: Ime kanala/projekta
  "locale": "de"                      // opciono: de, en, bs (default: de)
}
```

**Primjer:**
```
Upitnik pošalji: Proposal proposal-456 u Slack Channel #product
```

---

**Stranica 40**

---

#### 4.3.2 Preuzimanje upitnika

**Šta radi:** Prikazuje detalje upitnika.

**MCP-alat:** `mcp__cloud-agents-tools__questionnaire_get`

**Parametri:**
```json
{
  "id": "questionnaire-789"  // obavezno
}
```

#### 4.3.3 Podnošenje upitnika

**Šta radi:** Podnosi popunjen upitnik.

**MCP-alat:** `mcp__cloud-agents-tools__questionnaire_submit`

**Parametri:**
```json
{
  "id": "questionnaire-789",                   // obavezno
  "answers": {                                 // opciono: Odgovori kao Key-Value
    "question_1": "Odgovor 1",
    "question_2": "Odgovor 2"
  }
}
```

#### 4.3.4 Zamrzavanje upitnika

**Šta radi:** Zamrzava upitnik (bez daljnjih izmjena).

**MCP-alat:** `mcp__cloud-agents-tools__questionnaire_freeze`

**Parametri:**
```json
{
  "id": "questionnaire-789"  // obavezno
}
```

### 4.4 Rollout

#### 4.4.1 Pokretanje Rollout-a

**Šta radi:** Pokreće Rollout odobrenog Proposal-a.

**MCP-alat:** `mcp__cloud-agents-tools__rollout_start`

**Parametri:**
```json
{
  "proposalId": "proposal-456",  // obavezno
  "env": "dev",                  // opciono: dev, staging, prod (default: dev)
  "locale": "de"                 // opciono: de, en, bs (default: de)
}
```

**Primjer:**
```
Rollout pokreni: Proposal proposal-456 u okruženju staging
```

---

**Stranica 41**

---

#### 4.4.2 Prikaz Rollout-a

**Šta radi:** Prikazuje sve Rollout-e.

**MCP-alat:** `mcp__cloud-agents-tools__rollout_list`

**Bez obaveznih parametara.**

#### 4.4.3 Preuzimanje Rollout-a

**Šta radi:** Prikazuje detalje i status Rollout-a.

**MCP-alat:** `mcp__cloud-agents-tools__rollout_get`

**Parametri:**
```json
{
  "id": "rollout-999"  // obavezno
}
```

**Prikazuje:**
- Status (running, completed, failed)
- Napredak
- Logove
- Greške (ako postoje)

---

## 5. Dodatak

### 5.1 Pregled servera

| Server | IP-adresa | Tailscale | Funkcija | SSH-Alias |
|--------|-----------|-----------|----------|-----------|
| **OpenClaw Hetzner** | 46.225.139.14 | 100.106.195.81 (mujo-server) | OpenClaw Gateway, Daemon | OpenClaw |
| **PBX-2** | 49.13.144.44 | - | Voice Stack, Lead Builder Backend | - |
| **Cloud Agents** | 178.156.178.70 | - | Cloud Agents Backend | - |

**SSH-veza:**
```bash
# OpenClaw Server
ssh OpenClaw

# PBX-2
ssh root@49.13.144.44

# Cloud Agents
ssh root@178.156.178.70
```

---

**Stranica 42**

---

### 5.2 Tailscale VPN

**Mreža:** `tail47b17c.ts.net`

**Uređaji:**
- `mac-ds`: Lokalni Mac
- `mujo-server`: OpenClaw Hetzner (100.106.195.81)
- `dsphone`: Mobilni uređaj

**Pristup preko Tailscale-a:**
```bash
# OpenClaw Dashboard
http://mujo-server.tail47b17c.ts.net:18789

# Gateway WebSocket
wss://mujo-server.tail47b17c.ts.net

# SSH preko Tailscale-a
ssh root@mujo-server.tail47b17c.ts.net
```

### 5.3 Venice AI modeli

**Svi modeli su besplatni ($0/Token) preko Venice AI:**

| Provider | Top-modeli | Context Window |
|----------|------------|----------------|
| **Anthropic** | claude-opus-4.6, claude-sonnet-4.5 | 200K |
| **OpenAI** | gpt-5.2, gpt-4.5-turbo | 128K |
| **Google** | gemini-3-pro, gemini-3-flash | 2M |
| **xAI** | grok-4.1, grok-3 | 128K |
| **Alibaba** | qwen3-72b, qwen3-turbo | 32K |
| **DeepSeek** | deepseek-v3, deepseek-r1 | 64K |
| **Meta** | llama-3.3-70b, llama-3.1-405b | 128K |

**Savjeti za odabir modela:**
- **Coding:** deepseek-v3, grok-4.1, claude-opus-4.6
- **Reasoning:** deepseek-r1, grok-4.1
- **Speed:** gemini-3-flash, qwen3-turbo, claude-haiku-4
- **Long Context:** gemini-3-pro (2M)
- **Multimodal:** gpt-5.2, claude-opus-4.6, gemini-3-pro

---

**Stranica 43**

---

### 5.4 Obrada grešaka

**Česti problemi:**

#### OpenClaw Daemon se ne pokreće
```bash
# Dijagnostika
openclaw doctor

# Provjera logova
openclaw logs --tail 50

# Ponovno pokretanje
openclaw daemon restart
```

#### Gateway-veza nije uspjela
```bash
# Provjera statusa
openclaw gateway status

# Ponovno povezivanje
openclaw gateway disconnect
openclaw gateway connect
```

#### Agent ne reaguje
```bash
# Agent-status
openclaw agent info agent-001

# Ponovno pokretanje
openclaw agent stop agent-001
openclaw agent start agent-001
```

#### MCP-alat ne odgovara (Brain Memory)
```
1. Claude Code ponovo pokreni
2. MCP-vezu u Settings-u provjeri
3. Brain Memory Backend-status: mcp__brain-memory__lb_health
```

#### Scraping ne uspijeva
```
1. Browser-sesiju zatvori: mcp__brain-memory__scraper_close
2. Eventualno Portal-prijavu obnovi
3. Selektori mogu biti zastarjeli (Portal-ažuriranje)
```

#### Telefonija ne funkcioniše
```
1. Provider-kredit provjeri: mcp__brain-memory__call_vonage_balance
2. Format telefonskog broja provjeri (E.164 bez +)
3. Sipgate Account-Info: mcp__brain-memory__call_sipgate_info
```

---

**Stranica 44**

---

### 5.5 Best Practices

#### OpenClaw

1. **Imenovanje agenata:** Jedinstvena, opisna imena (`CustomerSupport_DE`, `DataAnalyst_Sales`)
2. **Odabir modela:** Brzi modeli (haiku, flash) za jednostavne zadatke, snažni (opus, grok-4.1) za kompleksne
3. **Memory-higijena:** Redovno briši nepotrebne namespace-ove
4. **Monitoring:** Dashboard dnevno provjeri, logove kod problema odmah provjeri
5. **Backup:** Izvezi važne Agent-konfiguracije

#### Brain Memory

1. **Lead-Management:** Kampanje jasno imenuj, redovno Stats provjeri
2. **Scraping:** max_pages drži nisko (3-5), Browser nakon toga zatvori
3. **Telefonija:** Scripts unaprijed testiraj (TTS-Preview), snimanja aktiviraj kod važnih poziva
4. **Automation:** Trigger-vremena pametno postavi (van pauze za ručak), Retry-logiku konfiguriši
5. **Queue-Management:** Prioritete koristi, redovno Queue-status provjeri

#### Cloud Agents

1. **Discovery:** Više izvora koristi (Slack + GitHub + Docs) za bolje uvide
2. **Proposals:** Uvijek sa upitnikom validiraj prije odobrenja
3. **Rollout:** U dev/staging testiraj prije prod
4. **Workflows:** Discovery → Proposal → Questionnaire → Approval → Rollout (nijedan korak ne preskoči)

#### Sigurnost

1. **Credentials:** NIKADA u logovima/screenshotovima/kodu
2. **API-Keys:** U environment-varijablama, ne u konfiguracijskim fajlovima
3. **SSH:** Samo Key-bazirano, bez lozinki
4. **Firewall:** Samo neophodni portovi otvoreni (OpenClaw Dashboard samo preko Tailscale-a)
5. **Updates:** Redovno `openclaw doctor --fix` i System-ažuriranja

---

**Kraj korisničkog uputstva**

Za pitanja ili probleme:
1. `openclaw doctor` izvrši
2. Logove provjeri: `openclaw logs`
3. Dashboard konsultuj: `openclaw dashboard`
4. MCP-Health-Checks izvrši

**Verzija:** 1.0
**Kreirano:** 15. februar 2026.
**Platforma:** OpenClaw + Brain Memory + Cloud Agents
**Jezik:** Bosanski
