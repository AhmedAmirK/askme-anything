bx login -a https://api.ng.bluemix.net
bx target -o ALYS -s dev
bx app push askme-anything -c "node ." -m 128M --no-manifest --no-start
bx app start askme-anything
pause