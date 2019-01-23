
lftp -uadmin,bulk2010 tmsmusic.tokyo \
-e "
cd /home/admin/exp/biz/rev4
lcd /mnt/dat/xp/biz/rev4
mirror -R cmd
mirror -R views
exit
"
