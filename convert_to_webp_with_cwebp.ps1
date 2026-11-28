# convert_to_webp_with_cwebp.ps1
# Uses the bundled cwebp.exe to convert every .jpg/.jpeg in the project tree to .webp
# No visual changes are intended – we use quality 90 (near‑lossless) which preserves appearance.

$ErrorActionPreference = 'Stop'
$CwebpPath = Join-Path -Path (Join-Path -Path $PSScriptRoot -ChildPath 'webp') -ChildPath 'libwebp-1.4.0-windows-x64\bin\cwebp.exe'

if (-not (Test-Path $CwebpPath)) {
    Write-Error "cwebp.exe not found at $CwebpPath"
}

Get-ChildItem -Path . -Recurse -Include *.jpg, *.jpeg -File | ForEach-Object {
    $src = $_.FullName
    $dst = [System.IO.Path]::ChangeExtension($src, '.webp')
    if (Test-Path $dst) {
        Write-Host "[OMIT] $dst already exists"
        return
    }
    Write-Host "Converting $src → $dst"
    & $CwebpPath -q 90 -preset photo "$src" -o "$dst"
    if ($LASTEXITCODE -ne 0) {
        Write-Error "cwebp failed on $src (exit $LASTEXITCODE)"
    }
}

Write-Host "\nConversión completa."
