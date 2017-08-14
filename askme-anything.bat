bx login -a https://api.ng.bluemix.net
bx app push askme-anything -c "node ." -m 128M --no-manifest --no-start
bx app start askme-anything