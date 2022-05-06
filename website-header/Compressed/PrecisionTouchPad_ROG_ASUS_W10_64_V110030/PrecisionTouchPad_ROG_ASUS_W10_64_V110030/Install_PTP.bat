pushd %~dp0

cd %~dp0
echo  Installing Touchpad driver.....
pnputil -i -a .\PTP\x64\AsusPTPFilter.inf

