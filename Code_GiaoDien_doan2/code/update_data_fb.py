from firebase import firebase
firebase = firebase.FirebaseApplication('https://do-an-2-ute-default-rtdb.firebaseio.com/', None)
pn ='/BED_ROOM'
nhiet_do = '/nhiet_do'
do_am= '/do_am' 
den = '/den'
ti_vi = '/ti_vi'
may_lanh = '/may_lanh'
khi_ga = '/khi_ga'
quat = '/quat'
cb_as = '/cb_as'

result = firebase.put(pn,nhiet_do,60)
result = firebase.put(pn,do_am,90)
result = firebase.put(pn,den,0)
result = firebase.put(pn,ti_vi,0)
result = firebase.put(pn,may_lanh,0)
result = firebase.put(pn,khi_ga,0)
result = firebase.put(pn,quat,0)
result = firebase.put(pn,cb_as,0)

result = firebase.get(pn,None)
print(result)
