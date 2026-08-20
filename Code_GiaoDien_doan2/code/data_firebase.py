import sys
import socket
import threading
from time import sleep
import serial
from firebase import firebase

firebase = firebase.FirebaseApplication('https://tt-iot-utes-default-rtdb.firebaseio.com/', None) 


ROOM = "/BED_ROOM" 
COMPORT = "COM3" 


class clientClass(threading.Thread):
    def __init__(self,comport,room):
        threading.Thread.__init__(self)     #call parent init()        
        self.comport = comport
        self.room = room

        self.s = serial.Serial(self.comport,9600,timeout=None) 
        
        self.getDataFromHW = threading.Thread(target=self.send2Server_c02)
        self.getDataFromHW.start()
        
    def run(self): #xxx: read firebase - send to arduino
        while(True):
            sleep(5) #5S
            result = firebase.get(ROOM, None)    
            print(result)
            if result != None:
                ledcontrol = result['may_lanh'] + result['ti_vi'] + result['den'] + result['quat'] 
                self.s.write(str.encode(ledcontrol + '\n')) #"111\n"           
            else:
                print("FB is Clear")
                                    

    def send2Server_c02(self): #xxx: read arduino - send to firebase
        while(True):
            #readline(): code will be waiting here!!! not consume CPU. :) D*23*89*\n
            data = self.s.readline() #readline() is read until '\n'    #or read_until(), https://pyserial.readthedocs.io/en/latest/pyserial_api.html
            data = data.decode('utf-8')               #read_until(),read until char, but need to read enough number of byte or timeout!
            print(data)
            data = data.split('*')
            nhiet_do = data[1]
            do_am  = data[2]
            khi_ga = data[3]
            quat = data[4]
            result = firebase.put(self.room,'nhiet_do',nhiet_do)
            result = firebase.put(self.room,'do_am',do_am)
            result = firebase.put(self.room,'khi_ga',khi_ga)
            result = firebase.put(self.room,'quat',quat)

# Listen for incoming datagrams
clientDev = clientClass(COMPORT,ROOM)
clientDev.start()
clientDev.join()
