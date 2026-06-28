#!/bin/bash
# Deploy shtab-ai to /var/www/shtab-ai.ru/
set -e

echo "[shtab-ai] Starting deploy..."
cd /root/LabDoctorM/projects/shtab-ai

echo "[shtab-ai] Installing dependencies..."
npm ci

echo "[shtab-ai] Building..."
npm run build

echo "[shtab-ai] Deploying static files..."
if [ -d "out" ]; then
    mkdir -p /var/www/shtab-ai.ru/
    cp -r out/* /var/www/shtab-ai.ru/
elif [ -d ".next/standalone" ]; then
    mkdir -p /var/www/shtab-ai.ru/
    cp -r .next/standalone/* /var/www/shtab-ai.ru/
else
    echo "[shtab-ai] WARNING: No build output found. Manual deploy needed."
    echo "[shtab-AI] Run 'npm start' or configure static export in next.config.ts"
    exit 1
fi

echo "[shtab-ai] Deploy complete!"
