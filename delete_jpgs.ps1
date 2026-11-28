$ErrorActionPreference = 'Stop'
Get-ChildItem -Path . -Recurse -Include *.jpg, *.jpeg -File | ForEach-Object {
    $jpg = $_.FullName
    $webp = [System.IO.Path]::ChangeExtension($jpg, '.webp')
    if (Test-Path $webp) {
        Write-Host "Deleting $jpg"
        Remove-Item -LiteralPath $jpg -Force
    }
}
