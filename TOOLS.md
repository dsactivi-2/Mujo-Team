# TOOLS.md — Lokale Konfiguration

Deine Setup-spezifischen Einstellungen. Skills sind shared, das hier ist privat.

## SSH
- OpenClaw → Hetzner CPX41 (46.225.139.14), Tailscale: 100.106.195.81

## Provider-Endpoints
- Anthropic: api.anthropic.com (direkt, kein Proxy)
- xAI: api.x.ai (direkt, kein Proxy)
- Venice: api.venice.ai (nur Controller-Agent)
- OpenAI: api.openai.com (nur Embeddings fuer Memory Search)

## Gateway
- Lokal: ws://100.106.195.81:18789
- Version: v2026.2.14

## TTS (ElevenLabs)
- Bevorzugte Stimme: _noch nicht konfiguriert_
- Default Speaker: _noch nicht konfiguriert_

## Devices
- Mac: _Hostname eintragen_
- iPhone: _via openclaw-iphone-setup.txt in docs/_

## Wichtige Pfade
- Workspace: ~/.openclaw/workspace/
- Skills: ~/.openclaw/workspace/skills/
- Memory: ~/.openclaw/workspace/memory/
- Config: ~/.openclaw/workspace/config/

---
Platzhalter mit _ markiert → spaeter mit echten Werten ersetzen.
