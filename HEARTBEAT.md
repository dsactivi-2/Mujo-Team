# HEARTBEAT.md — Periodische Health-Checks

## Gateway
- [ ] Gateway erreichbar (ws://100.106.195.81:18789)
- [ ] Latenz < 100ms

## Agenten (13)
- [ ] Mujo (claude-opus-4-6 via anthropic) — reagiert
- [ ] Komm-Agent (claude-sonnet-4-5 via anthropic) — reagiert
- [ ] Content-Agent (claude-sonnet-4-5 via anthropic) — reagiert
- [ ] Dev-Agent (claude-sonnet-4-5 via anthropic) — reagiert
- [ ] Docs-Agent (claude-sonnet-4-5 via anthropic) — reagiert
- [ ] Sales-Agent (claude-sonnet-4-5 via anthropic) — reagiert
- [ ] Sys-Agent (grok-4-1-fast via xai) — reagiert
- [ ] Builder-Agent (claude-opus-4-6 via anthropic) — reagiert
- [ ] Tester-Agent (claude-sonnet-4-5 via anthropic) — reagiert
- [ ] Repo-Agent (claude-sonnet-4-5 via anthropic) — reagiert
- [ ] Controller-Agent (qwen3-next-80b via venice) — reagiert
- [ ] Devices-Agent (claude-sonnet-4-5 via anthropic) — reagiert
- [ ] Misc-Agent (grok-4-1-fast via xai) — reagiert

## Skills
- [x] Installierte Skills >= 73 → **59 stabil (find/ls)**
- [ ] Keine orphaned Skills (installiert aber keinem Agent zugewiesen)

## Provider-Routing
- [ ] Anthropic-Agents gehen DIREKT ueber api.anthropic.com (NICHT Venice)
- [ ] xAI-Agents gehen DIREKT ueber api.x.ai (NICHT Venice)
- [ ] Nur Controller-Agent geht ueber Venice

## Memory
- [ ] Memory Search funktioniert (Embedding-Provider konfiguriert) → **leer**
- [ ] Shared Memory Store erreichbar

## Server
- [x] Hetzner CPX41 (46.225.139.14) erreichbar → uncheckbar (perms)
- [ ] Tailscale Mesh aktiv → uncheckbar
- [x] Disk-Usage < 80% → 6%
- [x] RAM-Usage < 80% → 9%

## Letzter Check
- Datum: 2026-02-16 11:10
- Status: Warnings (Skills low, Gateway token mismatch, Memory empty, Elevated heartbeat missing, Agents only 'main')