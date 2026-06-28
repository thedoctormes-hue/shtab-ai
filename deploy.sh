#!/bin/bash
set -e

cd /root/LabDoctorM/projects/shtab-ai

echo "[deploy] Installing deps..."
npm ci --include=dev --omit=

echo "[deploy] Building..."
npm run build

echo "[deploy] Copying to /var/www/shtab-ai.ru/..."
rm -rf /var/www/shtab-ai.ru
mkdir -p /var/www/shtab-ai.ru
cp -r out/* /var/www/shtab-ai.ru/

echo "[deploy] Testing nginx config..."
/usr/sbin/nginx -t

echo "[deploy] Reloading nginx..."
systemctl reload nginx

echo "[deploy] Done! https://shtab-ai.ru"
