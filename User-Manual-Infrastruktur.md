# Benutzerhandbuch: KI-Infrastruktur

**Version:** 1.0
**Datum:** 15. Februar 2026
**Autor:** Automatisch generiert

---

## Inhaltsverzeichnis

### [1. Einführung](#1-einführung)
- [1.1 Überblick über die Infrastruktur](#11-überblick-über-die-infrastruktur)
- [1.2 Zugriffspunkte und Authentifizierung](#12-zugriffspunkte-und-authentifizierung)
- [1.3 Schnellstart](#13-schnellstart)

### [2. OpenClaw - KI-Agent-Plattform](#2-openclaw---ki-agent-plattform)
- [2.1 Grundlegende Befehle](#21-grundlegende-befehle)
  - [2.1.1 Status prüfen](#211-status-prüfen)
  - [2.1.2 Daemon starten/stoppen](#212-daemon-startenstoppen)
  - [2.1.3 Dashboard öffnen](#213-dashboard-öffnen)
  - [2.1.4 Gesundheitscheck](#214-gesundheitscheck)
  - [2.1.5 System-Diagnose](#215-system-diagnose)
- [2.2 Agent-Verwaltung](#22-agent-verwaltung)
  - [2.2.1 Agenten auflisten](#221-agenten-auflisten)
  - [2.2.2 Agent erstellen](#222-agent-erstellen)
  - [2.2.3 Agent starten](#223-agent-starten)
  - [2.2.4 Agent stoppen](#224-agent-stoppen)
  - [2.2.5 Agent-Details anzeigen](#225-agent-details-anzeigen)
- [2.3 Modell-Management](#23-modell-management)
  - [2.3.1 Verfügbare Modelle anzeigen](#231-verfügbare-modelle-anzeigen)
  - [2.3.2 Modell-Details abrufen](#232-modell-details-abrufen)
  - [2.3.3 Modell wechseln](#233-modell-wechseln)
- [2.4 Kommunikationskanäle](#24-kommunikationskanäle)
  - [2.4.1 WhatsApp-Integration](#241-whatsapp-integration)
  - [2.4.2 Kanäle auflisten](#242-kanäle-auflisten)
  - [2.4.3 Kanal konfigurieren](#243-kanal-konfigurieren)
  - [2.4.4 Nachricht senden](#244-nachricht-senden)
- [2.5 Memory-System](#25-memory-system)
  - [2.5.1 Memory durchsuchen](#251-memory-durchsuchen)
  - [2.5.2 Memory speichern](#252-memory-speichern)
  - [2.5.3 Memory löschen](#253-memory-löschen)
- [2.6 Gateway & Netzwerk](#26-gateway--netzwerk)
  - [2.6.1 Gateway-Status](#261-gateway-status)
  - [2.6.2 Gateway verbinden](#262-gateway-verbinden)
  - [2.6.3 Geräte im Netzwerk](#263-geräte-im-netzwerk)
- [2.7 Automatisierung](#27-automatisierung)
  - [2.7.1 Cron-Jobs erstellen](#271-cron-jobs-erstellen)
  - [2.7.2 Hooks konfigurieren](#272-hooks-konfigurieren)
  - [2.7.3 Webhooks einrichten](#273-webhooks-einrichten)
- [2.8 Sessions & Logs](#28-sessions--logs)
  - [2.8.1 Sessions anzeigen](#281-sessions-anzeigen)
  - [2.8.2 Logs einsehen](#282-logs-einsehen)
  - [2.8.3 System-Logs filtern](#283-system-logs-filtern)

### [3. Brain Memory MCP](#3-brain-memory-mcp)
- [3.1 Lead Builder](#31-lead-builder)
  - [3.1.1 Kampagnen auflisten](#311-kampagnen-auflisten)
  - [3.1.2 Kampagne erstellen](#312-kampagne-erstellen)
  - [3.1.3 Kampagnen-Statistiken](#313-kampagnen-statistiken)
  - [3.1.4 Leads verwalten](#314-leads-verwalten)
  - [3.1.5 Lead erstellen](#315-lead-erstellen)
  - [3.1.6 Kommunikationshistorie](#316-kommunikationshistorie)
  - [3.1.7 Vorlagen abrufen](#317-vorlagen-abrufen)
  - [3.1.8 Quellen anzeigen](#318-quellen-anzeigen)
  - [3.1.9 Backend-Gesundheitscheck](#319-backend-gesundheitscheck)
  - [3.1.10 Datenbank-Abfragen](#3110-datenbank-abfragen)
- [3.2 Cloud Agents Integration](#32-cloud-agents-integration)
  - [3.2.1 Agent-Status prüfen](#321-agent-status-prüfen)
  - [3.2.2 Aufgaben auflisten](#322-aufgaben-auflisten)
  - [3.2.3 Chat-Nachricht senden](#323-chat-nachricht-senden)
  - [3.2.4 Brain-Suche](#324-brain-suche)
  - [3.2.5 Wissen einspeisen](#325-wissen-einspeisen)
  - [3.2.6 Brain-Statistiken](#326-brain-statistiken)
- [3.3 Web Scraping](#33-web-scraping)
  - [3.3.1 Portale anzeigen](#331-portale-anzeigen)
  - [3.3.2 Immobilien scrapen](#332-immobilien-scrapen)
  - [3.3.3 Jobs scrapen](#333-jobs-scrapen)
  - [3.3.4 Portal-Login](#334-portal-login)
  - [3.3.5 Custom Scraping](#335-custom-scraping)
  - [3.3.6 Browser schließen](#336-browser-schließen)
- [3.4 Telefonie & SMS](#34-telefonie--sms)
  - [3.4.1 Vonage SMS senden](#341-vonage-sms-senden)
  - [3.4.2 Vonage anrufen](#342-vonage-anrufen)
  - [3.4.3 Vonage Guthaben](#343-vonage-guthaben)
  - [3.4.4 Sipgate anrufen](#344-sipgate-anrufen)
  - [3.4.5 Sipgate SMS](#345-sipgate-sms)
  - [3.4.6 Sipgate Account-Info](#346-sipgate-account-info)
  - [3.4.7 Make.com Trigger](#347-makecom-trigger)
- [3.5 KI-Telefonie (Housecall)](#35-ki-telefonie-housecall)
  - [3.5.1 TTS-Anruf](#351-tts-anruf)
  - [3.5.2 IVR-Anruf](#352-ivr-anruf)
  - [3.5.3 Script-Anruf](#353-script-anruf)
  - [3.5.4 Anruf-Info abrufen](#354-anruf-info-abrufen)
  - [3.5.5 Anruf beenden](#355-anruf-beenden)
  - [3.5.6 Anruf stummschalten](#356-anruf-stummschalten)
  - [3.5.7 Anruf weiterleiten](#357-anruf-weiterleiten)
  - [3.5.8 DTMF-Töne senden](#358-dtmf-töne-senden)
  - [3.5.9 Text während Anruf sprechen](#359-text-während-anruf-sprechen)
  - [3.5.10 Sprechen stoppen](#3510-sprechen-stoppen)
  - [3.5.11 Verfügbare Stimmen](#3511-verfügbare-stimmen)
- [3.6 KI-Engine](#36-ki-engine)
  - [3.6.1 Konfiguration anzeigen](#361-konfiguration-anzeigen)
  - [3.6.2 TTS generieren](#362-tts-generieren)
  - [3.6.3 Chat-Anfrage](#363-chat-anfrage)
  - [3.6.4 Konversation führen](#364-konversation-führen)
  - [3.6.5 Konversation löschen](#365-konversation-löschen)
  - [3.6.6 KI-Antwort mit TTS](#366-ki-antwort-mit-tts)
  - [3.6.7 Stimmen-Bibliothek](#367-stimmen-bibliothek)
  - [3.6.8 Prompts anzeigen](#368-prompts-anzeigen)
  - [3.6.9 Provider testen](#369-provider-testen)
- [3.7 Automation & Workflows](#37-automation--workflows)
  - [3.7.1 Trigger erstellen](#371-trigger-erstellen)
  - [3.7.2 Trigger auflisten](#372-trigger-auflisten)
  - [3.7.3 Trigger aktivieren/deaktivieren](#373-trigger-aktivierendeaktivieren)
  - [3.7.4 Queue-Eintrag hinzufügen](#374-queue-eintrag-hinzufügen)
  - [3.7.5 Queue anzeigen](#375-queue-anzeigen)
  - [3.7.6 Nächsten Anruf verarbeiten](#376-nächsten-anruf-verarbeiten)
  - [3.7.7 Anruf-Historie](#377-anruf-historie)
  - [3.7.8 Historie aktualisieren](#378-historie-aktualisieren)
  - [3.7.9 Statistiken abrufen](#379-statistiken-abrufen)
  - [3.7.10 Retry-Regel erstellen](#3710-retry-regel-erstellen)
  - [3.7.11 Retry-Regeln auflisten](#3711-retry-regeln-auflisten)
  - [3.7.12 Anruf-Ergebnis verarbeiten](#3712-anruf-ergebnis-verarbeiten)
- [3.8 Authentifizierung](#38-authentifizierung)
  - [3.8.1 Login](#381-login)
  - [3.8.2 Logout](#382-logout)
  - [3.8.3 Status prüfen](#383-status-prüfen)
  - [3.8.4 Benutzer erstellen](#384-benutzer-erstellen)
  - [3.8.5 Benutzer löschen](#385-benutzer-löschen)
  - [3.8.6 Benutzer auflisten](#386-benutzer-auflisten)
- [3.9 Operations](#39-operations)
  - [3.9.1 PM2-Status](#391-pm2-status)
  - [3.9.2 PM2-Logs](#392-pm2-logs)
  - [3.9.3 Server-Statistiken](#393-server-statistiken)

### [4. Cloud Agents Tools MCP](#4-cloud-agents-tools-mcp)
- [4.1 Discovery-Workflow](#41-discovery-workflow)
  - [4.1.1 Discovery starten](#411-discovery-starten)
  - [4.1.2 Discoveries auflisten](#412-discoveries-auflisten)
  - [4.1.3 Discovery abrufen](#413-discovery-abrufen)
  - [4.1.4 Discovery einfrieren](#414-discovery-einfrieren)
- [4.2 Proposals](#42-proposals)
  - [4.2.1 Proposal generieren](#421-proposal-generieren)
  - [4.2.2 Proposals auflisten](#422-proposals-auflisten)
  - [4.2.3 Proposal abrufen](#423-proposal-abrufen)
  - [4.2.4 Proposal genehmigen](#424-proposal-genehmigen)
  - [4.2.5 Proposal ablehnen](#425-proposal-ablehnen)
- [4.3 Questionnaires](#43-questionnaires)
  - [4.3.1 Fragebogen senden](#431-fragebogen-senden)
  - [4.3.2 Fragebogen abrufen](#432-fragebogen-abrufen)
  - [4.3.3 Fragebogen einreichen](#433-fragebogen-einreichen)
  - [4.3.4 Fragebogen einfrieren](#434-fragebogen-einfrieren)
- [4.4 Rollout](#44-rollout)
  - [4.4.1 Rollout starten](#441-rollout-starten)
  - [4.4.2 Rollouts auflisten](#442-rollouts-auflisten)
  - [4.4.3 Rollout abrufen](#443-rollout-abrufen)

### [5. Anhang](#5-anhang)
- [5.1 Server-Übersicht](#51-server-übersicht)
- [5.2 Tailscale VPN](#52-tailscale-vpn)
- [5.3 Venice AI Modelle](#53-venice-ai-modelle)
- [5.4 Fehlerbehandlung](#54-fehlerbehandlung)
- [5.5 Best Practices](#55-best-practices)

---

## 1. Einführung

### 1.1 Überblick über die Infrastruktur

Diese Infrastruktur besteht aus mehreren hochintegrierten Komponenten:

- **OpenClaw**: KI-Agent-Plattform mit 30+ Modellen (Grok, Claude, GPT, Gemini, etc.)
- **Brain Memory MCP**: Umfassende Business-Automation (Leads, Scraping, Telefonie, KI)
- **Cloud Agents Tools**: Discovery, Proposals, Questionnaires, Rollouts
- **Voice Stack**: Drachtio SIP, Multi-Provider TTS, IVR-System
- **Infrastructure**: Hetzner Server, Tailscale VPN, Venice AI

### 1.2 Zugriffspunkte und Authentifizierung

| Komponente | Zugriff | Authentifizierung |
|------------|---------|-------------------|
| OpenClaw lokal | `openclaw` CLI | openclaw.json Token |
| OpenClaw Dashboard | http://127.0.0.1:18789 | Browser |
| OpenClaw Server | 46.225.139.14 (SSH: OpenClaw) | SSH-Key |
| OpenClaw Gateway | wss://mujo-server.tail47b17c.ts.net | Token |
| Brain Memory | MCP in Claude Code | Automatisch |
| Cloud Agents | MCP in Claude Code | Token |
| PBX-2 Server | 49.13.144.44 | SSH-Key |
| Cloud Agents Server | 178.156.178.70 | SSH-Key |
| Tailscale | Netzwerk mac-ds, mujo-server, dsphone | Tailscale Auth |

### 1.3 Schnellstart

```bash
# OpenClaw Status prüfen
openclaw status

# Dashboard öffnen
openclaw dashboard

# Agenten auflisten
openclaw agents

# Modelle anzeigen
openclaw models
```

---

## 2. OpenClaw - KI-Agent-Plattform

### 2.1 Grundlegende Befehle

#### 2.1.1 Status prüfen

**Was es tut:** Zeigt den aktuellen Status des OpenClaw-Systems an (Daemon, Gateway, Agenten).

**Verwendung:**
```bash
openclaw status
```

**Beispiel-Ausgabe:**
```
✓ Daemon running (PID: 12345)
✓ Gateway connected (wss://mujo-server.tail47b17c.ts.net)
✓ 3 agents active
✓ WhatsApp channel ready (+491778022488)
```

#### 2.1.2 Daemon starten/stoppen

**Was es tut:** Startet oder stoppt den OpenClaw-Hintergrundprozess.

**Verwendung:**
```bash
# Daemon starten
openclaw daemon start

# Daemon stoppen
openclaw daemon stop

# Daemon neu starten
openclaw daemon restart
```

#### 2.1.3 Dashboard öffnen

**Was es tut:** Öffnet das Web-Dashboard zur visuellen Verwaltung.

**Verwendung:**
```bash
openclaw dashboard
```

**Zugriff:** Browser öffnet automatisch http://127.0.0.1:18789

**Über Tailscale:** http://mujo-server.tail47b17c.ts.net:18789

#### 2.1.4 Gesundheitscheck

**Was es tut:** Überprüft alle Systemkomponenten auf Funktionsfähigkeit.

**Verwendung:**
```bash
openclaw health
```

**Prüft:**
- Daemon-Status
- Gateway-Verbindung
- Agent-Verfügbarkeit
- Modell-Zugriff
- Channel-Status

#### 2.1.5 System-Diagnose

**Was es tut:** Führt eine umfassende Diagnose durch und schlägt Lösungen vor.

**Verwendung:**
```bash
openclaw doctor

# Mit automatischer Reparatur
openclaw doctor --fix
```

**Findet:**
- Konfigurationsprobleme
- Fehlende Abhängigkeiten
- Netzwerkprobleme
- Berechtigungsfehler

### 2.2 Agent-Verwaltung

#### 2.2.1 Agenten auflisten

**Was es tut:** Zeigt alle verfügbaren und aktiven Agenten an.

**Verwendung:**
```bash
openclaw agents

# Mit Details
openclaw agents --verbose
```

**Beispiel-Ausgabe:**
```
ID          NAME            MODEL           STATUS    UPTIME
agent-001   CustomerSupport grok-4.1        running   2h 15m
agent-002   DataAnalyst     claude-opus-4.6 running   45m
agent-003   Researcher      gemini-3-pro    stopped   -
```

#### 2.2.2 Agent erstellen

**Was es tut:** Erstellt einen neuen KI-Agenten mit spezifischer Konfiguration.

**Verwendung:**
```bash
openclaw agent create --name "MeinAgent" --model "grok-4.1" --type "assistant"

# Mit erweiterten Optionen
openclaw agent create \
  --name "SalesBot" \
  --model "claude-opus-4.6" \
  --type "sales" \
  --instructions "Du bist ein freundlicher Verkaufsassistent" \
  --temperature 0.7 \
  --max-tokens 2000
```

**Parameter:**
- `--name`: Agent-Name
- `--model`: KI-Modell (siehe 2.3.1)
- `--type`: Agent-Typ (assistant, sales, support, analyst, etc.)
- `--instructions`: System-Prompt
- `--temperature`: Kreativität (0.0-1.0)
- `--max-tokens`: Max. Antwortlänge

#### 2.2.3 Agent starten

**Was es tut:** Startet einen gestoppten Agenten.

**Verwendung:**
```bash
openclaw agent start agent-003

# Mehrere gleichzeitig
openclaw agent start agent-003 agent-004 agent-005
```

#### 2.2.4 Agent stoppen

**Was es tut:** Stoppt einen laufenden Agenten.

**Verwendung:**
```bash
openclaw agent stop agent-001

# Alle stoppen
openclaw agent stop --all
```

#### 2.2.5 Agent-Details anzeigen

**Was es tut:** Zeigt detaillierte Informationen zu einem Agenten.

**Verwendung:**
```bash
openclaw agent info agent-001
```

**Zeigt:**
- Konfiguration
- Laufzeit-Statistiken
- Verwendetes Modell
- Aktive Sessions
- Memory-Nutzung

### 2.3 Modell-Management

#### 2.3.1 Verfügbare Modelle anzeigen

**Was es tut:** Listet alle verfügbaren KI-Modelle über Venice AI auf.

**Verwendung:**
```bash
openclaw models

# Nach Provider filtern
openclaw models --provider anthropic
openclaw models --provider openai
```

**Verfügbare Modelle:**
- **Anthropic:** claude-opus-4.6, claude-sonnet-4.5, claude-haiku-4
- **OpenAI:** gpt-5.2, gpt-4.5, gpt-4-turbo
- **Google:** gemini-3-pro, gemini-3-flash
- **xAI:** grok-4.1, grok-3
- **Alibaba:** qwen3-72b, qwen3-turbo
- **DeepSeek:** deepseek-v3, deepseek-r1
- **Meta:** llama-3.3-70b, llama-3.1-405b

#### 2.3.2 Modell-Details abrufen

**Was es tut:** Zeigt technische Details zu einem Modell.

**Verwendung:**
```bash
openclaw models info grok-4.1
```

**Zeigt:**
- Kontext-Fenster
- Token-Limits
- Kosten pro Token
- Verfügbarkeit
- Empfohlene Use Cases

#### 2.3.3 Modell wechseln

**Was es tut:** Ändert das Modell eines Agenten.

**Verwendung:**
```bash
openclaw agent update agent-001 --model "claude-opus-4.6"
```

### 2.4 Kommunikationskanäle

#### 2.4.1 WhatsApp-Integration

**Was es tut:** Nutzt den WhatsApp-Kanal für Agent-Kommunikation.

**Telefonnummer:** +491778022488

**Konfiguration:**
- **selfChatMode:** Aktiviert (Agent kann selbst chatten)
- **Allowlist:** Konfigurierte Nummern haben Zugriff

**Verwendung:**
```bash
# WhatsApp-Status prüfen
openclaw channels status whatsapp

# Nachricht über WhatsApp senden (siehe 2.4.4)
```

#### 2.4.2 Kanäle auflisten

**Was es tut:** Zeigt alle konfigurierten Kommunikationskanäle.

**Verwendung:**
```bash
openclaw channels

# Mit Status-Details
openclaw channels --status
```

**Verfügbare Kanäle:**
- WhatsApp
- Telegram (optional)
- Slack (optional)
- Discord (optional)
- Webhook

#### 2.4.3 Kanal konfigurieren

**Was es tut:** Richtet einen neuen Kanal ein oder aktualisiert die Konfiguration.

**Verwendung:**
```bash
# WhatsApp-Allowlist aktualisieren
openclaw channels config whatsapp --allowlist "+4917612345678,+4915112345678"

# Webhook einrichten
openclaw channels config webhook --url "https://example.com/webhook" --secret "your-secret"
```

#### 2.4.4 Nachricht senden

**Was es tut:** Sendet eine Nachricht über einen Kanal.

**Verwendung:**
```bash
# Über WhatsApp
openclaw message send \
  --channel whatsapp \
  --to "+4917612345678" \
  --text "Hallo von OpenClaw!" \
  --agent agent-001

# Über Webhook
openclaw message send \
  --channel webhook \
  --payload '{"text":"Test message"}' \
  --agent agent-002
```

### 2.5 Memory-System

#### 2.5.1 Memory durchsuchen

**Was es tut:** Durchsucht das Agent-Gedächtnis nach Kontext und Informationen.

**Verwendung:**
```bash
openclaw memory search "Kundengespräch" --agent agent-001

# Mit Zeitfilter
openclaw memory search "Bestellung" --agent agent-001 --since "2026-02-01"

# Semantische Suche
openclaw memory search "ähnlich wie letzte Anfrage" --agent agent-001 --semantic
```

#### 2.5.2 Memory speichern

**Was es tut:** Speichert explizit Informationen im Agent-Memory.

**Verwendung:**
```bash
openclaw memory store \
  --agent agent-001 \
  --key "customer-preference" \
  --value "Bevorzugt E-Mail-Kommunikation" \
  --namespace "customer-data"

# Mit TTL (Time-To-Live)
openclaw memory store \
  --agent agent-001 \
  --key "session-token" \
  --value "abc123xyz" \
  --ttl 3600
```

#### 2.5.3 Memory löschen

**Was es tut:** Entfernt Informationen aus dem Agent-Memory.

**Verwendung:**
```bash
# Einzelnen Eintrag löschen
openclaw memory delete --agent agent-001 --key "session-token"

# Namespace löschen
openclaw memory delete --agent agent-001 --namespace "temp-data"

# Gesamtes Memory zurücksetzen
openclaw memory clear --agent agent-001
```

### 2.6 Gateway & Netzwerk

#### 2.6.1 Gateway-Status

**Was es tut:** Zeigt den Status der Gateway-Verbindung.

**Verwendung:**
```bash
openclaw gateway status
```

**Zeigt:**
- Verbindungs-URL: wss://mujo-server.tail47b17c.ts.net
- Verbindungsstatus
- Latenz
- Durchsatz
- Fehlerrate

#### 2.6.2 Gateway verbinden

**Was es tut:** Stellt Verbindung zum zentralen Gateway her.

**Verwendung:**
```bash
openclaw gateway connect

# Mit spezifischer URL
openclaw gateway connect --url "wss://mujo-server.tail47b17c.ts.net"

# Verbindung trennen
openclaw gateway disconnect
```

#### 2.6.3 Geräte im Netzwerk

**Was es tut:** Zeigt alle verbundenen Geräte im OpenClaw-Netzwerk.

**Verwendung:**
```bash
openclaw devices

# Mit Details
openclaw devices --verbose
```

**Zeigt:**
- Gerätename
- IP-Adresse (Tailscale)
- Status
- Letzte Aktivität
- Laufende Agenten

### 2.7 Automatisierung

#### 2.7.1 Cron-Jobs erstellen

**Was es tut:** Richtet zeitbasierte automatische Aufgaben ein.

**Verwendung:**
```bash
# Täglicher Report um 9 Uhr
openclaw cron create \
  --name "daily-report" \
  --schedule "0 9 * * *" \
  --agent agent-001 \
  --action "generate-report"

# Stündliche Datenaktualisierung
openclaw cron create \
  --name "data-sync" \
  --schedule "0 * * * *" \
  --agent agent-002 \
  --action "sync-data"

# Cron-Jobs auflisten
openclaw cron list

# Cron-Job löschen
openclaw cron delete daily-report
```

**Cron-Syntax:** `Minute Stunde Tag Monat Wochentag`

#### 2.7.2 Hooks konfigurieren

**Was es tut:** Erstellt Event-basierte Trigger für Aktionen.

**Verwendung:**
```bash
# Hook bei neuer Nachricht
openclaw hooks create \
  --name "on-message" \
  --event "message.received" \
  --agent agent-001 \
  --action "process-message"

# Hook bei Agent-Start
openclaw hooks create \
  --name "on-start" \
  --event "agent.started" \
  --agent agent-001 \
  --action "initialize-context"

# Hooks auflisten
openclaw hooks list

# Hook deaktivieren
openclaw hooks disable on-message
```

**Verfügbare Events:**
- `message.received`
- `agent.started`
- `agent.stopped`
- `memory.updated`
- `error.occurred`

#### 2.7.3 Webhooks einrichten

**Was es tut:** Konfiguriert externe HTTP-Endpunkte für Benachrichtigungen.

**Verwendung:**
```bash
# Webhook erstellen
openclaw webhooks create \
  --name "slack-notifications" \
  --url "https://hooks.slack.com/services/YOUR/WEBHOOK/URL" \
  --events "agent.error,message.failed" \
  --secret "your-webhook-secret"

# Webhooks auflisten
openclaw webhooks list

# Webhook testen
openclaw webhooks test slack-notifications

# Webhook löschen
openclaw webhooks delete slack-notifications
```

### 2.8 Sessions & Logs

#### 2.8.1 Sessions anzeigen

**Was es tut:** Zeigt aktive und vergangene Konversations-Sessions.

**Verwendung:**
```bash
# Aktive Sessions
openclaw sessions

# Alle Sessions (inkl. beendete)
openclaw sessions --all

# Sessions eines Agenten
openclaw sessions --agent agent-001

# Session-Details
openclaw sessions info session-12345
```

#### 2.8.2 Logs einsehen

**Was es tut:** Zeigt System- und Agent-Logs an.

**Verwendung:**
```bash
# Live-Logs (folgen)
openclaw logs --follow

# Logs eines Agenten
openclaw logs --agent agent-001

# Letzte 100 Zeilen
openclaw logs --tail 100

# Fehler-Logs
openclaw logs --level error
```

#### 2.8.3 System-Logs filtern

**Was es tut:** Filtert Logs nach verschiedenen Kriterien.

**Verwendung:**
```bash
# Nach Zeitraum
openclaw logs --since "2026-02-15 08:00" --until "2026-02-15 12:00"

# Nach Komponente
openclaw logs --component gateway
openclaw logs --component daemon

# Nach Suchbegriff
openclaw logs --grep "error"

# Kombiniert
openclaw logs --agent agent-001 --level warning --since "1 hour ago"
```

---

## 3. Brain Memory MCP

Alle folgenden Funktionen sind über MCP-Tools in Claude Code verfügbar.

### 3.1 Lead Builder

#### 3.1.1 Kampagnen auflisten

**Was es tut:** Zeigt alle Lead-Kampagnen mit optionalen Filtern.

**MCP-Tool:** `mcp__brain-memory__lb_campaigns`

**Parameter:**
```json
{
  "status": "active",  // optional: active, paused, completed, archived
  "priority": "high",  // optional: urgent, high, normal, low
  "baseUrl": "..."     // optional: override backend URL
}
```

**Beispiel in Claude Code:**
```
Zeige mir alle aktiven Kampagnen mit hoher Priorität
```

#### 3.1.2 Kampagne erstellen

**Was es tut:** Erstellt eine neue Lead-Kampagne.

**MCP-Tool:** `mcp__brain-memory__lb_campaign_create`

**Parameter:**
```json
{
  "name": "Neue Kampagne",          // erforderlich
  "target_type": "lead_campaign",   // erforderlich: lead_campaign, job_posting, call_list
  "description": "Beschreibung",    // optional
  "priority": "normal",             // optional: urgent, high, normal, low
  "target_count": 100,              // optional, default: 100
  "baseUrl": "..."                  // optional
}
```

**Beispiel:**
```
Erstelle eine neue Lead-Kampagne "SHK München" mit Ziel 200 Leads und hoher Priorität
```

#### 3.1.3 Kampagnen-Statistiken

**Was es tut:** Zeigt detaillierte Statistiken einer Kampagne.

**MCP-Tool:** `mcp__brain-memory__lb_campaign_stats`

**Parameter:**
```json
{
  "id": "campaign-id",  // erforderlich
  "baseUrl": "..."      // optional
}
```

**Zeigt:**
- Gesamt-Leads
- Konversionsrate
- Kontaktierte Leads
- Erfolgreiche Kontakte
- Pending/Failed

#### 3.1.4 Leads verwalten

**Was es tut:** Listet Leads mit erweiterten Filtern auf.

**MCP-Tool:** `mcp__brain-memory__lb_leads`

**Parameter:**
```json
{
  "campaign_id": "...",  // optional: Filter nach Kampagne
  "status": "new",       // optional: new, contacted, responded, qualified, converted, rejected
  "quality": "hot",      // optional: hot, warm, cold, unknown
  "limit": 100,          // optional, default: 100
  "offset": 0,           // optional, default: 0
  "baseUrl": "..."       // optional
}
```

**Beispiel:**
```
Zeige die ersten 50 heißen Leads aus Kampagne XYZ mit Status "new"
```

#### 3.1.5 Lead erstellen

**Was es tut:** Erstellt einen neuen Lead manuell.

**MCP-Tool:** `mcp__brain-memory__lb_lead_create`

**Parameter:**
```json
{
  "name": "Max Mustermann",      // optional
  "company": "Firma GmbH",       // optional
  "email": "max@firma.de",       // optional
  "phone": "+4917612345678",     // optional
  "position": "Geschäftsführer", // optional
  "location": "München",         // optional
  "campaign_id": "...",          // optional
  "source": "manual",            // optional: manual, scraper, import, api
  "baseUrl": "..."               // optional
}
```

**Beispiel:**
```
Erstelle einen Lead: Max Mustermann, SHK-Firma München, Telefon +4917612345678
```

#### 3.1.6 Kommunikationshistorie

**Was es tut:** Zeigt Kommunikationsverläufe mit Leads.

**MCP-Tool:** `mcp__brain-memory__lb_communications`

**Parameter:**
```json
{
  "lead_id": "...",     // optional: Filter nach Lead
  "campaign_id": "...", // optional: Filter nach Kampagne
  "channel": "email",   // optional: email, whatsapp, phone, linkedin
  "limit": 50,          // optional, default: 50
  "baseUrl": "..."      // optional
}
```

**Beispiel:**
```
Zeige alle WhatsApp-Kommunikationen der letzten Kampagne
```

#### 3.1.7 Vorlagen abrufen

**Was es tut:** Listet verfügbare Nachrichtenvorlagen auf.

**MCP-Tool:** `mcp__brain-memory__lb_templates`

**Parameter:**
```json
{
  "type": "email",  // optional: Filter nach Typ
  "baseUrl": "..."  // optional
}
```

**Beispiel:**
```
Zeige mir alle E-Mail-Vorlagen
```

#### 3.1.8 Quellen anzeigen

**Was es tut:** Zeigt Lead-Quellen und deren Performance.

**MCP-Tool:** `mcp__brain-memory__lb_sources`

**Parameter:**
```json
{
  "baseUrl": "..."  // optional
}
```

**Zeigt:**
- Quellenname
- Anzahl Leads
- Qualität
- Konversionsrate

#### 3.1.9 Backend-Gesundheitscheck

**Was es tut:** Prüft Verfügbarkeit des Lead Builder Backends.

**MCP-Tool:** `mcp__brain-memory__lb_health`

**Parameter:**
```json
{
  "baseUrl": "..."  // optional
}
```

**Beispiel:**
```
Prüfe Lead Builder Backend-Status
```

#### 3.1.10 Datenbank-Abfragen

**Was es tut:** Führt SQL-Abfragen (nur SELECT) aus.

**MCP-Tool:** `mcp__brain-memory__lb_db_query`

**Parameter:**
```json
{
  "query": "SELECT * FROM leads WHERE quality = 'hot' LIMIT 10"  // erforderlich (nur SELECT)
}
```

**Beispiel:**
```
Führe SQL-Abfrage aus: SELECT COUNT(*) FROM campaigns WHERE status = 'active'
```

### 3.2 Cloud Agents Integration

#### 3.2.1 Agent-Status prüfen

**Was es tut:** Zeigt Status aller Cloud Agents.

**MCP-Tool:** `mcp__brain-memory__ca_agents_status`

**Parameter:**
```json
{
  "token": "your-token",  // erforderlich
  "baseUrl": "..."        // optional
}
```

#### 3.2.2 Aufgaben auflisten

**Was es tut:** Listet Agent-Aufgaben mit Statusfilter.

**MCP-Tool:** `mcp__brain-memory__ca_tasks_list`

**Parameter:**
```json
{
  "token": "your-token",  // erforderlich
  "state": "pending",     // optional: pending, running, completed, failed
  "baseUrl": "..."        // optional
}
```

#### 3.2.3 Chat-Nachricht senden

**Was es tut:** Sendet Nachricht an einen Cloud Agent.

**MCP-Tool:** `mcp__brain-memory__ca_chat_send`

**Parameter:**
```json
{
  "token": "your-token",   // erforderlich
  "agentName": "analyst",  // erforderlich
  "message": "Analysiere die Verkaufsdaten",  // erforderlich
  "baseUrl": "..."         // optional
}
```

**Beispiel:**
```
Sende an Cloud Agent "analyst": Erstelle einen Monatsbericht
```

#### 3.2.4 Brain-Suche

**Was es tut:** Durchsucht das Cloud Agents Brain (Wissensdatenbank).

**MCP-Tool:** `mcp__brain-memory__ca_brain_search`

**Parameter:**
```json
{
  "token": "your-token",        // erforderlich
  "query": "API-Dokumentation", // erforderlich
  "mode": "semantic",           // optional: semantic, keyword, hybrid
  "limit": 10,                  // optional
  "baseUrl": "..."              // optional
}
```

**Beispiel:**
```
Suche im Brain nach "Authentication Patterns" mit semantischer Suche
```

#### 3.2.5 Wissen einspeisen

**Was es tut:** Fügt neue Informationen ins Brain ein.

**MCP-Tool:** `mcp__brain-memory__ca_brain_ingest`

**Parameter:**
```json
{
  "token": "your-token",                    // erforderlich
  "title": "API-Dokumentation v2",          // erforderlich
  "content": "Vollständiger Text...",       // erforderlich
  "tags": ["api", "docs", "v2"],           // optional
  "baseUrl": "..."                          // optional
}
```

**Beispiel:**
```
Speichere ins Brain: Titel "Onboarding-Prozess", Content "...", Tags ["hr", "prozess"]
```

#### 3.2.6 Brain-Statistiken

**Was es tut:** Zeigt Statistiken der Wissensdatenbank.

**MCP-Tool:** `mcp__brain-memory__ca_brain_stats`

**Parameter:**
```json
{
  "token": "your-token",  // erforderlich
  "baseUrl": "..."        // optional
}
```

**Zeigt:**
- Anzahl Dokumente
- Speichergröße
- Letzte Aktualisierung
- Top-Tags

### 3.3 Web Scraping

#### 3.3.1 Portale anzeigen

**Was es tut:** Listet unterstützte Scraping-Portale auf.

**MCP-Tool:** `mcp__brain-memory__scraper_portals`

**Parameter:**
```json
{
  "type": "housing"  // optional: housing, job, all
}
```

**Unterstützte Housing-Portale:**
- immobilienscout24
- wg-gesucht
- ebay-kleinanzeigen
- monteurzimmer

**Unterstützte Job-Portale:**
- indeed
- stepstone
- linkedin-jobs

#### 3.3.2 Immobilien scrapen

**Was es tut:** Scrapt Immobilienanzeigen von konfigurierten Portalen.

**MCP-Tool:** `mcp__brain-memory__scraper_housing`

**Parameter:**
```json
{
  "portal": "immobilienscout24",  // erforderlich: immobilienscout24, wg-gesucht, ebay-kleinanzeigen, monteurzimmer
  "city": "München",              // optional
  "max_price": 1500,              // optional: Max. Preis in Euro
  "min_size": 50,                 // optional: Min. Größe in qm
  "rooms": 2,                     // optional: Anzahl Zimmer
  "max_pages": 3                  // optional, default: 3
}
```

**Beispiel:**
```
Scrape ImmobilienScout24 für München, max. 1500€, min. 50qm, 2 Zimmer
```

#### 3.3.3 Jobs scrapen

**Was es tut:** Scrapt Stellenanzeigen von Job-Portalen.

**MCP-Tool:** `mcp__brain-memory__scraper_jobs`

**Parameter:**
```json
{
  "portal": "indeed",        // erforderlich: indeed, stepstone, linkedin-jobs
  "keyword": "SHK",          // erforderlich: Suchbegriff
  "city": "München",         // optional
  "max_pages": 3             // optional, default: 3
}
```

**Beispiel:**
```
Scrape Indeed nach "Elektriker" Jobs in Berlin, 5 Seiten
```

#### 3.3.4 Portal-Login

**Was es tut:** Authentifiziert sich bei einem Portal (für Premium-Features).

**MCP-Tool:** `mcp__brain-memory__scraper_login`

**Parameter:**
```json
{
  "portal": "ebay-kleinanzeigen",  // erforderlich
  "username": "user@example.com",  // erforderlich
  "password": "password"           // erforderlich
}
```

**Beispiel:**
```
Login bei eBay Kleinanzeigen mit Benutzername und Passwort
```

#### 3.3.5 Custom Scraping

**Was es tut:** Scrapt beliebige Webseiten mit CSS-Selektoren.

**MCP-Tool:** `mcp__brain-memory__scraper_custom`

**Parameter:**
```json
{
  "url": "https://example.com/listings",     // erforderlich
  "item_selector": ".listing-item",          // erforderlich
  "title_selector": "h2.title",              // erforderlich (relativ zu item)
  "link_selector": "a.details",              // erforderlich (relativ zu item)
  "price_selector": "span.price",            // optional
  "location_selector": "span.location",      // optional
  "max_items": 50                            // optional, default: 50
}
```

**Beispiel:**
```
Custom-Scraping: URL "https://...", Items ".card", Titel "h3", Link "a.more"
```

#### 3.3.6 Browser schließen

**Was es tut:** Schließt die Scraping-Browser-Session.

**MCP-Tool:** `mcp__brain-memory__scraper_close`

**Keine Parameter erforderlich.**

**Beispiel:**
```
Scraping-Browser schließen
```

### 3.4 Telefonie & SMS

#### 3.4.1 Vonage SMS senden

**Was es tut:** Sendet SMS über Vonage.

**MCP-Tool:** `mcp__brain-memory__call_vonage_sms`

**Parameter:**
```json
{
  "to": "4917612345678",     // erforderlich: E.164 Format (ohne +)
  "message": "Test-Nachricht"  // erforderlich
}
```

**Beispiel:**
```
Sende Vonage SMS an +4917612345678: "Ihr Termin ist bestätigt"
```

#### 3.4.2 Vonage anrufen

**Was es tut:** Initiiert einen Anruf über Vonage.

**MCP-Tool:** `mcp__brain-memory__call_vonage_dial`

**Parameter:**
```json
{
  "to": "4917612345678",              // erforderlich: E.164 Format
  "answer_url": "https://..."         // optional: NCCO Answer URL
}
```

**Beispiel:**
```
Rufe über Vonage an: +4917612345678
```

#### 3.4.3 Vonage Guthaben

**Was es tut:** Zeigt aktuelles Vonage-Guthaben.

**MCP-Tool:** `mcp__brain-memory__call_vonage_balance`

**Keine Parameter erforderlich.**

**Beispiel:**
```
Zeige Vonage Guthaben
```

#### 3.4.4 Sipgate anrufen

**Was es tut:** Initiiert Anruf über Sipgate.

**MCP-Tool:** `mcp__brain-memory__call_sipgate_dial`

**Parameter:**
```json
{
  "to": "+4917612345678",  // erforderlich
  "caller": "w0"           // optional: Caller ID (SIP User ID)
}
```

**Beispiel:**
```
Sipgate-Anruf an +4917612345678 mit Caller w0
```

#### 3.4.5 Sipgate SMS

**Was es tut:** Sendet SMS über Sipgate.

**MCP-Tool:** `mcp__brain-memory__call_sipgate_sms`

**Parameter:**
```json
{
  "to": "+4917612345678",     // erforderlich
  "message": "Test-SMS",      // erforderlich
  "smsId": "s0"               // erforderlich: SMS Extension ID
}
```

**Beispiel:**
```
Sipgate SMS an +4917612345678: "Terminbestätigung" (smsId: s0)
```

#### 3.4.6 Sipgate Account-Info

**Was es tut:** Zeigt Sipgate Account-Informationen.

**MCP-Tool:** `mcp__brain-memory__call_sipgate_info`

**Keine Parameter erforderlich.**

**Zeigt:**
- Account-Status
- Verfügbare Nummern
- SIP-Extensions
- Guthaben

#### 3.4.7 Make.com Trigger

**Was es tut:** Triggert ein Make.com Szenario.

**MCP-Tool:** `mcp__brain-memory__call_make_trigger`

**Parameter:**
```json
{
  "event": "call_completed",            // erforderlich: Event-Name
  "data": "{\"lead_id\": \"123\"}"      // optional: JSON-String
}
```

**Beispiel:**
```
Trigger Make.com Event "lead_created" mit Data {"name": "Max", "phone": "+49..."}
```

### 3.5 KI-Telefonie (Housecall)

#### 3.5.1 TTS-Anruf

**Was es tut:** Startet Anruf mit Text-to-Speech.

**MCP-Tool:** `mcp__brain-memory__housecall_tts_call`

**Parameter:**
```json
{
  "to": "4917612345678",              // erforderlich: E.164 Format
  "text": "Guten Tag, hier spricht...",  // erforderlich
  "language": "de-DE",                // optional: de-DE, en-US, etc.
  "voice": "Marlene",                 // optional: Stimme
  "record": true                      // optional: Anruf aufnehmen
}
```

**Beispiel:**
```
TTS-Anruf an +4917612345678: "Ihr Termin ist morgen um 10 Uhr", Stimme Hans, aufnehmen
```

#### 3.5.2 IVR-Anruf

**Was es tut:** Startet Anruf mit interaktivem Sprachmenü (DTMF).

**MCP-Tool:** `mcp__brain-memory__housecall_ivr_call`

**Parameter:**
```json
{
  "to": "4917612345678",                     // erforderlich
  "greeting": "Willkommen bei...",           // erforderlich
  "menu_prompt": "Drücken Sie 1 für...",     // erforderlich
  "max_digits": 1,                           // optional: Max. DTMF-Ziffern
  "voice": "Marlene"                         // optional
}
```

**Beispiel:**
```
IVR-Anruf: Begrüßung "Willkommen", Menü "1 = Service, 2 = Verkauf"
```

#### 3.5.3 Script-Anruf

**Was es tut:** Startet Anruf mit vordefiniertem Gesprächs-Script.

**MCP-Tool:** `mcp__brain-memory__housecall_script_call`

**Parameter:**
```json
{
  "to": "4917612345678",               // erforderlich
  "contact_name": "Herr Müller",       // erforderlich
  "script_type": "intro",              // erforderlich: intro, followup, reminder, confirmation
  "company_name": "SHK Firma GmbH",    // optional
  "appointment_date": "2026-02-20 10:00",  // optional
  "voice": "Hans",                     // optional
  "record": true                       // optional
}
```

**Beispiel:**
```
Script-Anruf "intro" an Herr Müller, Firma "Elektro GmbH", Termin 20.02. 10 Uhr
```

#### 3.5.4 Anruf-Info abrufen

**Was es tut:** Zeigt Details zu einem laufenden/abgeschlossenen Anruf.

**MCP-Tool:** `mcp__brain-memory__housecall_call_info`

**Parameter:**
```json
{
  "call_uuid": "abc-123-def"  // erforderlich: Vonage Call UUID
}
```

#### 3.5.5 Anruf beenden

**Was es tut:** Beendet einen laufenden Anruf.

**MCP-Tool:** `mcp__brain-memory__housecall_hangup`

**Parameter:**
```json
{
  "call_uuid": "abc-123-def"  // erforderlich
}
```

#### 3.5.6 Anruf stummschalten

**Was es tut:** Schaltet Anruf stumm/aktiv.

**MCP-Tool:** `mcp__brain-memory__housecall_mute`

**Parameter:**
```json
{
  "call_uuid": "abc-123-def",  // erforderlich
  "mute": true                 // erforderlich: true = stumm, false = aktiv
}
```

#### 3.5.7 Anruf weiterleiten

**Was es tut:** Leitet Anruf an andere Nummer weiter.

**MCP-Tool:** `mcp__brain-memory__housecall_transfer`

**Parameter:**
```json
{
  "call_uuid": "abc-123-def",           // erforderlich
  "transfer_to": "+4989123456",         // erforderlich
  "announce_text": "Verbinde Sie..."   // optional: Ansage vor Transfer
}
```

#### 3.5.8 DTMF-Töne senden

**Was es tut:** Sendet DTMF-Töne (Tastentöne) während Anruf.

**MCP-Tool:** `mcp__brain-memory__housecall_send_dtmf`

**Parameter:**
```json
{
  "call_uuid": "abc-123-def",  // erforderlich
  "digits": "1234#"            // erforderlich: 0-9, *, #
}
```

#### 3.5.9 Text während Anruf sprechen

**Was es tut:** Lässt während laufendem Anruf Text sprechen (TTS).

**MCP-Tool:** `mcp__brain-memory__housecall_speak`

**Parameter:**
```json
{
  "call_uuid": "abc-123-def",       // erforderlich
  "text": "Bitte warten Sie...",    // erforderlich
  "voice": "Marlene",               // optional
  "loop": 1                         // optional: Wiederholungen
}
```

#### 3.5.10 Sprechen stoppen

**Was es tut:** Stoppt aktuell laufende TTS-Ausgabe.

**MCP-Tool:** `mcp__brain-memory__housecall_stop_speak`

**Parameter:**
```json
{
  "call_uuid": "abc-123-def"  // erforderlich
}
```

#### 3.5.11 Verfügbare Stimmen

**Was es tut:** Listet verfügbare TTS-Stimmen auf.

**MCP-Tool:** `mcp__brain-memory__housecall_voices`

**Parameter:**
```json
{
  "language": "de-DE"  // optional: Filter nach Sprache
}
```

**Verfügbare Stimmen (Beispiel):**
- **Deutsch:** Marlene, Hans, Vicki
- **Englisch:** Amy, Brian, Emma, Russell
- **Französisch:** Céline, Mathieu

### 3.6 KI-Engine

#### 3.6.1 Konfiguration anzeigen

**Was es tut:** Zeigt aktuelle KI-Provider-Konfiguration.

**MCP-Tool:** `mcp__brain-memory__ai_config`

**Keine Parameter erforderlich.**

**Zeigt:**
- Verfügbare LLM-Provider (OpenAI, Claude, Azure)
- Verfügbare TTS-Provider (5)
- Standard-Modelle
- API-Status

#### 3.6.2 TTS generieren

**Was es tut:** Generiert Audio-Datei aus Text.

**MCP-Tool:** `mcp__brain-memory__ai_tts_generate`

**Parameter:**
```json
{
  "text": "Hallo, dies ist ein Test",    // erforderlich
  "provider": "openai",                  // optional: vonage, openai, azure, google, elevenlabs
  "voice": "alloy",                      // optional: Provider-spezifisch
  "language": "de-DE"                    // optional
}
```

**Beispiel:**
```
TTS generieren: "Guten Morgen", Provider ElevenLabs, Stimme "Rachel"
```

#### 3.6.3 Chat-Anfrage

**Was es tut:** Sendet einzelne Chat-Anfrage an LLM.

**MCP-Tool:** `mcp__brain-memory__ai_chat`

**Parameter:**
```json
{
  "message": "Erkläre mir...",         // erforderlich
  "provider": "openai",                // optional: openai, claude, azure
  "model": "gpt-4",                    // optional
  "context": "housecall_default",      // optional: Kontext-Preset
  "temperature": 0.7                   // optional: 0-1
}
```

**Beispiel:**
```
Chat-Anfrage an Claude: "Erstelle eine Terminbestätigung" mit Kontext "housecall_appointment"
```

#### 3.6.4 Konversation führen

**Was es tut:** Führt mehrteilige Konversation mit Kontext.

**MCP-Tool:** `mcp__brain-memory__ai_conversation`

**Parameter:**
```json
{
  "conversation_id": "conv-123",       // erforderlich: Eindeutige ID
  "message": "Was war nochmal...",     // erforderlich
  "provider": "claude",                // optional
  "context": "housecall_support"       // optional
}
```

**Beispiel:**
```
Konversation conv-123 fortsetzen: "Und was ist mit dem zweiten Punkt?"
```

#### 3.6.5 Konversation löschen

**Was es tut:** Löscht Konversationshistorie.

**MCP-Tool:** `mcp__brain-memory__ai_conversation_clear`

**Parameter:**
```json
{
  "conversation_id": "conv-123"  // erforderlich
}
```

#### 3.6.6 KI-Antwort mit TTS

**Was es tut:** Kombiniert LLM-Antwort mit TTS-Generierung.

**MCP-Tool:** `mcp__brain-memory__ai_respond`

**Parameter:**
```json
{
  "conversation_id": "conv-123",            // erforderlich
  "user_input": "Wie ist das Wetter?",      // erforderlich
  "llm_provider": "openai",                 // optional
  "tts_provider": "elevenlabs",             // optional
  "tts_voice": "Rachel",                    // optional
  "context": "housecall_default"            // optional
}
```

**Beispiel:**
```
KI-Antwort mit TTS: Input "Bestätige meinen Termin", LLM Claude, TTS OpenAI
```

#### 3.6.7 Stimmen-Bibliothek

**Was es tut:** Zeigt verfügbare Stimmen eines TTS-Providers.

**MCP-Tool:** `mcp__brain-memory__ai_voices`

**Parameter:**
```json
{
  "provider": "elevenlabs"  // optional: vonage, openai, azure, google, elevenlabs
}
```

#### 3.6.8 Prompts anzeigen

**Was es tut:** Listet vordefinierte System-Prompts auf.

**MCP-Tool:** `mcp__brain-memory__ai_prompts`

**Keine Parameter erforderlich.**

**Verfügbare Kontexte:**
- `housecall_default`: Standard-Assistent
- `housecall_appointment`: Terminvereinbarung
- `housecall_followup`: Follow-up Gespräche
- `housecall_support`: Support-Anfragen

#### 3.6.9 Provider testen

**Was es tut:** Testet Verfügbarkeit von LLM/TTS-Providern.

**MCP-Tool:** `mcp__brain-memory__ai_test`

**Parameter:**
```json
{
  "llm_provider": "openai",    // optional: openai, claude, azure
  "tts_provider": "elevenlabs" // optional: openai, azure, google, elevenlabs
}
```

### 3.7 Automation & Workflows

#### 3.7.1 Trigger erstellen

**Was es tut:** Erstellt zeitbasierten oder bedingungsbasierten Trigger.

**MCP-Tool:** `mcp__brain-memory__trigger_create`

**Parameter:**
```json
{
  "agent_id": "agent-001",                  // erforderlich
  "name": "Tägliche Lead-Anrufe",          // erforderlich
  "time_start": "09:00",                   // optional: HH:MM
  "time_end": "17:00",                     // optional: HH:MM
  "days": "Mo,Di,Mi,Do,Fr",                // optional: Wochentage
  "priority": 5,                           // optional: 1-10
  "conditions": "{\"quality\": \"hot\"}"   // optional: JSON-Bedingungen
}
```

**Beispiel:**
```
Trigger: "Montags-Leads" von 09:00-12:00, Mo, Priorität 8, Bedingung hot leads
```

#### 3.7.2 Trigger auflisten

**Was es tut:** Listet alle Trigger, optional gefiltert.

**MCP-Tool:** `mcp__brain-memory__trigger_list`

**Parameter:**
```json
{
  "agent_id": "agent-001"  // optional: Filter nach Agent
}
```

#### 3.7.3 Trigger aktivieren/deaktivieren

**Was es tut:** Schaltet Trigger an/aus.

**MCP-Tool:** `mcp__brain-memory__trigger_toggle`

**Parameter:**
```json
{
  "trigger_id": 42,       // erforderlich
  "enabled": false        // erforderlich: true/false
}
```

#### 3.7.4 Queue-Eintrag hinzufügen

**Was es tut:** Fügt Anruf zur Warteschlange hinzu.

**MCP-Tool:** `mcp__brain-memory__queue_add`

**Parameter:**
```json
{
  "agent_id": "agent-001",                       // erforderlich
  "phone": "+4917612345678",                     // erforderlich
  "contact_name": "Herr Schmidt",                // optional
  "contact_data": "{\"company\": \"XYZ\"}",     // optional: JSON
  "scheduled_at": "2026-02-20T10:00:00Z",       // optional: ISO 8601
  "priority": 7,                                 // optional: 1-10
  "trigger_id": 42                               // optional
}
```

**Beispiel:**
```
Queue hinzufügen: Agent agent-001, Phone +49..., Name "Herr Müller", geplant morgen 10 Uhr
```

#### 3.7.5 Queue anzeigen

**Was es tut:** Listet Einträge der Anruf-Queue.

**MCP-Tool:** `mcp__brain-memory__queue_list`

**Parameter:**
```json
{
  "agent_id": "agent-001",  // optional
  "status": "pending",      // optional: pending, processing, completed, failed
  "limit": 50               // optional
}
```

#### 3.7.6 Nächsten Anruf verarbeiten

**Was es tut:** Verarbeitet den nächsten Queue-Eintrag.

**MCP-Tool:** `mcp__brain-memory__queue_process_next`

**Parameter:**
```json
{
  "agent_id": "agent-001"  // erforderlich
}
```

**Startet:** Automatischen Anruf gemäß Queue-Eintrag.

#### 3.7.7 Anruf-Historie

**Was es tut:** Zeigt vergangene Anrufe mit Filtern.

**MCP-Tool:** `mcp__brain-memory__history_list`

**Parameter:**
```json
{
  "agent_id": "agent-001",     // optional
  "phone": "+4917612345678",   // optional
  "status": "completed",       // optional: completed, failed, no_answer, busy
  "limit": 100                 // optional
}
```

#### 3.7.8 Historie aktualisieren

**Was es tut:** Aktualisiert Details eines Anruf-Eintrags.

**MCP-Tool:** `mcp__brain-memory__history_update`

**Parameter:**
```json
{
  "history_id": 123,                    // erforderlich
  "status": "completed",                // optional
  "result": "appointment_confirmed",    // optional
  "notes": "Termin am 20.02. 10 Uhr",  // optional
  "duration_seconds": 180,              // optional
  "recording_url": "https://..."        // optional
}
```

#### 3.7.9 Statistiken abrufen

**Was es tut:** Zeigt Anruf-Statistiken.

**MCP-Tool:** `mcp__brain-memory__history_stats`

**Parameter:**
```json
{
  "agent_id": "agent-001",  // optional
  "days": 7                 // optional: Tage zurück, default: 7
}
```

**Zeigt:**
- Gesamt-Anrufe
- Erfolgsrate
- Durchschnittliche Dauer
- Status-Verteilung

#### 3.7.10 Retry-Regel erstellen

**Was es tut:** Definiert automatische Wiederholungslogik.

**MCP-Tool:** `mcp__brain-memory__retry_rule_create`

**Parameter:**
```json
{
  "agent_id": "agent-001",          // erforderlich
  "call_result": "no_answer",       // erforderlich: no_answer, busy, failed
  "max_retries": 3,                 // optional: Max. Versuche
  "retry_after_minutes": 60         // optional: Wartezeit in Minuten
}
```

**Beispiel:**
```
Retry-Regel: Bei no_answer max. 3 Versuche, alle 60 Minuten
```

#### 3.7.11 Retry-Regeln auflisten

**Was es tut:** Zeigt konfigurierte Retry-Regeln.

**MCP-Tool:** `mcp__brain-memory__retry_rule_list`

**Parameter:**
```json
{
  "agent_id": "agent-001"  // optional
}
```

#### 3.7.12 Anruf-Ergebnis verarbeiten

**Was es tut:** Verarbeitet Anruf-Ergebnis und triggert ggf. Retry.

**MCP-Tool:** `mcp__brain-memory__queue_handle_result`

**Parameter:**
```json
{
  "queue_id": 456,                       // erforderlich
  "result": "no_answer",                 // erforderlich: completed, no_answer, busy, failed, rejected
  "notes": "Mailbox erreicht"            // optional
}
```

### 3.8 Authentifizierung

#### 3.8.1 Login

**Was es tut:** Authentifiziert Benutzer im Brain Memory System.

**MCP-Tool:** `mcp__brain-memory__auth_login`

**Parameter:**
```json
{
  "username": "admin",     // erforderlich
  "password": "password"   // erforderlich
}
```

#### 3.8.2 Logout

**Was es tut:** Beendet aktuelle Session.

**MCP-Tool:** `mcp__brain-memory__auth_logout`

**Keine Parameter erforderlich.**

#### 3.8.3 Status prüfen

**Was es tut:** Zeigt aktuellen Authentifizierungsstatus.

**MCP-Tool:** `mcp__brain-memory__auth_status`

**Keine Parameter erforderlich.**

#### 3.8.4 Benutzer erstellen

**Was es tut:** Erstellt neuen Systembenutzer.

**MCP-Tool:** `mcp__brain-memory__auth_create_user`

**Parameter:**
```json
{
  "username": "newuser",   // erforderlich
  "password": "password",  // erforderlich
  "role": "user"           // optional: admin, user (default: user)
}
```

#### 3.8.5 Benutzer löschen

**Was es tut:** Löscht bestehenden Benutzer.

**MCP-Tool:** `mcp__brain-memory__auth_delete_user`

**Parameter:**
```json
{
  "username": "olduser"  // erforderlich
}
```

#### 3.8.6 Benutzer auflisten

**Was es tut:** Listet alle Systembenutzer.

**MCP-Tool:** `mcp__brain-memory__auth_list_users`

**Keine Parameter erforderlich.**

### 3.9 Operations

#### 3.9.1 PM2-Status

**Was es tut:** Zeigt Status aller PM2-Prozesse.

**MCP-Tool:** `mcp__brain-memory__ops_pm2_status`

**Parameter:**
```json
{
  "format": "table"  // optional: table, json
}
```

**Zeigt:**
- Prozessname
- Status (online/stopped)
- CPU/RAM-Nutzung
- Uptime
- Restarts

#### 3.9.2 PM2-Logs

**Was es tut:** Zeigt PM2-Prozess-Logs.

**MCP-Tool:** `mcp__brain-memory__ops_pm2_logs`

**Parameter:**
```json
{
  "process": "lead-builder-backend",  // optional: Prozessname oder "all"
  "lines": 50,                        // optional: Anzahl Zeilen
  "err": false                        // optional: Nur Error-Logs
}
```

**Beispiel:**
```
PM2 Logs: lead-builder-backend, letzte 100 Zeilen, nur Errors
```

#### 3.9.3 Server-Statistiken

**Was es tut:** Zeigt Server-Ressourcennutzung.

**MCP-Tool:** `mcp__brain-memory__ops_server_stats`

**Keine Parameter erforderlich.**

**Zeigt:**
- CPU-Auslastung
- RAM-Nutzung
- Disk-Space
- Netzwerk-Traffic
- Uptime

---

## 4. Cloud Agents Tools MCP

### 4.1 Discovery-Workflow

#### 4.1.1 Discovery starten

**Was es tut:** Startet Discovery-Prozess für ein Unternehmen.

**MCP-Tool:** `mcp__cloud-agents-tools__discovery_start`

**Parameter:**
```json
{
  "companyName": "Firma GmbH",                   // erforderlich
  "locale": "de",                                // optional: de, en, bs (default: de)
  "sources": ["Slack", "GitHub", "Docs"],       // optional: Slack, Linear, GitHub, Docs, Manual
  "scope": ["product", "engineering"]            // optional: Scope-Filter
}
```

**Beispiel:**
```
Discovery starten: "Tech Startup AG", Quellen: Slack + GitHub, Scope: engineering
```

#### 4.1.2 Discoveries auflisten

**Was es tut:** Listet alle laufenden/abgeschlossenen Discoveries.

**MCP-Tool:** `mcp__cloud-agents-tools__discovery_list`

**Keine Parameter erforderlich.**

#### 4.1.3 Discovery abrufen

**Was es tut:** Zeigt Details einer Discovery.

**MCP-Tool:** `mcp__cloud-agents-tools__discovery_get`

**Parameter:**
```json
{
  "id": "discovery-123"  // erforderlich
}
```

#### 4.1.4 Discovery einfrieren

**Was es tut:** Friert Discovery ein (keine weiteren Änderungen).

**MCP-Tool:** `mcp__cloud-agents-tools__discovery_freeze`

**Parameter:**
```json
{
  "id": "discovery-123"  // erforderlich
}
```

### 4.2 Proposals

#### 4.2.1 Proposal generieren

**Was es tut:** Generiert Vorschlag basierend auf Discovery.

**MCP-Tool:** `mcp__cloud-agents-tools__proposals_generate`

**Parameter:**
```json
{
  "discoveryId": "discovery-123",  // erforderlich
  "locale": "de"                   // optional: de, en, bs (default: de)
}
```

#### 4.2.2 Proposals auflisten

**Was es tut:** Listet alle Proposals.

**MCP-Tool:** `mcp__cloud-agents-tools__proposals_list`

**Keine Parameter erforderlich.**

#### 4.2.3 Proposal abrufen

**Was es tut:** Zeigt Details eines Proposals.

**MCP-Tool:** `mcp__cloud-agents-tools__proposals_get`

**Parameter:**
```json
{
  "id": "proposal-456"  // erforderlich
}
```

#### 4.2.4 Proposal genehmigen

**Was es tut:** Genehmigt ein Proposal.

**MCP-Tool:** `mcp__cloud-agents-tools__proposals_approve`

**Parameter:**
```json
{
  "id": "proposal-456"  // erforderlich
}
```

#### 4.2.5 Proposal ablehnen

**Was es tut:** Lehnt ein Proposal ab.

**MCP-Tool:** `mcp__cloud-agents-tools__proposals_reject`

**Parameter:**
```json
{
  "id": "proposal-456"  // erforderlich
}
```

### 4.3 Questionnaires

#### 4.3.1 Fragebogen senden

**Was es tut:** Sendet Fragebogen zu einem Proposal.

**MCP-Tool:** `mcp__cloud-agents-tools__questionnaire_send`

**Parameter:**
```json
{
  "proposalId": "proposal-456",       // erforderlich
  "destination": "Slack",             // optional: Slack, Linear, UI (default: UI)
  "channelOrProject": "#engineering", // optional: Channel/Project-Name
  "locale": "de"                      // optional: de, en, bs (default: de)
}
```

**Beispiel:**
```
Fragebogen senden: Proposal proposal-456 nach Slack Channel #product
```

#### 4.3.2 Fragebogen abrufen

**Was es tut:** Zeigt Fragebogen-Details.

**MCP-Tool:** `mcp__cloud-agents-tools__questionnaire_get`

**Parameter:**
```json
{
  "id": "questionnaire-789"  // erforderlich
}
```

#### 4.3.3 Fragebogen einreichen

**Was es tut:** Reicht ausgefüllten Fragebogen ein.

**MCP-Tool:** `mcp__cloud-agents-tools__questionnaire_submit`

**Parameter:**
```json
{
  "id": "questionnaire-789",                   // erforderlich
  "answers": {                                 // optional: Antworten als Key-Value
    "question_1": "Antwort 1",
    "question_2": "Antwort 2"
  }
}
```

#### 4.3.4 Fragebogen einfrieren

**Was es tut:** Friert Fragebogen ein (keine weiteren Änderungen).

**MCP-Tool:** `mcp__cloud-agents-tools__questionnaire_freeze`

**Parameter:**
```json
{
  "id": "questionnaire-789"  // erforderlich
}
```

### 4.4 Rollout

#### 4.4.1 Rollout starten

**Was es tut:** Startet Rollout eines genehmigten Proposals.

**MCP-Tool:** `mcp__cloud-agents-tools__rollout_start`

**Parameter:**
```json
{
  "proposalId": "proposal-456",  // erforderlich
  "env": "dev",                  // optional: dev, staging, prod (default: dev)
  "locale": "de"                 // optional: de, en, bs (default: de)
}
```

**Beispiel:**
```
Rollout starten: Proposal proposal-456 in Umgebung staging
```

#### 4.4.2 Rollouts auflisten

**Was es tut:** Listet alle Rollouts.

**MCP-Tool:** `mcp__cloud-agents-tools__rollout_list`

**Keine Parameter erforderlich.**

#### 4.4.3 Rollout abrufen

**Was es tut:** Zeigt Rollout-Details und -Status.

**MCP-Tool:** `mcp__cloud-agents-tools__rollout_get`

**Parameter:**
```json
{
  "id": "rollout-999"  // erforderlich
}
```

**Zeigt:**
- Status (running, completed, failed)
- Fortschritt
- Logs
- Fehler (falls vorhanden)

---

## 5. Anhang

### 5.1 Server-Übersicht

| Server | IP-Adresse | Tailscale | Funktion | SSH-Alias |
|--------|------------|-----------|----------|-----------|
| **OpenClaw Hetzner** | 46.225.139.14 | 100.106.195.81 (mujo-server) | OpenClaw Gateway, Daemon | OpenClaw |
| **PBX-2** | 49.13.144.44 | - | Voice Stack, Lead Builder Backend | - |
| **Cloud Agents** | 178.156.178.70 | - | Cloud Agents Backend | - |

**SSH-Verbindung:**
```bash
# OpenClaw Server
ssh OpenClaw

# PBX-2
ssh root@49.13.144.44

# Cloud Agents
ssh root@178.156.178.70
```

### 5.2 Tailscale VPN

**Netzwerk:** `tail47b17c.ts.net`

**Geräte:**
- `mac-ds`: Lokaler Mac
- `mujo-server`: OpenClaw Hetzner (100.106.195.81)
- `dsphone`: Mobiles Gerät

**Zugriff über Tailscale:**
```bash
# OpenClaw Dashboard
http://mujo-server.tail47b17c.ts.net:18789

# Gateway WebSocket
wss://mujo-server.tail47b17c.ts.net

# SSH über Tailscale
ssh root@mujo-server.tail47b17c.ts.net
```

### 5.3 Venice AI Modelle

**Alle Modelle sind kostenfrei ($0/Token) über Venice AI verfügbar:**

| Provider | Top-Modelle | Context Window |
|----------|-------------|----------------|
| **Anthropic** | claude-opus-4.6, claude-sonnet-4.5 | 200K |
| **OpenAI** | gpt-5.2, gpt-4.5-turbo | 128K |
| **Google** | gemini-3-pro, gemini-3-flash | 2M |
| **xAI** | grok-4.1, grok-3 | 128K |
| **Alibaba** | qwen3-72b, qwen3-turbo | 32K |
| **DeepSeek** | deepseek-v3, deepseek-r1 | 64K |
| **Meta** | llama-3.3-70b, llama-3.1-405b | 128K |

**Modellauswahl-Tipps:**
- **Coding:** deepseek-v3, grok-4.1, claude-opus-4.6
- **Reasoning:** deepseek-r1, grok-4.1
- **Speed:** gemini-3-flash, qwen3-turbo, claude-haiku-4
- **Long Context:** gemini-3-pro (2M)
- **Multimodal:** gpt-5.2, claude-opus-4.6, gemini-3-pro

### 5.4 Fehlerbehandlung

**Häufige Probleme:**

#### OpenClaw Daemon startet nicht
```bash
# Diagnose
openclaw doctor

# Logs prüfen
openclaw logs --tail 50

# Neu starten
openclaw daemon restart
```

#### Gateway-Verbindung fehlgeschlagen
```bash
# Status prüfen
openclaw gateway status

# Neu verbinden
openclaw gateway disconnect
openclaw gateway connect
```

#### Agent reagiert nicht
```bash
# Agent-Status
openclaw agent info agent-001

# Neu starten
openclaw agent stop agent-001
openclaw agent start agent-001
```

#### MCP-Tool antwortet nicht (Brain Memory)
```
1. Claude Code neu starten
2. MCP-Verbindung in Settings prüfen
3. Brain Memory Backend-Status: mcp__brain-memory__lb_health
```

#### Scraping schlägt fehl
```
1. Browser-Session schließen: mcp__brain-memory__scraper_close
2. Ggf. Portal-Login erneuern
3. Selektoren könnten veraltet sein (Portal-Update)
```

#### Telefonie funktioniert nicht
```
1. Provider-Guthaben prüfen: mcp__brain-memory__call_vonage_balance
2. Telefonnummer-Format prüfen (E.164 ohne +)
3. Sipgate Account-Info: mcp__brain-memory__call_sipgate_info
```

### 5.5 Best Practices

#### OpenClaw

1. **Agent-Benennung:** Eindeutige, beschreibende Namen (`CustomerSupport_DE`, `DataAnalyst_Sales`)
2. **Modellwahl:** Schnelle Modelle (haiku, flash) für einfache Tasks, starke (opus, grok-4.1) für komplexe
3. **Memory-Hygiene:** Regelmäßig nicht benötigte Namespaces löschen
4. **Monitoring:** Dashboard täglich checken, Logs bei Problemen sofort prüfen
5. **Backup:** Wichtige Agent-Konfigurationen exportieren

#### Brain Memory

1. **Lead-Management:** Kampagnen klar benennen, regelmäßig Stats prüfen
2. **Scraping:** max_pages niedrig halten (3-5), Browser danach schließen
3. **Telefonie:** Scripts vorher testen (TTS-Preview), Aufnahmen aktivieren bei wichtigen Calls
4. **Automation:** Trigger-Zeiten sinnvoll setzen (außerhalb Mittagspause), Retry-Logik konfigurieren
5. **Queue-Management:** Prioritäten nutzen, regelmäßig Queue-Status prüfen

#### Cloud Agents

1. **Discovery:** Mehrere Quellen nutzen (Slack + GitHub + Docs) für bessere Insights
2. **Proposals:** Immer mit Fragebogen validieren vor Genehmigung
3. **Rollout:** In dev/staging testen vor prod
4. **Workflows:** Discovery → Proposal → Questionnaire → Approval → Rollout (kein Schritt überspringen)

#### Sicherheit

1. **Credentials:** NIEMALS in Logs/Screenshots/Code
2. **API-Keys:** In Umgebungsvariablen, nicht in Konfigurationsdateien
3. **SSH:** Nur Key-basiert, keine Passwörter
4. **Firewall:** Nur notwendige Ports offen (OpenClaw Dashboard nur über Tailscale)
5. **Updates:** Regelmäßig `openclaw doctor --fix` und System-Updates

---

**Ende des Benutzerhandbuchs**

Bei Fragen oder Problemen:
1. `openclaw doctor` ausführen
2. Logs prüfen: `openclaw logs`
3. Dashboard konsultieren: `openclaw dashboard`
4. MCP-Health-Checks durchführen

**Version:** 1.0
**Erstellt:** 15. Februar 2026
**Plattform:** OpenClaw + Brain Memory + Cloud Agents
**Sprache:** Deutsch
