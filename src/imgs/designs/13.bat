@echo off
setlocal enabledelayedexpansion

set "source_dir=C:\Users\hosam\Downloads\Telegram Desktop\designs"
cd "%C:\Users\hosam\Downloads\Telegram Desktop\designs%"

set "counter=1"

for %%f in (*) do (
    ren "%%f" "!counter!%%~xf"
    set /a "counter+=1"
)

endlocal
