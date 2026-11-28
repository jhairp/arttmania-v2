$files = Get-ChildItem -Path . -Recurse -Include *.jpg, *.jpeg
foreach ($f in $files) {
    $dst = [System.IO.Path]::ChangeExtension($f.FullName, '.webp')
    if (-not (Test-Path $dst)) {
        magick "$($f.FullName)" -define webp:lossless=true "$dst"
    }
}
