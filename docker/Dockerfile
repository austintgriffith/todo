FROM ritualwp
MAINTAINER Austin Griffith <austin.griffith@madwiremedia.com>

# Install all the stuff for php and mysql plus some net junk
RUN apt-get update -y;apt-get upgrade -y;
RUN apt-get install -y htop;
RUN apt-get clean

ADD package.json /root/package.json
RUN cd /root;npm install

EXPOSE 55556 55556

#wire in a startup script
ADD bootstrap.sh /var/www/bootstrap.sh

CMD /var/www/bootstrap.sh > /var/www/bootstrap.txt
