// get list of installed packages
rpm -qa
// funtion to iterate over list of packages
for i in $(rpm -qa); do echo $i; done
// get list of files modified within last 24 hours
find / -mtime -1 -type f