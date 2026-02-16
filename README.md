# Mujo-Team

OpenClaw Multi-Agent System mit 13 spezialisierten KI-Agenten.

## Architektur

| Agent | Rolle | Modell | Provider |
|-------|-------|--------|----------|
| Mujo | Lead/Orchestrator | claude-opus-4-6 | anthropic |
| Komm-Agent | Kommunikation, Messaging | claude-sonnet-4-5 | anthropic |
| Content-Agent | Voice, TTS, Media | claude-sonnet-4-5 | anthropic |
| Dev-Agent | Code, Build, Design | claude-sonnet-4-5 | anthropic |
| Docs-Agent | Dokumentation, Notizen | claude-sonnet-4-5 | anthropic |
| Sales-Agent | Marketing, CRM, Payment | claude-sonnet-4-5 | anthropic |
| Sys-Agent | System, Suche, API | grok-4-1-fast | xai |
| Builder-Agent | Agent-Erstellung + Testing | claude-opus-4-6 | anthropic |
| Tester-Agent | QA, Quality-Checks | claude-sonnet-4-5 | anthropic |
| Repo-Agent | Git, PRs, Reviews | claude-sonnet-4-5 | anthropic |
| Controller-Agent | Watchdog, Health-Monitor | qwen3-next-80b | venice |
| Devices-Agent | Mac + iPhone Steuerung | claude-sonnet-4-5 | anthropic |
| Misc-Agent | Overflow, Spezialaufgaben | grok-4-1-fast | xai |

## Stats

- **73 Skills** installiert via ClawHub
- **3 Provider:** Anthropic, xAI, Venice
- **Shared Memory:** Alle Agents teilen gemeinsamen Wissens-Store
- **Server:** Hetzner CPX41 (8 vCPU, 16GB RAM)
- **Netzwerk:** Tailscale Mesh

## Repo-Struktur

```
.clawhub/                — ClawHub Lock-Datei (Skill-Versionen)
.github/workflows/       — CI/CD Workflows
config/                  — MCP-Server + Agent-Configs
docs/                    — Dokumentation + Manuals
memory/                  — Shared Memory Store
skills/                  — Installierte ClawHub Skills (73)
AGENTS.md                — 13 Agenten: Skills, Modelle, Provider
HEARTBEAT.md             — Agent Health-Status
IDENTITY.md              — Mujo Identitaet
MEMORY.md                — Memory-System Config
SOUL.md                  — Agent-Verhaltensregeln
TOOLS.md                 — Tool-Definitionen
USER.md                  — User-Profil
```

## Setup

Requires [OpenClaw](https://openclaw.ai) + Claude Code CLI.

## License

Private
