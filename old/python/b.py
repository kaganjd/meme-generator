import requests
from bs4 import BeautifulSoup
import os
import json
# import random
import sys
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import urllib
import states
import subprocess
from PIL import Image
# import time



#source1: http://whoismyrepresentative.com/member/all
#source API: https://sunlightlabs.github.io/congress/legislators.html
#source 2: wiki, listed below
#source3: zipcode table API


#GOAL 1: a dictionary of zipcodes to senators:
# 15001: Robert Casey, Patrick Toomey

#GOAL 2: a dictionary from senator name to his/her phone number and state
# Patrick Toomey: Pennaylvania, 202-224-4254, photo.jpg
# Roberty Casey: Pennsylvaia, 202-224-6324, photo.jpg

everybody = []
newStates = []
persons = []
allNumbers = []
n = 0
m = 0
p = 0

phone_url = "http://www.contactsenators.com/senator-phone-numbers"
full_url = "https://en.wikipedia.org/wiki/List_of_current_United_States_Senators"

r = requests.get(full_url).text
soup = BeautifulSoup(r, "html.parser")
images = soup.select('.sortable td a img')
phoneListreq = requests.get(phone_url).text
soup_phone = BeautifulSoup(phoneListreq, "html.parser")
phone_list = soup_phone.select("td a")


for phone_number in phone_list:
    temp =  phone_number.text
    if "202" in temp:
        stringtemp = temp.encode('utf-8')
        allNumbers.append(stringtemp)





names = soup.select("td .vcard .fn a")


for name in names:
    person =  name.text
    persons.append(person)
    if (n % 2 != 0):
        statename = states.statelist[m]
        newStates.append(statename)
        m += 1

    else:
        statename = states.statelist[m]
        newStates.append(statename)

    n += 1




for image in images:
    url = "https://en.wikipedia.org" + image.parent.get('href')

    #make a new request with this url
    r2 = requests.get(url).text
    soup2 = BeautifulSoup(r2, "html.parser")
    #why do neither of these work
    img = 'https:' + soup2.select("#file a")[0].get('href')


    #crop the image
    # subprocess.call('ffmpeg -i '+ img + ' -vf crop=2560:2560:320:0 '+ str(img), shell=True)
    # print str(img)

        # crop as required
    imgage = Image.open("/", img))
    box = (1, 1, 1000, 1000)
    area = imgage.crop(box)
    area.save('cropped_image' + img, 'jpg')

    # subprocess.call(['ffmpeg', '-i', img,'10', '-i', "-vf", "crop=2560:2560:320:0",
    # [img])
    # search(sys.argv[1])
    # ffmpeg -i https://upload.wikimedia.org/wikipedia/commons/2/27/Brian_Schatz%2C_official_portrait%2C_113th_Congress_2.jpg  -vf scale=720:-1, crop=720:720:320:0  lue_umbrella_05.png

    # ffmpeg -i https://upload.wikimedia.org/wikipedia/commons/2/27/Brian_Schatz%2C_official_portrait%2C_113th_Congress_2.jpg  -vf "crop=2560:2560:320:0" cropped_blue_umbrella_025.png

    #save this as a json
    data = {'name':persons[p] ,'state':newStates[p],'image': img, 'phone': allNumbers[p]}
    p += 1
    everybody.append(data)



with open('my_json.txt', 'w') as fp:
     json.dump(everybody, fp)
    #  2 parameters, some data and a ref to a file
