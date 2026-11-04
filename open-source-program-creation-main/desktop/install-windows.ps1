$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

Write-Host "Устанавливаю зависимости проекта..." -ForegroundColor Cyan
npm install
if ($LASTEXITCODE -ne 0) { throw "npm install завершился с ошибкой" }

Write-Host "Собираю ECSU 2.0 и Windows-установщик..." -ForegroundColor Cyan
npm run desktop:build:win
if ($LASTEXITCODE -ne 0) { throw "Сборка установщика завершилась с ошибкой" }

$installer = Get-ChildItem (Join-Path $root "release") -Filter "ECSU-2.0-Setup-*.exe" |
  Sort-Object LastWriteTime -Descending |
  Select-Object -First 1

if (-not $installer) { throw "Не найден установщик в папке release" }

Write-Host "Запускаю установщик: $($installer.FullName)" -ForegroundColor Green
Start-Process -FilePath $installer.FullName -Wait
